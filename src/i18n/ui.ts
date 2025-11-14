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
    'meta.title_landing': 'ACIKA Beauty Salon - Beauty and Expertise',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.services': 'Services',
    'common.rights_reserved': 'All rights reserved.',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.location': 'Location',
    'common.or': 'or',
    'common.contact_us': 'Contact Us',
    'common.view_services': 'View Our Services',
    'common.salon_acika': 'Salon Acika',
    'landing.schedule_appointment': 'Schedule an Appointment',
    'about.title': 'Our Story',
    'about.paragraph1':
      'Founded with a vision to create a sanctuary for beauty and self-care, Salon Acika has been serving the Banja Luka community for years. We believe that everyone deserves to feel confident and beautiful.',
    'about.paragraph2':
      'Our team of experienced professionals is dedicated to providing exceptional service, using only the finest products and latest techniques. From nails to skincare, we offer comprehensive beauty solutions tailored to your unique needs.',
    'about.paragraph3':
      "At Salon Acika, we don't just transform appearances—we create moments of joy, relaxation, and self-discovery. Your satisfaction and comfort are our top priorities.",
    'footer.address':
      'Carice Milice 9, 78000, Banja Luka, Bosnia and Herzegovina',
    'footer.quick_links': 'Quick Links',
    'footer.follow_us': 'Follow Us',
    'landing.text': 'Acika Beauty Salon',
    'landing.subtext':
      'Welcome to your haven of beauty and relaxation. Surrender to our expert hands and enjoy treatments that nourish your body and soul.',
    'meta.title_landing_page': 'ACIKA Beauty Salon - Beauty and Expertise',
    'meta.page_description_landing':
      'ACIKA Beauty Salon - The place where beauty meets expertise. Discover our facial and body care services, professional treatments, and a relaxing experience in a pleasant atmosphere.',
    'meta.title_about_page': 'About Us - Acika Beauty Salon',
    'meta.page_description_about':
      'Learn more about Acika Beauty Salon, our mission, values, and the team of professionals dedicated to providing you with exceptional beauty and wellness services.',
    'meta.title_contact_page': 'Contact Us - Acika Beauty Salon',
    'meta.page_description_contact':
      'Get in touch with Acika Beauty Salon for inquiries, appointments, and more information about our services. We look forward to hearing from you!',
    'meta.title_services_page': 'Our Services - Acika Beauty Salon',
    'meta.page_description_services':
      'Explore the wide range of services offered at Acika Beauty Salon, including facial treatments, body care, and specialized beauty therapies designed to enhance your natural beauty.',
    'meta.title_404_page': 'Page Not Found',
    'meta.page_description_404':
      'The page you are looking for does not exist. Please check the URL or return to the homepage of Acika Beauty Salon.',
  },
  sr: {
    'nav.home': 'Почетна',
    'nav.about': 'О нама',
    'nav.contact': 'Контакт',
    'nav.services': 'Услуге',
    'common.rights_reserved': 'Сва права задржана.',
    'common.phone': 'Телефон',
    'common.email': 'Емаил',
    'common.location': 'Локација',
    'common.or': 'или',
    'common.contact_us': 'Контактирајте нас',
    'common.view_services': 'Погледајте наше услуге',
    'common.salon_acika': 'Салон Ацика',
    'footer.address': 'Царице Милице 9, 78000, Бања Лука, Босна и Херцеговина',
    'footer.quick_links': 'Брзи линкови',
    'footer.follow_us': 'Пратите нас',
    'about.title': 'Наша прича',
    'about.paragraph1':
      'Основан са визијом да се створи уточиште за лепоту и негу себе, Салон Ацика већ годинама служи заједници Бања Луке. Верујемо да свако заслужује да се осећа самоуверено и лепо.',
    'about.paragraph2':
      'Наш тим искусних професионалаца посвећен је пружању изузетне услуге, користећи само најбоље производе и најновије технике. Од стилизовања ноктију до неге коже, нудимо свеобухватна решења за лепоту прилагођена вашим јединственим потребама.',
    'about.paragraph3':
      'У Салону Ацика не трансформишемо само изглед — стварамо тренутке радости, опуштања и самоспознаје. Ваше задовољство и удобност су наши највећи приоритети.',
    'landing.schedule_appointment': 'Закажите термин',
    'landing.text': 'Козметички Салон АЦИКА',
    'landing.subtext':
      'Добродошли у ваше уточиште лепоте и опуштања. Препустите се нашим стручним рукама и уживајте у третманима који негују тело и душу.',
    'meta.title_landing_page': 'Козметички Салон ACIKA - Лепота и Стручност',
    'meta.page_description_landing':
      'Козметички Салон Acika - Место где лепота сусреће стручност. Откријте наше услуге неге лица и тела, професионалне третмане и опуштајуће искуство у пријатном амбијенту.',
    'meta.title_about_page': 'О нама - Козметички Салон Acika',
    'meta.page_description_about':
      'Сазнајте више о Козметичком Салону Acika, нашој мисији, вредностима и тиму професионалаца посвећених пружању изузетних услуга лепоте и велнеса.',
    'meta.title_contact_page': 'Контактирајте нас - Козметички Салон Acika',
    'meta.page_description_contact':
      'Контактирајте Козметички Салон Acika за упите, термине и више информација о нашим услугама. Радујемо се вашем позиву!',
    'meta.title_services_page': 'Наше Услуге - Козметички Салон Acika',
    'meta.page_description_services':
      'Истражите широк спектар услуга које нуди Козметички Салон Acika, укључујући третмане лица, негу тела и специјализоване терапије лепоте дизајниране да истакну вашу природну лепоту.',
    'meta.title_404_page': 'Страница није пронађена',
    'meta.page_description_404':
      'Страница коју тражите не постоји. Молимо проверите УРЛ или се вратите на почетну страницу Козметичког Салона Acika.',
  },

  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.services': 'Dienstleistungen',
    'common.rights_reserved': 'Alle Rechte vorbehalten.',
    'common.phone': 'Telephon',
    'common.email': 'Email',
    'common.location': 'Standort',
    'common.or': 'oder',
    'common.contact_us': 'Kontaktieren Sie uns',
    'common.view_services': 'Unsere Dienstleistungen ansehen',
    'common.salon_acika': 'Salon Acika',
    'footer.address':
      'Carice Milice 9, 78000, Banja Luka, Bosnien und Herzegowina',
    'footer.quick_links': 'Schnellzugriffe',
    'footer.follow_us': 'Folgen Sie uns',
    'about.title': 'Unsere Geschichte',
    'about.paragraph1':
      'Gegründet mit der Vision, eine Oase der Schönheit und Selbstpflege zu schaffen, dient der Salon Acika seit Jahren der Gemeinschaft von Banja Luka. Wir glauben, dass jeder es verdient, sich selbstbewusst und schön zu fühlen.',
    'about.paragraph2':
      'Unser Team erfahrener Fachleute ist bestrebt, außergewöhnlichen Service zu bieten und verwendet nur die besten Produkte und neuesten Techniken. Von Nagelstyling bis Hautpflege bieten wir umfassende Schönheitslösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.',
    'about.paragraph3':
      'Im Salon Acika verwandeln wir nicht nur das Aussehen – wir schaffen Momente der Freude, Entspannung und Selbstentdeckung. Ihre Zufriedenheit und Ihr Komfort haben für uns oberste Priorität.',
    'landing.text': 'Kosmetiksalon ACIKA',
    'landing.subtext':
      'Willkommen in Ihrer Oase der Schönheit und Entspannung. Überlassen Sie sich unseren erfahrenen Händen und genießen Sie Behandlungen, die Körper und Seele verwöhnen.',
    'landing.schedule_appointment': 'Termin vereinbaren',
    'meta.title_landing_page': 'Kosmetiksalon ACIKA - Schönheit und Fachwissen',
    'meta.page_description_landing':
      'Kosmetiksalon Acika - Der Ort, an dem Schönheit auf Fachwissen trifft. Entdecken Sie unsere Gesichts- und Körperpflegeleistungen, professionelle Behandlungen und ein entspannendes Erlebnis in einer angenehmen Atmosphäre.',
    'meta.title_about_page': 'Über uns - Kosmetiksalon Acika',
    'meta.page_description_about':
      'Erfahren Sie mehr über den Kosmetiksalon Acika, unsere Mission, Werte und das Team von Fachleuten, die sich der Bereitstellung außergewöhnlicher Schönheits- und Wellness-Dienstleistungen widmen.',
    'meta.title_contact_page': 'Kontaktieren Sie uns - Kosmetiksalon Acika',
    'meta.page_description_contact':
      'Nehmen Sie Kontakt mit dem Kosmetiksalon Acika auf für Anfragen, Termine und weitere Informationen zu unseren Dienstleistungen. Wir freuen uns darauf, von Ihnen zu hören!',
    'meta.title_services_page': 'Unsere Dienstleistungen - Kosmetiksalon Acika',
    'meta.page_description_services':
      'Entdecken Sie die breite Palette an Dienstleistungen, die der Kosmetiksalon Acika anbietet, darunter Gesichtsbehandlungen, Körperpflege und spezialisierte Schönheitsanwendungen, die darauf ausgelegt sind, Ihre natürliche Schönheit zu betonen.',
    'meta.title_404_page': 'Seite nicht gefunden',
    'meta.page_description_404':
      'Die von Ihnen gesuchte Seite existiert nicht. Bitte überprüfen Sie die URL oder kehren Sie zur Startseite des Kosmetiksalons Acika zurück.',
  },
  'sr-latn': {
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.contact': 'Kontakt',
    'nav.services': 'Usluge',
    'common.rights_reserved': 'Sva prava zadržana.',
    'common.phone': 'Telefon',
    'common.email': 'Email',
    'common.location': 'Lokacija',
    'common.or': 'ili',
    'common.contact_us': 'Kontaktirajte nas',
    'common.view_services': 'Pogledajte naše usluge',
    'common.salon_acika': 'Salon Acika',
    'footer.address': 'Carice Milice 9, 78000, Banja Luka, Bosna i Hercegovina',
    'footer.quick_links': 'Brzi linkovi',
    'footer.follow_us': 'Pratite nas',
    'about.title': 'Naša priča',
    'about.paragraph1':
      'Osnovan sa vizijom da se stvori utočište za lepotu i negu sebe, Salon Acika već godinama služi zajednici Banja Luke. Verujemo da svako zaslužuje da se oseća samouvereno i lepo.',
    'about.paragraph2':
      'Naš tim iskusnih profesionalaca posvećen je pružanju izuzetne usluge, koristeći samo najbolje proizvode i najnovije tehnike. Od stilizovanja noktiju do nege kože, nudimo sveobuhvatna rešenja za lepotu prilagođena vašim jedinstvenim potrebama.',
    'about.paragraph3':
      'U Salonu Acika ne transformišemo samo izgled — stvaramo trenutke radosti, opuštanja i samospoznaje. Vaše zadovoljstvo i udobnost su naši najveći prioriteti.',
    'landing.schedule_appointment': 'Zakažite termin',
    'landing.text': 'Kozmetički Salon Acika',
    'landing.subtext':
      'Dobrodošli u Vaše utočište lepote i opuštanja. Prepustite se našim stručnim rukama i uživajte u tretmanima koji neguju telo i dušu.',
    'meta.title_landing_page': 'Kozmetički Salon ACIKA - Lepota i Stručnost',
    'meta.page_description_landing':
      'Kozmetički Salon Acika - Mesto gde lepota susreće stručnost. Otkrijte naše usluge nege lica i tela, profesionalne tretmane i opuštajuće iskustvo u prijatnom ambijentu.',
    'meta.title_about_page': 'O nama - Kozmetički Salon Acika',
    'meta.page_description_about':
      'Saznajte više o Kozmetičkom Salonu Acika, našoj misiji, vrednostima i timu profesionalaca posvećenih pružanju izuzetnih usluga lepote i velnesa.',
    'meta.title_contact_page': 'Kontaktirajte nas - Kozmetički Salon Acika',
    'meta.page_description_contact':
      'Kontaktirajte Kozmetički Salon Acika za upite, termine i više informacija o našim uslugama. Radujemo se vašem pozivu!',
    'meta.title_services_page': 'Naše Usluge - Kozmetički Salon Acika',
    'meta.page_description_services':
      'Istražite širok spektar usluga koje nudi Kozmetički Salon Acika, uključujući tretmane lica, negu tela i specijalizovane terapije lepote dizajnirane da istaknu vašu prirodnu lepotu.',
    'meta.title_404_page': 'Stranica nije pronađena',
    'meta.page_description_404':
      'Stranica koju tražite ne postoji. Molimo proverite URL ili se vratite na početnu stranicu Kozmetičkog Salona Acika.',
  },
};
