export const languages = {
  sr: 'Српски',
  'sr-latn': 'Srpski',
  en: 'English',
  de: 'Deutsch',
};

export const langs = Object.keys(languages);
export type Lang = keyof typeof languages;
export const defaultLanguage = 'sr-latn';
export const ui = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      services: 'Services',
    },
    common: {
      rights_reserved: 'All rights reserved.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      or: 'or',
      contact_us: 'Contact Us',
      view_services: 'View Our Services',
      salon_acika: 'Salon Acika',
    },
    landing: {
      schedule_appointment: 'Schedule an Appointment',
      text: 'Acika Beauty Salon',
      subtext:
        'Welcome to your haven of beauty and relaxation. Surrender to our expert hands and enjoy treatments that nourish your body and soul.',
    },
    contact: {
      email_address: 'Email Address',
      subject: 'Subject',
      subject_placeholder: 'What is it about?',
      message_placeholder: 'Your message here...',
      message: 'Message',
      send_message: 'Send Message',
    },

    about: {
      title: 'Our Story',
      paragraph1:
        'Founded with a vision to create a sanctuary for beauty and self-care, Salon Acika has been serving the Banja Luka community for years. We believe that everyone deserves to feel confident and beautiful.',
      paragraph2:
        'Our team of experienced professionals is dedicated to providing exceptional service, using only the finest products and latest techniques. From nails to skincare, we offer comprehensive beauty solutions tailored to your unique needs.',
      paragraph3:
        "At Salon Acika, we don't just transform appearances—we create moments of joy, relaxation, and self-discovery. Your satisfaction and comfort are our top priorities.",
    },
    footer: {
      address: 'Carice Milice 9, 78000, Banja Luka, Bosnia and Herzegovina',
      quick_links: 'Quick Links',
      follow_us: 'Follow Us',
    },
    meta: {
      title_landing: 'ACIKA Beauty Salon - Beauty and Expertise',
      title_landing_page: 'ACIKA Beauty Salon - Beauty and Expertise',
      page_description_landing:
        'ACIKA Beauty Salon - The place where beauty meets expertise. Discover our facial and body care services, professional treatments, and a relaxing experience in a pleasant atmosphere.',
      title_about_page: 'About Us - Acika Beauty Salon',
      page_description_about:
        'Learn more about Acika Beauty Salon, our mission, values, and the team of professionals dedicated to providing you with exceptional beauty and wellness services.',
      title_contact_page: 'Contact Us - Acika Beauty Salon',
      page_description_contact:
        'Get in touch with Acika Beauty Salon for inquiries, appointments, and more information about our services. We look forward to hearing from you!',
      title_services_page: 'Our Services - Acika Beauty Salon',
      page_description_services:
        'Explore the wide range of services offered at Acika Beauty Salon, including facial treatments, body care, and specialized beauty therapies designed to enhance your natural beauty.',
      title_404_page: 'Page Not Found',
      page_description_404:
        'The page you are looking for does not exist. Please check the URL or return to the homepage of Acika Beauty Salon.',
    },
    services: {
      'header.title': 'Our Services',
      'header.description':
        'Professional beauty and wellness treatments tailored to enhance your natural beauty',
      'category.nails': 'Nails',
      'category.hair-removal': 'Hair Removal',
      'category.facial': 'Facial Treatments',
      'category.foot': 'Foot Care',
      'service.gel-manicure': 'Gel Manicure',
      'service.fill-up': 'Fill-up',
      'service.nail-lacquer': 'Nail Lacquer',
      'service.gel-on-natural-nails': 'Gel on Natural Nails',
      'service.mini-fill-up': 'Mini Fill-up',
      'service.nail-art-entire-nail': 'Nail Art (Entire Nail)',
      'service.depilation-lower-leg': 'Depilation Lower Leg',
      'service.depilation-prepone': 'Depilation Prepone',
      'service.brazilian-depilation': 'Brazilian Depilation',
      'service.nose-hair-removal': 'Nose Hair Removal',
      'service.stomach-depilation': 'Stomach Depilation',
      'service.leg-depilation-i': 'Leg Depilation I',
      'service.leg-depilation-ii': 'Leg Depilation II',
      'service.leg-depilation-iii': 'Leg Depilation III',
      'service.scar-correction': 'Scar Correction',
      'service.eyebrow-correction': 'Eyebrow Correction',
      'service.eyebrow-tint': 'Eyebrow Tint',
      'service.pedicure': 'Pedicure',
      'service.pedicure-gel': 'Pedicure + Gel',
      'service.classic-face-treatment': 'Classic Face Treatment',
      'service.eyelash-tint': 'Eyelash Tint',
      'service.face-massage': 'Face Massage',
      'service.ampule': 'Ampule',
      'service.threading': 'Threading',
      'service.permanent-makeup': 'Permanent Makeup',
      'service.arm-hair-removal': 'Arm Hair Removal',
    },
  },
  sr: {
    nav: {
      home: 'Почетна',
      about: 'О нама',
      contact: 'Контакт',
      services: 'Услуге',
    },
    common: {
      rights_reserved: 'Сва права задржана.',
      phone: 'Телефон',
      email: 'Емаил',
      location: 'Локација',
      or: 'или',
      contact_us: 'Контактирајте нас',
      view_services: 'Погледајте наше услуге',
      salon_acika: 'Салон Ацика',
    },
    landing: {
      schedule_appointment: 'Закажите термин',
      text: 'Козметички Salon Acika',
      subtext:
        'Добродошли у Ваше уточиште лепоте и опуштања. Препустите се нашим стручним рукама и уживајте у третманима који негују тело и душу.',
    },
    contact: {
      email_address: 'Адреса е-поште',
      subject: 'Наслов',
      subject_placeholder: 'О чему се ради?',
      message_placeholder: 'Ваша порука овде...',
      message: 'Порука',
      send_message: 'Пошаљи поруку',
    },
    about: {
      title: 'Наша прича',
      paragraph1:
        'Основан са визијом да се створи уточиште за лепоту и негу себе, Salon Acika већ годинама служи заједници Бања Луке. Верујемо да свако заслужује да се осећа самоуверено и лепо.',
      paragraph2:
        'Наш тим искусних професионалаца посвећен је пружању изузетне услуге, користећи само најбоље производе и најновије технике. Од стилизовања ноктију до неге коже, нудимо свеобухватна решења за лепоту прилагођена вашим јединственим потребама.',
      paragraph3:
        'У Салону Ацика не трансфоришемо само изглед — стварамо тренутке радости, опуштања и самоспознаје. Ваше задовољство и удобност су наши највећи приоритети.',
    },
    footer: {
      address: 'Царице Милице 9, 78000, Бања Лука, Босна и Херцеговина',
      quick_links: 'Брзи линкови',
      follow_us: 'Пратите нас',
    },
    meta: {
      title_landing: 'Кozметички салон ACIKA - Лепота и стручност',
      title_landing_page: 'Кozметички салон ACIKA - Лепота и стручност',
      page_description_landing:
        'Кozметички салон Acika — место где се лепота сусреће са стручностима. Откријте наше третмане лица и тела, професионалне терапије и опуштајуће искуство у пријатној атмосфери.',
      title_about_page: 'О нама - Козметички салон Acika',
      page_description_about:
        'Сазнајте више о Козметичком салону Acika, нашој мисији, вредностима и тиму професионалаца посвећених пружању изузетних услуга лепоте и велнеса.',
      title_contact_page: 'Контакт - Козметички салон Acika',
      page_description_contact:
        'Контактирајте Козметички салон Acika за упите, термине и додатне информације о нашим услугама. Радујемо се вашем позиву!',
      title_services_page: 'Наше услуге - Козметички салон Acika',
      page_description_services:
        'Истражите широк спектар услуга које нуди Козметички салон Acika, укључујући третмане лица, негу тела и специјализоване терапије које истичу вашу природну лепоту.',
      title_404_page: 'Страница није пронађена',
      page_description_404:
        'Страница коју тражите не постоји. Молимо проверите УРЛ или се вратите на почетну страницу.',
    },
    services: {
      'header.title': 'Наше Услуге',
      'header.description':
        'Професионални третмани лепоте и велнеса прилагођени да истакну вашу природну лепоту',
      'category.nails': 'Нокти',
      'category.hair-removal': 'Депилација',
      'category.facial': 'Третмани лица',
      'category.foot': 'Нега стопала',
      'service.gel-manicure': 'Надоградња - Гел метода',
      'service.fill-up': 'Допуна',
      'service.nail-lacquer': 'Лакирање',
      'service.gel-on-natural-nails': 'Гел на природне нокте',
      'service.mini-fill-up': 'Мини допуна',
      'service.nail-art-entire-nail': 'Дизајн целих ноктију',
      'service.depilation-lower-leg': 'Депилација пола ногу',
      'service.depilation-prepone': 'Депилација препоне',
      'service.brazilian-depilation': 'Бразилска депилација',
      'service.nose-hair-removal': 'Депилација наусница',
      'service.stomach-depilation': 'Депилација стомака',
      'service.leg-depilation-i': 'Депилација ногу I',
      'service.leg-depilation-ii': 'Депилација ногу II',
      'service.leg-depilation-iii': 'Депилација ногу III',
      'service.scar-correction': 'Корекција ожиљака',
      'service.eyebrow-correction': 'Корекција обрва',
      'service.eyebrow-tint': 'Фарбање обрва',
      'service.pedicure': 'Педикир',
      'service.pedicure-gel': 'Педикир + Гел',
      'service.classic-face-treatment': 'Класични третман лица',
      'service.eyelash-tint': 'Фарбање трепавица',
      'service.face-massage': 'Масажа лица',
      'service.ampule': 'Ампула',
      'service.threading': 'Третман концем',
      'service.permanent-makeup': 'Трајна шминка',
      'service.arm-hair-removal': 'Депилација руку',
    },
  },
  de: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      services: 'Services',
    },
    common: {
      rights_reserved: 'All rights reserved.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      or: 'or',
      contact_us: 'Contact Us',
      view_services: 'View Our Services',
      salon_acika: 'Salon Acika',
    },
    landing: {
      schedule_appointment: 'Termin vereinbaren',
      text: 'Kozmetički Salon Acika',
      subtext:
        'Willkommen in Ihrer Oase der Schönheit und Entspannung. Überlassen Sie sich unseren erfahrenen Händen und genießen Sie Behandlungen, die Körper und Seele verwöhnen.',
    },
    contact: {
      email_address: 'E-Mail-Adresse',
      subject: 'Thema',
      subject_placeholder: 'Worum geht es?',
      message_placeholder: 'Ihre Nachricht hier...',
      message: 'Nachricht',
      send_message: 'Nachricht senden',
    },
    about: {
      title: 'Unsere Geschichte',
      paragraph1:
        'Gegründet mit der Vision, ein Heiligtum für Schönheit und Selbstpflege zu schaffen, bedient der Salon Acika seit Jahren die Gemeinschaft von Banja Luka. Wir glauben, dass jeder das Recht hat, sich selbstbewusst und schön zu fühlen.',
      paragraph2:
        'Unser Team von erfahrenen Fachleuten hat sich der Bereitstellung außergewöhnlicher Dienstleistungen verschrieben, wobei nur die besten Produkte und neuesten Techniken zum Einsatz kommen. Von der Nagel- bis zur Hautpflege bieten wir umfassende Schönheit Lösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.',
      paragraph3:
        'Im Salon Acika verwandeln wir nicht nur das äußere Erscheinungsbild - wir schaffen Momente der Freude, Entspannung und Selbstentdeckung. Ihre Zufriedenheit und Ihr Komfort stehen bei uns an erster Stelle.',
    },
    footer: {
      address: 'Carice Milice 9, 78000, Banja Luka, Bosnia and Herzegovina',
      quick_links: 'Quick Links',
      follow_us: 'Follow Us',
    },
    meta: {
      title_landing: 'Kosmetiksalon ACIKA - Schönheit und Fachwissen',
      title_landing_page: 'Kosmetiksalon ACIKA - Schönheit und Fachwissen',
      page_description_landing:
        'Kosmetiksalon Acika – der Ort, an dem Schönheit auf Fachwissen trifft. Entdecken Sie unsere Gesichts- und Körperpflege, professionelle Behandlungen und ein entspannendes Erlebnis in angenehmer Atmosphäre.',
      title_about_page: 'Über uns - Kosmetiksalon Acika',
      page_description_about:
        'Erfahren Sie mehr über den Kosmetiksalon Acika, unsere Mission, Werte und das Team von Fachleuten, die sich der Bereitstellung außergewöhnlicher Schönheits- und Wellness-Dienstleistungen widmen.',
      title_contact_page: 'Kontakt - Kosmetiksalon Acika',
      page_description_contact:
        'Kontaktieren Sie den Kosmetiksalon Acika für Anfragen, Termine und weitere Informationen zu unseren Dienstleistungen. Wir freuen uns auf Ihre Nachricht!',
      title_services_page: 'Unsere Dienstleistungen - Kosmetiksalon Acika',
      page_description_services:
        'Entdecken Sie die breite Palette an Dienstleistungen des Kosmetiksalons Acika, einschließlich Gesichtsbehandlungen, Körperpflege und spezialisierter Schönheitsanwendungen.',
      title_404_page: 'Seite nicht gefunden',
      page_description_404:
        'Die von Ihnen gesuchte Seite existiert nicht. Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.',
    },
    services: {
      'header.title': 'Unsere Dienstleistungen',
      'header.description':
        'Professionelle Schönheits- und Wellnessbehandlungen, die darauf zugeschnitten sind, Ihre natürliche Schönheit zu unterstreichen',
      'category.nails': 'Nägel',
      'category.hair-removal': 'Haarentfernung',
      'category.facial': 'Gesichtsbehandlungen',
      'category.foot': 'Fußpflege',
      'service.gel-manicure': 'Gel Maniküre',
      'service.fill-up': 'Gel-Auffüllung',
      'service.nail-lacquer': 'Nagellack',
      'service.gel-on-natural-nails': 'Gel auf natürlichen Nägeln',
      'service.mini-fill-up': 'Mini Auffüllung',
      'service.nail-art-entire-nail': 'Nagelkunst ganze Nägel',
      'service.depilation-lower-leg': 'Haarentfernung Unterschenkel',
      'service.depilation-prepone': 'Bikini-Haarentfernung',
      'service.brazilian-depilation': 'Brasilianische Haarentfernung',
      'service.nose-hair-removal': 'Nasenhaare entfernen',
      'service.stomach-depilation': 'Bauch-Haarentfernung',
      'service.leg-depilation-i': 'Bein-Haarentfernung I',
      'service.leg-depilation-ii': 'Bein-Haarentfernung II',
      'service.leg-depilation-iii': 'Bein-Haarentfernung III',
      'service.scar-correction': 'Narbenkorrektur',
      'service.eyebrow-correction': 'Augenbrauen-Formung',
      'service.eyebrow-tint': 'Augenbrauen Färben',
      'service.pedicure': 'Pediküre',
      'service.pedicure-gel': 'Pediküre + Gel',
      'service.classic-face-treatment': 'Klassische Gesichtsbehandlung',
      'service.eyelash-tint': 'Wimpern Färben',
      'service.face-massage': 'Gesichtsmassage',
      'service.ampule': 'Ampulle',
      'service.threading': 'Fadentechnik',
      'service.permanent-makeup': 'Permanent Make-up',
      'service.arm-hair-removal': 'Arm-Haarentfernung',
    },
  },
  'sr-latn': {
    nav: {
      home: 'Početna',
      about: 'O nama',
      contact: 'Kontakt',
      services: 'Usluge',
    },
    common: {
      rights_reserved: 'Sva prava zadržana.',
      phone: 'Telefon',
      email: 'Email',
      location: 'Lokacija',
      or: 'ili',
      contact_us: 'Kontaktirajte nas',
      view_services: 'Pogledajte naše usluge',
      salon_acika: 'Salon Acika',
    },
    landing: {
      schedule_appointment: 'Zakažite termin',
      text: 'Kozmetički Salon Acika',
      subtext:
        'Dobrodošli u Vaše utočište lepote i opuštanja. Prepustite se našim stručnim rukama i uživajte u tretmanima koji neguju telo i dušu.',
    },
    contact: {
      email_address: 'Email Adresa',
      subject: 'Naslov',
      subject_placeholder: 'O čemu se radi?',
      message_placeholder: 'Vaša poruka ovde...',
      message: 'Poruka',
      send_message: 'Pošalji poruku',
    },
    about: {
      title: 'Naša priča',
      paragraph1:
        'Osnovan sa vizijom da se stvori utočište za lepotu i negu sebe, Salon Acika već godinama služi zajednici Banja Luke. Verujemo da svako zaslužuje da se oseća samouvereno i lepo.',
      paragraph2:
        'Naš tim iskusnih profesionalaca posvećen je pružanju izuzetne usluge, koristeći samo najbolje proizvode i najnovije tehnike. Od stilizovanja noktiju do nege kože, nudimo sveobuhvatna rešenja za lepotu prilagođena vašim jedinstvenim potrebama.',
      paragraph3:
        'U Salonu Acika ne transformišemo samo izgled — stvaramo trenutke radosti, opuštanja i samospoznaje. Vaše zadovoljstvo i udobnost su naši najveći prioriteti.',
    },
    footer: {
      address: 'Carice Milice 9, 78000, Banja Luka, Bosna i Hercegovina',
      quick_links: 'Brzi linkovi',
      follow_us: 'Pratite nas',
    },
    meta: {
      title_landing: 'Kozmetički salon ACIKA - Lepota i stručnost',
      title_landing_page: 'Kozmetički salon ACIKA - Lepota i stručnost',
      page_description_landing:
        'Kozmetički salon Acika — mesto gde se lepota susreće sa stručnostima. Otkrijte naše tretmane lica i tela, profesionalne terapije i opuštajuće iskustvo u prijatnoj atmosferi.',
      title_about_page: 'O nama - Kozmetički salon Acika',
      page_description_about:
        'Saznajte više o Kozmetičkom salonu Acika, našoj misiji, vrednostima i timu profesionalaca posvećenih pružanju izuzetnih usluga lepote i velnesa.',
      title_contact_page: 'Kontakt - Kozmetički salon Acika',
      page_description_contact:
        'Kontaktirajte Kozmetički salon Acika za upite, termine i dodatne informacije o našim uslugama. Radujemo se vašem javljanju!',
      title_services_page: 'Naše usluge - Kozmetički salon Acika',
      page_description_services:
        'Istražite širok spektar usluga koje nudi Kozmetički salon Acika, uključujući tretmane lica, negu tela i specijalizovane terapije koje ističu vašu prirodnu lepotu.',
      title_404_page: 'Stranica nije pronađena',
      page_description_404:
        'Stranica koju tražite ne postoji. Molimo proverite URL ili se vratite na početnu stranicu.',
    },
    services: {
      'header.title': 'Naše Usluge',
      'header.description':
        'Profesionalni tretmani lepote i velnesa prilagođeni da istaknu vašu prirodnu lepotu',
      'category.nails': 'Nokti',
      'category.hair-removal': 'Depilacija',
      'category.facial': 'Tretmani lica',
      'category.foot': 'Nega stopala',
      'service.gel-manicure': 'Nadogradnja - Gel Metoda',
      'service.fill-up': 'Dopuna',
      'service.nail-lacquer': 'Lakiranje',
      'service.gel-on-natural-nails': 'Gel na noge',
      'service.mini-fill-up': 'Mini dopuna',
      'service.nail-art-entire-nail': 'Depliacija cijelih nogu',
      'service.depilation-lower-leg': 'Depilacija pola nogu',
      'service.depilation-prepone': 'Depilacija prepone',
      'service.brazilian-depilation': 'Brazilska depilacija',
      'service.nose-hair-removal': 'Depilacija nausnica',
      'service.stomach-depilation': 'Depilacija stomaka',
      'service.leg-depilation-i': 'Depilacija leda I',
      'service.leg-depilation-ii': 'Depilacija leda II',
      'service.leg-depilation-iii': 'Depilacija leda III',
      'service.scar-correction': 'Korekcija ožiga',
      'service.eyebrow-correction': 'Farbanje obrva',
      'service.eyebrow-tint': 'Farbanje trepavica',
      'service.pedicure': 'Pedikir',
      'service.pedicure-gel': 'Pedikir + Gel',
      'service.classic-face-treatment': 'Klasicni tretman lica',
      'service.eyelash-tint': 'Osvjezenje lica',
      'service.face-massage': 'Masaza lica',
      'service.ampule': 'Ampula',
      'service.threading': 'Sminkanje',
      'service.permanent-makeup': 'Trajni lak',
      'service.arm-hair-removal': 'Depilacija ruku',
    },
  },
};
