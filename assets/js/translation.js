const resources = {
    fr: {
        translation: {
            menu_home: "Accueil",
            menu_about: "About",
            menu_Services: "Services",
            menu_Contact: "Contact",
            get_started: "Get Started",
            homepage_title_1: "Découvrez les",
            homepage_title_2: "saveurs authentiques",
            homepage_title_3: "de l'Afrique en Allemagne",
            subtitle: "Catering, festivals, ateliers culinaires et bien plus encore. Plongez dans une expérience culinaire unique !",
            nos_services: "Nos Services",
            contactez_nous: "Contactez-nous",
            about_qui_sommes: "Qui sommes",
            about_nous: "nous",
            about_intro: "MG Africa Food, c'est bien plus qu'une entreprise de restauration. Nous sommes passionnés par la cuisine africaine et nous nous engageons à partager ses saveurs riches et variées avec vous. Que ce soit pour un événement privé, un  festival ou un atelier culinaire, nous vous offrons une expérience gastronomique inoubliable.",
            notre_histoire: "Notre Histoire",
            notre_histoire_text: "MG Africa Food est né de la passion pour la cuisine africaine et du désir de partager ses saveurs uniques avec le monde. Fondé par Denis 1 Fotso, notre entreprise s'est rapidement imposée comme une référence en Allemagne pour les événements culinaires africains. Que ce soit à travers notre catering, nos stands de festival ou nos ateliers, nous nous engageons à offrir une expérience authentique et mémorable.",
            events: "Événements",
            events_text: "Que vous planifiez un événement, souhaitiez nous rencontrer à un festival ou participer à un atelier, nous sommes là pour vous. Contactez-nous dès aujourd'hui pour discuter de vos besoins !",
            mission: "Notre mission est de faire découvrir la richesse de la cuisine africaine à travers des plats savoureux, des événements vibrants et des ateliers éducatifs. Nous croyons que la nourriture est bien plus qu'un simple repas – c'est une expérience culturelle qui rapproche les gens.",
            passion: "Passion",
            passion_text: "Notre équipe est composée de personnes passionnées par la cuisine, la culture et le service client. Chacun de nos membres apporte une expertise unique, mais nous partageons tous la même vision : vous offrir le meilleur de l'Afrique dans chaque assiette.",
            services: "Services",
            services_nos: "Nos",
            services_text: " Chez MG Africa Food, nous proposons une gamme complète de services pour répondre à tous vos besoins culinaires. Que vous organisiez un événement privé, un festival, ou que vous ayez besoin de matériel de cuisine professionnel, nous sommes là pour vous.",
            service_catering: "Des buffets sur mesure pour vos événements privés ou professionnels.",
            service_festivals: "Eine Explosion afrikanischer Aromen auf Ihren Lieblingsfestivals.",
            service_ateliers: " Initiez vos enfants à la cuisine africaine grâce à nos ateliers gratuits et éducatifs. Découvrez les dates des prochains ateliers.",
            service_location: "Louez du matériel de cuisine professionnel, y compris des marmites chauffantes, pour vos événements.",
            service_savoir_plus: "En savoir plus",
            protofolio_intro: "Découvrez quelques-uns de nos projets récents. Que ce soit pour un mariage, un festival ou un atelier culinaire, chaque événement est une occasion de partager notre passion pour la cuisine africaine.",
            portofolio_realisations: "Nos réalisations",
            evenements_culinaires: "Événements culinaires",
            tous: "Tous",
            partenariats: "Partenariats",
            actions: "Actions Solidaires",
            faq_intro: "Trouvez ici les réponses à vos questions. Sinon, contactez-nous !",
            faq_ques_1: "Proposez-vous vos services de catering dans toute l'Allemagne ?",
            faq_resp_1: "Oui ! Nous couvrons toute l'Allemagne avec nos services de catering et d'événements. Des frais de déplacement peuvent s'appliquer selon la distance (nous les précisons toujours dans nos devis).",
            faq_ques_2: "Quelles sont vos spécialités culinaires ?",
            faq_resp_2: `Nous nous concentrons sur les cuisines :

                      - Camerounaise : Ndolè, Poulet DG, Eru etc.
                      - Nigériane : Jollof Rice, Soupe Egusi, Suya etc.
                      - Ghanéenne : Banku & Tilapia, Waakye etc.
                      - Ivoirienne : Alloco, Attieke, Garba, Sauce graine etc.
                      Nous adaptons aussi les plats à vos préférences !`,
            faq_ques_3: "Je veux organiser un événement mais j'ai un petit budget. Est-ce possible ?",
            faq_resp_3: `Absolument ! Nous proposons des formules adaptées à tous les budgets. Par exemple :

                      - Mini-buffet à partir de 10€/personne (2 plats + accompagnement)
                      - Food Truck / Mobile Gastronomie pour événements intimes.
                      Dites-nous votre budget, nous trouverons une solution !`,
            faq_ques_4: "Comment réserver votre catering pour un événement ?",
            faq_resp_4: "Envoyez-nous une demande via notre formulaire de contact ou WhatsApp avec la date, le nombre de personnes et vos préférences. Nous vous enverrons un devis sous 24h.",
            faq_ques_5: "Proposez-vous la livraison ?",
            faq_resp_5: "Oui, dans toute la région de Berlin-Brandenburg avec des frais selon la distance.",
            faq_ques_6: "Quels modes de paiement acceptez-vous ?",
            faq_resp_6: "Espèces, virement bancaire, PayPal, et cartes (sur place).",
            faq_ques_7: "Puis-je goûter les plats avant de réserver ?",
            faq_resp_7: "Oui ! Nous proposons des séances de dégustation sur rendez-vous (frais symboliques déduits en cas de réservation).",
            faq_ques_8: "Fournissez-vous aussi la décoration et la vaisselle ?",
            faq_resp_8: "Oui, en option :\n" +
                "- Décoration africaine\n" +
                "- Location de vaisselle",
            faq_ques_9: "Comment garantir la fraîcheur des plats lors d'un événement loin de votre base ?",
            faq_resp_9: "Nous utilisons des camions frigorifiques et du matériel de maintien au chaud professionnel pour une qualité optimale.",
            faq_ques_10: "Proposez-vous des services halal/végétarien/végan ?",
            faq_resp_10: "Oui, tous nos plats peuvent être adaptés (prévenez-nous à la réservation).",
            faq_ques_11: "Que se passe-t-il en cas d'annulation ?",
            faq_resp_11: "- >30 jours avant : remboursement à 100%\n" +
                "- 15-30 jours avant : 50%\n" +
                "- <15 jours : frais de 30%",
            faq_ques_12: "Une question manque ici ? Contactez-nous via",
            faq_resp_12: " WhatsApp\n" +
                " Notre formulaire de contact",
            specialities_intro: "Quelques spécialités",
            specialities_text: "Découvrez certaines de nos spécialités",
            testi_intro: "Ce que disent nos Clients",
            testi_1: "\"MG Africa Food assure le catering de nos assemblées générales depuis plusieurs années. Leur professionnalisme, la qualité exceptionnelle de leurs plats et leur flexibilité font de eux un partenaire incontournable. Toujours parfait !\"",
            testi_2: "\"Pour notre AG annuel, MG Africa Food a créé un buffet africain qui a ébloui nos invités. Un mélange parfait d'authenticité et de créativité culinaire. Nos donateurs en parlent encore !\"",
            testi_3: "\"Notre rêve d'un mariage aux saveurs africaines est devenu réalité grâce à MG Africa Food. Le service impeccable et les plats délicieux ont rendu notre jour encore plus magique. Merci pour cette touche d'Afrique à Berlin !\"",
            testi_4: "\"Fusion turco-africaine réussie ! MG Africa Food a su adapter son menu à nos deux cultures, surprenant tous nos invités. Un service chaleureux et une présentation raffinée\"",
            testi_5: "\"100 convives et zéro déception ! MG Africa Food a transformé notre événement en un voyage culinaire à travers l'Afrique. Le poulet DG et le ndolé étaient au cœur des conversations\"",
            testi_6: "\"Pour mes 25 ans, je voulais des saveurs qui rappellent mon Cameroun natal. MG Africa Food a dépassé toutes mes attentes avec des plats comme ma mère les fait. Émotion garantie !\"",

            contact_title: "Contactez-nous",
            contact_text: "Que vous planifiez un événement, souhaitiez nous rencontrer à un festival ou participer à un atelier, nous sommes là pour vous. Contactez-nous dès aujourd'hui pour discuter de vos besoins !",
            contact_form_name: "Nom",
            contact_form_email: "Email",
            contact_form_subject: "Sujet",
            contact_form_message: "Message",
            contact_form_send: "Envoyer",
            contact_form_adress: "Adresse",
            contact_form_call: "Appelez-nous",

            news_letter_title: "Rejoignez notre Newsletter",
            news_letter_text: "Inscrivez-vous à notre lettre d'information et recevez les dernières nouvelles sur nos produits et services !",
            news_letter_button: "Souscrire",

            footer_atelier_enfant: "Ateliers culinaires pour enfants",
            footer_atelier_enfant_1: "Ateliers pour enfants",
            location_materiel: "Location de materiel de cuisine",
            location_materiel_1: "Location de materiel",
            mg_food_slogan_footer: "Catering, festivals, ateliers culinaires et bien plus encore. Découvrez les saveurs de l'Afrique en Allemagne.",

            service_catering_title: "Service Catering sur mesure",
            service_catering_subtitle: "Découvrez nos recettes, astuces et aventures culinaires !",
            service_about: "À Propos de ce Service",
            service_coming_events: "Prochains événements",

            service_catering_offer: "Offrez à vos invités une expérience culinaire inoubliable avec notre catering sur mesure.\n" +
                "Que ce soit pour:",
            service_catering_offer_1: "un mariage",
            service_catering_offer_2: "une fête",
            service_catering_offer_3: "un dîner privé",
            service_catering_text_after_offer: "nous créons des menus adaptés à vos goûts et à votre budget.",
            service_catering_offers: "Nos Offres de catering",
            service_catering_offers_text: "Sur mesure pour tous les budgets. Exemples ci-dessous (Exemples de Devis) :",
            service_catering_menu_title: "Nos menus pour événements",

            service_catering_menu_mariage: "1. Mariage (50 personnes)",
            service_catering_menu_mariage_entree: "Entrée :",
            service_catering_menu_mariage_entree_text: "Salade de mangue et crevettes",
            service_catering_menu_mariage_plat: "Plats :",
            service_catering_menu_mariage_plat_text: "Ndolè, Poisson braisé, Eru",
            service_catering_menu_mariage_dessert: "Dessert :",
            service_catering_menu_mariage_dessert_text: "Beignets de banane & glace",
            service_catering_menu_mariage_prix: "Prix :",
            service_catering_menu_mariage_option: "Option : Ajoutez un buffet de fruits exotiques pour +200 €",

            service_catering_menu_anniv: "2. Anniversaire (30 personnes)",
            service_catering_menu_anniv_entree: "Entrée :",
            service_catering_menu_anniv_entree_text: "Samoussas & accras",
            service_catering_menu_anniv_plat: "Plats :",
            service_catering_menu_anniv_plat_text: "Poulet DG, Riz cantonais africain",
            service_catering_menu_anniv_dessert: "Dessert :",
            service_catering_menu_anniv_dessert_text: "Mousse à la mangue",
            service_catering_menu_anniv_prix: "Prix :",

            service_catering_menu_entreprise_event: "3. Événement d'entreprise (100 personnes)",
            service_catering_menu_entreprise_event_buffet: "Buffet froid :",
            service_catering_menu_entreprise_event_buffet_text: "10 variétés de mini-délices africains",
            service_catering_menu_entreprise_event_prix: "Prix :",

            service_catering_note: "Note :",
            service_catering_note_text: "Ces menus sont modifiables. Demandez un devis personnalisé pour votre événement, quel que soit votre budget !",
            service_catering_avis: "Demandez votre devis",

            service_festival_subtitle: "Nous faisons de chaque festival un moment unique",
            service_festivaL_after_about: "Nous apportons les saveurs de l'Afrique à vos festivals préférés.",
            service_festival_stand: "Découvrez nos stands colorés.",
            service_festival_plats: "Dégustez des plats traditionnels préparés avec amour.",

            service_atelier_enfant: "Découvrez nos recettes, astuces et aventures culinaires !",
            service_atelier_after_about: "Chez MG Africa Food, nous croyons que la cuisine est une porte d'entrée vers la culture et la créativité.\n" +
                "            C'est pourquoi nous proposons des ateliers de cuisine gratuits pour les enfants, où ils apprennent à préparer\n" +
                "            des plats africains traditionnels tout en s'amusant. Ces ateliers sont conçus pour éveiller leur curiosité et\n" +
                "            leur faire découvrir de nouvelles saveurs. Consultez notre calendrier pour connaître les dates des prochains\n" +
                "            ateliers et inscrivez vos enfants à une expérience culinaire unique !",
            service_atelier_1: "Atelier de cuisine gratuit pour les enfants.",
            service_atelier_2: "Éveiller la curiosité des enfants.",
            service_atelier_3: "Leur faire découvrir de nouvelles saveurs.",
            service_atelier_event_1_title: "Cours de cuisine pour enfants",
            service_atelier_event_1_program: "Programme",
            service_atelier_event_1_program_detail_1: "Découverte des saveurs camerounaises",
            service_atelier_event_1_program_detail_2: "Préparation de plats simples et amusants",
            service_atelier_event_1_footer_1: "Enfants de 6 à 12 ans",
            service_atelier_event_1_inscription: "Inscription obligatoire",
            service_atelier_event_1_inscription_ici: "ici",
            service_atelier_event_1_inscription_ou_ici: "ou ici",

            service_location_text: "Nous proposons la location de matériel de cuisine professionnel, y compris des marmites chauffantes,\n" +
                "            pour vos événements ou vos besoins culinaires. Notre équipement est de haute qualité et parfaitement\n" +
                "            entretenu pour garantir votre succès.\n" +
                "            Liste des équipements disponibles :",
            service_location_marmite: "Marmites chauffantes",
            service_location_couverts: "Couverts",
            service_location_grills: "Grills et barbecues",
            service_location_refrigerateur: "Réfrigérateurs et congélateurs portables",
            service_location_ustensiles: "Ustensiles de cuisine (louches, spatules, etc.)",
            service_location_ask_location: "Demander une location",
            service_location_subtitle: "Découvrez notre matériel de cuisine professionnel !",


        }
    },
    en: {
        translation: {
            menu_home: "Home",
            menu_about: "About",
            menu_Services: "Services",
            menu_Contact: "Contact",
            get_started: "Get Started",
            homepage_title_1: "Discover the",
            homepage_title_2: "authentic flavors",
            homepage_title_3: "of Africa in Germany",
            subtitle: "Catering, festivals, culinary workshops and much more. Dive into a unique culinary experience!",
            nos_services: "Our Services",
            contactez_nous: "Contact Us",
            about_qui_sommes: "Wo we",
            about_nous: "are",
            about_intro: "MG Africa Food is much more than a catering company. We are passionate about African cuisine and committed to sharing its rich and varied flavors with you. Whether for a private event, a festival, or a culinary workshop, we offer you an unforgettable gastronomic experience.",
            notre_histoire: "Our Story",
            notre_histoire_text: "MG Africa Food was born out of a passion for African cuisine and the desire to share its unique flavors with the world. Founded by Denis 1 Fotso, our company quickly established itself as a reference in Germany for African culinary events. Whether through our catering, festival stands, or workshops, we are committed to providing an authentic and memorable experience.",
            events: "Events",
            events_text: " Whether you're planning an event, wish to meet us at a festival, or participate in a workshop, we are here for you. Contact us today to discuss your needs!",
            mission: "Our mission is to showcase the richness of African cuisine through flavorful dishes, vibrant events, and educational workshops. We believe that food is much more than just a meal – it's a cultural experience that brings people together.",
            passion: "Passion",
            passion_text: "Our team is made up of people passionate about food, culture, and customer service. Each of our members brings unique expertise, but we all share the same vision: to offer you the best of Africa on every plate.",
            services: "Services",
            services_nos: "Our",
            services_text: "At MG Africa Food, we offer a complete range of services to meet all your culinary needs.Whether you're organizing a private event, a festival, or need professional kitchen equipment, we are here for you.",
            service_catering: "Custom buffets for your private or professional events.",
            service_festivals: "An explosion of African flavors at your favorite festivals.",
            service_ateliers: "Introduce your children to African cuisine through our free and educational workshops. Discover the dates of upcoming workshops.",
            service_location: "Rent professional kitchen equipment, including heating pots, for your events.",
            service_savoir_plus: "Learn more",
            protofolio_intro: "Discover some of our recent projects. Whether it's a wedding, a festival, or a culinary workshop, each event is an opportunity to share our passion for African cuisine.",
            portofolio_realisations: "Our achievements",
            evenements_culinaires: "Culinary events",
            tous: "All",
            partenariats: "Partnerships",
            actions: "Solidarity Actions",
            faq_intro: "Find answers to your questions here. If not, contact us!",
            faq_ques_1: "Do you offer catering services throughout Germany?",
            faq_resp_1: "Yes! We cover all of Germany with our catering and event services. Travel fees may apply depending on the distance (we always specify them in our quotes).",
            faq_ques_2: "What are your culinary specialties?",
            faq_resp_2: `We focus on the cuisines:

                      - Cameroonian: Ndolè, Poulet DG, Eru etc.
                      - Nigerian: Jollof Rice, Egusi Soup, Suya etc.
                      - Ghanaian: Banku & Tilapia, Waakye etc.
                      - Ivorian: Alloco, Attieke, Garba, Sauce graine etc.
                      We also adapt the dishes to your preferences!`,
            faq_ques_3: "I want to organise an event but I have a small budget. Is this possible?",
            faq_resp_3: `Absolutely! We offer packages to suit all budgets. For example:

                      - Mini-buffet from €10/person (2 courses + side dishes)
                      - Food Truck / Mobile Gastronomy for intimate events.
                      Tell us your budget and we'll find a solution!`,
            faq_ques_4: "How do you book your catering for an event?",
            faq_resp_4: "Send us a request via our contact form or WhatsApp with the date, number of people and your preferences. We'll send you a quote within 24 hours.",
            faq_ques_5: "Do you offer delivery?",
            faq_resp_5: "Yes, throughout the Berlin-Brandenburg region, with charges according to distance.",
            faq_ques_6: "What payment methods do you accept?",
            faq_resp_6: "Cash, bank transfer, PayPal and cards (on site).",

            faq_ques_7: "Can I taste the dishes before booking?",
            faq_resp_7: "Yes, we offer tasting sessions by appointment (with a token fee deducted if booked in advance).",
            faq_ques_8: "Do you also supply the decorations and crockery?",
            faq_resp_8: "Yes, optional \n" +
                "- African decoration \n" +
                "- Crockery hire",
            faq_ques_9: "How can you guarantee the freshness of food at an event far from your base?",
            faq_resp_9: "We use refrigerated lorries and professional heat-holding equipment to ensure optimum quality.",
            faq_ques_10: "Do you offer halal/vegetarian/vegan services?",
            faq_resp_10: "Yes, all our dishes can be adapted (please let us know when booking).",
            faq_ques_11: "What happens in the event of cancellation?",
            faq_resp_11: "- >30 days before: 100% refund \n" +
                "- 15-30 days before: 50% refund \n" +
                "- <15 days: 30% fee",
            faq_ques_12: "Missing a question here? Contact us via",
            faq_resp_12: "WhatsApp \n" +
                " Our contact form",
            specialities_intro: "Some specialities",
            specialities_text: "Discover some of our specialities",
            testi_intro: "What our customers say",
            testi_1: "\"MG Africa Food has been catering for our general meetings for several years. Their professionalism, the exceptional quality of their dishes and their flexibility make them an essential partner. Always perfect!\"",
            testi_2: "\"For our annual AGM, MG Africa Food created an African buffet that dazzled our guests. A perfect blend of authenticity and culinary creativity. Our donors are still talking about it!\"",
            testi_3: "\"Our dream of a wedding with African flavors came true thanks to MG Africa Food. The impeccable service and delicious dishes made our day even more magical. Thank you for bringing a touch of Africa to Berlin!\"",
            testi_4: "\"Successful Turkish-African fusion! MG Africa Food adapted its menu to our two cultures, surprising all our guests. Warm service and refined presentation\"",
            testi_5: "\"100 guests and zero disappointment! MG Africa Food turned our event into a culinary journey across Africa. The Poulet DG and Ndolè were the talk of the evening.\"",
            testi_6: "\"For my 25th birthday, I wanted flavors that remind me of my native Cameroon. MG Africa Food exceeded all my expectations with dishes just like my mother makes. Guaranteed emotion!\"",
            contact_title: "Contact Us",
            contact_text: "Whether you're planning an event, wish to meet us at a festival, or participate in a workshop, we are here for you. Contact us today to discuss your needs!",
            contact_form_name: "Name",
            contact_form_email: "Email",
            contact_form_subject: "Subject",
            contact_form_message: "Message",
            contact_form_send: "Send",
            contact_form_adress: "Address",
            contact_form_call: "Call-us",
            news_letter_title: "Join our Newsletter",
            news_letter_text: "Subscribe to our newsletter and receive the latest news about our products and services!",
            news_letter_button: "Subscribe",
            footer_atelier_enfant: "Culinary workshops for children",
            footer_atelier_enfant_1: "Cooking workshops for children",
            location_materiel: "Rental kitchen equipment",
            location_materiel_1: "Rental kitchen equipment",
            footer_location: "Rental of kitchen equipment",
            mg_food_slogan_footer: "Catering, festivals, culinary workshops and much more. Discover the flavors of Africa in Germany.",
            service_catering_title: "Tailor-made catering service",
            service_catering_subtitle: "Discover our recipes, tips and culinary adventures!",
            service_about: "About this service",
            service_coming_events: "Upcoming events",
            service_catering_offer: "Offer your guests an unforgettable culinary experience with our tailor-made catering.\n" +
                "Whether for:",
            service_catering_offer_1: "a wedding",
            service_catering_offer_2: "a party",
            service_catering_offer_3: "a private dinner",
            service_catering_text_after_offer: "we create menus tailored to your tastes and budget.",

            service_catering_offers: "Our catering offers",
            service_catering_offers_text: "Tailored to all budgets. Examples below (Quote examples):",
            service_catering_menu_title: "Our menus for events",
            service_catering_menu_mariage: "1. Wedding (50 people)",
            service_catering_menu_mariage_entree: "Starter:",
            service_catering_menu_mariage_entree_text: "Mango and shrimp salad",
            service_catering_menu_mariage_plat: "Dishes:",
            service_catering_menu_mariage_plat_text: "Ndolè, Grilled fish, Eru",
            service_catering_menu_mariage_dessert: "Dessert:",
            service_catering_menu_mariage_dessert_text: "Banana fritters & ice cream",
            service_catering_menu_mariage_prix: "Price:",
            service_catering_menu_mariage_option: "Option: Add an exotic fruit buffet for +200 €",

            service_catering_menu_anniv: "2. Birthday (30 people)",
            service_catering_menu_anniv_entree: "Starter:",
            service_catering_menu_anniv_entree_text: "Samosas & fritters",
            service_catering_menu_anniv_plat: "Dishes:",
            service_catering_menu_anniv_plat_text: "Poulet DG, African fried rice",
            service_catering_menu_anniv_dessert: "Dessert:",
            service_catering_menu_anniv_dessert_text: "Mango mousse",
            service_catering_menu_anniv_prix: "Price:",

            service_catering_menu_entreprise_event: "3. Corporate event (100 people)",
            service_catering_menu_entreprise_event_buffet: "Cold buffet:",
            service_catering_menu_entreprise_event_buffet_text: "10 varieties of mini African delights",
            service_catering_menu_entreprise_event_prix: "Price:",
            service_catering_note: "Note:",
            service_catering_note_text: "These menus are modifiable. Request a personalized quote for your event, whatever your budget!",
            service_catering_avis: "Request your quote",

            service_festival_subtitle: "We make every festival a unique moment",
            service_festival_after_about: "We bring the flavors of Africa to your favorite festivals.",
            service_festival_stand: "Discover our colorful stands.",
            service_festival_plats: "Taste traditional dishes prepared with love.",

            service_atelier_enfant: "Discover our recipes, tips and culinary adventures!",
            service_atelier_after_about: "At MG Africa Food, we believe that cooking is a gateway to culture and creativity.\n" +
                "That's why we offer free cooking workshops for children, where they learn to prepare\n" +
                "traditional African dishes while having fun. These workshops are designed to awaken their curiosity and\n" +
                "introduce them to new flavors. Check our calendar for upcoming workshop dates and sign your children up for a unique culinary experience!",
            service_atelier_1: "Free cooking workshop for children.",
            service_atelier_2: "Awaken children's curiosity.",
            service_atelier_3: "Introduce them to new flavors.",
            service_atelier_event_1_title: "Children's cooking class",
            service_atelier_event_1_program: "Program",
            service_atelier_event_1_program_detail_1: "Discover Cameroonian flavors",
            service_atelier_event_1_program_detail_2: "Prepare simple and fun dishes",
            service_atelier_event_1_footer_1: "Children from 6 to 12 years old",
            service_atelier_event_1_inscription: "Registration required",
            service_atelier_event_1_inscription_ici: "here",
            service_atelier_event_1_inscription_ou_ici: "or here",

            service_location_text: "We offer rental of professional kitchen equipment, including heating pots,\n" +
                "for your events or culinary needs. Our equipment is of high quality and perfectly\n" +
                "maintained to ensure your success.\n" +
                "List of available equipment:",
            service_location_marmite: "Heating pots",
            service_location_couverts: "Crockery",
            service_location_grills: "Grills and barbecues",
            service_location_refrigerateur: "Portable refrigerators and freezers",
            service_location_ustensiles: "Kitchen utensils (ladles, spatulas, etc.)",
            service_location_ask_location: "Request a rental",
            service_location_subtitle: "Discover our professional kitchen equipment!",



        }
    },
    de: {
        translation: {
            menu_home: "Home",
            menu_about: "Über uns",
            menu_Services: "Dienstleistungen",
            menu_Contact: "Kontakt",
            get_started: "Loslegen",
            homepage_title_1: "Entdecken Sie die",
            homepage_title_2: "authentischen Geschmäcker",
            homepage_title_3: "Afrikas in Deutschland",
            subtitle: "Catering, Festivals, Kochworkshops und vieles mehr. Tauchen Sie ein in ein einzigartiges kulinarisches Erlebnis!",
            nos_services: "Unsere Dienstleistungen",
            contactez_nous: "Kontaktieren Sie uns",
            about_qui_sommes: "Wer sind",
            about_nous: "wir",
            about_intro: " MG Africa Food ist viel mehr als ein Catering Unternehmen. Wir sind  leidenschaftlich begeistert von der afrikanischen Küche und engagieren uns dafür, ihre reichen und vielfältigen Aromen mit Ihnen zu teilen. Ob für eine private Veranstaltung, ein Festival oder einen Kochworkshop, wir bieten Ihnen ein unvergessliches gastronomisches Erlebnis.",
            notre_histoire: "Unsere Geschichte",
            notre_histoire_text: "MG Africa Food wurde aus einer Leidenschaft für die afrikanische Küche und dem Wunsch geboren, ihre einzigartigen Aromen mit der Welt zu teilen. Gegründet von Denis 1 Fotso, hat sich unser Unternehmen schnell als Referenz in Deutschland für afrikanische kulinarische Veranstaltungen etabliert. Ob durch unser Catering, unsere Festivalstände oder Workshops, wir verpflichten uns, ein authentisches und unvergessliches Erlebnis zu bieten.",
            events: "Veranstaltungen",
            events_text: "Ob Sie eine Veranstaltung planen, uns auf einem Festival treffen oder an einem Workshop teilnehmen möchten, wir sind für Sie da. Kontaktieren Sie uns noch heute, um Ihre Bedürfnisse zu besprechen!",
            mission: "Unsere Mission ist es, den Reichtum der afrikanischen Küche durch schmackhafte Gerichte, lebendige Veranstaltungen und lehrreiche Workshops zu präsentieren. Wir glauben, dass Essen viel mehr ist als nur eine Mahlzeit – es ist ein kulturelles Erlebnis, das Menschen zusammenbringt.",
            passion: "Leidenschaft",
            passion_text: " Unser Team besteht aus Menschen, die leidenschaftlich für Kochen, Kultur und Kundenservice brennen. Jedes unserer Mitglieder bringt einzigartige Expertise mit, aber wir alle teilen die gleiche Vision: Ihnen das Beste aus Afrika auf jedem Teller zu bieten.",
            services: "Diestleistungen",
            services_nos: "Unsere",
            services_text: "Bei MG Africa Food bieten wir eine komplette Palette von Dienstleistungen, um alle Ihre kulinarischen Bedürfnisse zu erfüllen. Ob Sie eine private Veranstaltung oder ein Festival organisieren oder professionelle Küchenausrüstung benötigen, wir sind für Sie da.",
            service_catering: "Maßgeschneiderte Buffets für Ihre privaten oder beruflichen Veranstaltungen.",
            service_festivals: "Des stands de street food pour vos festivals et événements en plein air.",
            service_ateliers: " Führen Sie Ihre Kinder in die afrikanische Küche ein durch unsere kostenlosen und lehrreichen Workshops. Entdecken Sie die Termine der kommenden Workshops.",
            service_location: "Mieten Sie professionelle Küchenausrüstung, einschließlich Wärmetöpfe, für Ihre Veranstaltungen.",
            service_savoir_plus: "Mehr erfahren",
            protofolio_intro: "Entdecken Sie einige unserer jüngsten Projekte. Ob Hochzeit, Festival oder Kochworkshop, jede Veranstaltung ist eine Gelegenheit, unsere Leidenschaft für die afrikanische Küche zu teilen.",
            portofolio_realisations: "Unsere Leistungen",
            evenements_culinaires: "Kulinarische Veranstaltungen",
            tous: "Alle",
            partenariats: "Partnerschaften",
            actions: "Solidaritätsaktionen",
            faq_intro: "Hier finden Sie Antworten auf Ihre Fragen. Wenn nicht, kontaktieren Sie uns!",
            faq_ques_1: "Bieten Sie Catering-Dienste in ganz Deutschland an?",
            faq_resp_1: "Ja! Wir decken ganz Deutschland mit unseren Catering- und Veranstaltungsdiensten ab. Reisekosten können je nach Entfernung anfallen (wir geben sie immer in unseren Angeboten an).",
            faq_ques_2: "Was sind Ihre kulinarischen Spezialitäten?",
            faq_resp_2: `Wir konzentrieren uns auf die Küchen:

                      - Kamerunisch: Ndolè, Poulet DG, Eru etc.
                      - Nigerianisch: Jollof Rice, Egusi-Suppe, Suya etc.
                      - Ghanaisch: Banku & Tilapia, Waakye etc.
                      - Ivorisch: Alloco, Attieke, Garba, Sauce graine etc.
                      Wir passen die Gerichte auch an Ihre Vorlieben an!`,
            faq_ques_3: "Ich möchte eine Veranstaltung organisieren, habe aber ein kleines Budget. Ist das möglich?",
            faq_resp_3: `Auf jeden Fall! Wir bieten für jedes Budget das passende Paket an. Zum Beispiel :

                      - Mini-Buffet ab 10€/Person (2 Gänge + Beilage).
                      - Food Truck / Mobile Gastronomie für intime Veranstaltungen.
                      Nennen Sie uns Ihr Budget, wir finden eine Lösung!`,
            faq_ques_4: "Wie reserviere ich Ihr Catering für eine Veranstaltung?",
            faq_resp_4: "Senden Sie uns eine Anfrage über unser Kontaktformular oder WhatsApp mit dem Datum, der Anzahl der Personen und Ihren Vorlieben. Wir senden Ihnen innerhalb von 24 Stunden ein Angebot.",
            faq_ques_5: "Bieten Sie einen Lieferservice an?",
            faq_resp_5: "Ja, in der gesamten Region Berlin-Brandenburg mit Gebühren je nach Entfernung.",
            faq_ques_6: "Welche Zahlungsmethoden akzeptieren Sie?",
            faq_resp_6: "Bargeld, Banküberweisung, PayPal und Karten (vor Ort).",
            faq_ques_7: "Kann ich die Gerichte vor der Buchung probieren?",
            faq_resp_7: "Ja! Wir bieten Verkostungstermine nach Vereinbarung an (symbolische Gebühren, die bei Buchung abgezogen werden).",
            faq_ques_8: "Bieten Sie auch Dekoration und Geschirr an?",
            faq_resp_8: "Ja, optional :\n" +
                "- Afrikanische Dekoration\n" +
                "- Geschirrverleih",
            faq_ques_9: "Wie garantieren Sie die Frische der Gerichte bei einer Veranstaltung, die weit von Ihrem Standort entfernt ist?",
            faq_resp_9: "Wir verwenden Kühlfahrzeuge und professionelle Warmhaltegeräte für optimale Qualität.",
            faq_ques_10: "Bieten Sie halal/vegetarische/vegane Dienstleistungen an?",
            faq_resp_10: "Ja, alle unsere Gerichte können angepasst werden (bitte bei der Buchung informieren).",
            faq_ques_11: "Was passiert bei einer Stornierung?",
            faq_resp_11: "- >30 Tage vorher: 100% Rückerstattung\n" +
                "- 15-30 Tage vorher: 50%\n" +
                "- <15 Tage: 30% Gebühren",
            faq_ques_12: "Fehlt hier eine Frage? Kontaktieren Sie uns über",
            faq_resp_12: " WhatsApp\n" +
                " Unser Kontaktformular",
            specialities_intro: "Einige Spezialitäten",
            specialities_text: "Entdecken Sie einige unserer Spezialitäten",
            testi_intro: "Was unsere Kunden sagen",
            testi_1: "\"MG Africa Food sorgt seit mehreren Jahren für das Catering unserer Hauptversammlungen. Ihre Professionalität, die außergewöhnliche Qualität ihrer Gerichte und ihre Flexibilität machen sie zu einem unverzichtbaren Partner. Immer perfekt!\"",
            testi_2: "\"Für unsere Hauptversammlung hat MG Africa Food ein afrikanisches Buffet kreiert, das unsere Gäste verblüfft hat. Eine perfekte Mischung aus Authentizität und kulinarischer Kreativität. Unsere Spender sprechen immer noch darüber!\"",
            testi_3: "\"Unser Traum von einer Hochzeit mit afrikanischen Aromen wurde dank MG Africa Food Wirklichkeit. Der tadellose Service und die köstlichen Gerichte haben unseren Tag noch magischer gemacht. Danke für diese Prise Afrika in Berlin!\"",
            testi_4: "\"Erfolgreiche türkisch-afrikanische Fusion! MG Africa Food hat sein Menü an unsere beiden Kulturen angepasst und damit alle unsere Gäste überrascht. Ein herzlicher Service und eine raffinierte Präsentation\"",
            testi_5: "\"100 Gäste und null Enttäuschung! MG Africa Food hat unsere Veranstaltung in eine kulinarische Reise durch Afrika verwandelt. Das Poulet DG und der Ndolé standen im Mittelpunkt der Gespräche\"",
            testi_6: "\"Zu meinem 25. Geburtstag wollte ich Geschmäcker, die an meine Heimat Kamerun erinnern. MG Africa Food hat meine Erwartungen mit Gerichten, wie sie meine Mutter zubereitet, übertroffen. Emotionen garantiert!\"",
            contact_title: "Kontaktieren Sie uns",
            contact_text: "Ob Sie eine Veranstaltung planen, uns auf einem Festival treffen oder an einem Workshop teilnehmen möchten, wir sind für Sie da. Kontaktieren Sie uns noch heute, um Ihre Bedürfnisse zu besprechen!",
            contact_form_name: "Name",
            contact_form_email: "Email",
            contact_form_subject: "Betreff",
            contact_form_message: "Nachricht",
            contact_form_send: "Absenden",
            contact_form_adress: "Adresse",
            contact_form_call: "Rufen Sie uns an",
            news_letter_title: "Abonnieren Sie unseren Newsletter",
            news_letter_text: "Melden Sie sich für unseren Newsletter an und erhalten Sie die neuesten Nachrichten zu unseren Produkten und Dienstleistungen!",
            news_letter_button: "Abonnieren",
            footer_atelier_enfant: "Kochworkshops für Kinder",
            location_materiel: "Vermietung von Küchenequipment",
            location_materiel_1: "Vermietung von Küchenequipment",
            mg_food_slogan_footer: "Catering, Festivals, Kochworkshops und vieles mehr. Entdecken Sie die Aromen Afrikas in Deutschland.",
            service_catering_title: "Maßgeschneiderter Catering-Service",
            service_catering_subtitle: "Entdecken Sie unsere Rezepte, Tipps und kulinarischen Abenteuer!",
            service_about: "Über diesen Service",
            service_catering_offer: "Bieten Sie Ihren Gästen ein unvergessliches kulinarisches Erlebnis mit unserem maßgeschneiderten Catering.\n" +
                "Ob für:",
            service_catering_offer_1: "eine Hochzeit",
            service_catering_offer_2: "eine Feier",
            service_catering_offer_3: "ein privates Abendessen",
            service_catering_text_after_offer: "wir erstellen Menüs, die auf Ihre Vorlieben und Ihr Budget zugeschnitten sind.",
            service_coming_events: "Kommende Events",

            service_catering_offers: "Unsere Catering-Angebote",
            service_catering_offers_text: "Maßgeschneidert für jedes Budget. Beispiele unten (Beispielangebote):",
            service_catering_menu_title: "Unsere Menüs für Veranstaltungen",
            service_catering_menu_mariage: "1. Hochzeit (50 Personen)",
            service_catering_menu_mariage_entree: "Vorspeise:",
            service_catering_menu_mariage_entree_text: "Mangold- und Garnelensalat",
            service_catering_menu_mariage_plat: "Gerichte:",
            service_catering_menu_mariage_plat_text: "Ndolè, Gegrillter Fisch, Eru",
            service_catering_menu_mariage_dessert: "Nachspeise:",
            service_catering_menu_mariage_dessert_text: "Bananenfritters & Eis",
            service_catering_menu_mariage_prix: "Preis:",
            service_catering_menu_mariage_option: "Option: Fügen Sie ein exotisches Obstbuffet für +200 € hinzu",

            service_catering_menu_anniv: "2. Geburtstag (30 Personen)",
            service_catering_menu_anniv_entree: "Vorspeise:",
            service_catering_menu_anniv_entree_text: "Samosas & Fritters",
            service_catering_menu_anniv_plat: "Gerichte:",
            service_catering_menu_anniv_plat_text: "Poulet DG, Afrikanischer gebratener Reis",
            service_catering_menu_anniv_dessert: "Nachspeise:",
            service_catering_menu_anniv_dessert_text: "Mangomousse",
            service_catering_menu_anniv_prix: "Preis:",
            service_catering_menu_entreprise_event: "3. Unternehmensveranstaltung (100 Personen)",
            service_catering_menu_entreprise_event_buffet: "Kaltes Buffet:",
            service_catering_menu_entreprise_event_buffet_text: "10 Sorten afrikanischer Mini-Leckereien",
            service_catering_menu_entreprise_event_prix: "Preis:",
            service_catering_note: "Hinweis:",
            service_catering_note_text: "Diese Menüs sind anpassbar. Fordern Sie ein individuelles Angebot für Ihre Veranstaltung an, unabhängig von Ihrem Budget!",
            service_catering_avis: "Angebot anfordern",

            service_festival_subtitle: "Wir machen jedes Festival zu einem einzigartigen Moment",
            service_festival_after_about: "Wir bringen die Aromen Afrikas zu Ihren Lieblingsfestivals.",
            service_festival_stand: "Entdecken Sie unsere bunten Stände.",
            service_festival_plats: "Probieren Sie traditionelle Gerichte, die mit Liebe zubereitet werden.",

            service_atelier_enfant: "Entdecken Sie unsere Rezepte, Tipps und kulinarischen Abenteuer!",
            service_atelier_after_about: "Bei MG Africa Food glauben wir, dass Kochen ein Tor zur Kultur und Kreativität ist.\n" +
                "Deshalb bieten wir kostenlose Kochworkshops für Kinder an, in denen sie lernen, traditionelle afrikanische Gerichte zuzubereiten und dabei Spaß zu haben. Diese Workshops sind darauf ausgelegt, ihre Neugier zu wecken und ihnen neue Geschmäcker näherzubringen. Überprüfen Sie unseren Kalender für die nächsten Workshop-Termine und melden Sie Ihre Kinder für ein einzigartiges kulinarisches Erlebnis an!",
            service_atelier_1: "Kostenloser Kochworkshop für Kinder.",
            service_atelier_2: "Wecken Sie die Neugier der Kinder.",
            service_atelier_3: "Führen Sie sie in neue Geschmäcker ein.",
            service_atelier_event_1_title: "Kochkurs für Kinder",
            service_atelier_event_1_program: "Programm",
            service_atelier_event_1_program_detail_1: "Entdecken Sie kamerunische Aromen",
            service_atelier_event_1_program_detail_2: "Zubereitung einfacher und lustiger Gerichte",
            service_atelier_event_1_footer_1: "Kinder von 6 bis 12 Jahren",
            service_atelier_event_1_inscription: "Anmeldung erforderlich",
            service_atelier_event_1_inscription_ici: "hier",
            service_atelier_event_1_inscription_ou_ici: "oder hier",

            service_location_text: "Wir bieten die Vermietung von professioneller Küchenausrüstung, einschließlich Wärmetöpfen,\n" +
                "für Ihre Veranstaltungen oder kulinarischen Bedürfnisse an. Unsere Ausrüstung ist von hoher Qualität und perfekt\n" +
                "gewartet, um Ihren Erfolg zu gewährleisten.\n" +
                "Liste der verfügbaren Geräte:",
            service_location_marmite: "Wärmetöpfe",
            service_location_couverts: "Geschirr",
            service_location_grills: "Grills und Barbecues",
            service_location_refrigerateur: "Tragbare Kühlschränke und Gefriergeräte",
            service_location_ustensiles: "Küchenutensilien (Schöpflöffel, Spatel usw.)",
            service_location_ask_location: "Vermietung anfragen",
            service_location_subtitle: "Entdecken Sie unsere professionelle Küchenausrüstung!",





        }
    }
};

i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        resources,
        fallbackLng: 'de',
        debug: true
    }, function(err, t) {
        updateContent();
    });

function updateContent() {
    $('[data-i18n]').each(function () {
        const key = $(this).attr('data-i18n');
        $(this).text(i18next.t(key));
    });
}

const detectedLang = i18next.language || 'de'; // Fallback to 'en' if no language is detected
$('#languageSwitcher').val(detectedLang);

$('#languageSwitcher').on('change', function () {
    const selectedLang = $(this).val();
    i18next.changeLanguage(selectedLang, updateContent);
});