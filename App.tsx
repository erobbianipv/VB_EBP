
import React, { useState, useEffect } from 'react';
import { CLUB_LOGO, ACHIEVEMENTS, STAFF, PROGRAMS } from './constants';
import { Program } from './types';
import { Trophy, MapPin, Users, Home, GraduationCap, Calendar, ArrowRight, Menu, X, Instagram, Facebook, CheckCircle2, Send, Mail, Linkedin, Star, ChevronDown } from 'lucide-react';

type Language = 'it' | 'en' | 'es' | 'fr';

const TRANSLATIONS = {
  it: {
    // Nav & General
    backToHome: "Torna alla Home",
    joinEBP: "Unisciti all'EBP",
    // Hero
    heroTitle: "Elite Basketball Program",
    heroSubtitle: "Un Pilastro dell'Eccellenza Europea",
    explorePrograms: "Esplora i Programmi",
    ourLegacy: "La Nostra Storia",
    // Who We Are
    whoWeAre: "Chi Siamo",
    whoWeAreP1: "La Pallacanestro Varese è un pilastro del basket europeo con 10 Campionati Italiani e 5 titoli di Eurolega. I nostri successi storici parlano da soli, incluse 10 finali consecutive di Eurolega.",
    whoWeAreP2: "Situati nel cuore di Varese, siamo circondati da leader del settore e innovazione. Qui il basket non è solo uno sport, è una tradizione profondamente radicata.",
    whoWeAreQuote: '"Rimaniamo focalizzati sul futuro, impegnati ad arricchire la nostra storia e ad essere fonte di orgoglio per Varese."',
    ourPalmares: "Il Nostro Palmarès",
    // Achievements
    campionatoItaliano: "CAMPIONATO ITALIANO",
    coppaItalia: "COPPA ITALIA",
    supercoppa: "SUPERCOPPA ITALIANA",
    coppaCampioni: "COPPA DEI CAMPIONI",
    coppaCoppe: "COPPA DELLE COPPE",
    coppaIntercontinentale: "COPPA INTERCONTINENTALE",
    // Location
    whereWeAre: "Dove Siamo",
    gardenCity: "La Città Giardino",
    strategicLocation: "Posizione Strategica",
    strategicLocationDesc: "40 min da Milano, 20 min dalla Svizzera, 25 min dall'Aeroporto di Malpensa.",
    eliteRegion: "Regione d'Elite",
    eliteRegionDesc: "Situata nella seconda regione economica più ricca d'Europa.",
    locationP: "Caratterizzata da una straordinaria bellezza naturale, con laghi, colline e parchi che rendono Varese una popolare destinazione turistica.",
    findUs: "Trovaci a Varese",
    // Leadership
    ourTeam: "Il Nostro Team",
    ourLeadership: "La Nostra Leadership",
    expertise: "Esperienza dall'NBA all'EuroLeague",
    // Facilities
    infrastructure: "Infrastrutture",
    eliteFacilities: "Strutture d'Elite",
    facilitiesDesc: "Infrastrutture professionali per allenamenti ad alte prestazioni",
    arena: "L'Arena",
    arenaDesc: "5.352 posti con ospitalità premium",
    campus: "Campus",
    campusDesc: "Centro di allenamento professionale",
    campusNote: "Progetto di ristrutturazione da 3M € a partire da quest'estate",
    eliteHousing: "Alloggi d'Elite",
    eliteHousingDesc: "Alloggi di lusso per studenti-atleti",
    // Opportunities
    elitePrograms: "Programmi d'Elite",
    eliteOpportunities: "Opportunità d'Elite",
    opportunitiesDesc: "Un ecosistema completo per la prossima generazione di eccellenza nel basket",
    // Programs View
    programsTraining: "Programmi & Allenamento",
    programsDesc: "Scopri i nostri percorsi specializzati per giocatori e allenatori all'interno dell'ecosistema Pallacanestro Varese.",
    // Modals
    moreInfo: "Più Informazioni",
    requestMoreInfo: "Richiedi Maggiori Informazioni",
    downloadBrochure: "Scarica la Brochure",
    backToDetails: "Torna ai Dettagli",
    applicationForm: "Modulo di Candidatura",
    formDescription: "Inserisci i tuoi dati qui sotto per candidarti al",
    firstName: "Nome *",
    firstNamePlaceholder: "Il tuo nome",
    lastName: "Cognome *",
    lastNamePlaceholder: "Il tuo cognome",
    organization: "Club / Academy / Federazione *",
    organizationPlaceholder: "Organizzazione attuale",
    email: "Indirizzo Email *",
    emailPlaceholder: "tua@email.com",
    messageInfo: "Messaggio e Richiesta Informazioni *",
    messageInfoPlaceholder: "Raccontaci del tuo interesse...",
    requestInfo: "Richiedi Info",
    programSelect: "Seleziona un Programma *",
    selectOption: "Seleziona un'opzione",
    buyNow: "Acquista Ora",
    // Global Join Modal
    joinProgram: "Unisciti al Programma",
    joinDescription: "Invia la tua candidatura per accedere alle opportunità d'elite di Varese",
    // CTA
    ctaTitle: "Trasforma il Tuo Futuro nel Basket",
    ctaSubtitle: "Le candidature per la stagione 2026/27 sono aperte.",
    applyNow: "Richiedi Info",
    // Footer
    footerSlogan: "Potenziare la prossima generazione di giocatori di basket d'elite attraverso infrastrutture professionali e competenza leggendaria.",
    footerLegacy: "La Nostra Storia",
    footerRegion: "La Regione",
    footerLeadership: "Leadership",
    footerFacilities: "Strutture",
    footerPrograms: "Programmi",
    contactUs: "Contattaci",
    footerAddress: "Piazzale Antonio Gramsci,\nVarese, Italia",
    footerCOO: "Direttore Operativo",
    // Submission Success
    submissionSuccessTitle: "Richiesta Inoltrata!",
    submissionSuccessMessage: "Abbiamo preparato un'email con i tuoi dati. Per favore, controlla la tua applicazione di posta elettronica (Outlook, Gmail, etc.) e invia il messaggio per completare la richiesta.",
    close: "Chiudi",
    // Palmares
    palmaresTitle: "Il Nostro Palmarès",
    nationalCompetitions: "Competizioni Nazionali",
    internationalCompetitions: "Competizioni Internazionali",
    otherCompetitions: "Altre Competizioni",
    youthCompetitions: "Competizioni Giovanili",
    scudetto: "Scudetto",
    italianCup: "Coppa Italia",
    italianSupercup: "Supercoppa Italiana",
    euroleague: "Coppa dei Campioni / Eurolega",
    cupWinnersCup: "Coppa delle Coppe",
    intercontinentalCup: "Coppa Intercontinentale",
    lombardyCup: "Coppa Lombardia",
    junioresChampionship: "Campionato italiano Juniores",
    u19Championship: "Campionato italiano Under-19",
    u17Championship: "Campionato italiano Under-17",
    u15Championship: "Campionato italiano Under-15",
    joinTheGame: "Join The Game",
  },
  en: {
    backToHome: "Back to Home",
    joinEBP: "Join EBP",
    heroTitle: "Elite Basketball Program",
    heroSubtitle: "A Cornerstone of European Excellence",
    explorePrograms: "Explore Programs",
    ourLegacy: "Our Legacy",
    whoWeAre: "Who We Are",
    whoWeAreP1: "Pallacanestro Varese is a cornerstone of European basketball with 10 Italian Championships and 5 Euroleague titles. Our historic achievements speak for themselves, including an unmatched 10 consecutive Euroleague finals appearances.",
    whoWeAreP2: "Located in the heart of Varese, Italy, we are surrounded by industry leaders and innovation. Basketball is not just a sport here; it is a beloved tradition deeply ingrained in our city's culture.",
    whoWeAreQuote: '"We remain future-focused, committed to adding to our legacy and being a source of pride for Varese."',
    ourPalmares: "Our Palmarès",
    campionatoItaliano: "ITALIAN CHAMPIONSHIP",
    coppaItalia: "ITALIAN CUP",
    supercoppa: "ITALIAN SUPERCOPPA",
    coppaCampioni: "EUROLEAGUE",
    coppaCoppe: "CUP WINNERS' CUP",
    coppaIntercontinentale: "INTERCONTINENTAL CUP",
    whereWeAre: "Where We Are",
    gardenCity: "The Garden City",
    strategicLocation: "Strategic Location",
    strategicLocationDesc: "40 min from Milan, 20 min from Switzerland, 25 min from Malpensa Airport.",
    eliteRegion: "Elite Region",
    eliteRegionDesc: "Located in the 2nd wealthiest economic region in Europe.",
    locationP: "Characterized by stunning natural beauty, boasting lakes, hills, and parks that make Varese a popular tourist destination.",
    findUs: "Find us in Varese",
    ourTeam: "Our Team",
    ourLeadership: "Our Leadership",
    expertise: "Expertise from the NBA to the EuroLeague",
    infrastructure: "Infrastructure",
    eliteFacilities: "Elite Facilities",
    facilitiesDesc: "Professional infrastructure for high-performance training",
    arena: "The Arena",
    arenaDesc: "5,352 seat capacity with premium hospitality",
    campus: "Campus",
    campusDesc: "Professional training center",
    campusNote: "3M € renovation project starting this summer",
    eliteHousing: "Elite Housing",
    eliteHousingDesc: "Luxury student-athlete living",
    elitePrograms: "Elite Programs",
    eliteOpportunities: "Elite Opportunities",
    opportunitiesDesc: "A complete ecosystem for the next generation of basketball excellence",
    programsTraining: "Programs & Training",
    programsDesc: "Discover our specialized paths for players and coaches within the Pallacanestro Varese ecosystem.",
    moreInfo: "More Info",
    requestMoreInfo: "Request More Info",
    downloadBrochure: "Download Brochure",
    backToDetails: "Back to Details",
    applicationForm: "Application Form",
    formDescription: "Please provide your details below to apply for the",
    firstName: "First Name *",
    firstNamePlaceholder: "Your Name",
    lastName: "Last Name *",
    lastNamePlaceholder: "Your Surname",
    organization: "Club / Academy / Federation *",
    organizationPlaceholder: "Current Organization",
    email: "Email Address *",
    emailPlaceholder: "your@email.com",
    messageInfo: "Message & Info Request *",
    messageInfoPlaceholder: "Tell us about your interest...",
    requestInfo: "Request Info",
    programSelect: "Select Program *",
    selectOption: "Select an option",
    buyNow: "Buy Now",
    joinProgram: "Join the Program",
    joinDescription: "Submit your application to enter the Varese elite opportunities",
    ctaTitle: "Transform Your Basketball Future",
    ctaSubtitle: "Applications for the 2026/27 Season are now open.",
    applyNow: "Request Info",
    footerSlogan: "Empowering the next generation of elite basketball players through professional infrastructure and legendary expertise.",
    footerLegacy: "Our Legacy",
    footerRegion: "The Region",
    footerLeadership: "Leadership",
    footerFacilities: "Facilities",
    footerPrograms: "Programs",
    contactUs: "Contact Us",
    footerAddress: "Piazzale Antonio Gramsci,\nVarese, Italy",
    footerCOO: "Chief Operating Officer",
    submissionSuccessTitle: "Request Forwarded!",
    submissionSuccessMessage: "We've prepared an email with your details. Please check your email client (Outlook, Gmail, etc.) and send the message to complete your request.",
    close: "Close",
    // Palmares
    palmaresTitle: "Our Palmarès",
    nationalCompetitions: "National Competitions",
    internationalCompetitions: "International Competitions",
    otherCompetitions: "Other Competitions",
    youthCompetitions: "Youth Competitions",
    scudetto: "Italian Championship",
    italianCup: "Italian Cup",
    italianSupercup: "Italian Supercup",
    euroleague: "Champions Cup / Euroleague",
    cupWinnersCup: "Cup Winners' Cup",
    intercontinentalCup: "Intercontinental Cup",
    lombardyCup: "Lombardy Cup",
    junioresChampionship: "Italian Juniores Championship",
    u19Championship: "Italian U-19 Championship",
    u17Championship: "Italian U-17 Championship",
    u15Championship: "Italian U-15 Championship",
    joinTheGame: "Join The Game",
  },
  es: {
    backToHome: "Volver al Inicio",
    joinEBP: "Únete a EBP",
    heroTitle: "Programa de Baloncesto de Élite",
    heroSubtitle: "Un Pilar de la Excelencia Europea",
    explorePrograms: "Explorar Programas",
    ourLegacy: "Nuestro Legado",
    whoWeAre: "Quiénes Somos",
    whoWeAreP1: "Pallacanestro Varese es un pilar del baloncesto europeo con 10 Campeonatos de Italia y 5 títulos de Euroliga. Nuestros logros históricos hablan por sí mismos, incluyendo 10 finales consecutivas de Euroliga.",
    whoWeAreP2: "Ubicados en el corazón de Varese, Italia, estamos rodeados de líderes de la industria e innovación. El baloncesto no es solo un deporte aquí; es una tradición profundamente arraigada en la cultura de nuestra ciudad.",
    whoWeAreQuote: '"Seguimos centrados en el futuro, comprometidos con nuestro legado y siendo un orgullo para Varese."',
    ourPalmares: "Nuestro Palmarés",
    campionatoItaliano: "CAMPEONATO ITALIANO",
    coppaItalia: "COPA DE ITALIA",
    supercoppa: "SUPERCOPA DE ITALIA",
    coppaCampioni: "EUROLIGA",
    coppaCoppe: "RECOPA DE EUROPA",
    coppaIntercontinentale: "COPA INTERCONTINENTAL",
    whereWeAre: "Dónde Estamos",
    gardenCity: "La Ciudad Jardín",
    strategicLocation: "Ubicación Estratégica",
    strategicLocationDesc: "40 min de Milán, 20 min de Suiza, 25 min del Aeropuerto de Malpensa.",
    eliteRegion: "Región de Élite",
    eliteRegionDesc: "Ubicada en la segunda región económica más rica de Europa.",
    locationP: "Caracterizada por una impresionante belleza natural, con lagos, colinas y parques que hacen de Varese un popular destino turístico.",
    findUs: "Encuéntranos en Varese",
    ourTeam: "Nuestro Equipo",
    ourLeadership: "Nuestro Liderazgo",
    expertise: "Experiencia desde la NBA hasta la Euroliga",
    infrastructure: "Infraestructura",
    eliteFacilities: "Instalaciones de Élite",
    facilitiesDesc: "Infraestructura profesional para entrenamiento de alto rendimiento",
    arena: "El Arena",
    arenaDesc: "Capacidad para 5.352 espectadores con hospitalidad premium",
    campus: "Campus",
    campusDesc: "Centro de entrenamiento profesional",
    campusNote: "Proyecto de renovación de 3M € a partir de este verano",
    eliteHousing: "Viviendas de Élite",
    eliteHousingDesc: "Alojamiento de lujo para estudiantes-atletas",
    elitePrograms: "Programas de Élite",
    eliteOpportunities: "Oportunidades de Élite",
    opportunitiesDesc: "Un ecosistema completo para la próxima generación de excelencia en el baloncesto",
    programsTraining: "Programas y Entrenamiento",
    programsDesc: "Descubre nuestros caminos especializados para jugadores y entrenadores dentro del ecosistema de Pallacanestro Varese.",
    moreInfo: "Más Información",
    requestMoreInfo: "Solicitar Más Información",
    downloadBrochure: "Descargar Folleto",
    backToDetails: "Volver a Detalles",
    applicationForm: "Formulario de Solicitud",
    formDescription: "Por favor, proporciona tus datos para solicitar el",
    firstName: "Nombre *",
    firstNamePlaceholder: "Tu Nombre",
    lastName: "Apellido *",
    lastNamePlaceholder: "Tu Apellido",
    organization: "Club / Academia / Federación *",
    organizationPlaceholder: "Organización Actual",
    email: "Correo Electrónico *",
    emailPlaceholder: "tu@email.com",
    messageInfo: "Mensaje y Solicitud de Información *",
    messageInfoPlaceholder: "Cuéntanos sobre tu interés...",
    requestInfo: "Solicitar Información",
    programSelect: "Seleccionar Programa *",
    selectOption: "Seleccionar una opción",
    buyNow: "Comprar Ahora",
    joinProgram: "Únete al Programa",
    joinDescription: "Envía tu solicitud para acceder a las oportunidades de élite de Varese",
    ctaTitle: "Transforma Tu Futuro en el Baloncesto",
    ctaSubtitle: "Las solicitudes para la temporada 2026/27 ya están abiertas.",
    applyNow: "Solicitar Información",
    footerSlogan: "Empoderando a la próxima generación de jugadores de baloncesto de élite a través de infraestructura profesional y experiencia legendaria.",
    footerLegacy: "Nuestro Legado",
    footerRegion: "La Región",
    footerLeadership: "Liderazgo",
    footerFacilities: "Instalaciones",
    footerPrograms: "Programas",
    contactUs: "Contáctanos",
    footerAddress: "Piazzale Antonio Gramsci,\nVarese, Italia",
    footerCOO: "Director de Operaciones",
    submissionSuccessTitle: "¡Solicitud Enviada!",
    submissionSuccessMessage: "Hemos preparado un correo electrónico con tus datos. Por favor, revisa tu cliente de correo (Outlook, Gmail, etc.) y envía el mensaje para completar la solicitud.",
    close: "Cerrar",
    // Palmares
    palmaresTitle: "Nuestro Palmarés",
    nationalCompetitions: "Competiciones Nacionales",
    internationalCompetitions: "Competiciones Internacionales",
    otherCompetitions: "Otras Competiciones",
    youthCompetitions: "Competiciones Juveniles",
    scudetto: "Campeonato de Italia",
    italianCup: "Copa de Italia",
    italianSupercup: "Supercopa de Italia",
    euroleague: "Copa de Europa / Euroliga",
    cupWinnersCup: "Recopa de Europa",
    intercontinentalCup: "Copa Intercontinental",
    lombardyCup: "Copa de Lombardía",
    junioresChampionship: "Campeonato de Italia Juniores",
    u19Championship: "Campeonato de Italia Sub-19",
    u17Championship: "Campeonato de Italia Sub-17",
    u15Championship: "Campeonato de Italia Sub-15",
    joinTheGame: "Join The Game",
  },
  fr: {
    backToHome: "Retour à l'Accueil",
    joinEBP: "Rejoindre l'EBP",
    heroTitle: "Programme de Basket d'Élite",
    heroSubtitle: "Un Pilier de l'Excellence Européenne",
    explorePrograms: "Explorer les Programmes",
    ourLegacy: "Notre Héritage",
    whoWeAre: "Qui Sommes-Nous",
    whoWeAreP1: "Pallacanestro Varese est un pilier du basket-ball européen avec 10 championnats italiens et 5 titres d'Euroligue. Nos réalisations historiques parlent d'elles-mêmes, y compris 10 finales consécutives d'Euroligue.",
    whoWeAreP2: "Situé au cœur de Varèse, en Italie, nous sommes entourés de leaders de l'industrie et d'innovation. Le basket-ball n'est pas seulement un sport ici ; c'est une tradition profondément ancrée dans la culture de notre ville.",
    whoWeAreQuote: '"Nous restons tournés vers l\'avenir, déterminés à enrichir notre héritage et à être une source de fierté pour Varèse."',
    ourPalmares: "Notre Palmarès",
    campionatoItaliano: "CHAMPIONNAT ITALIEN",
    coppaItalia: "COUPE D'ITALIE",
    supercoppa: "SUPERCOUPE D'ITALIE",
    coppaCampioni: "EUROLEAGUE",
    coppaCoppe: "COUPE DES COUPES",
    coppaIntercontinentale: "COUPE INTERCONTINENTALE",
    whereWeAre: "Où Nous Sommes",
    gardenCity: "La Cité-Jardin",
    strategicLocation: "Emplacement Stratégique",
    strategicLocationDesc: "40 min de Milan, 20 min de la Suisse, 25 min de l'aéroport de Malpensa.",
    eliteRegion: "Région d'Élite",
    eliteRegionDesc: "Située dans la deuxième région économique la plus riche d'Europe.",
    locationP: "Caractérisée par une beauté naturelle époustouflante, avec des lacs, des collines et des parcs qui font de Varèse une destination touristique populaire.",
    findUs: "Trouvez-nous à Varèse",
    ourTeam: "Notre Équipe",
    ourLeadership: "Notre Direction",
    expertise: "De la NBA à l'EuroLeague",
    infrastructure: "Infrastructure",
    eliteFacilities: "Installations d'Élite",
    facilitiesDesc: "Infrastructure professionnelle pour un entraînement de haute performance",
    arena: "L'Arène",
    arenaDesc: "Capacité de 5 352 places avec hospitalité premium",
    campus: "Campus",
    campusDesc: "Centre d'entraînement professionnel",
    campusNote: "Projet de rénovation de 3M € débutant cet été",
    eliteHousing: "Logement d'Élite",
    eliteHousingDesc: "Logement de luxe pour étudiants-athlètes",
    elitePrograms: "Programmes d'Élite",
    eliteOpportunities: "Opportunités d'Élite",
    opportunitiesDesc: "Un écosystème complet pour la prochaine génération d'excellence du basket-ball",
    programsTraining: "Programmes et Entraînement",
    programsDesc: "Découvrez nos parcours spécialisés pour joueurs et entraîneurs au sein de l'écosystème de Pallacanestro Varese.",
    moreInfo: "Plus d'Infos",
    requestMoreInfo: "Demander Plus d'Infos",
    downloadBrochure: "Télécharger la Brochure",
    backToDetails: "Retour aux Détails",
    applicationForm: "Formulaire de Candidature",
    formDescription: "Veuillez fournir vos coordonnées ci-dessous pour postuler au",
    firstName: "Prénom *",
    firstNamePlaceholder: "Votre Prénom",
    lastName: "Nom *",
    lastNamePlaceholder: "Votre Nom",
    organization: "Club / Académie / Fédération *",
    organizationPlaceholder: "Organisation Actuelle",
    email: "Adresse E-mail *",
    emailPlaceholder: "votre@email.com",
    messageInfo: "Message et Demande d'Infos *",
    messageInfoPlaceholder: "Parlez-nous de votre intérêt...",
    requestInfo: "Demander des Infos",
    programSelect: "Sélectionner un Programme *",
    selectOption: "Sélectionner une option",
    buyNow: "Acheter Maintenant",
    joinProgram: "Rejoindre le Programme",
    joinDescription: "Soumettez votre candidature pour accéder aux opportunités d'élite de Varèse",
    ctaTitle: "Transformez Votre Avenir dans le Basket",
    ctaSubtitle: "Les candidatures pour la saison 2026/27 sont maintenant ouvertes.",
    applyNow: "Demander des Infos",
    footerSlogan: "Donner les moyens à la prochaine génération de basketteurs d'élite grâce à des infrastructures professionnelles et une expertise légendaire.",
    footerLegacy: "Notre Héritage",
    footerRegion: "La Región",
    footerLeadership: "Direction",
    footerFacilities: "Installations",
    footerPrograms: "Programmes",
    contactUs: "Contactez-Nous",
    footerAddress: "Piazzale Antonio Gramsci,\nVarèse, Italie",
    footerCOO: "Directeur des Opérations",
    submissionSuccessTitle: "Demande Transmise !",
    submissionSuccessMessage: "Nous avons préparé un e-mail avec vos informations. Veuillez vérifier votre client de messagerie (Outlook, Gmail, etc.) et envoyer le message pour finaliser votre demande.",
    close: "Fermer",
    // Palmares
    palmaresTitle: "Notre Palmarès",
    nationalCompetitions: "Compétitions Nationales",
    internationalCompetitions: "Compétitions Internationales",
    otherCompetitions: "Autres Compétitions",
    youthCompetitions: "Compétitions de Jeunes",
    scudetto: "Championnat d'Italie",
    italianCup: "Coupe d'Italie",
    italianSupercup: "Supercoupe d'Italie",
    euroleague: "Coupe des Champions / Euroligue",
    cupWinnersCup: "Coupe des Vainqueurs de Coupe",
    intercontinentalCup: "Coupe Intercontinentale",
    lombardyCup: "Coupe de Lombardie",
    junioresChampionship: "Championnat d'Italie Juniores",
    u19Championship: "Championnat d'Italie U-19",
    u17Championship: "Championnat d'Italie U-17",
    u15Championship: "Championnat d'Italie U-15",
    joinTheGame: "Join The Game",
  }
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'programs'>('home');
  const [lang, setLang] = useState<Language>('it');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitted'>('idle');
  const [isPalmaresModalOpen, setIsPalmaresModalOpen] = useState(false);
  
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    program: '',
    message: ''
  });
  
  const t = (key: keyof typeof TRANSLATIONS['en']) => TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCloseModal = () => {
    setSelectedProgram(null);
    setIsJoinModalOpen(false);
    setIsApplying(false);
    setSubmissionStatus('idle');
    setIsPalmaresModalOpen(false);
    setFormState({ firstName: '', lastName: '', organization: '', email: '', program: '', message: '' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formState.firstName.trim() !== '' &&
      formState.lastName.trim() !== '' &&
      formState.organization.trim() !== '' &&
      formState.email.trim() !== '' &&
      formState.program !== '' &&
      formState.message.trim() !== ''
    );
  };

  const handleApplyNowInModal = () => {
    if (selectedProgram) {
      setFormState(prev => ({ ...prev, program: selectedProgram.title }));
    }
    setIsApplying(true);
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    // This function creates a 'mailto:' link.
    // When triggered, it opens the user's default email client
    // with the recipient, subject, and form data pre-filled.
    // This is the most secure method without a backend server, as browsers
    // prevent sites from sending emails silently for user protection.
    const subject = encodeURIComponent(`New EBP Application - ${formState.program}`);
    const body = encodeURIComponent(
      `Elite Basketball Program Application\n\n` +
      `Selected Program: ${formState.program}\n` +
      `Name: ${formState.firstName} ${formState.lastName}\n` +
      `Organization: ${formState.organization}\n` +
      `Email: ${formState.email}\n\n` +
      `Information Request:\n${formState.message}`
    );

    window.location.href = `mailto:f.bellotto@pallacanestrovarese.it?subject=${subject}&body=${body}`;
    setSubmissionStatus('submitted');
  };

  const navigateToHomeSection = (id: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const LangSwitcher = () => (
    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10">
      {[
        { code: 'it' as Language, label: 'IT' },
        { code: 'en' as Language, label: 'EN' },
        { code: 'es' as Language, label: 'ES' },
        { code: 'fr' as Language, label: 'FR' },
      ].map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`w-10 h-8 rounded-full text-xs font-bold uppercase transition-colors duration-300 flex items-center justify-center ${
            lang === l.code
              ? 'bg-red-varese text-white shadow-md shadow-red-600/30'
              : 'text-white/70 hover:bg-white/10'
          }`}
          title={l.code.toUpperCase()}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
  
  const SubmissionSuccessMessage = () => (
    <div className="flex flex-col items-center justify-center text-center h-full p-8 animate-in fade-in duration-500">
      <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-full mb-6">
        <CheckCircle2 size={48} />
      </div>
      <h3 className="font-oswald text-2xl uppercase text-white mb-3">{t('submissionSuccessTitle')}</h3>
      <p className="text-gray-400 text-sm mb-8 max-w-sm">
        {t('submissionSuccessMessage')}
      </p>
      <button
        onClick={handleCloseModal}
        className="bg-red-varese text-white py-3 px-8 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg"
      >
        {t('close')}
      </button>
    </div>
  );

  const ProgramsGrid = () => (
    <div className="flex flex-wrap justify-center gap-10">
      {PROGRAMS.map((prog) => (
        <div key={prog.id} className="card-glass rounded-2xl overflow-hidden flex flex-col group hover:border-red-varese transition-all duration-300 shadow-xl w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]">
          <div className="h-64 overflow-hidden relative">
            <img src={prog.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={prog.title} />
            <div className="absolute top-4 left-4 bg-red-varese text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded">
              {prog.timing}
            </div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <h3 className="font-oswald text-2xl font-bold uppercase mb-2 group-hover:text-red-varese transition-colors">{prog.title}</h3>
            <p className="text-red-varese text-[10px] font-bold uppercase tracking-widest mb-4">{prog.target}</p>
            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{prog.description}</p>
            <div className="space-y-3 mb-8">
              {prog.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-[11px] font-semibold text-gray-300 uppercase tracking-wider">
                  <CheckCircle2 size={16} className="text-red-varese flex-shrink-0" /> {h}
                </div>
              ))}
            </div>
            <button 
              onClick={() => { setSelectedProgram(prog); setIsApplying(false); }}
              className="w-full bg-white text-black hover:bg-red-varese hover:text-white py-4 font-bold uppercase tracking-widest transition-all text-sm rounded-sm mt-auto"
            >
              {t('moreInfo')}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col bg-[#0a0a0a] ${(selectedProgram || isJoinModalOpen || isPalmaresModalOpen) ? 'overflow-hidden' : ''}`}>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || view === 'programs' ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setView('home')}>
            <img src={CLUB_LOGO} alt="Varese Logo" className="h-10 w-auto" />
            <span className="font-oswald font-bold text-xl tracking-tighter uppercase hidden sm:block">
              Pallacanestro <span className="text-red-varese">Varese</span>
            </span>
          </div>
          <div className="flex items-center space-x-8">
            {view === 'programs' && (
              <button onClick={() => setView('home')} className="hidden md:block text-xs font-bold uppercase tracking-widest hover:text-red-varese transition-colors">
                {t('backToHome')}
              </button>
            )}
            <button 
              onClick={() => setIsJoinModalOpen(true)}
              className="bg-red-varese hover:bg-red-700 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase transition-all shadow-lg shadow-red-600/20 hidden md:block"
            >
              {t('joinEBP')}
            </button>
            <LangSwitcher />
          </div>
        </div>
      </nav>

      {view === 'home' ? (
        <>
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://i.imgur.com/jgvkdMN.jpeg" className="w-full h-full object-cover opacity-40" alt="Hero background" />
              <div className="absolute inset-0 gradient-overlay"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <img src={CLUB_LOGO} alt="Logo" className="mx-auto h-32 md:h-48 mb-8 animate-pulse" />
              <h1 className="font-oswald text-5xl md:text-8xl font-bold uppercase leading-none tracking-tighter mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto uppercase tracking-widest">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => setView('programs')} className="w-full sm:w-auto bg-red-varese hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center group shadow-xl shadow-red-600/20">
                  {t('explorePrograms')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button onClick={() => navigateToHomeSection('who-we-are')} className="w-full sm:w-auto border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold uppercase tracking-widest transition-all">
                  {t('ourLegacy')}
                </button>
              </div>
            </div>
          </section>

          <section id="who-we-are" className="py-24 bg-black scroll-mt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-oswald text-4xl md:text-7xl font-bold uppercase mb-12 inline-block relative">
                {t('whoWeAre')}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-red-varese"></div>
              </h2>
              <div className="space-y-6 text-gray-400 text-xl leading-relaxed mb-16 max-w-4xl mx-auto">
                <p>{t('whoWeAreP1')}</p>
                <p>{t('whoWeAreP2')}</p>
                <p className="text-white font-semibold italic text-2xl pt-4">{t('whoWeAreQuote')}</p>
                <div className="pt-8">
                  <button onClick={() => setIsPalmaresModalOpen(true)} className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold uppercase tracking-widest transition-all">
                    {t('ourPalmares')}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto mt-20">
                {ACHIEVEMENTS.map((item, idx) => {
                  let titleKey: keyof typeof TRANSLATIONS['en'];
                  if(item.title.includes("CAMPIONATO")) titleKey = 'campionatoItaliano';
                  else if(item.title.includes("COPPA ITALIA")) titleKey = 'coppaItalia';
                  else if(item.title.includes("SUPERCOPPA")) titleKey = 'supercoppa';
                  else if(item.title.includes("CAMPIONI")) titleKey = 'coppaCampioni';
                  else if(item.title.includes("COPPE")) titleKey = 'coppaCoppe';
                  else titleKey = 'coppaIntercontinentale';
                  return (
                  <div key={idx} className="relative flex flex-col items-center group">
                    <div className="bg-black w-full aspect-[2/3] relative flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-2" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)' }}>
                      <div className="bg-[#E30613] absolute inset-[2px] flex flex-col items-center justify-center p-4 text-center" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)' }}>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col items-center justify-between h-full w-full py-4">
                          <div className="flex flex-col items-center">
                            {item.title === "CAMPIONATO ITALIANO" && (
                              <div className="flex h-1.5 w-10 mb-2 rounded-sm overflow-hidden shadow-sm">
                                <div className="bg-[#009246] flex-1"></div>
                                <div className="bg-[#FFFFFF] flex-1"></div>
                                <div className="bg-[#ce2b37] flex-1"></div>
                              </div>
                            )}
                            <div className="text-6xl md:text-7xl font-oswald font-black text-white drop-shadow-md mb-1">{item.count}</div>
                          </div>
                          <h3 className="font-oswald text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-white/90">{t(titleKey)}</h3>
                          <div className="mt-auto h-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          </section>

          <section id="where-we-are" className="py-24 bg-zinc-900 relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="order-2 lg:order-1 flex flex-col gap-6">
                   <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-red-varese to-transparent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                     <img src="https://i.imgur.com/u1qdF6w.jpeg" className="relative rounded-xl shadow-2xl w-full h-auto object-cover aspect-video" alt="The Garden City" />
                   </div>
                   <a href="https://maps.app.goo.gl/WUqdjaf9duktWCNU8" target="_blank" rel="noopener noreferrer" className="relative group block overflow-hidden rounded-xl border border-white/10 shadow-xl transition-all hover:border-red-varese/50">
                     <div className="absolute inset-0 bg-red-varese/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                     <div className="h-[250px] w-full">
                        <iframe title="Varese Location" width="100%" height="100%" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Piazzale%20Antonio%20Gramsci,%20Varese+(Itely-Aitena-Arena)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className="pointer-events-none"></iframe>
                     </div>
                     <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                        <MapPin size={14} className="text-red-varese" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{t('findUs')}</span>
                     </div>
                   </a>
                 </div>
                 <div className="order-1 lg:order-2">
                   <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('whereWeAre')}</p>
                   <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-8">{t('gardenCity')}</h2>
                  <div className="space-y-6 text-gray-300">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-red-varese mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-white uppercase tracking-wider mb-1 text-sm">{t('strategicLocation')}</p>
                        <p className="text-gray-400">{t('strategicLocationDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Calendar className="text-red-varese mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-white uppercase tracking-wider mb-1 text-sm">{t('eliteRegion')}</p>
                        <p className="text-gray-400">{t('eliteRegionDesc')}</p>
                      </div>
                    </div>
                    <p className="pl-10 text-gray-400 italic text-sm leading-relaxed border-l border-red-varese/30">{t('locationP')}</p>
                  </div>
                 </div>
              </div>
            </div>
          </section>

          <section id="leadership" className="py-24 bg-black scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
              <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('ourTeam')}</p>
              <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('ourLeadership')}</h2>
              <p className="text-gray-400 tracking-widest uppercase text-sm">{t('expertise')}</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                {STAFF.map((member) => (
                  <div key={member.name} className="group cursor-pointer">
                    <div className="relative overflow-hidden aspect-[3/4] mb-8 rounded-lg border border-white/5 shadow-2xl">
                      <img src={member.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={member.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-red-varese font-bold uppercase text-[12px] tracking-[0.2em] mb-1">{member.role}</p>
                        <h3 className="font-oswald text-3xl font-bold uppercase">{member.name}</h3>
                      </div>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-base md:text-lg tracking-wide">
                      {member.bio.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-varese rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-tight">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="facilities" className="py-24 bg-zinc-900 overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('infrastructure')}</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('eliteFacilities')}</h2>
                <p className="text-gray-400">{t('facilitiesDesc')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative h-[450px] group overflow-hidden rounded-xl shadow-2xl">
                  <img src="https://i.imgur.com/PVVnsrw.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Arena" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                    <h4 className="font-oswald text-3xl font-bold uppercase">{t('arena')}</h4>
                    <p className="text-sm text-gray-300">{t('arenaDesc')}</p>
                  </div>
                </div>
                <div className="relative h-[450px] group overflow-hidden rounded-xl shadow-2xl">
                  <img src="https://i.imgur.com/7oppVoG.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Campus" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                    <h4 className="font-oswald text-3xl font-bold uppercase">{t('campus')}</h4>
                    <p className="text-sm text-gray-300">{t('campusDesc')}</p>
                    <p className="text-[10px] text-red-varese font-bold uppercase tracking-widest mt-2">{t('campusNote')}</p>
                  </div>
                </div>
                <div className="relative h-[450px] group overflow-hidden rounded-xl shadow-2xl">
                  <img src="https://i.imgur.com/LfpEJsZ.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Elite Housing" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                    <h4 className="font-oswald text-3xl font-bold uppercase">{t('eliteHousing')}</h4>
                    <p className="text-sm text-gray-300">{t('eliteHousingDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="opportunities" className="py-24 bg-black scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('elitePrograms')}</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('eliteOpportunities')}</h2>
                <p className="text-gray-400 tracking-widest uppercase text-sm">{t('opportunitiesDesc')}</p>
              </div>
              <ProgramsGrid />
            </div>
          </section>
        </>
      ) : (
        <section className="pt-32 pb-24 min-h-screen bg-black animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('programsTraining')}</p>
              <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4">{t('eliteOpportunities')}</h1>
              <p className="text-gray-400 max-w-2xl text-lg uppercase tracking-wider font-light">{t('programsDesc')}</p>
            </div>
            <ProgramsGrid />
          </div>
        </section>
      )}

      {selectedProgram && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-300" onClick={handleCloseModal}></div>
          <div className="relative bg-zinc-900 w-full max-w-7xl max-h-screen md:max-h-[95vh] overflow-y-auto rounded-none md:rounded-3xl shadow-[0_0_100px_rgba(227,6,19,0.3)] border-0 md:border md:border-white/10 flex flex-col md:flex-row animate-in zoom-in-95 duration-300 ease-out">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-black/50 hover:bg-red-varese text-white p-2 md:p-3 rounded-full transition-colors backdrop-blur-md"><X size={24} /></button>
            <div className="md:w-[40%] relative h-48 md:h-auto overflow-hidden">
              <img src={selectedProgram.image} className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100" alt={selectedProgram.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent md:bg-gradient-to-r"></div>
              <div className="absolute bottom-4 left-4 md:hidden"><span className="bg-red-varese text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded">{selectedProgram.timing}</span></div>
            </div>
            <div className="md:w-[60%] p-6 md:p-12 flex flex-col overflow-y-visible">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-red-varese font-bold uppercase tracking-[0.2em] text-[10px] mb-1">Elite Program Detail</p>
                  <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tighter">{selectedProgram.title}</h2>
                </div>
                {!isApplying && (<span className="hidden md:inline-block bg-red-varese text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">{selectedProgram.timing}</span>)}
              </div>
              {!isApplying ? (
                <>
                  <div className="mb-6 p-3 border-l-2 border-red-varese bg-white/5 rounded-r-lg"><p className="text-white font-bold uppercase tracking-[0.05em] text-xs">Target: {selectedProgram.target}</p></div>
                  <div className="text-gray-300 text-sm md:text-base leading-relaxed mb-6"><p className="mb-4">{selectedProgram.description}</p></div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {selectedProgram.highlights.map((h, i) => (<div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded border border-white/10"><CheckCircle2 size={14} className="text-red-varese flex-shrink-0" /><span className="text-[9px] font-bold uppercase tracking-wider text-white truncate">{h}</span></div>))}
                  </div>
                  <div className="flex flex-col gap-4 mt-auto">
                    <button className="w-full bg-red-varese text-white py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg shadow-xl shadow-red-600/30">{t('buyNow')}</button>
                    <div className="flex gap-4">
                      <button onClick={handleApplyNowInModal} className="flex-1 border border-white/20 text-white py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-xs rounded-lg">{t('requestMoreInfo')}</button>
                      <a href="https://drive.google.com/file/d/1PQ7iSTdj0XC4TCMzENjinLr8Udv38-oW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex-1 border border-white/20 text-white py-3 font-bold uppercase tracking-wider hover:bg-white/10 transition-all text-xs rounded-lg text-center flex items-center justify-center">{t('downloadBrochure')}</a>
                    </div>
                  </div>
                </>
              ) : (
                submissionStatus === 'submitted' ? (
                  <SubmissionSuccessMessage />
                ) : (
                <div className="flex-grow flex flex-col h-full animate-in slide-in-from-right-8 duration-500">
                  <div className="flex items-center gap-2 mb-8 cursor-pointer group w-fit" onClick={() => setIsApplying(false)}><ArrowRight className="rotate-180 text-red-varese group-hover:-translate-x-1 transition-transform" size={16} /><span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white">{t('backToDetails')}</span></div>
                  <div className="mb-6"><h3 className="text-white font-oswald text-xl md:text-2xl uppercase mb-2">{t('applicationForm')}</h3><p className="text-gray-400 text-xs">{t('formDescription')} <span className="text-red-varese font-bold">{selectedProgram.title}</span>.</p></div>
                  <form onSubmit={handleJoinSubmit} className="space-y-4 md:space-y-6 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('firstName')}</label><input required type="text" name="firstName" value={formState.firstName} onChange={handleFormChange} placeholder={t('firstNamePlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                      <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('lastName')}</label><input required type="text" name="lastName" value={formState.lastName} onChange={handleFormChange} placeholder={t('lastNamePlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                    </div>
                    <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('organization')}</label><input required type="text" name="organization" value={formState.organization} onChange={handleFormChange} placeholder={t('organizationPlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                    <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('email')}</label><input required type="email" name="email" value={formState.email} onChange={handleFormChange} placeholder={t('emailPlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                    <div className="space-y-1.5 flex-grow"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('messageInfo')}</label><textarea required name="message" value={formState.message} onChange={handleFormChange} rows={4} placeholder={t('messageInfoPlaceholder')} className="w-full h-full min-h-[100px] bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors resize-none" /></div>
                    <div className="pt-4 mt-auto"><button type="submit" disabled={!isFormValid()} className={`w-full py-4 font-bold uppercase tracking-[0.2em] rounded-lg transition-all flex items-center justify-center gap-3 ${isFormValid() ? 'bg-red-varese hover:bg-red-700 text-white shadow-xl shadow-red-600/20' : 'bg-white/10 text-gray-500 cursor-not-allowed'}`}>{t('requestInfo')} <Send size={18} /></button></div>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isJoinModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={handleCloseModal}></div>
          <div className="relative bg-zinc-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-[0_0_100px_rgba(227,6,19,0.3)] border border-white/10 p-8 md:p-12 animate-in zoom-in-95 duration-300">
            <button onClick={handleCloseModal} className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-red-varese text-white p-2 rounded-full transition-colors"><X size={20} /></button>
            <div className="text-center mb-10"><img src={CLUB_LOGO} alt="Logo" className="h-12 mx-auto mb-4" /><h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2">{t('joinProgram')}</h2><p className="text-gray-400 text-xs uppercase tracking-widest">{t('joinDescription')}</p></div>
            {submissionStatus === 'submitted' ? (
              <SubmissionSuccessMessage />
            ) : (
              <form onSubmit={handleJoinSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('firstName')}</label><input required type="text" name="firstName" value={formState.firstName} onChange={handleFormChange} placeholder={t('firstNamePlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                  <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('lastName')}</label><input required type="text" name="lastName" value={formState.lastName} onChange={handleFormChange} placeholder={t('lastNamePlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                </div>
                <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('email')}</label><input required type="email" name="email" value={formState.email} onChange={handleFormChange} placeholder={t('emailPlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('organization')}</label><input required type="text" name="organization" value={formState.organization} onChange={handleFormChange} placeholder={t('organizationPlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" /></div>
                <div className="space-y-1.5 relative"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('programSelect')}</label><div className="relative"><select required name="program" value={formState.program} onChange={handleFormChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-red-varese transition-colors cursor-pointer"><option value="" disabled className="bg-zinc-900">{t('selectOption')}</option>{PROGRAMS.map(p => <option key={p.id} value={p.title} className="bg-zinc-900">{p.title}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} /></div></div>
                <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('messageInfo')}</label><textarea required name="message" value={formState.message} onChange={handleFormChange} rows={4} placeholder={t('messageInfoPlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors resize-none" /></div>
                <button type="submit" disabled={!isFormValid()} className={`w-full py-4 font-bold uppercase tracking-[0.2em] rounded-lg transition-all flex items-center justify-center gap-3 ${isFormValid() ? 'bg-red-varese hover:bg-red-700 text-white shadow-xl shadow-red-600/20' : 'bg-white/10 text-gray-500 cursor-not-allowed'}`}>{t('requestMoreInfo')} <Send size={18} /></button>
              </form>
            )}
          </div>
        </div>
      )}
      
      {isPalmaresModalOpen && (
        <div className="fixed inset-0 z-[100] bg-zinc-900 overflow-y-auto animate-in fade-in duration-300">
          <div className="relative min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center p-8 md:p-12">
            <button onClick={handleCloseModal} className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-red-varese text-white p-3 rounded-full transition-colors"><X size={24} /></button>
            
            <div className="text-center mb-10">
              <img src={CLUB_LOGO} alt="Logo" className="h-16 mx-auto mb-6" />
              <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-tighter">{t('palmaresTitle')}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-white w-full max-w-5xl">
              <div>
                <h3 className="font-oswald text-2xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-2 mb-4">{t('nationalCompetitions')}</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>10</strong> &times; {t('scudetto')}</div></li>
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>4</strong> &times; {t('italianCup')}</div></li>
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>1</strong> &times; {t('italianSupercup')}</div></li>
                </ul>
              </div>
              <div>
                <h3 className="font-oswald text-2xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-2 mb-4">{t('internationalCompetitions')}</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>5</strong> &times; {t('euroleague')}</div></li>
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>2</strong> &times; {t('cupWinnersCup')}</div></li>
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>3</strong> &times; {t('intercontinentalCup')}</div></li>
                </ul>
              </div>
              <div>
                <h3 className="font-oswald text-2xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-2 mb-4">{t('youthCompetitions')}</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>3</strong> &times; {t('junioresChampionship')}</div></li>
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>1</strong> &times; {t('u19Championship')}</div></li>
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>2</strong> &times; {t('u17Championship')}</div></li>
                   <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>1</strong> &times; {t('u15Championship')}</div></li>
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>1</strong> &times; {t('joinTheGame')}</div></li>
                </ul>
              </div>
               <div>
                <h3 className="font-oswald text-2xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-2 mb-4">{t('otherCompetitions')}</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-4"><Trophy size={20} className="text-red-varese" /> <div><strong>1</strong> &times; {t('lombardyCup')}</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-32 bg-red-varese relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none"><h2 className="text-[30rem] font-oswald font-black uppercase tracking-tighter">VARESE</h2></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-oswald text-5xl md:text-8xl font-bold uppercase mb-8 leading-[0.9]" dangerouslySetInnerHTML={{ __html: t('ctaTitle').replace('Basketball Future', '<br/>Basketball Future') }}></h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-white/90 uppercase tracking-widest">{t('ctaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-varese px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all rounded-sm text-lg shadow-2xl">{t('buyNow')}</button>
            <button onClick={() => setIsJoinModalOpen(true)} className="border border-white text-white px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all rounded-sm text-lg">{t('applyNow')}</button>
          </div>
        </div>
      </section>

      <footer className="bg-black py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <img src={CLUB_LOGO} alt="Varese" className="h-20 mb-8" /><h4 className="font-oswald text-3xl font-bold uppercase mb-4 tracking-tighter">Pallacanestro Varese <span className="text-red-varese">EBP</span></h4>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">{t('footerSlogan')}</p>
              <div className="flex gap-6 items-center"><a href="https://www.linkedin.com/company/pallacanestro-varese-spa/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Linkedin size={24} /></a><a href="https://www.instagram.com/pallvarese?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Instagram size={24} /></a><a href="https://www.facebook.com/pallvarese/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Facebook size={24} /></a><a href="https://x.com/PallVarese" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><X size={24} /></a><a href="https://www.tiktok.com/@pallvarese?_r=1&_t=ZN-93rFmsKhFL8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.5a6.33 6.33 0 0 0-1.01-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.27A8.25 8.25 0 0 0 22 11.45V8.04a4.8 4.8 0 0 1-2.41-1.35z"/></svg></a></div>
            </div>
            <div>
              <ul className="space-y-4 text-gray-500 text-sm md:mt-16">
                <li><button onClick={() => navigateToHomeSection('who-we-are')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerLegacy')}</button></li>
                <li><button onClick={() => navigateToHomeSection('where-we-are')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerRegion')}</button></li>
                <li><button onClick={() => navigateToHomeSection('leadership')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerLeadership')}</button></li>
                <li><button onClick={() => navigateToHomeSection('facilities')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerFacilities')}</button></li>
                <li><button onClick={() => setView('programs')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerPrograms')}</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold uppercase mb-8 tracking-[0.2em] text-xs text-white">{t('contactUs')}</h5>
              <ul className="space-y-6 text-gray-500 text-sm">
                <li className="flex items-start gap-3"><MapPin size={20} className="text-red-varese mt-0.5" /><a href="https://maps.app.goo.gl/WUqdjaf9duktWCNU8" target="_blank" rel="noopener noreferrer" className="hover:text-red-varese transition-colors" dangerouslySetInnerHTML={{ __html: t('footerAddress').replace('\n', '<br/>') }}></a></li>
                <li><p>Email: <a href="mailto:f.bellotto@pallacanestrovarese.it" className="hover:text-red-varese transition-colors">f.bellotto@pallacanestrovarese.it</a></p><p className="text-[10px] uppercase tracking-widest mt-1 text-gray-400">{t('footerCOO')}</p></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.1em]"><p>&copy; {new Date().getFullYear()} Pallacanestro Varese. Developed for Elite Basketball Program.</p></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
