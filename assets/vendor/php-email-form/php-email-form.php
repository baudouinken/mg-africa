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
            return $this->ajax ? json_encode(array('status' => 'error', 'message' => 'Required fields are missing')) : false;
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
            return $this->ajax ? json_encode(array('status' => 'success', 'message' => 'Message sent successfully')) : true;
        } else {
            return $this->ajax ? json_encode(array('status' => 'error', 'message' => 'Failed to send message')) : false;
        }
    }

    private function send_via_smtp($email_content) {
        require_once 'PHPMailer/PHPMailerAutoload.php';

        $mail = new PHPMailer;

        $mail->isSMTP();
        $mail->Host = $this->smtp['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $this->smtp['username'];
        $mail->Password = $this->smtp['password'];
        $mail->SMTPSecure = isset($this->smtp['encryption']) ? $this->smtp['encryption'] : 'tls';
        $mail->Port = isset($this->smtp['port']) ? $this->smtp['port'] : 587;

        $mail->setFrom($this->from_email, $this->from_name);
        $mail->addAddress($this->to);
        $mail->Subject = $this->subject;
        $mail->Body = $email_content;
        $mail->isHTML(true);

        if ($mail->send()) {
            return $this->ajax ? json_encode(array('status' => 'success', 'message' => 'Message sent successfully')) : true;
        } else {
            return $this->ajax ? json_encode(array('status' => 'error', 'message' => 'Mailer Error: ' . $mail->ErrorInfo)) : false;
        }
    }
}