<?php
class PHP_Email_Form {
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $smtp;
    public $ajax;
    public $messages = array();
    public $headers = array();

    public function add_message($content, $label = '', $max_length = 0) {
        if ($max_length && strlen($content) > $max_length) {
            $content = substr($content, 0, $max_length);
        }

        $this->messages[] = array(
            'label' => $label,
            'content' => $content
        );
    }

    public function send() {
        // Validate required fields
        if (empty($this->to) || empty($this->from_email) || empty($this->subject)) {
            return $this->ajax ? 'Required fields are missing' : false;
        }

        // Build email headers
        $this->headers[] = 'From: ' . $this->from_name . ' <' . $this->from_email . '>';
        $this->headers[] = 'Reply-To: ' . $this->from_email;
        $this->headers[] = 'MIME-Version: 1.0';
        $this->headers[] = 'Content-type: text/html; charset=utf-8';

        // Build email body
        $email_content = '<html><body>';
        $email_content .= '<h2>' . htmlspecialchars($this->subject) . '</h2>';
        $email_content .= '<table>';

        foreach ($this->messages as $message) {
            $email_content .= '<tr>';
            $email_content .= '<td><strong>' . htmlspecialchars($message['label']) . ':</strong></td>';
            $email_content .= '<td>' . nl2br(htmlspecialchars($message['content'])) . '</td>';
            $email_content .= '</tr>';
        }

        $email_content .= '</table>';
        $email_content .= '</body></html>';

        // Send email using SMTP or mail()
        if (!empty($this->smtp) && is_array($this->smtp)) {
            return $this->send_via_smtp($email_content);
        } else {
            return $this->send_via_mail($email_content);
        }
    }

    private function send_via_mail($email_content) {
        $headers = implode("\r\n", $this->headers);

        if (mail($this->to, $this->subject, $email_content, $headers)) {
            return $this->ajax ? 'OK' : true;
        } else {
            return $this->ajax ? 'Failed to send message. Please check your mail server configuration.' : false;
        }
    }

    private function send_via_smtp($email_content) {
        $host = $this->smtp['host'];
        $port = isset($this->smtp['port']) ? $this->smtp['port'] : 587;
        $username = $this->smtp['username'];
        $password = $this->smtp['password'];
        $encryption = isset($this->smtp['encryption']) ? $this->smtp['encryption'] : 'tls';

        // Build email
        $headers = implode("\r\n", $this->headers);
        $to = $this->to;
        $subject = $this->subject;

        // Use fsockopen for SMTP
        $socket_context = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ]);

        $prefix = ($encryption === 'ssl') ? 'ssl://' : '';
        $smtp_conn = @stream_socket_client(
            $prefix . $host . ':' . $port,
            $errno,
            $errstr,
            30,
            STREAM_CLIENT_CONNECT,
            $socket_context
        );

        if (!$smtp_conn) {
            return $this->ajax ? "SMTP Connection failed: $errstr ($errno)" : false;
        }

        // Read greeting
        $this->smtp_get_response($smtp_conn);

        // EHLO
        fwrite($smtp_conn, "EHLO " . gethostname() . "\r\n");
        $this->smtp_get_response($smtp_conn);

        // STARTTLS for port 587
        if ($encryption === 'tls' && $port == 587) {
            fwrite($smtp_conn, "STARTTLS\r\n");
            $this->smtp_get_response($smtp_conn);
            stream_socket_enable_crypto($smtp_conn, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            fwrite($smtp_conn, "EHLO " . gethostname() . "\r\n");
            $this->smtp_get_response($smtp_conn);
        }

        // AUTH LOGIN
        fwrite($smtp_conn, "AUTH LOGIN\r\n");
        $this->smtp_get_response($smtp_conn);

        fwrite($smtp_conn, base64_encode($username) . "\r\n");
        $this->smtp_get_response($smtp_conn);

        fwrite($smtp_conn, base64_encode($password) . "\r\n");
        $response = $this->smtp_get_response($smtp_conn);

        if (strpos($response, '235') === false) {
            fclose($smtp_conn);
            return $this->ajax ? "SMTP Authentication failed" : false;
        }

        // MAIL FROM
        fwrite($smtp_conn, "MAIL FROM:<" . $username . ">\r\n");
        $this->smtp_get_response($smtp_conn);

        // RCPT TO
        fwrite($smtp_conn, "RCPT TO:<" . $to . ">\r\n");
        $this->smtp_get_response($smtp_conn);

        // DATA
        fwrite($smtp_conn, "DATA\r\n");
        $this->smtp_get_response($smtp_conn);

        // Message
        $message = "To: " . $to . "\r\n";
        $message .= "From: " . $this->from_name . " <" . $username . ">\r\n";
        $message .= "Reply-To: " . $this->from_email . "\r\n";
        $message .= "Subject: " . $subject . "\r\n";
        $message .= "MIME-Version: 1.0\r\n";
        $message .= "Content-Type: text/html; charset=utf-8\r\n";
        $message .= "\r\n";
        $message .= $email_content . "\r\n";
        $message .= ".\r\n";

        fwrite($smtp_conn, $message);
        $response = $this->smtp_get_response($smtp_conn);

        // QUIT
        fwrite($smtp_conn, "QUIT\r\n");
        fclose($smtp_conn);

        if (strpos($response, '250') !== false) {
            return $this->ajax ? 'OK' : true;
        } else {
            return $this->ajax ? "Failed to send email: $response" : false;
        }
    }

    private function smtp_get_response($conn) {
        $response = '';
        while ($line = fgets($conn, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) == ' ') break;
        }
        return $response;
    }
}