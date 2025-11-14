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
    'common.or': 'or',
    'common.contact_us': 'Contact Us',
    'common.view_services': 'View Our Services',
    'landing.schedule_appointment': 'Schedule an Appointment',
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
  },
  sr: {
    'nav.home': 'Почетна',
    'nav.about': 'О нама',
    'nav.contact': 'Контакт',
    'nav.services': 'Услуге',
    'common.or': 'или',
    'common.contact_us': 'Контактирајте нас',
    'common.view_services': 'Погледајте наше услуге',
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
  },

  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.services': 'Dienstleistungen',
    'common.or': 'oder',
    'common.contact_us': 'Kontaktieren Sie uns',
    'common.view_services': 'Unsere Dienstleistungen ansehen',
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
  },
  'sr-latn': {
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.contact': 'Kontakt',
    'nav.services': 'Usluge',
    'common.or': 'ili',
    'common.contact_us': 'Kontaktirajte nas',
    'common.view_services': 'Pogledajte naše usluge',
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
  },
};
