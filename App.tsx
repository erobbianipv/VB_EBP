
// Fix: Corrected import for React and its hooks.
import React from 'react';
import { useState, useEffect } from 'react';
import { CLUB_LOGO, ACHIEVEMENTS, STAFF, PROGRAMS, FACILITIES } from './constants';
import { translateProgram, translateStaff } from './translations';
import { Program, Facility } from './types';
import { Trophy, MapPin, Users, Home, GraduationCap, Calendar, ArrowRight, Menu, X, Instagram, Facebook, CheckCircle2, Send, Mail, Linkedin, Star, ChevronDown, ZoomIn, ChevronLeft, ChevronRight, ChevronUp, XCircle, Target, Activity, Brain, BarChart, HeartPulse, Dumbbell, ExternalLink, Utensils, Plane, Landmark, Megaphone, Stethoscope, LineChart, Play } from 'lucide-react';

type Language = 'it' | 'en' | 'es' | 'fr';
type View = 'home' | 'programs' | 'palmares' | 'arena' | 'campus' | 'housing' | 'detailedPrograms' | 'programDetail';


const TRANSLATIONS = {
  it: {
    // Nav & General
    back: "Indietro",
    backToHome: "Torna alla Home",
    joinEBP: "Richiedi Info",
    exploreInDetail: "Esplora i Programmi in Dettaglio",
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
    arenaGalleryDesc: "La nostra arena offre la location perfetta per amichevoli e tornei estivi. Con una capacità di 5.352 posti, l'arena offre un'atmosfera dinamica sia per i giocatori che per gli spettatori. I nostri servizi completi includono spazi di ospitalità premium, punti ristoro, strutture dedicate ai giocatori e supporto per media ed eventi.",
    campus: "Campus",
    campusDesc: "Centro di allenamento professionale",
    campusNote: "Progetto di ristrutturazione da 3M € a partire da quest'estate",
    campusGalleryDesc: "Il nostro centro di allenamento, noto come \"CAMPUS\", funge da centro di allenamento ufficiale sia per le giovanili che per la squadra di Serie A dopo la sua ristrutturazione la scorsa estate. Attualmente la struttura dispone di 2 campi al coperto, 3 campi all'aperto, 7 spogliatoi, uffici, un bar, un ristorante e attività commerciali correlate.",
    eliteHousing: "Alloggi d'Elite",
    eliteHousingDesc: "Alloggi di lusso per studenti-atleti",
    housingGalleryDesc: "Il dormitorio di nuova costruzione dispone di 14 camere ben arredate (sia singole che doppie), una spaziosa sala da pranzo in grado di ospitare 18 persone, un confortevole soggiorno, una lavanderia dedicata e due splendidi giardini privati. L'alloggio si trova a soli 5 minuti a piedi dal centro di allenamento e dalle principali scuole.",
    'campus2.0': "Campus 2.0",
    'campus2_0_desc': "Il nostro campus sportivo sta subendo una trasformazione da 3 milioni di euro per integrare spazi amministrativi e di coworking ad alta tecnologia. Questo investimento fornirà uffici moderni ed ergonomici progettati per ottimizzare la gestione sportiva e favorire la collaborazione professionale. Unendo l'eccellenza atletica con spazi di lavoro di alta qualità, il campus rinnovato diventerà un centro di primo livello per squadre e staff.",
    // Opportunities
    elitePrograms: "Programmi d'Elite",
    ourTopPrograms: "I Nostri Migliori Programmi",
    eliteOpportunities: "Altre Opportunità d'Elite",
    opportunitiesDesc: "Un ecosistema completo per la prossima generazione di eccellenza nel basket",
    ourProgramsInDetail: "I Nostri Programmi in Dettaglio",
    ourProgramsInDetailDesc: "Un'analisi approfondita della struttura, degli obiettivi e dei vantaggi di ogni programma d'elite che offriamo.",
    detailedProgram: "Programma Dettagliato",
    // Programs View
    programsTraining: "Programmi & Allenamento",
    programsDesc: "Scopri i nostri percorsi specializzati per giocatori e allenatori all'interno dell'ecosistema Pallacanestro Varese.",
    // Modals
    moreInfo: "Più Informazioni",
    requestMoreInfo: "Richiedi Maggiori Informazioni",
    downloadBrochure: "Scarica la Brochure",
    backToDetails: "Torna ai Dettagli",
    findOutMore: "Scopri di più",
    sending: "Invio in corso...",
    submissionErrorTitle: "Errore di Invio",
    submissionErrorMessage: "Si è verificato un errore durante l'invio della richiesta. Riprova più tardi.",
    tryAgain: "Riprova",
    informationForm: "Modulo di Richiesta Informazioni",
    informationFormDescription: "Compila il modulo sottostante per richiedere informazioni per il",
    firstName: "Nome *",
    firstNamePlaceholder: "Il tuo nome",
    lastName: "Cognome *",
    lastNamePlaceholder: "Il tuo cognome",
    organization: "Club / Academy / Federazione *",
    organizationPlaceholder: "Organizzazione attuale",
    email: "Indrezzo Email *",
    emailPlaceholder: "tua@email.com",
    messageInfo: "Messaggio e Richiesta Informazioni *",
    messageInfoPlaceholder: "Raccontaci del tuo interesse...",
    requestInfo: "Richiedi Info",
    topicSelect: "Argomento *",
    selectOption: "Seleziona un'opzione",
    generalInformation: "Informazioni Generali",
    buyNow: "Acquista Ora",
    successStory: "Storia di Successo",
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
    footerDevelopedBy: "Sviluppato per Elite Basketball Program.",
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
    // FAQ
    faqTitle: "Domande Frequenti",
    faq1Question: "Cos'è l'Elite Basketball Program?",
    faq1Answer: "L'Elite Basketball Program (EBP) è un ecosistema completo progettato dalla Pallacanestro Varese per formare la prossima generazione di talenti del basket, offrendo allenamenti di alto livello, infrastrutture professionali e percorsi accademici.",
    faq2Question: "Dove si trova il Campus?",
    faq2Answer: "Il Campus si trova in Via Pirandello a Varese, a 10 minuti a piedi dalla Foresteria e a soli 5 minuti dall'Itelyum Arena, casa della Pallacanestro Varese. Tutte le nostre strutture sono perfettamente interconnesse tra loro.",
    faq3Question: "Come posso iscrivermi a un programma?",
    faq3Answer: "Puoi iscriverti a qualsiasi nostro programma cliccando su 'Acquista ora' in questo sito o visitando il seguente link: https://store.pallacanestrovarese.it/collections/elite-programs",
    faq4Question: "Come posso raggiungere Varese?",
    faq4Answer: "Il Campus si trova in Via Pirandello a Varese, a 10 minuti a piedi dalla Foresteria e a soli 5 minuti dall'Itelyum Arena, casa della Pallacanestro Varese. Raggiungerci è estremamente comodo poiché tutte le nostre strutture sono perfettamente interconnesse e ben servite dai mezzi pubblici. Se arrivi in aereo, Milano Malpensa (MXP) è l'hub più vicino, situato a soli 30 minuti e collegato direttamente a Varese tramite la linea ferroviaria S50. Per chi viaggia in treno da Milano, frequenti servizi diretti partono dalle stazioni di Milano Centrale, Porta Garibaldi e Cadorna, con tempi di percorrenza medi di 50-60 minuti. Che tu arrivi dall'aeroporto o dal centro città, l'ultimo tratto verso il Campus è rapido e semplice.",
    faq5Question: "Come posso richiedere maggiori informazioni?",
    faq5Answer: "Puoi richiedere informazioni compilando il modulo presente in ogni sezione del sito cliccando su 'Richiedi Info' o contattandoci direttamente via email all'indirizzo f.bellotto@pallacanestrovarese.it.",
    // Summer Camp
    twoDifferentOptions: "Due diverse opzioni",
    residentialCamp: "Camp Residenziale",
    dayCamp: "Day Camp",
    included: "Servizi Inclusi:",
    privateSingleRoom: "Camera singola privata",
    sharedCommonSpaces: "Spazi comuni condivisi",
    meals3: "Pensione completa (3 pasti al giorno)",
    sportsNutrition: "Menu basati sulla nutrizione sportiva",
    individualizedTraining: "Allenamento individuale 1-on-1",
    teamPractice: "Allenamenti di squadra",
    strengthTraining: "Allenamento per la forza e la performance (S&C)",
    personalAnalytics: "Analisi dei dati della performance individuale",
    eliteCoaching: "Staff tecnico d'élite",
    officialGear: "Kit ufficiale del camp (abbigliamento e attrezzatura)",
    lunch: "Pranzo",
    applyNowBtn: "Iscriviti ora",
    depositNotice: "Iscrivendoti ora è richiesto un deposito di €290 per tutti i tipi di camp.<br className=\"hidden md:block\" /> I dettagli sul saldo finale seguiranno successivamente.",
    howToSubscribe: "Come iscriversi",
    depositDesc: "Per registrarsi al Pallacanestro Varese Elite Summer Camp, è richiesto un deposito anticipato di €290 sia per il Camp Residenziale che per il Day Camp.",
    followSteps: "Segui questi passaggi per completare la tua registrazione:",
    visitStore: "Visita il nostro Store:",
    clickHere: "Clicca qui",
    accessStore: "per accedere allo store online ufficiale.",
    submitDetails: "Invia i Dettagli:",
    provideInfo: "Fornisci le informazioni richieste e completa il pagamento del deposito.",
    nextSteps: "Prossimi Passaggi:",
    onceDeposit: "Una volta elaborato il deposito, il nostro team ti contatterà per finalizzare il pagamento del saldo rimanente e per richiedere ulteriore documentazione.",
    waitingForYou: "L'ELITE SUMMER CAMP DI PALLACANESTRO VARESE TI ASPETTA!",
    summerProgOffer1: "- Camere ben arredate\n- Ampia sala da pranzo\n- Area relax\n- Spazi verdi privati",
    summerProgOffer2: "- Servizio di catering personalizzato\n- Pasti curati con focus sulla nutrizione sportiva",
    summerProgOffer3: "- Campo da basket\n- Aree di allenamento d'élite e fisioterapia\n- Sala pesi e recupero\n- Spogliatoio",
    summerProgOffer4: "- Trasferimento da e per l'aeroporto",
    touristOptions: "Opzioni Turistiche",
    trainingAtArena: "Allenamento all'Arena",
    extraTrainings: "Allenamenti Extra",
    eliteTrainingStaff: "Elite Training Staff",
    physioterapists: "Fisioterapisti",
    consulting: "Consulenza",
    keyHighlights: "Punti Salienti",
    target: "Target",
    timing: "Periodo",
    where: "Dove",
    subscriptionDeadline: "Scadenza Iscrizione",
    pricing: "Prezzi",
    limitedSpots: "Posti limitati disponibili",
    overview: "Panoramica",
    tbdTogether: "Da definire insieme",
    campusVarese: "Campus, Varese",
    foresteriaCampus: "Foresteria & Campus",
    // Program Tables
    standardProgram: "Programma Standard",
    premiumProgram: "Programma Premium",
    publicSchool: "Scuola pubblica",
    privateSchool: "Scuola internazionale privata",
    fullTimeTraining: "Allenamento a tempo pieno",
    assignedToGroups: "Gli atleti saranno assegnati a gruppi del loro livello",
    fullBoard: "Pensione completa",
    privateRoom: "Camera privata nel nostro alloggio d'élite",
    elitePlayerPackage: "Pacchetto Giocatore d'Élite",
    analytics: "Analisi",
    advancedStats: "Statistiche avanzate e approfondimenti",
    videoAnalysis: "Analisi video",
    extraTraining: "Allenamento extra",
    time: "Orario",
    activity: "Attività",
    wakeUpBreakfast: "Sveglia e Colazione",
    morningPractice: "Allenamento Mattutino",
    strengthCond: "Forza e Condizionamento",
    lunchRest: "Pranzo e Riposo",
    afternoonPractice: "Allenamento Pomeridiano",
    freeTimeRecovery: "Tempo Libero / Recupero",
    dinner: "Cena",
    lightsOut: "Spegnimento Luci",
    arrivalCheckIn: "Arrivo e Check-in",
    pickUp: "Ritiro",
    openInGoogleMaps: "Apri in Google Maps",
    grassrootsExcellence: "Eccellenza Grassroots",
    grassrootsExcellenceDesc: "Crediamo nel basket come potente strumento per la comunità. Il nostro programma promuove uno spirito attivo e positivo, aiutando i giovani atleti a sviluppare abilità sociali e uno stile di vita sano.",
    elitePlayerDevelopment: "Sviluppo Giocatori d'Élite",
    elitePlayerDevelopmentDesc: "Per chi sogna le grandi leghe, offriamo il percorso definitivo. Attraverso coaching esperto, programmi di allenamento professionali e accesso a strutture di alta qualità, coltiviamo le stelle del basket di domani.",
    twoPillarsOneVision: "Due Pilastri • Una Visione",
    eliteProfessionalIntegrationDesc: "Questo è più di un semplice corso; è un'immersione nelle operazioni quotidiane di una squadra di basket di Serie A. Come stagista, potrai:",
    shadowThePros: "Segui i Professionisti",
    shadowTheProsDesc: "Ottieni approfondimenti inestimabili osservando e imparando dai nostri professionisti del coaching durante allenamenti e partite.",
    activeCourtParticipation: "Partecipazione Attiva in Campo",
    activeCourtParticipationDesc: "Assumi un ruolo pratico gestendo esercizi con i giocatori di Serie A e assistendo agli allenamenti professionali.",
    strategicDevelopment: "Sviluppo Strategico",
    strategicDevelopmentDesc: "Partecipa alle riunioni degli allenatori per comprendere i processi decisionali tattici e strategici ai massimi livelli.",
    youthDevelopment: "Sviluppo Giovanile",
    youthDevelopmentDesc: "Contribuisci al futuro dello sport assistendo lo staff tecnico delle nostre squadre giovanili.",
    theNextGeneration: "The Next Generation",
    theNextGenerationDesc: "Questo percorso è progettato per giovani atleti e famiglie che cercano un'introduzione premium al basket. Il nostro obiettivo è la \"Next Generation\" di giocatori che vogliono costruire una solida base tecnica e motoria. Ci rivolgiamo ai genitori che danno priorità agli standard di allenamento professionali e a un ambiente sportivo sano e di alto valore dove i bambini possono innamorarsi del gioco imparando il \"Varese Way\" dal nostro staff certificato.",
    highPotentialProspects: "High-Potential Prospects",
    highPotentialProspectsDesc: "Questo percorso si rivolge a prospetti ad alto potenziale che stanno già gareggiando ad alto livello e mirano a una carriera professionale. Il nostro pubblico qui include atleti, agenzie e federazioni alla ricerca della \"Pro Experience\" definitiva. Questi giocatori cercano l'audit tecnico completo: dal tutoraggio dello staff di Serie A e sessioni esclusive con Luis Scola fino all'analisi dei dati avanzata e alle strategie di gestione della carriera. Questo è per l'atleta pronto a colmare il divario tra l'eccellenza giovanile e i circuiti professionali senior.",
    ourKnowHow: "Il nostro know-how",
    eliteTrainingMethods: "Metodi di allenamento d'élite",
    collaborationClubs: "Collaborazione con club, federazioni nazionali o accademie locali",
    ourBrand: "Il nostro marchio",
    thePillars: "I Pilastri",
    fundamentals: "Fondamentali",
    sportsScience: "Scienza dello Sport",
    basketballLeadership: "Leadership nel Basket",
    basketballAnalysis: "Analisi del Basket",
    treatmentRecovery: "Trattamento/Recupero",
    strengthConditioning: "Forza e Condizionamento",
    fundamentalsDesc: "TIRO / PLAYMAKING / PALLEGGIO / CONCLUSIONE",
    sportsScienceDesc: "CATAPULT / PUSHBAND / INERZIALE",
    basketballLeadershipDesc: "CAPACITÀ DI LEADERSHIP / CONDIZIONAMENTO MENTALE",
    basketballAnalysisDesc: "ANALISI AVANZATA DELLE PRESTAZIONI / BOXSCORE AVANZATO / BIG DATA",
    treatmentRecoveryDesc: "PREVENZIONE INFORTUNI / GESTIONE DEL CARICO DI LAVORO / RIABILITAZIONE",
    strengthConditioningDesc: "SVILUPPO FORZA / POTENZA / VELOCITÀ / AGILITÀ / RESISTENZA",
    academyNextGenDesc: "Questo percorso è progettato per giovani atleti e famiglie che cercano un'introduzione premium al basket. Il nostro obiettivo è la \"Next Generation\" di giocatori che vogliono costruire una solida base tecnica e motoria. Ci rivolgiamo ai genitori che danno priorità agli standard di allenamento professionali e a un ambiente sportivo sano e di alto valore dove i bambini possono innamorarsi del gioco imparando il \"Varese Way\" dal nostro staff certificato.",
    academyProspectsDesc: "Questo percorso si rivolge a prospetti ad alto potenziale che stanno già gareggiando ad alto livello e mirano a una carriera professionale. Il nostro pubblico qui include atleti, agenzie e federazioni alla ricerca della \"Pro Experience\" definitiva. Questi giocatori cercano l'audit tecnico completo: dal tutoraggio dello staff di Serie A e sessioni esclusive con Luis Scola fino all'analisi dei dati avanzata e alle strategie di gestione della carriera. Questo è per l'atleta pronto a colmare il divario tra l'eccellenza giovanile e i circuiti professionali senior.",
    elitePackageAnalyticsTitle: "Analytics",
    elitePackageAnalyticsDesc: "Monitoraggio costante delle prestazioni tramite sensori e dati biometrici per ottimizzare ogni sessione di allenamento e prevenire infortuni.",
    elitePackageStatsTitle: "Statistiche avanzate e approfondimenti",
    elitePackageStatsDesc: "Analisi approfondita delle statistiche di gioco per identificare punti di forza e aree di miglioramento tattico individuale e di squadra.",
    elitePackageVideoTitle: "Analisi video",
    elitePackageVideoDesc: "Sessioni dedicate di video review per correggere la tecnica di tiro, i movimenti difensivi e la comprensione del gioco in tempo reale.",
    elitePackageTrainingTitle: "Allenamento extra",
    elitePackageTrainingDesc: "Allenamenti supplementari personalizzati focalizzati sullo sviluppo delle abilità specifiche richieste per raggiungere il livello professionistico europeo.",
    morning: "MATTINA",
    afternoon: "POMERIGGIO",
    evening: "SERA",
    technicalSkills: "Abilità Tecniche e Tiro",
    tacticalWorkshops: "Workshop Tattici",
    scrimmages: "Partitelle e Giochi",
    recoveryVideo: "Recupero e Analisi Video",
    teamBuilding: "Attività di Team Building",
    ourSpecialGuestAndCEO: "Il nostro ospite speciale e CEO",
    uniqueEventsMeetings: "Eventi unici e incontri",
    theTrainingStaff: "lo staff di allenamento",
    sampleDailyRoutine: "Esempio di Routine Giornaliera",
    proLevelProgram: "programma di livello pro",
    theProfessionalProLevelApproach: "L'Approccio Professionale \"Pro-Level\"",
    theDataDrivenAnalyticalFocus: "Il Focus Analitico e Basato sui Dati",
    theFlexiblePersonalizedChoice: "La Scelta Flessibile e Personalizzata",
    whatsIncluded: "Cosa è incluso?",
    accomodation: "Alloggio",
    housing: "Alloggio: Camera singola nel nostro dormitorio",
    food: "Cibo: Pranzo e Cena",
    coaching: "Allenamento (Coaching)",
    serieAPractice: "Partecipazione agli allenamenti di Serie A",
    coachesMeetings: "Riunioni degli allenatori",
    runDrills: "Esecuzione di esercizi con i giocatori di Serie A",
    playersScouting: "Scouting dei giocatori",
    serieAGames: "Partecipazione alle partite di Serie A",
    youthTeamsAssistant: "Assistente allenatore delle squadre giovanili",
    hudlVideoAnalysis: "Analisi video con Hudl",
    resumeOpportunity: "Opportunità per il curriculum",
    housingFeature1Title: "Sala da pranzo luminosa e spaziosa",
    housingFeature1Desc: "con una capienza di 18 posti a sedere, ideale per pasti condivisi e il caffè del mattino.",
    housingFeature2Title: "Area comune arredata con stile",
    housingFeature2Desc: "che funge da sfondo perfetto per socializzare, rilassarsi dopo una lunga giornata o per uno studio serale tranquillo.",
    housingFeature3Title: "Lavanderia interna",
    housingFeature3Desc: "Una struttura dedicata e completamente attrezzata per la lavanderia",
    housingFeature4Title: "Connessione con la natura",
    housingFeature4Desc: "Il dormitorio è incorniciato da due giardini privati magnificamente curati.",
    housingEfficiency: "L'efficienza è al centro della nostra posizione. Situato in una zona privilegiata, l'alloggio si trova a soli 5 minuti a piedi dal centro di allenamento principale e dalle principali istituzioni accademiche. Questa vicinanza assicura che tu possa trascorrere meno tempo negli spostamenti e più tempo concentrandoti su ciò che conta davvero.",
    housingTitle: "ALLOGGIO",
    housingItem1: "camere ben arredate",
    housingItem2: "ampia sala da pranzo",
    housingItem3: "area relax",
    housingItem4: "spazi verdi privati",
    foodTitle: "CIBO",
    foodItem1: "servizio di catering personalizzato",
    foodItem2: "pasti studiati con un focus sulla nutrizione sportiva",
    trainingFacilityTitle: "STRUTTURA DI ALLENAMENTO",
    trainingFacilityItem1: "campo da basket",
    trainingFacilityItem2: "aree di allenamento d'élite e fisioterapia",
    trainingFacilityItem3: "sala pesi e recupero",
    trainingFacilityItem4: "spogliatoio",
    transportationTitle: "TRASPORTO",
    transportationItem1: "servizio di prelievo e riaccompagnamento in aeroporto"
  },
  en: {
    back: "Back",
    backToHome: "Back to Home",
    joinEBP: "Request Info",
    exploreInDetail: "Explore Detailed Programs",
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
    arenaGalleryDesc: "Our arena provides the perfect venue for friendly games and summer tournaments. With a seating capacity of 5,352, the arena offers a dynamic atmosphere for players and spectators alike. Our comprehensive amenities include premium hospitality spaces, convenient concessions, dedicated player facilities and Media and event support.",
    campus: "Campus",
    campusDesc: "Professional training center",
    campusNote: "3M € renovation project starting this summer",
    campusGalleryDesc: "Our training facility, known as the \"CAMPUS\", serves as the official training center for both the youth and the Serie A teams following its renovation last summer. Currently the facility features 2 indoor courts, 3 outdoor courts, 7 locker rooms, offices, a bar, a restaurant, and related commercial activities.",
    eliteHousing: "Elite Housing",
    eliteHousingDesc: "Luxury student-athlete living",
    housingGalleryDesc: "The newly constructed dormitory boasts 14 well-appointed rooms (both single and double occupancy), a spacious dining room capable of seating 18 guests, a comfortable living area, a dedicated laundry room, and two beautifully landscaped private gardens. The housing is located just a short 5-minute walk from the training center and major schools.",
    'campus2.0': "Campus 2.0",
    'campus2_0_desc': "Our sports campus is undergoing a transformative €3 million renovation to integrate high-tech administrative and coworking spaces. This investment will deliver modern, ergonomic offices designed to streamline sports management and foster professional collaboration. By blending athletic excellence with premium workspace, the upgraded campus will serve as a premier hub for both teams and staff.",
    // Opportunities
    elitePrograms: "Elite Programs",
    ourTopPrograms: "Our Top Programs",
    eliteOpportunities: "Other Elite Opportunities",
    opportunitiesDesc: "A complete ecosystem for the next generation of basketball excellence",
    ourProgramsInDetail: "Our Programs in Detail",
    ourProgramsInDetailDesc: "A deep dive into the structure, objectives, and benefits of each elite program we offer.",
    detailedProgram: "Detailed Program",
    programsTraining: "Programs & Training",
    programsDesc: "Discover our specialized paths for players and coaches within the Pallacanestro Varese ecosystem.",
    moreInfo: "More Info",
    requestMoreInfo: "Request More Info",
    downloadBrochure: "Download Brochure",
    backToDetails: "Back to Details",
    findOutMore: "Find out more",
    sending: "Sending...",
    submissionErrorTitle: "Submission Error",
    submissionErrorMessage: "An error occurred while submitting your request. Please try again later.",
    tryAgain: "Try Again",
    informationForm: "Information Request Form",
    informationFormDescription: "Please complete the form below to request information for the",
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
    topicSelect: "Topic *",
    selectOption: "Select an option",
    generalInformation: "General Information",
    buyNow: "Buy Now",
    successStory: "Success Story",
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
    footerDevelopedBy: "Developed for Elite Basketball Program.",
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
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faq1Question: "What is the Elite Basketball Program?",
    faq1Answer: "The Elite Basketball Program (EBP) is a comprehensive ecosystem designed by Pallacanestro Varese to train the next generation of basketball talent, offering high-level training, professional infrastructure, and academic paths.",
    faq2Question: "Where is the Campus located?",
    faq2Answer: "The Campus is situated on Via Pirandello in Varese, within a 10-minute walk of the Foresteria and just 5 minutes from the Itelyum Arena, home of Pallacanestro Varese. All our facilities are seamlessly interconnected.",
    faq3Question: "how can I apply for a program?",
    faq3Answer: "You can apply for any of our program by clicking 'buy now' in this website or by visiting the following link: https://store.pallacanestrovarese.it/collections/elite-programs",
    faq4Question: "how do i get to varese?",
    faq4Answer: "The Campus is situated on Via Pirandello in Varese, a 10-minute walk from the guesthouse and just 5 minutes from the Itelyum Arena, home of Pallacanestro Varese. Reaching us is highly convenient as all our facilities are seamlessly interconnected and well-served by public transport. If you are arriving by air, Milan Malpensa (MXP) is the closest hub, located only 30 minutes away and connected directly to Varese via the S50 train line. For those traveling by rail from Milan, frequent direct services depart from Milano Centrale, Porta Garibaldi, and Cadorna stations, with travel times averaging 50–60 minutes. Whether you are arriving from the airport or the city center, the final stretch to the Campus is quick and straightforward.",
    faq5Question: "How can I request more information?",
    faq5Answer: "You can request information by filling out the form in any section of the site by clicking 'Request Info' or by contacting us directly via email at f.bellotto@pallacanestrovarese.it.",
    // Summer Camp
    twoDifferentOptions: "Two different options",
    residentialCamp: "Residential Camp",
    dayCamp: "Day Camp",
    included: "Included:",
    privateSingleRoom: "Private single room",
    sharedCommonSpaces: "Shared common spaces",
    meals3: "3 meals a day",
    sportsNutrition: "Sports nutrition-driven menus",
    individualizedTraining: "Individualized 1-on-1 training",
    teamPractice: "Team practice",
    strengthTraining: "Strength and performance training",
    personalAnalytics: "Personal performance analytics",
    eliteCoaching: "Elite coaching staff",
    officialGear: "Official camp gear",
    lunch: "Lunch",
    applyNowBtn: "Apply Now",
    depositNotice: "By applying now a €290 advance deposit is required for all camp types.<br className=\"hidden md:block\" /> Details on final balance payments will follow shortly.",
    howToSubscribe: "How to subscribe",
    depositDesc: "To register for the Pallacanestro Varese Elite Summer Camp, an advance deposit of €290 is required for both the Residential Camp and the Day Camp.",
    followSteps: "Please follow these steps to complete your registration:",
    visitStore: "Visit our Store:",
    clickHere: "Click here",
    accessStore: "to access the official online store.",
    submitDetails: "Submit Details:",
    provideInfo: "Provide the required information and complete the deposit payment.",
    nextSteps: "Next Steps:",
    onceDeposit: "Once the deposit is processed, our team will contact you to finalize the payment for the remaining balance and to request additional documentation.",
    waitingForYou: "THE PALLACANESTRO VARESE ELITE SUMMER CAMP IS WAITING FOR YOU!",
    summerProgOffer1: "- Well appointed rooms\n- Spacious dining room\n- Relaxation area\n- Private green spaces",
    summerProgOffer2: "- Personalized catering service\n- Crafted meals with a sports nutrition focus",
    summerProgOffer3: "- Basketball court\n- Elite training and physical therapy areas\n- Weight & recovery room\n- Locker room",
    summerProgOffer4: "- Airport pick-up and drop-off",
    touristOptions: "Tourist Options",
    trainingAtArena: "Training at the Arena",
    extraTrainings: "Extra Trainings",
    eliteTrainingStaff: "Elite Training Staff",
    physioterapists: "Physiotherapists",
    consulting: "Consulting",
    keyHighlights: "Key Highlights",
    target: "Target",
    timing: "Timing",
    where: "Where",
    subscriptionDeadline: "Subscription Deadline",
    pricing: "Pricing",
    limitedSpots: "Limited spots available",
    overview: "Overview",
    tbdTogether: "TBD together",
    campusVarese: "Campus, Varese",
    foresteriaCampus: "Foresteria & Campus",
    // Program Tables
    standardProgram: "Standard Program",
    premiumProgram: "Premium Program",
    publicSchool: "Public school",
    privateSchool: "Private international school",
    fullTimeTraining: "Full time training",
    assignedToGroups: "Athletes will be assigned to groups of their level",
    fullBoard: "Full board",
    privateRoom: "Private room in our elite housing",
    elitePlayerPackage: "Elite Player Package",
    analytics: "Analytics",
    advancedStats: "Advanced stats & insights",
    videoAnalysis: "Video analysis",
    extraTraining: "Extra training",
    time: "Time",
    activity: "Activity",
    wakeUpBreakfast: "Wake Up & Breakfast",
    morningPractice: "Morning Practice",
    strengthCond: "Strength & Cond.",
    lunchRest: "Lunch & Rest",
    afternoonPractice: "Afternoon practice",
    freeTimeRecovery: "Free Time / Recovery",
    dinner: "Dinner",
    lightsOut: "Lights Out",
    arrivalCheckIn: "Arrival & Check-in",
    pickUp: "Pick-up",
    openInGoogleMaps: "Open in Google Maps",
    grassrootsExcellence: "Grassroots Excellence",
    grassrootsExcellenceDesc: "We believe in basketball as a powerful tool for the community. Our program promotes an active, positive spirit, helping young athletes develop social skills and a healthy lifestyle.",
    elitePlayerDevelopment: "Elite Player Development",
    elitePlayerDevelopmentDesc: "For those dreaming of the big leagues, we provide the ultimate pathway. By offering expert coaching, professional training programs, and access to high-quality facilities, we cultivate the basketball stars of tomorrow.",
    twoPillarsOneVision: "Two Pillars • One Vision",
    eliteProfessionalIntegrationDesc: "This is more than just a course; it is an immersion into the daily operations of a Serie A basketball team. As an intern, you will:",
    shadowThePros: "Shadow the Pros",
    shadowTheProsDesc: "Gain invaluable insights by observing and learning from our experienced coaching professionals during practices and games.",
    activeCourtParticipation: "Active Court Participation",
    activeCourtParticipationDesc: "Take a hands-on role by running drills with Serie A players and assisting with professional practices.",
    strategicDevelopment: "Strategic Development",
    strategicDevelopmentDesc: "Attend coaches' meetings to understand the tactical and strategic decision-making processes at the highest level.",
    youthDevelopment: "Youth Development",
    youthDevelopmentDesc: "Contribute to the future of the sport by assisting the coaching staff of our youth teams.",
    theNextGeneration: "The Next Generation",
    theNextGenerationDesc: "This track is designed for young athletes and families seeking a premium introduction to basketball. Our target is the \"Next Generation\" of players who want to build a rock-solid technical and motor-skill foundation. We appeal to parents who prioritize professional coaching standards and a healthy, high-value sports environment where children can fall in love with the game while learning the \"Varese Way\" from our certified staff.",
    highPotentialProspects: "High-Potential Prospects",
    highPotentialProspectsDesc: "This track targets high-potential prospects who are already competing at a high level and aiming for a professional career. Our audience here includes athletes, agencies, and federations looking for the ultimate \"Pro Experience.\" These players seek the full technical audit: from Serie A staff mentorship and exclusive sessions with Luis Scola to advanced Data Analytics and career management strategies. This is for the athlete ready to bridge the gap between youth excellence and the senior professional circuits.",
    ourKnowHow: "Our know-how",
    eliteTrainingMethods: "Elite training methods",
    collaborationClubs: "Collaboration with clubs, national federations or local academies",
    ourBrand: "Our brand",
    thePillars: "The Pillars",
    fundamentals: "Fundamentals",
    sportsScience: "Sports Science",
    basketballLeadership: "Basketball Leadership",
    basketballAnalysis: "Basketball Analysis",
    treatmentRecovery: "Treatment/Recovery",
    strengthConditioning: "Strength & Conditioning",
    fundamentalsDesc: "SHOOTING / PLAYMAKING / DRIBBLING / FINISHING",
    sportsScienceDesc: "CATAPULT / PUSHBAND / INERTIAL",
    basketballLeadershipDesc: "LEADERSHIP SKILLS / MENTAL CONDITIONING",
    basketballAnalysisDesc: "ADVANCED PERFORMANCE ANALYSIS / ADVANCED BOXSCORE / BIG DATA",
    treatmentRecoveryDesc: "INJURY PREVENTION / WORKLOAD MANAGEMENT / REHABILITATION",
    strengthConditioningDesc: "STRENGTH DEV / POWER / SPEED / AGILITY / STAMINA",
    academyNextGenDesc: "This track is designed for young athletes and families seeking a premium introduction to basketball. Our target is the \"Next Generation\" of players who want to build a rock-solid technical and motor-skill foundation. We appeal to parents who prioritize professional coaching standards and a healthy, high-value sports environment where children can fall in love with the game while learning the \"Varese Way\" from our certified staff.",
    academyProspectsDesc: "This track targets high-potential prospects who are already competing at a high level and aiming for a professional career. Our audience here includes athletes, agencies, and federations looking for the ultimate \"Pro Experience.\" These players seek the full technical audit: from Serie A staff mentorship and exclusive sessions with Luis Scola to advanced Data Analytics and career management strategies. This is for the athlete ready to bridge the gap between youth excellence and the senior professional circuits.",
    elitePackageAnalyticsTitle: "Analytics",
    elitePackageAnalyticsDesc: "Constant performance monitoring through sensors and biometric data to optimize every training session and prevent potential injuries.",
    elitePackageStatsTitle: "Advanced stats & insights",
    elitePackageStatsDesc: "In-depth analysis of game statistics to identify strengths and areas for individual and team tactical improvement during the season.",
    elitePackageVideoTitle: "Video analysis",
    elitePackageVideoDesc: "Dedicated video review sessions to correct shooting technique, defensive movements, and overall game understanding in real-time scenarios.",
    elitePackageTrainingTitle: "Extra training",
    elitePackageTrainingDesc: "Personalized supplemental workouts focused on developing the specific skills required to reach the elite European professional basketball level.",
    morning: "MORNING",
    afternoon: "AFTERNOON",
    evening: "EVENING",
    technicalSkills: "Technical Skills & Shooting",
    tacticalWorkshops: "Tactical Workshops",
    scrimmages: "Scrimmages & Games",
    recoveryVideo: "Recovery & Video Analysis",
    teamBuilding: "Team Building Activities",
    ourSpecialGuestAndCEO: "Our special guest and CEO",
    uniqueEventsMeetings: "Unique events & meetings",
    theTrainingStaff: "the training staff",
    sampleDailyRoutine: "Sample Daily Routine",
    proLevelProgram: "pro-level program",
    theProfessionalProLevelApproach: "The Professional \"Pro-Level\" Approach",
    theDataDrivenAnalyticalFocus: "The Data-Driven & Analytical Focus",
    theFlexiblePersonalizedChoice: "The Flexible & Personalized Choice",
    whatsIncluded: "What's included?",
    accomodation: "Accomodation",
    housing: "Housing: Single room occupancy in our dorm",
    food: "Food: Lunch & Dinner",
    coaching: "Coaching",
    serieAPractice: "Serie A Practice attendance",
    coachesMeetings: "Coaches meetings",
    runDrills: "Run drills with Serie A Players",
    playersScouting: "Players scouting",
    serieAGames: "Serie A games attendance",
    youthTeamsAssistant: "Youth teams assistant coach",
    hudlVideoAnalysis: "Hudl video analysis",
    resumeOpportunity: "Resume opportunity",
    housingFeature1Title: "Bright and spacious dining room",
    housingFeature1Desc: "with a seating capacity for 18 guests, ideal for shared meals and morning coffee.",
    housingFeature2Title: "Stylishly furnished common area",
    housingFeature2Desc: "that serves as the perfect backdrop for socializing, winding down after a long day, or quiet evening study.",
    housingFeature3Title: "In-House Laundry",
    housingFeature3Desc: "A dedicated, fully equipped laundry facility",
    housingFeature4Title: "Connection to nature",
    housingFeature4Desc: "The dormitory is framed by two beautifully landscaped private gardens.",
    housingEfficiency: "Efficiency is at the heart of our location. Situated in a prime area, the housing is just a leisurely 5-minute walk from the primary training center and major academic institutions. This proximity ensures that you can spend less time commuting and more time focusing on what truly matters.",
    housingTitle: "HOUSING",
    housingItem1: "well appointed rooms",
    housingItem2: "spacious dining room",
    housingItem3: "relaxation area",
    housingItem4: "private green spaces",
    foodTitle: "FOOD",
    foodItem1: "personalized catering service",
    foodItem2: "crafted meals with a sports nutrition focus",
    trainingFacilityTitle: "TRAINING FACILITY",
    trainingFacilityItem1: "basketball court",
    trainingFacilityItem2: "elite Training and physical therapy areas",
    trainingFacilityItem3: "weight & Recovery Room",
    trainingFacilityItem4: "locker Room",
    transportationTitle: "TRANSPORTATION",
    transportationItem1: "airport pick-up and drop-off"
  },
  es: {
    back: "Volver",
    backToHome: "Volver al Inicio",
    joinEBP: "Solicitar Información",
    exploreInDetail: "Explorar Programas Detallados",
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
    supercoppa: "SUPERCOPPA DE ITALIA",
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
    arenaGalleryDesc: "Nuestro pabellón es el lugar perfecto para partidos amistosos y torneos de verano. Con una capacidad de 5.352 asientos, el pabellón ofrece un ambiente dinámico tanto para jugadores como para espectadores. Nuestras completas instalaciones incluyen espacios de hospitalidad premium, cómodos puntos de venta, instalaciones dedicadas para los jugadores y soporte para medios y eventos.",
    campus: "Campus",
    campusDesc: "Centro de entrenamiento profesional",
    campusNote: "Proyecto de renovación de 3M € a partir de este verano",
    campusGalleryDesc: "Nuestra instalación de entrenamiento, conocida como el \"CAMPUS\", sirve como centro de entrenamiento oficial tanto para los equipos juveniles como para el de Serie A tras su renovación el verano pasado. Actualmente, la instalación cuenta con 2 canchas cubiertas, 3 canchas al aire libre, 7 vestuarios, oficinas, un bar, un restaurante y actividades comerciales relacionadas.",
    eliteHousing: "Viviendas de Élite",
    eliteHousingDesc: "Alojamiento de lujo para estudiantes-atletas",
    housingGalleryDesc: "La residencia de nueva construcción cuenta con 14 habitaciones bien equipadas (tanto individuales como dobles), un espacioso comedor con capacidad para 18 personas, una cómoda sala de estar, una lavandería dedicada y dos hermosos jardines privados. El alojamiento se encuentra a solo 5 minutos a pie del centro de entrenamiento y de las principales escuelas.",
    'campus2.0': "Campus 2.0",
    'campus2_0_desc': "Nuestro campus deportivo está siendo sometido a una renovación transformadora de 3 millones de euros para integrar espacios administrativos y de coworking de alta tecnología. Esta inversión proporcionará oficinas modernas y ergonómicas diseñadas para optimizar la gestión deportiva y fomentar la colaboración profesional. Al combinar la excelencia atlética con un espacio de trabajo de primera calidad, el campus mejorado servirá como un centro de primer nivel tanto para los equipos como para el personal.",
    // Opportunities
    elitePrograms: "Programas de Élite",
    ourTopPrograms: "Nuestros Mejores Programas",
    eliteOpportunities: "Otras Oportunidades de Élite",
    opportunitiesDesc: "Un ecosistema completo para la próxima generación de excelencia en el baloncesto",
    ourProgramsInDetail: "Nuestros Programas en Detalle",
    ourProgramsInDetailDesc: "Un análisis profundo de la estructura, los objetivos y los beneficios de cada programa de élite que ofrecemos.",
    detailedProgram: "Programa Detallado",
    programsTraining: "Programas y Entrenamiento",
    programsDesc: "Descubre nuestros caminos especializados para jugadores y entrenadores dentro del ecosistema de Pallacanestro Varese.",
    moreInfo: "Más Información",
    requestMoreInfo: "Solicitar Más Información",
    downloadBrochure: "Descargar Folleto",
    backToDetails: "Volver a Detalles",
    findOutMore: "Descubre más",
    sending: "Enviando...",
    submissionErrorTitle: "Error de Envío",
    submissionErrorMessage: "Ocurrió un error al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde.",
    tryAgain: "Intentar de Nuevo",
    informationForm: "Formulario de Solicitud de Información",
    informationFormDescription: "Por favor, completa el siguiente formulario para solicitar información sobre el",
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
    topicSelect: "Tema *",
    selectOption: "Seleccionar una opción",
    generalInformation: "Información General",
    buyNow: "Comprar Ahora",
    successStory: "Historia de Éxito",
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
    footerDevelopedBy: "Desarrollado para Elite Basketball Program.",
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
    // FAQ
    faqTitle: "Preguntas Frecuentes",
    faq1Question: "¿Qué es el Programa de Baloncesto de Élite?",
    faq1Answer: "El Programa de Baloncesto de Élite (EBP) es un ecosistema integral diseñado por Pallacanestro Varese para formar a la próxima generación de talentos del baloncesto, ofreciendo entrenamiento de alto nivel, infraestructura profesional y trayectorias académicas.",
    faq2Question: "¿Dónde se encuentra el Campus?",
    faq2Answer: "El Campus está situado en Via Pirandello en Varese, a 10 minutos a pie de la Foresteria y a solo 5 minutos del Itelyum Arena, sede de Pallacanestro Varese. Todas nuestras instalaciones están perfectamente interconectadas.",
    faq3Question: "¿Cómo puedo solicitar un programa?",
    faq3Answer: "Puedes solicitar cualquiera de nuestros programas haciendo clic en 'comprar ahora' en este sitio web o visitando el siguiente enlace: https://store.pallacanestrovarese.it/collections/elite-programs",
    faq4Question: "¿Cómo llego a Varese?",
    faq4Answer: "El Campus está situado en Via Pirandello en Varese, a 10 minutos a pie de la casa de huéspedes y a solo 5 minutos del Itelyum Arena, sede de Pallacanestro Varese. Llegar a nosotros es muy conveniente ya que todas nuestras instalaciones están perfectamente interconectadas y bien comunicadas por transporte público. Si llega por aire, Milán Malpensa (MXP) es el centro más cercano, ubicado a solo 30 minutos y conectado directamente con Varese a través de la línea de tren S50. Para quienes viajan por ferrocarril desde Milán, salen servicios directos frecuentes desde las estaciones de Milano Centrale, Porta Garibaldi y Cadorna, con tiempos de viaje de 50 a 60 minutos de media. Ya sea que llegue desde el aeropuerto o desde el centro de la ciudad, el último tramo hasta el Campus es rápido y sencillo.",
    faq5Question: "¿Cómo puedo solicitar más información?",
    faq5Answer: "Puedes solicitar información completando el formulario en cualquier sección del sitio haciendo clic en 'Solicitar Información' o contactándonos directamente por correo electrónico en f.bellotto@pallacanestrovarese.it.",
    // Summer Camp
    twoDifferentOptions: "Dos opciones diferentes",
    residentialCamp: "Campamento Residencial",
    dayCamp: "Campamento de Día",
    included: "Incluido:",
    privateSingleRoom: "Habitación individual privada",
    sharedCommonSpaces: "Espacios comunes compartidos",
    meals3: "3 comidas al día",
    sportsNutrition: "Menús basados en nutrición deportiva",
    individualizedTraining: "Entrenamiento individual 1 a 1",
    teamPractice: "Práctica en equipo",
    strengthTraining: "Entrenamiento de fuerza y rendimiento",
    personalAnalytics: "Análisis de rendimiento personal",
    eliteCoaching: "Cuerpo técnico de élite",
    officialGear: "Equipo oficial del campamento",
    lunch: "Almuerzo",
    applyNowBtn: "Aplica Ahora",
    depositNotice: "Al aplicar ahora, se requiere un depósito anticipado de €290 para todos los tipos de campamento.<br className=\"hidden md:block\" /> Los detalles sobre los pagos del saldo final seguirán en breve.",
    howToSubscribe: "Cómo suscribirse",
    depositDesc: "Para registrarse en el Pallacanestro Varese Elite Summer Camp, se requiere un depósito anticipado de €290 tanto para el Campamento Residencial como para el Campamento de Día.",
    followSteps: "Sigue estos pasos para completar tu registro:",
    visitStore: "Visita nuestra Tienda:",
    clickHere: "Haz clic aquí",
    accessStore: "para acceder a la tienda en línea oficial.",
    submitDetails: "Enviar Detalles:",
    provideInfo: "Proporciona la información requerida y completa el pago del depósito.",
    nextSteps: "Próximos Pasos:",
    onceDeposit: "Una vez procesado el depósito, nuestro equipo se comunicará contigo para finalizar el pago del saldo restante y solicitar documentación adicional.",
    waitingForYou: "¡EL PALLACANESTRO VARESE ELITE SUMMER CAMP TE ESTÁ ESPERANDO!",
    summerProgOffer1: "- habitaciones bien equipadas\n- amplio comedor\n- zona de relajación\n- espacios verdes privados",
    summerProgOffer2: "- servicio de catering personalizado\n- comidas elaboradas con un enfoque en nutrición deportiva",
    summerProgOffer3: "- cancha de baloncesto\n- áreas de entrenamiento de élite y fisioterapia\n- sala de pesas y recuperación\n- vestuario",
    summerProgOffer4: "- servicio de recogida y regreso al aeropuerto",
    touristOptions: "Opciones Turísticas",
    trainingAtArena: "Entrenamiento en la Arena",
    extraTrainings: "Entrenamientos Extra",
    eliteTrainingStaff: "Personal de Entrenamiento de Élite",
    physioterapists: "Fisioterapeutas",
    consulting: "Consultoría",
    keyHighlights: "Puntos Clave",
    target: "Público",
    timing: "Periodo",
    where: "Dónde",
    subscriptionDeadline: "Fecha Límite de Inscripción",
    pricing: "Precios",
    limitedSpots: "Plazas limitadas disponibles",
    overview: "Resumen",
    tbdTogether: "A definir juntos",
    campusVarese: "Campus, Varese",
    foresteriaCampus: "Residencia y Campus",
    // Program Tables
    standardProgram: "Programa Estándar",
    premiumProgram: "Programa Premium",
    publicSchool: "Escuela pública",
    privateSchool: "Escuela internacional privada",
    fullTimeTraining: "Entrenamiento a tiempo completo",
    assignedToGroups: "Los atletas serán asignados a grupos de su nivel",
    fullBoard: "Pensión completa",
    privateRoom: "Habitación privada en nuestro alojamiento de élite",
    elitePlayerPackage: "Paquete de Jugador de Élite",
    analytics: "Análisis",
    advancedStats: "Estadísticas avanzadas e información",
    videoAnalysis: "Análisis de video",
    extraTraining: "Entrenamiento extra",
    time: "Hora",
    activity: "Actividad",
    wakeUpBreakfast: "Despertar y Desayuno",
    morningPractice: "Entrenamiento Matutino",
    strengthCond: "Fuerza y Acond.",
    lunchRest: "Almuerzo y Descanso",
    afternoonPractice: "Entrenamiento Vespertino",
    freeTimeRecovery: "Tiempo Libre / Recuperación",
    dinner: "Cena",
    lightsOut: "Apagar Luces",
    arrivalCheckIn: "Llegada y Check-in",
    pickUp: "Recogida",
    openInGoogleMaps: "Abrir en Google Maps",
    grassrootsExcellence: "Excelencia Grassroots",
    grassrootsExcellenceDesc: "Creemos en el baloncesto como una herramienta poderosa para la comunidad. Nuestro programa promueve un espíritu activo y positivo, ayudando a los jóvenes atletas a desarrollar habilidades sociales y un estilo de vida saludable.",
    elitePlayerDevelopment: "Desarrollo de Jugadores de Élite",
    elitePlayerDevelopmentDesc: "Para quienes sueñan con las grandes ligas, ofrecemos el camino definitivo. Al ofrecer entrenamiento experto, programas de entrenamiento profesionales y acceso a instalaciones de alta calidad, cultivamos a las estrellas del baloncesto del mañana.",
    twoPillarsOneVision: "Dos Pilares • Una Visión",
    eliteProfessionalIntegrationDesc: "Esto es más que un simple curso; es una inmersión en las operaciones diarias de un equipo de baloncesto de la Serie A. Como pasante, podrás:",
    shadowThePros: "Sigue a los Profesionales",
    shadowTheProsDesc: "Obtén información invaluable observando y aprendiendo de nuestros experimentados profesionales del entrenamiento durante las prácticas y los partidos.",
    activeCourtParticipation: "Participación Activa en la Cancha",
    activeCourtParticipationDesc: "Asume un papel práctico dirigiendo ejercicios con jugadores de la Serie A y asistiendo en las prácticas profesionales.",
    strategicDevelopment: "Desarrollo Estratégico",
    strategicDevelopmentDesc: "Asiste a las reuniones de entrenadores para comprender los procesos de toma de decisiones tácticas y estratégicas al más alto nivel.",
    youthDevelopment: "Desarrollo Juvenil",
    youthDevelopmentDesc: "Contribuye al futuro del deporte asistiendo al personal técnico de nuestros equipos juveniles.",
    theNextGeneration: "The Next Generation",
    theNextGenerationDesc: "Esta pista está diseñada para jóvenes atletas y familias que buscan una introducción premium al baloncesto. Nuestro objetivo es la \"Next Generation\" de jugadores que desean construir una base técnica y de habilidades motoras sólida como una roca. Apelamos a los padres que priorizan los estándares de entrenamiento profesional y un entorno deportivo saludable y de alto valor donde los niños pueden enamorarse del juego mientras aprenden el \"Varese Way\" de nuestro personal certificado.",
    highPotentialProspects: "High-Potential Prospects",
    highPotentialProspectsDesc: "Esta pista está dirigida a prospectos de alto potencial que ya compiten a un alto nivel y aspiran a una carrera profesional. Nuestra audiencia aquí incluye atletas, agencias y federaciones que buscan la \"Pro Experience\" definitiva. Estos jugadores buscan la auditoría técnica completa: desde la tutoría del personal de la Serie A y sesiones exclusivas con Luis Scola hasta el análisis de datos avanzado y las estrategias de gestión de carrera. Esto es para el atleta listo para cerrar la brecha entre la excelencia juvenil y los circuitos profesionales senior.",
    ourKnowHow: "Nuestro know-how",
    eliteTrainingMethods: "Métodos de entrenamiento de élite",
    collaborationClubs: "Colaboración con clubes, federaciones nacionales o academias locales",
    ourBrand: "Nuestra marca",
    thePillars: "Los Pilares",
    fundamentals: "Fundamentos",
    sportsScience: "Ciencia del Deporte",
    basketballLeadership: "Liderazgo en el Baloncesto",
    basketballAnalysis: "Análisis del Baloncesto",
    treatmentRecovery: "Tratamiento/Recuperación",
    strengthConditioning: "Fuerza y Acondicionamiento",
    fundamentalsDesc: "TIRO / PLAYMAKING / DRIBLE / FINALIZACIÓN",
    sportsScienceDesc: "CATAPULT / PUSHBAND / INERCIAL",
    basketballLeadershipDesc: "HABILIDADES DE LIDERAZGO / ACONDICIONAMIENTO MENTAL",
    basketballAnalysisDesc: "ANÁLISIS DE RENDIMIENTO AVANZADO / BOXSCORE AVANZADO / BIG DATA",
    treatmentRecoveryDesc: "PREVENCIÓN DE LESIONES / GESTIÓN DE LA CARGA DE TRABAJO / REHABILITACIÓN",
    strengthConditioningDesc: "DESARROLLO DE FUERZA / POTENCIA / VELOCIDAD / AGILIDAD / RESISTENCIA",
    academyNextGenDesc: "Esta pista está diseñada para jóvenes atletas y familias que buscan una introducción premium al baloncesto. Nuestro objetivo es la \"Next Generation\" de jugadores que desean construir una base técnica y de habilidades motoras sólida como una roca. Apelamos a los padres que priorizan los estándares de entrenamiento profesional y un entorno deportivo saludable y de alto valor donde los niños pueden enamorarse del juego mientras aprenden el \"Varese Way\" de nuestro personal certificado.",
    academyProspectsDesc: "Esta pista está dirigida a prospectos de alto potencial que ya compiten a un alto nivel y aspiran a una carrera profesional. Nuestra audiencia aquí incluye atletas, agencias y federaciones que buscan la \"Pro Experience\" definitiva. Estos jugadores buscan la auditoría técnica completa: desde la tutoría del personal de la Serie A y sesiones exclusivas con Luis Scola hasta el análisis de datos avanzado y las estrategias de gestión de carrera. Esto es para el atleta listo para cerrar la brecha entre la excelencia juvenil y los circuitos profesionales senior.",
    elitePackageAnalyticsTitle: "Analytics",
    elitePackageAnalyticsDesc: "Monitoreo constante del rendimiento a través de sensores y datos biométricos para optimizar cada sesión de entrenamiento y prevenir lesiones.",
    elitePackageStatsTitle: "Estadísticas avanzadas e información",
    elitePackageStatsDesc: "Análisis profundo de las estadísticas de juego para identificar fortalezas y áreas de mejora táctica individual y de equipo.",
    elitePackageVideoTitle: "Análisis de video",
    elitePackageVideoDesc: "Sesiones dedicadas de revisión de video para corregir la técnica de tiro, los movimientos defensivos y la comprensión del juego.",
    elitePackageTrainingTitle: "Entrenamiento extra",
    elitePackageTrainingDesc: "Entrenamientos suplementarios personalizados enfocados en el desarrollo de las habilidades específicas requeridas para alcanzar el nivel profesional europeo.",
    morning: "MAÑANA",
    afternoon: "TARDE",
    evening: "NOCHE",
    technicalSkills: "Habilidades Técnicas y Tiro",
    tacticalWorkshops: "Talleres Tácticos",
    scrimmages: "Partidillos y Juegos",
    recoveryVideo: "Recuperación y Análisis de Video",
    teamBuilding: "Actividades de Team Building",
    ourSpecialGuestAndCEO: "Nuestro invitado especial y CEO",
    uniqueEventsMeetings: "Eventos únicos y reuniones",
    theTrainingStaff: "el personal de entrenamiento",
    sampleDailyRoutine: "Ejemplo de Rutina Diaria",
    proLevelProgram: "programa de nivel pro",
    theProfessionalProLevelApproach: "El Enfoque Profesional \"Pro-Level\"",
    theDataDrivenAnalyticalFocus: "El Enfoque Analítico y Basado en Datos",
    theFlexiblePersonalizedChoice: "La Elección Flexible y Personalizada",
    whatsIncluded: "¿Qué está incluido?",
    accomodation: "Alojamiento",
    housing: "Vivienda: Habitación individual en nuestro dormitorio",
    food: "Comida: Almuerzo y Cena",
    coaching: "Entrenamiento (Coaching)",
    serieAPractice: "Asistencia a los entrenamientos de la Serie A",
    coachesMeetings: "Reuniones de entrenadores",
    runDrills: "Ejecución de ejercicios con jugadores de la Serie A",
    playersScouting: "Scouting de jugadores",
    serieAGames: "Asistencia a los partidos de la Serie A",
    youthTeamsAssistant: "Entrenador asistente de los equipos juveniles",
    hudlVideoAnalysis: "Análisis de video con Hudl",
    resumeOpportunity: "Oportunidad para el currículum",
    housingFeature1Title: "Comedor amplio y luminoso",
    housingFeature1Desc: "con capacidad para 18 invitados, ideal para comidas compartidas y el café de la mañana.",
    housingFeature2Title: "Zona común amueblada con estilo",
    housingFeature2Desc: "que sirve como el escenario perfecto para socializar, relajarse después de un largo día o estudiar tranquilamente por la noche.",
    housingFeature3Title: "Lavandería interna",
    housingFeature3Desc: "Una instalación de lavandería dedicada y totalmente equipada",
    housingFeature4Title: "Conexión con la naturaleza",
    housingFeature4Desc: "El dormitorio está enmarcado por dos jardines privados bellamente ajardinados.",
    housingEfficiency: "La eficiencia está en el corazón de nuestra ubicación. Situado en una zona privilegiata, el alojamiento se encuentra a solo 5 minutos a pie del centro de entrenamiento principal y de las principales instituciones académicas. Esta proximidad garantiza que puedas pasar menos tiempo viajando y más tiempo concentrándote en lo que realmente importa.",
    housingTitle: "ALOJAMIENTO",
    housingItem1: "habitaciones bien equipadas",
    housingItem2: "amplio comedor",
    housingItem3: "zona de relajación",
    housingItem4: "espacios verdes privados",
    foodTitle: "COMIDA",
    foodItem1: "servicio de catering personalizado",
    foodItem2: "comidas elaboradas con un enfoque en nutrición deportiva",
    trainingFacilityTitle: "INSTALACIÓN DE ENTRENAMIENTO",
    trainingFacilityItem1: "cancha de baloncesto",
    trainingFacilityItem2: "áreas de entrenamiento de élite y fisioterapia",
    trainingFacilityItem3: "sala de pesas y recuperación",
    trainingFacilityItem4: "vestuario",
    transportationTitle: "TRANSPORTE",
    transportationItem1: "servicio de recogida y regreso al aeropuerto"
  },
  fr: {
    back: "Retour",
    backToHome: "Retour à l'Accueil",
    joinEBP: "Demander des Infos",
    exploreInDetail: "Explorer les Programmes Détaillés",
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
    arenaGalleryDesc: "Notre arène est le lieu idéal pour les matchs amicaux et les tournois d'été. Avec une capacité de 5 352 places, l'arène offre une atmosphère dynamique pour les joueurs et les spectateurs. Nos équipements complets comprennent des espaces d'accueil premium, des points de restauration pratiques, des installations dédiées aux joueurs et un soutien pour les médias et les événements.",
    campus: "Campus",
    campusDesc: "Centre d'entraînement professionnel",
    campusNote: "Projet de rénovation de 3M € débutant cet été",
    campusGalleryDesc: "Notre centre d'entraînement, connu sous le nom de \"CAMPUS\", sert de centre d'entraînement officiel pour les équipes de jeunes et de Serie A suite à sa rénovation l'été dernier. Actuellement, l'installation comprend 2 terrains intérieurs, 3 terrains extérieurs, 7 vestiaires, des bureaux, un bar, un restaurant et des activités commerciales connexes.",
    eliteHousing: "Logement d'Élite",
    eliteHousingDesc: "Logement de luxe pour étudiants-athlètes",
    housingGalleryDesc: "Le dortoir nouvellement construit dispose de 14 chambres bien aménagées (simples et doubles), d'une salle à manger spacieuse pouvant accueillir 18 personnes, d'un salon confortable, d'une buanderie dédiée et de deux magnifiques jardins privés. Le logement est situé à seulement 5 minutes à pied du centre d'entraînement et des principales écoles.",
    'campus2.0': "Campus 2.0",
    'campus2_0_desc': "Notre campus sportif fait l'objet d'une rénovation de 3 millions d'euros visant à intégrer des espaces administratifs et de coworking de haute technologie. Cet investissement permettra de créer des bureaux modernes et ergonomiques conçus pour rationaliser la gestion sportive et favoriser la collaboration professionnelle. En alliant l'excellence athlétique à des espaces de travail haut de gamme, le campus modernisé deviendra un pôle de premier plan pour les équipes et le personnel.",
    // Opportunities
    elitePrograms: "Programmes d'Élite",
    ourTopPrograms: "Nos Meilleurs Programmes",
    eliteOpportunities: "Autres Opportunités d'Élite",
    opportunitiesDesc: "Un écosystème complet pour la prochaine génération d'excellence du basket-ball",
    ourProgramsInDetail: "Nos Programmes en Détail",
    ourProgramsInDetailDesc: "Une immersion dans la structure, les objectifs et les avantages de chaque programme d'élite que nous proposons.",
    detailedProgram: "Programme Détaillé",
    programsTraining: "Programmes et Entraînement",
    programsDesc: "Découvrez nos parcours spécialisés pour joueurs et entraîneurs au sein de l'écosystème de Pallacanestro Varese.",
    moreInfo: "Plus d'Infos",
    requestMoreInfo: "Demander Plus d'Infos",
    downloadBrochure: "Télécharger la Brochure",
    backToDetails: "Retour aux Détails",
    findOutMore: "En savoir plus",
    sending: "Envoi en cours...",
    submissionErrorTitle: "Erreur d'Envoi",
    submissionErrorMessage: "Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer plus tard.",
    tryAgain: "Réessayer",
    informationForm: "Formulaire de Demande d'Informations",
    informationFormDescription: "Veuillez remplir le formulaire ci-dessous pour demander des informations sur le",
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
    topicSelect: "Sujet *",
    selectOption: "Sélectionner une option",
    generalInformation: "Informations Générales",
    buyNow: "Acheter Maintenant",
    successStory: "Histoire à Succès",
    joinProgram: "Rejoindre le Programme",
    joinDescription: "Soumettez votre candidature pour accéder aux opportunités d'élite de Varèse",
    ctaTitle: "Transformez Votre Avenir dans le Basket",
    ctaSubtitle: "Les candidatures pour la saison 2026/27 sont maintenant ouvertes.",
    applyNow: "Demander des Infos",
    footerSlogan: "Donner les moyens à la prochaine génération de basketteurs d'élite grâce à des infrastructures professionnelles et une expertise légendaire.",
    footerLegacy: "Notre Héritage",
    footerRegion: "La Région",
    footerLeadership: "Direction",
    footerFacilities: "Installations",
    footerPrograms: "Programmes",
    contactUs: "Contactez-Nous",
    footerAddress: "Piazzale Antonio Gramsci,\nVarèse, Italie",
    footerCOO: "Directeur des Opérations",
    footerDevelopedBy: "Développé pour Elite Basketball Program.",
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
    // FAQ
    faqTitle: "Foire Aux Questions",
    faq1Question: "Qu'est-ce que l'Elite Basketball Program ?",
    faq1Answer: "L'Elite Basketball Program (EBP) est un écosystème complet conçu par Pallacanestro Varese pour former la prochaine génération de talents du basket-ball, offrant un entraînement de haut niveau, des infrastructures professionnelles et des parcours académiques.",
    faq2Question: "Où se trouve le Campus ?",
    faq2Answer: "Le Campus est situé Via Pirandello à Varèse, à 10 minutes à pied de la Foresteria et à seulement 5 minutes de l'Itelyum Arena, domicile de Pallacanestro Varese. Toutes nos installations sont parfaitement interconnectées.",
    faq3Question: "Comment puis-je postuler à un programme ?",
    faq3Answer: "Vous pouvez postuler à n'importe lequel de nos programmes en cliquant sur 'acheter maintenant' sur ce site ou en visitant le lien suivant : https://store.pallacanestrovarese.it/collections/elite-programs",
    faq4Question: "Comment se rendre à Varèse ?",
    faq4Answer: "Le Campus est situé Via Pirandello à Varèse, à 10 minutes à pied de la maison d'hôtes et à seulement 5 minutes de l'Itelyum Arena, domicile de Pallacanestro Varese. Nous rejoindre est très pratique car toutes nos installations sont parfaitement interconnectées et bien desservies par les transports en commun. Si vous arrivez par avion, Milan Malpensa (MXP) est le hub le plus proche, situé à seulement 30 minutes et relié directement à Varèse via la ligne de train S50. Pour ceux qui voyagent en train depuis Milan, des services directs fréquents partent des gares de Milano Centrale, Porta Garibaldi et Cadorna, avec des temps de trajet de 50 à 60 minutes en moyenne. Que vous arriviez de l'aéroport ou du centre-ville, le dernier tronçon vers le Campus est rapide et simple.",
    faq5Question: "Comment puis-je demander plus d'informations ?",
    faq5Answer: "Vous pouvez demander des informations en remplissant le formulaire dans n'importe quelle section du site en cliquant sur 'Demander des Infos' ou en nous contactant directement par e-mail à l'adresse f.bellotto@pallacanestrovarese.it.",
    // Summer Camp
    twoDifferentOptions: "Deux options différentes",
    residentialCamp: "Camp Résidentiel",
    dayCamp: "Camp de Jour",
    included: "Inclus :",
    privateSingleRoom: "Chambre individuelle privée",
    sharedCommonSpaces: "Espaces communs partagés",
    meals3: "3 repas par jour",
    sportsNutrition: "Menus basés sur la nutrition sportive",
    individualizedTraining: "Entraînement individuel 1 contre 1",
    teamPractice: "Entraînement en équipe",
    strengthTraining: "Entraînement de force et de performance",
    personalAnalytics: "Analyse des performances personnelles",
    eliteCoaching: "Personnel d'entraîneurs d'élite",
    officialGear: "Équipement officiel du camp",
    lunch: "Déjeuner",
    applyNowBtn: "Postuler Maintenant",
    depositNotice: "En postulant maintenant, un acompte de 290 € est requis pour tous les types de camps.<br className=\"hidden md:block\" /> Les détails sur les paiements du solde final suivront sous peu.",
    howToSubscribe: "Comment s'inscrire",
    depositDesc: "Pour vous inscrire au Pallacanestro Varese Elite Summer Camp, un acompte de 290 € est requis pour le Camp Résidentiel et le Camp de Jour.",
    followSteps: "Veuillez suivre ces étapes pour compléter votre inscription :",
    visitStore: "Visitez notre Boutique :",
    clickHere: "Cliquez ici",
    accessStore: "pour accéder à la boutique en ligne officielle.",
    submitDetails: "Soumettre les Détails :",
    provideInfo: "Fournissez les informations requises et complétez le paiement de l'acompte.",
    nextSteps: "Prochaines Étapes :",
    onceDeposit: "Une fois l'acompte traité, notre équipe vous contactera pour finaliser le paiement du solde restant et demander des documents supplémentaires.",
    waitingForYou: "LE PALLACANESTRO VARESE ELITE SUMMER CAMP VOUS ATTEND !",
    summerProgOffer1: "- chambres bien aménagées\n- salle à manger spacieuse\n- espace de détente\n- espaces verts privés",
    summerProgOffer2: "- service de restauration personnalisé\n- repas élaborés avec un accent sur la nutrition sportive",
    summerProgOffer3: "- terrain de basket\n- zones d'entraînement d'élite et de physiothérapie\n- salle de musculation et de récupération\n- vestiaire",
    summerProgOffer4: "- service de prise en charge et de retour à l'aéroport",
    touristOptions: "Options Touristiques",
    trainingAtArena: "Entraînement à l'Arena",
    extraTrainings: "Entraînements Supplémentaires",
    eliteTrainingStaff: "Personnel d'Entraînement d'Élite",
    physioterapists: "Physiothérapeutes",
    consulting: "Conseil",
    keyHighlights: "Points Forts",
    target: "Cible",
    timing: "Période",
    where: "Où",
    subscriptionDeadline: "Date Limite d'Inscription",
    pricing: "Tarifs",
    limitedSpots: "Places limitées disponibles",
    overview: "Aperçu",
    tbdTogether: "À définir ensemble",
    campusVarese: "Campus, Varèse",
    foresteriaCampus: "Rèsidence & Campus",
    // Program Tables
    standardProgram: "Programme Standard",
    premiumProgram: "Programme Premium",
    publicSchool: "École publique",
    privateSchool: "École internationale privée",
    fullTimeTraining: "Entraînement à temps plein",
    assignedToGroups: "Les athlètes seront affectés à des groupes de leur niveau",
    fullBoard: "Pension complète",
    privateRoom: "Chambre privée dans notre logement d'élite",
    elitePlayerPackage: "Forfait Joueur d'Élite",
    analytics: "Analytique",
    advancedStats: "Statistiques avancées et informations",
    videoAnalysis: "Analyse vidéo",
    extraTraining: "Entraînement supplémentaire",
    time: "Heure",
    activity: "Activité",
    wakeUpBreakfast: "Réveil et Petit-déjeuner",
    morningPractice: "Entraînement Matinal",
    strengthCond: "Force et Cond.",
    lunchRest: "Déjeuner et Repos",
    afternoonPractice: "Entraînement de l'Après-midi",
    freeTimeRecovery: "Temps Libre / Récupération",
    dinner: "Dîner",
    lightsOut: "Extinction des Feux",
    arrivalCheckIn: "Arrivée et Enregistrement",
    pickUp: "Ramassage",
    openInGoogleMaps: "Ouvrir dans Google Maps",
    grassrootsExcellence: "Excellence Grassroots",
    grassrootsExcellenceDesc: "Nous croyons au basketball comme un outil puissant pour la communauté. Notre programme favorise un esprit actif et positif, aidant les jeunes athlètes à développer des compétences sociales et un mode de vie sain.",
    elitePlayerDevelopment: "Développement des Joueurs d'Élite",
    elitePlayerDevelopmentDesc: "Pour ceux qui rêvent des grandes ligues, nous offrons le parcours ultime. En proposant un encadrement expert, des programmes d'entraînement professionnels et l'accès à des installations de haute qualité, nous cultivons les stars du basketball de demain.",
    twoPillarsOneVision: "Deux Piliers • Une Vision",
    eliteProfessionalIntegrationDesc: "C'est plus qu'un simple cours ; c'est une immersion dans les opérations quotidiennes d'une équipe de basketball de Serie A. En tant que stagiaire, vous pourrez :",
    shadowThePros: "Suivez les Pros",
    shadowTheProsDesc: "Acquérez des connaissances inestimables en observant et en apprenant de nos professionnels de l'entraînement expérimentés lors des entraînements et des matchs.",
    activeCourtParticipation: "Participation Active sur le Terrain",
    activeCourtParticipationDesc: "Jouez un rôle pratique en dirigeant des exercices avec des joueurs de Serie A et en assistant aux entraînements professionnels.",
    strategicDevelopment: "Développement Stratégique",
    strategicDevelopmentDesc: "Assistez aux réunions des entraîneurs pour comprendre les processus de prise de décision tactiques et stratégiques au plus haut niveau.",
    youthDevelopment: "Développement de la Jeunesse",
    youthDevelopmentDesc: "Contribuez à l'avenir du sport en assistant le personnel technique de nos équipes de jeunes.",
    theNextGeneration: "The Next Generation",
    theNextGenerationDesc: "Ce parcours est conçu pour les jeunes athlètes et les familles à la recherche d'une introduction premium au basketball. Notre cible est la \"Next Generation\" de joueurs qui souhaitent construire une base technique et motrice solide. Nous nous adressons aux parents qui privilégient des normes d'entraînement professionnelles et un environnement sportif sain et de grande valeur où les enfants peuvent tomber amoureux du jeu tout en apprenant le \"Varese Way\" de notre personnel certifié.",
    highPotentialProspects: "High-Potential Prospects",
    highPotentialProspectsDesc: "Ce parcours cible les espoirs à fort potentiel qui évoluent déjà à un haut niveau et visent une carrière professionnelle. Notre public ici comprend des athlètes, des agences et des fédérations à la recherche de l'ultime \"Pro Experience\". Ces joueurs recherchent l'audit technique complet : du mentorat par le personnel de Serie A et des sessions exclusives avec Luis Scola à l'analyse de données avancée et aux stratégies de gestion de carrière. C'est pour l'athlète prêt à combler le fossé entre l'excellence des jeunes et les circuits professionnels seniors.",
    ourKnowHow: "Notre savoir-faire",
    eliteTrainingMethods: "Méthodes d'entraînement d'élite",
    collaborationClubs: "Collaboration avec des clubs, des fédérations nationales ou des académies locales",
    ourBrand: "Notre marque",
    thePillars: "Les Piliers",
    fundamentals: "Fondamentaux",
    sportsScience: "Science du Sport",
    basketballLeadership: "Leadership au Basket",
    basketballAnalysis: "Analyse du Basket",
    treatmentRecovery: "Traitement/Récupération",
    strengthConditioning: "Force et Conditionnement",
    fundamentalsDesc: "TIR / PLAYMAKING / DRIBBLE / FINITION",
    sportsScienceDesc: "CATAPULT / PUSHBAND / INERTIEL",
    basketballLeadershipDesc: "COMPÉTENCES EN LEADERSHIP / CONDITIONNEMENT MENTAL",
    basketballAnalysisDesc: "ANALYSE DE PERFORMANCE AVANCÉE / BOXSCORE AVANCÉ / BIG DATA",
    treatmentRecoveryDesc: "PRÉVENTION DES BLESSURES / GESTION DE LA CHARGE DE TRAVAIL / RÉHABILITATION",
    strengthConditioningDesc: "DÉVELOPPEMENT DE LA FORCE / PUISSANCE / VITESSE / AGILITÉ / ENDURANCE",
    academyNextGenDesc: "Ce parcours est conçu pour les jeunes athlètes et les familles à la recherche d'une introduction premium au basketball. Notre cible est la \"Next Generation\" de joueurs qui souhaitent construire une base technique et motrice solide. Nous nous adressons aux parents qui privilégient des normes d'entraînement professionnelles et un environnement sportif sain et de grande valeur où les enfants peuvent tomber amoureux du jeu tout en apprenant le \"Varese Way\" de notre personnel certifié.",
    academyProspectsDesc: "Ce parcours cible les espoirs à fort potentiel qui évoluent déjà à un haut niveau et visent une carrière professionnelle. Notre public ici comprend des athlètes, des agences et des fédérations à la recherche de l'ultime \"Pro Experience\". Ces joueurs recherchent l'audit technique complet : du mentorat par le personnel de Serie A et des sessions exclusives avec Luis Scola à l'analyse de données avancée et aux stratégies de gestion de carrière. C'est pour l'athlète prêt à combler le fossé entre l'excellence des jeunes et les circuits professionnels seniors.",
    elitePackageAnalyticsTitle: "Analytics",
    elitePackageAnalyticsDesc: "Suivi constant des performances via des capteurs et des données biométriques pour optimiser chaque séance d'entraînement et prévenir les blessures.",
    elitePackageStatsTitle: "Statistiques avancées et informations",
    elitePackageStatsDesc: "Analyse approfondie des statistiques de jeu pour identifier les forces et les domaines d'amélioration tactique individuelle et collective.",
    elitePackageVideoTitle: "Analyse vidéo",
    elitePackageVideoDesc: "Sessions dédiées de revue vidéo pour corriger la technique de tir, les mouvements défensifs et la compréhension du jeu.",
    elitePackageTrainingTitle: "Entraînement supplémentaire",
    elitePackageTrainingDesc: "Entraînements supplémentaires personnalisés axés sur le développement des compétences spécifiques requises pour atteindre le niveau professionnel européen.",
    morning: "MATIN",
    afternoon: "APRÈS-MIDI",
    evening: "SOIR",
    technicalSkills: "Compétences Techniques et Tir",
    tacticalWorkshops: "Ateliers Tactiques",
    scrimmages: "Matchs d'Entraînement et Jeux",
    recoveryVideo: "Récupération et Analyse Vidéo",
    teamBuilding: "Activités de Team Building",
    ourSpecialGuestAndCEO: "Notre invité spécial et PDG",
    uniqueEventsMeetings: "Événements uniques et réunions",
    theTrainingStaff: "le personnel d'entraînement",
    sampleDailyRoutine: "Exemple de Routine Quotidienne",
    proLevelProgram: "programme de niveau pro",
    theProfessionalProLevelApproach: "L'Approche Professionnelle \"Pro-Level\"",
    theDataDrivenAnalyticalFocus: "L'Approche Analytique et Basée sur les Données",
    theFlexiblePersonalizedChoice: "Le Choix Flexible et Personnalisé",
    whatsIncluded: "Ce qui est inclus ?",
    accomodation: "Hébergement",
    housing: "Logement : Chambre individuelle dans notre dortoir",
    food: "Nourriture : Déjeuner et Dîner",
    coaching: "Entraînement (Coaching)",
    serieAPractice: "Présence aux entraînements de la Serie A",
    coachesMeetings: "Réunions des entraîneurs",
    runDrills: "Exécution d'exercices avec les joueurs de la Serie A",
    playersScouting: "Scouting des joueurs",
    serieAGames: "Présence aux matchs de la Serie A",
    youthTeamsAssistant: "Entraîneur adjoint des équipes de jeunes",
    hudlVideoAnalysis: "Analyse vidéo avec Hudl",
    resumeOpportunity: "Opportunité pour le CV",
    housingFeature1Title: "Salle à manger lumineuse et spacieuse",
    housingFeature1Desc: "avec une capacité de 18 places, idéale pour les repas partagés et le café du matin.",
    housingFeature2Title: "Espace commun meublé avec style",
    housingFeature2Desc: "qui sert de toile de fond parfaite pour socialiser, se détendre après une longue journée ou étudier tranquillement le soir.",
    housingFeature3Title: "Buanderie interne",
    housingFeature3Desc: "Une installation de buanderie dédiée et entièrement équipée",
    housingFeature4Title: "Connexion avec la nature",
    housingFeature4Desc: "Le dortoir est encadré par deux jardins privés magnifiquement aménagés.",
    housingEfficiency: "L'efficacité est au cœur de notre emplacement. Situé dans un quartier privilégié, le logement se trouve à seulement 5 minutes à pied du centre d'entraînement principal et des principales institutions académiques. Cette proximité garantit que vous pouvez passer moins de temps à vous déplacer et plus de temps à vous concentrer sur ce qui compte vraiment.",
    housingTitle: "HÉBERGEMENT",
    housingItem1: "chambres bien aménagées",
    housingItem2: "salle à manger spacieuse",
    housingItem3: "espace de détente",
    housingItem4: "espaces verts privés",
    foodTitle: "NOURRITURE",
    foodItem1: "service de restauration personnalisé",
    foodItem2: "repas élaborés avec un accent sur la nutrition sportive",
    trainingFacilityTitle: "INSTALLATION D'ENTRAÎNEMENT",
    trainingFacilityItem1: "terrain de basket",
    trainingFacilityItem2: "zones d'entraînement d'élite et de physiothérapie",
    trainingFacilityItem3: "salle de musculation et de récupération",
    trainingFacilityItem4: "vestiaire",
    transportationTitle: "TRANSPORT",
    transportationItem1: "service de prise en charge et de retour à l'aéroport"
  }
};

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group">
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="w-full h-auto object-cover" 
        referrerPolicy="no-referrer" 
      />
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const FormattedText = ({ text, className = "text-gray-400", programId, lang = 'en' }: { text: string, className?: string, programId?: string, lang?: Language }) => {
  if (!text) return null;

  const t = (key: keyof typeof TRANSLATIONS['en']) => TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key];

  const titles = [
    "our vision",
    "the program",
    "what's included?",
    "our elite housing",
    "cosa è incluso?",
    "¿qué está incluido?",
    "ce qui est inclus ?",
    "la nostra visione",
    "il programma",
    "nuestra visión",
    "el programa",
    "notre vision",
    "le programme",
    "contact us",
    "contattaci",
    "contáctanos",
    "contactez-nous",
    "A Comprehensive Two-Way Approach",
    "Target audience",
    "target audience",
    "When and where",
    "when and where",
    "when",
    "where",
    "The Elite Full-Time Training Program",
    "Target Audience & Future Opportunities",
    "Future Opportunities",
    "the elite player package",
    "il pacchetto giocatore d'élite",
    "el paquete de jugador de élite",
    "le forfait joueur d'élite",
    "our offers",
    "A Holistic 360° Offer",
    "World-Class Training & Sports Science",
    "Data-Driven Personalization",
    "Premium Living & Academic Success",
    "Elevate Your Game: The Elite Summer Camp",
    "The Summer Camp Offer: All-Inclusive Excellence",
    "The Full Time Training Program: A Year-Round Path to Pro",
    "Sample Daily Routine",
    "World-Class Sports Science & Personalization",
    "Academic Excellence & Living Standards",
    "Learn from the Best: Our Elite Team",
    "Master the Bench: Coaches Internship Program",
    "Elite Professional Integration",
    "Advanced Scouting and Analytics",
    "A Comprehensive \"All-Inclusive\" Package",
    "The Ultimate Resume Builder",
    "pro-level program",
    "Strategic Location & Italian Culture",
    "pricing",
    "the training staff",
    "the training program",
    "il nostro ospite speciale",
    "Our special guest and CEO",
    "Unique events & meetings",
    "when and where",
    "Un Approccio Completo a Due Vie",
    "Pubblico di riferimento",
    "pubblico di riferimento",
    "Quando e dove",
    "quando e dove",
    "quando",
    "dove",
    "Opportunità Future",
    "le nostre offerte",
    "EVENTI UNICI E INCONTRI",
    "LO STAFF TECNICO",
    "Esempio di Routine Giornaliera",
    "Integrazione Professionale d'Elite",
    "programma di livello pro",
    "prezzi",
    "il programma di allenamento",
    "Un Enfoque Completo de Dos Vías",
    "Público objetivo",
    "público objetivo",
    "Cuándo y dónde",
    "cuándo y dónde",
    "cuándo",
    "dónde",
    "Oportunidades Futuras",
    "nuestras ofertas",
    "Ejemplo de Rutina Diaria",
    "Integración Profesional de Élite",
    "programa de nivel pro",
    "precios",
    "el programa de entrenamiento",
    "Une Approche Complète à Deux Voies",
    "Public cible",
    "public cible",
    "Quand et où",
    "quand et où",
    "quand",
    "où",
    "Opportunités Futures",
    "nos offres",
    "Exemple de Routine Quotidienne",
    "Intégration Professionnelle d'Élite",
    "programme de niveau pro",
    "prix",
    "le programme d'entraînement",
    "The Professional \"Pro-Level\" Approach",
    "L'Approccio Professionale \"Pro-Level\"",
    "El Enfoque Profesional \"Nivel Pro\"",
    "L'Approche Professionnelle \"Niveau Pro\"",
    "The Data-Driven & Analytical Focus",
    "Il Focus Analitico e Basato sui Dati",
    "El Enfoque Analítico y Basado en Datos",
    "L'Approche Analytique et Basée sur les Données",
    "The Flexible & Personalized Choice",
    "La Scelta Flessibile e Personalizzata",
    "La Elección Flexible y Personalizada",
    "Le Choix Flexible et Personnalisé",
    "target audience",
    "our vision",
    "the program",
    "contact us",
    "How to subscribe",
    "Come iscriversi",
    "Cómo suscribirse",
    "Comment s'inscrire",
    "la nostra visione",
    "il programma",
    "contattaci",
    "nuestra visión",
    "el programa",
    "contáctanos",
    "notre vision",
    "le programme",
    "contactez-nous",
    "what we offer",
    "cosa offriamo",
    "lo que ofrecemos",
    "ce que nous offrons",
    "extra services",
    "servizi extra",
    "servicios extra",
    "services supplémentaires"
  ];

  const isTitleMatch = (title: string | null, englishTitle: string) => {
    if (!title) return false;
    const translations: Record<string, string[]> = {
      'Sample Daily Routine': ['Sample Daily Routine', 'Esempio di Routine Quotidiana', 'Esempio di Routine Giornaliera', 'Ejemplo de Rutina Diaria', 'Exemple de Routine Quotidienne'],
      'the training program': ['the training program', 'the program', 'il programma di allenamento', 'il programma', 'el programma di allenamento', 'el programa de entrenamiento', 'le programme d\'entraînement', 'le programme'],
      'the training staff': ['the training staff', 'lo staff tecnico', 'LO STAFF TECNICO', 'el personal de entrenamiento', 'le personnel d\'entraînement'],
      'il nostro ospite speciale': ['il nostro ospite speciale', 'Our special guest and CEO'],
      'Our special guest and CEO': ['Our special guest and CEO', 'Il nostro ospite speciale e CEO', 'Nuestro invitado speciale e CEO', 'Nuestro invitado especial y CEO', 'Notre invité spécial et PDG'],
      'Unique events & meetings': ['Unique events & meetings', 'Eventi unici e incontri', 'EVENTI UNICI E INCONTRI', 'Eventos únicos y reuniones', 'Événements uniques et réunions'],
      'A Comprehensive Two-Way Approach': ['A Comprehensive Two-Way Approach', 'Un Approccio Completo a Due Vie', 'Un Enfoque Completo de Dos Vías', 'Une Approche Complète à Deux Voies'],
      'Elite Professional Integration': ['Elite Professional Integration', 'Integrazione Professionale d\'Elite', 'Integración Professionale di Élite', 'Integración Profesional de Élite', 'Intégration Professionnelle d\'Élite'],
      'pro-level program': ['pro-level program', 'programma di livello pro', 'programa de nivel pro', 'programme de niveau pro'],
      "what's included?": ["what's included?", "cosa è incluso?", "¿qué está incluido?", "ce qui est inclus ?"],
      "our elite housing": ["our elite housing", "la nostra elite housing", "nuestro alojamiento de élite", "notre logement d'élite"],
      'contact us': ['contact us', 'contattaci', 'contáctanos', 'contactez-nous'],
      'when and where': ['when and where', 'Quando e dove', 'Cuándo y dónde', 'Quand et où', 'quando e dove', 'cuándo y dónde', 'quand et où'],
      'when': ['when', 'quando', 'cuándo', 'quand'],
      'where': ['where', 'dove', 'dónde', 'où'],
      'pricing': ['pricing', 'prezzi', 'precios', 'prix'],
      'the pillars': ['the pillars', 'i pilastri', 'los pilares', 'les piliers'],
      'the elite player package': ['the elite player package', 'il pacchetto giocatore d\'élite', 'el paquete de jugador de élite', 'le forfait joueur d\'élite'],
      'Key Highlights': ['Key Highlights', 'Punti Salienti', 'Puntos Clave', 'Points Forts'],
      'Overview': ['Overview', 'Panoramica', 'Resumen', 'Aperçu'],
      'Target Audience & Future Opportunities': ['Target Audience & Future Opportunities', 'Pubblico di riferimento e Opportunità Future', 'Público objetivo y Oportunidades Futuras', 'Public cible et Opportunités Futures'],
      'Future Opportunities': ['Future Opportunities', 'Opportunità Future', 'Oportunidades Futuras', 'Opportunités Futures'],
      'The Elite Full-Time Training Program': ['The Elite Full-Time Training Program', 'Il Programma di Allenamento Full-Time d\'Elite', 'El Programa de Entrenamiento a Tiempo Completo de Élite', 'Le Programme d\'Entraînement à Temps Plein d\'Élite'],
      'our offers': ['our offers', 'le nostre offerte', 'nuestras ofertas', 'nos offres'],
      'A Holistic 360° Offer': ['A Holistic 360° Offer', 'Un\'Offerta Olistica a 360°', 'Una Oferta Holística de 360°', 'Une Offre Holistique à 360°'],
      'World-Class Training & Sports Science': ['World-Class Training & Sports Science', 'Allenamento di Classe Mondiale e Scienza dello Sport', 'Entrenamiento de Classe Mundial y Ciencia del Deporte', 'Entraînement de Classe Mondiale et Science du Sport'],
      'Data-Driven Personalization': ['Data-Driven Personalization', 'Personalizzazione Basata sui Dati', 'Personalización Basada en Datos', 'Personnalisation Basée sur les Données'],
      'Premium Living & Academic Success': ['Premium Living & Academic Success', 'Vita Premium e Successo Accademico', 'Vida Premium e Successo Académico', 'Vie Premium et Succès Académique'],
      'Elevate Your Game: The Elite Summer Camp': ['Elevate Your Game: The Elite Summer Camp', 'Eleva il tuo Gioco: L\'Elite Summer Camp', 'Eleva tu Juego: El Campamento de Verano de Élite', 'Élevez votre Jeu : L\'Elite Summer Camp'],
      'The Summer Camp Offer: All-Inclusive Excellence': ['The Summer Camp Offer: All-Inclusive Excellence', 'L\'Offerta del Summer Camp: Eccellenza All-Inclusive', 'La Oferta del Campamento de Verano: Excelencia Todo Incluido', 'L\'Offre du Camp d\'Été : Excellence Tout Compris'],
      'The Full Time Training Program: A Year-Round Path to Pro': ['The Full Time Training Program: A Year-Round Path to Pro', 'Il Programma di Allenamento Full Time: Un Percorso verso il Professionismo Tutto l\'Anno', 'El Programa de Entrenamiento a Tiempo Completo: Un Camino al Profesionalismo Todo el Año', 'Le Programme d\'Entraînement à Temps Plein : Un Parcours vers le Pro Toute l\'Année'],
      'World-Class Sports Science & Personalization': ['World-Class Sports Science & Personalization', 'Scienza dello Sport di Classe Mondiale e Personalizzazione', 'Ciencia del Deporte de Clase Mundial y Personalización', 'Science du Sport de Classe Mondiale et Personnalisation'],
      'Academic Excellence & Living Standards': ['Academic Excellence & Living Standards', 'Eccellenza Accademica e Standard di Vita', 'Excelencia Académica y Estándares de Vida', 'Excellence Académique et Standards de Vie'],
      'target audience': ['target audience', 'pubblico di riferimento', 'público objetivo', 'public cible'],
      'our vision': ['our vision', 'la nostra visione', 'nuestra visión', 'notre vision'],
      'How to subscribe': ['How to subscribe', 'Come iscriversi', 'Cómo suscribirse', 'Comment s\'inscrire'],
      'what we offer': ['what we offer', 'cosa offriamo', 'lo que ofrecemos', 'ce que nous offrons'],
      'extra services': ['extra services', 'servizi extra', 'servicios extra', 'services supplémentaires'],
      'the program': ['the program', 'il programma', 'el programa', 'le programme']
    };
    return translations[englishTitle]?.some(t => title.toLowerCase() === t.toLowerCase()) || title.toLowerCase() === englishTitle.toLowerCase();
  };

  const blocks = text.split('\n\n').filter(block => block.trim() !== '');

  const sections: { title: string | null, paragraphs: string[][] }[] = [];
  let currentSection: { title: string | null, paragraphs: string[][] } = { title: null, paragraphs: [] };

  blocks.forEach(block => {
    const lines = block.split('\n');
    const firstLine = lines[0].trim();
    
    if (titles.includes(firstLine)) {
      if (currentSection.title !== null || currentSection.paragraphs.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { title: firstLine, paragraphs: [lines.slice(1)] };
    } else {
      currentSection.paragraphs.push(lines);
    }
  });
  if (currentSection.title !== null || currentSection.paragraphs.length > 0) {
    sections.push(currentSection);
  }

  const getStoreLink = () => {
    if (programId === 'academy') return "https://store.pallacanestrovarese.it/products/basketball-academy";
    if (programId === 'full-time') return "https://store.pallacanestrovarese.it/products/basketball-academy-copia";
    if (programId === 'summer-camp') return "https://store.pallacanestrovarese.it/products/elite-summer-camp?variant=52625081630986";
    if (programId === 'internship') return "https://store.pallacanestrovarese.it/products/coaches-internship-program?variant=52625121313034";
    if (programId === 'summer-prog') return "https://store.pallacanestrovarese.it/products/summer-elite-program?variant=52625241800970";
    return "#";
  };

  const renderLineWithLinks = (line: string, lIdx: number) => {
    const clickHereText = t('clickHere');
    const email1 = "e.robbiani@pallacanestrovarese.it";
    const email2 = "f.bellotto@pallacanestrovarese.it";
    
    const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapeRegExp(clickHereText)}|${escapeRegExp(email1)}|${escapeRegExp(email2)})`, 'g');
    
    const parts = line.split(regex);
    
    return (
      <p key={lIdx}>
        {parts.map((part, idx) => {
          if (part === clickHereText) {
            return <a key={idx} href={getStoreLink()} target="_blank" rel="noopener noreferrer" className="text-red-varese underline font-bold hover:text-red-700">{part}</a>;
          } else if (part === email1 || part === email2) {
            return <a key={idx} href={`mailto:${part}?subject=Basketball%20Academy%20program%20-%20info%20request`} className="text-red-varese underline font-bold hover:text-red-700">{part}</a>;
          }
          return part;
        })}
      </p>
    );
  };

  const renderSectionContent = (section: { title: string | null, paragraphs: string[][] }) => {
    if (isTitleMatch(section.title, 'the training program')) {
      return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4 w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 order-2 md:order-1">
            <div className="bg-white border border-zinc-200 p-3 rounded-xl shadow-md flex flex-col items-center md:items-end text-center md:text-right gap-1.5 hover:border-red-varese/50 transition-colors">
              <div className="bg-red-varese/10 p-2 rounded-full text-red-varese mb-1">
                <Target size={20} />
              </div>
              <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">{t('fundamentals')}</h4>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed tracking-wide">{t('fundamentalsDesc')}</p>
            </div>
            
            <div className="bg-white border border-zinc-200 p-3 rounded-xl shadow-md flex flex-col items-center md:items-end text-center md:text-right gap-1.5 hover:border-red-varese/50 transition-colors">
              <div className="bg-red-varese/10 p-2 rounded-full text-red-varese mb-1">
                <Activity size={20} />
              </div>
              <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">{t('sportsScience')}</h4>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed tracking-wide">{t('sportsScienceDesc')}</p>
            </div>

            <div className="bg-white border border-zinc-200 p-3 rounded-xl shadow-md flex flex-col items-center md:items-end text-center md:text-right gap-1.5 hover:border-red-varese/50 transition-colors">
              <div className="bg-red-varese/10 p-2 rounded-full text-red-varese mb-1">
                <Brain size={20} />
              </div>
              <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">{t('basketballLeadership')}</h4>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed tracking-wide">{t('basketballLeadershipDesc')}</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-red-varese/5 rounded-full blur-3xl -z-10 transform scale-150"></div>
            <img 
              src="https://i.imgur.com/RlAHFhI.png" 
              alt="Basketball Player Silhouette" 
              className="max-h-[300px] md:max-h-[400px] object-contain mix-blend-multiply" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 order-3 md:order-3">
            <div className="bg-white border border-zinc-200 p-3 rounded-xl shadow-md flex flex-col items-center md:items-start text-center md:text-left gap-1.5 hover:border-red-varese/50 transition-colors">
              <div className="bg-red-varese/10 p-2 rounded-full text-red-varese mb-1">
                <BarChart size={20} />
              </div>
              <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">{t('basketballAnalysis')}</h4>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed tracking-wide">{t('basketballAnalysisDesc')}</p>
            </div>

            <div className="bg-white border border-zinc-200 p-3 rounded-xl shadow-md flex flex-col items-center md:items-start text-center md:text-left gap-1.5 hover:border-red-varese/50 transition-colors">
              <div className="bg-red-varese/10 p-2 rounded-full text-red-varese mb-1">
                <HeartPulse size={20} />
              </div>
              <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">{t('treatmentRecovery')}</h4>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed tracking-wide">{t('treatmentRecoveryDesc')}</p>
            </div>

            <div className="bg-white border border-zinc-200 p-3 rounded-xl shadow-md flex flex-col items-center md:items-start text-center md:text-left gap-1.5 hover:border-red-varese/50 transition-colors">
              <div className="bg-red-varese/10 p-2 rounded-full text-red-varese mb-1">
                <Dumbbell size={20} />
              </div>
              <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">{t('strengthConditioning')}</h4>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed tracking-wide">{t('strengthConditioningDesc')}</p>
            </div>
          </div>
        </div>
      );
    }

    if (isTitleMatch(section.title || '', 'A Comprehensive Two-Way Approach')) {
      return (
        <div className="flex flex-col items-center w-full pt-2 pb-6">
          <div className="hidden md:block w-0.5 h-8 bg-red-varese/30 -mt-4 mb-0 z-0"></div>
          <div className="relative w-full">
            <div className="hidden md:block absolute top-0 left-[25%] right-[25%] h-0.5 bg-red-varese/30"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 pt-0 md:pt-8">
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute top-0 -mt-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-red-varese/30"></div>
                <div className="bg-white border-2 border-red-varese/20 p-5 rounded-2xl shadow-lg w-full hover:border-red-varese/50 transition-all hover:shadow-xl group">
                  <div className="flex items-center gap-2 mb-3 justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-varese"></div>
                    <h5 className="text-red-varese font-oswald font-bold uppercase tracking-wider text-center">{t('grassrootsExcellence')}</h5>
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed text-center">
                    {t('grassrootsExcellenceDesc')}
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="hidden md:block absolute top-0 -mt-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-red-varese/30"></div>
                <div className="bg-white border-2 border-red-varese/20 p-5 rounded-2xl shadow-lg w-full hover:border-red-varese/50 transition-all hover:shadow-xl group">
                  <div className="flex items-center gap-2 mb-3 justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-varese"></div>
                    <h5 className="text-red-varese font-oswald font-bold uppercase tracking-wider text-center">{t('elitePlayerDevelopment')}</h5>
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed text-center">
                    {t('elitePlayerDevelopmentDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center bg-zinc-50 p-3 rounded-lg border border-zinc-100 w-full">
             <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{t('twoPillarsOneVision')}</p>
          </div>
        </div>
      );
    }

    if (isTitleMatch(section.title || '', 'the training staff') || 
        isTitleMatch(section.title || '', 'Our special guest and CEO') || 
        isTitleMatch(section.title || '', 'Unique events & meetings') ||
        isTitleMatch(section.title || '', 'How to subscribe') ||
        isTitleMatch(section.title || '', 'il nostro ospite speciale') ||
        isTitleMatch(section.title || '', 'our elite housing')) {
      
      const allTextLines: string[] = [];
      const allImageLines: string[] = [];
      
      section.paragraphs.forEach(paragraphLines => {
        paragraphLines.forEach(line => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('[img]') && trimmedLine.endsWith('[/img]')) {
            allImageLines.push(trimmedLine);
          } else if (trimmedLine.length > 0) {
            allTextLines.push(trimmedLine);
          }
        });
      });

      if (allImageLines.length > 0) {
        const isSpecialGuest = isTitleMatch(section.title || '', 'il nostro ospite speciale') || isTitleMatch(section.title || '', 'Our special guest and CEO');
        const isEliteHousing = isTitleMatch(section.title || '', 'our elite housing');
        
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className={`space-y-4 ${isSpecialGuest ? 'md:order-2' : ''}`}>
              {allTextLines.map((line, lIdx) => {
                if (line.includes("HOUSING_FEATURES_PLACEHOLDER")) {
                  const housingFeatures = [
                    {
                      title: t('housingFeature1Title'),
                      desc: t('housingFeature1Desc')
                    },
                    {
                      title: t('housingFeature2Title'),
                      desc: t('housingFeature2Desc')
                    },
                    {
                      title: t('housingFeature3Title'),
                      desc: t('housingFeature3Desc')
                    },
                    {
                      title: t('housingFeature4Title'),
                      desc: t('housingFeature4Desc')
                    }
                  ];
                  return (
                    <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {housingFeatures.map((item, i) => (
                        <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                          <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-2 text-lg">{item.title}</h5>
                          <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (line.includes("HOUSING_EFFICIENCY_PLACEHOLDER")) {
                  return (
                    <div key={lIdx} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm mt-4">
                      <p className="text-zinc-600 text-sm leading-relaxed">{t('housingEfficiency')}</p>
                    </div>
                  );
                }
                if (line.includes("SUMMER_PROG_OFFER_BOXES")) {
                  const boxes = [
                    { icon: <Home className="text-red-varese" size={28} />, text: t('summerProgOffer1' as any) },
                    { icon: <Utensils className="text-red-varese" size={28} />, text: t('summerProgOffer2' as any) },
                    { icon: <Dumbbell className="text-red-varese" size={28} />, text: t('summerProgOffer3' as any) },
                    { icon: <Plane className="text-red-varese" size={28} />, text: t('summerProgOffer4' as any) },
                  ];
                  return (
                    <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-8">
                      {boxes.map((box, i) => (
                        <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
                          <div className="bg-red-varese/10 w-12 h-12 rounded-xl flex items-center justify-center">
                            {box.icon}
                          </div>
                          <div className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
                            {box.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (line.includes("SUMMER_PROG_EXTRA_SERVICES_BOXES")) {
                  const boxes = [
                    { icon: <Landmark className="text-red-varese" size={28} />, text: t('touristOptions' as any) },
                    { icon: <Trophy className="text-red-varese" size={28} />, text: t('trainingAtArena' as any) },
                    { icon: <Dumbbell className="text-red-varese" size={28} />, text: t('extraTrainings' as any) },
                    { icon: <Megaphone className="text-red-varese" size={28} />, text: t('eliteTrainingStaff' as any) },
                    { icon: <Stethoscope className="text-red-varese" size={28} />, text: t('physioterapists' as any) },
                    { icon: <LineChart className="text-red-varese" size={28} />, text: t('consulting' as any) },
                  ];
                  return (
                    <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-8">
                      {boxes.map((box, i) => (
                        <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
                          <div className="bg-red-varese/10 w-12 h-12 rounded-xl flex items-center justify-center">
                            {box.icon}
                          </div>
                          <div className="text-zinc-900 font-bold uppercase tracking-wider text-sm">
                            {box.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                return <p key={lIdx} className="text-zinc-600 leading-relaxed">{line}</p>;
              })}
            </div>
            <div className={`space-y-4 ${isSpecialGuest ? 'md:order-1' : ''}`}>
              {isEliteHousing ? (
                <ImageCarousel images={allImageLines.map(line => line.slice(5, -6))} />
              ) : (
                allImageLines.map((line, lIdx) => {
                  const src = line.slice(5, -6);
                  return <img key={lIdx} src={src} alt="Section Image" className={`${isSpecialGuest ? 'w-2/3' : 'w-full'} rounded-2xl shadow-lg`} referrerPolicy="no-referrer" />;
                })
              )}
            </div>
          </div>
        );
      }

      return (
        <div className="space-y-4">
          {allTextLines.map((line, lIdx) => {
            if (line.includes("HOUSING_FEATURES_PLACEHOLDER")) {
              const housingFeatures = [
                {
                  title: t('housingFeature1Title'),
                  desc: t('housingFeature1Desc')
                },
                {
                  title: t('housingFeature2Title'),
                  desc: t('housingFeature2Desc')
                },
                {
                  title: t('housingFeature3Title'),
                  desc: t('housingFeature3Desc')
                },
                {
                  title: t('housingFeature4Title'),
                  desc: t('housingFeature4Desc')
                }
              ];
              return (
                <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {housingFeatures.map((item, i) => (
                    <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-2 text-lg">{item.title}</h5>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.includes("HOUSING_EFFICIENCY_PLACEHOLDER")) {
              return (
                <div key={lIdx} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm mt-4">
                  <p className="text-zinc-600 text-sm leading-relaxed">{t('housingEfficiency')}</p>
                </div>
              );
            }
            if (line.includes("SUMMER_PROG_OFFER_BOXES")) {
              const boxes = [
                { icon: <Home className="text-red-varese" size={28} />, text: t('summerProgOffer1' as any) },
                { icon: <Utensils className="text-red-varese" size={28} />, text: t('summerProgOffer2' as any) },
                { icon: <Dumbbell className="text-red-varese" size={28} />, text: t('summerProgOffer3' as any) },
                { icon: <Plane className="text-red-varese" size={28} />, text: t('summerProgOffer4' as any) },
              ];
              return (
                <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-8">
                  {boxes.map((box, i) => (
                    <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
                      <div className="bg-red-varese/10 w-12 h-12 rounded-xl flex items-center justify-center">
                        {box.icon}
                      </div>
                      <div className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
                        {box.text}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.includes("SUMMER_PROG_EXTRA_SERVICES_BOXES")) {
              const boxes = [
                { icon: <Landmark className="text-red-varese" size={28} />, text: t('touristOptions' as any) },
                { icon: <Trophy className="text-red-varese" size={28} />, text: t('trainingAtArena' as any) },
                { icon: <Dumbbell className="text-red-varese" size={28} />, text: t('extraTrainings' as any) },
                { icon: <Megaphone className="text-red-varese" size={28} />, text: t('eliteTrainingStaff' as any) },
                { icon: <Stethoscope className="text-red-varese" size={28} />, text: t('physioterapists' as any) },
                { icon: <LineChart className="text-red-varese" size={28} />, text: t('consulting' as any) },
              ];
              return (
                <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-8">
                  {boxes.map((box, i) => (
                    <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
                      <div className="bg-red-varese/10 w-12 h-12 rounded-xl flex items-center justify-center">
                        {box.icon}
                      </div>
                      <div className="text-zinc-900 font-bold uppercase tracking-wider text-sm">
                        {box.text}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.includes("WHAT_WE_OFFER_TABLE_PLACEHOLDER")) {
              return null;
            }
            return <p key={lIdx} className="text-zinc-600 leading-relaxed">{line}</p>;
          })}
        </div>
      );
    }

    if (isTitleMatch(section.title || '', 'Elite Professional Integration')) {
      return (
        <div className="space-y-6">
          <p className="text-zinc-600">{t('eliteProfessionalIntegrationDesc')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-md flex flex-col gap-2">
              <span className="text-red-varese font-bold uppercase tracking-wider text-xs">{t('shadowThePros')}</span>
              <p className="text-zinc-600 text-xs leading-relaxed">{t('shadowTheProsDesc')}</p>
            </div>
            <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-md flex flex-col gap-2">
              <span className="text-red-varese font-bold uppercase tracking-wider text-xs">{t('activeCourtParticipation')}</span>
              <p className="text-zinc-600 text-xs leading-relaxed">{t('activeCourtParticipationDesc')}</p>
            </div>
            <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-md flex flex-col gap-2">
              <span className="text-red-varese font-bold uppercase tracking-wider text-xs">{t('strategicDevelopment')}</span>
              <p className="text-zinc-600 text-xs leading-relaxed">{t('strategicDevelopmentDesc')}</p>
            </div>
            <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-md flex flex-col gap-2">
              <span className="text-red-varese font-bold uppercase tracking-wider text-xs">{t('youthDevelopment')}</span>
              <p className="text-zinc-600 text-xs leading-relaxed">{t('youthDevelopmentDesc')}</p>
            </div>
          </div>
        </div>
      );
    }

    if (isTitleMatch(section.title, 'when and where')) {
      const isDirectionMap = programId !== 'academy';
      const mapUrl = isDirectionMap 
        ? "https://www.google.com/maps/dir/Seconda+Strada+Varese+-+Abbigliamento,+scarpe+e+accessori+moda,+Via+Giovanni+Borghi,+12,+21100+Varese+VA/Campus+Varese,+Via+Luigi+Pirandello,+31,+21100+Varese+VA/@45.8363216,8.7962555,1293m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x47867fad6f946d8b:0x84ecbc071b6f2b60!2m2!1d8.7981638!2d45.8337092!1m5!1m1!1s0x47867f004a963285:0x68ef706dc0f95da5!2m2!1d8.8028662!2d45.8386915!3e2?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
        : "https://www.google.com/maps/place/Campus+Varese/@45.8386915,8.8002913,647m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47867f004a963285:0x68ef706dc0f95da5!8m2!3d45.8386915!4d8.8028662!16s%2Fg%2F11zj10k1df?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D";

      return (
        <div className="space-y-4">
          {section.paragraphs.map((paragraphLines, pIdx) => (
            <div key={pIdx} className="space-y-2">
              {paragraphLines.map((line, lIdx) => <p key={lIdx}>{line}</p>)}
            </div>
          ))}
          <a 
            href={mapUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative group mt-4"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
              <div className="bg-white text-red-varese px-4 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg transform translate-y-2 group-hover:translate-y-0">
                {t('openInGoogleMaps')}
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.568461763133!2d8.80029127664188!3d45.83869147107873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867f004a963285%3A0x68ef706dc0f95da5!2sCampus%20Varese!5e0!3m2!1sen!2sit!4v1709614800000!5m2!1sen!2sit" 
              width="100%" 
              height="250" 
              style={{ border: 0, pointerEvents: 'none' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Varese Map"
            ></iframe>
          </a>
        </div>
      );
    }

    if (isTitleMatch(section.title, 'pricing') || isTitleMatch(section.title, 'contact us')) {
      return (
        <div className="space-y-4">
          {section.paragraphs.map((paragraphLines, pIdx) => (
            <div key={pIdx} className="space-y-2">
              {paragraphLines.map((line, lIdx) => renderLineWithLinks(line, lIdx))}
            </div>
          ))}
        </div>
      );
    }
    
    return (
      <div className="space-y-4">
        {section.paragraphs.map((paragraphLines, pIdx) => (
          <div key={pIdx} className="space-y-2">
          {paragraphLines.map((line, lIdx) => {
            if (line.includes("OFFERS_TABLES_PLACEHOLDER")) {
              return (
                <div key={lIdx} className="mt-4 flex flex-col md:flex-row gap-6 w-full">
                  {/* Standard Program Table */}
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-zinc-200 hover:border-red-varese/30 transition-all">
                    <div className="text-center mb-6">
                      <h5 className="font-oswald text-zinc-900 font-bold uppercase tracking-wider text-xl">{t('standardProgram')}</h5>
                      <div className="text-red-varese font-black text-2xl mt-1">€15.000/year</div>
                    </div>
                    <div className="space-y-3">
                      {[
                        t('publicSchool'),
                        t('fullTimeTraining'),
                        t('assignedToGroups'),
                        t('fullBoard'),
                        t('privateRoom')
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
                          <CheckCircle2 size={16} className="text-red-varese flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Premium Program Table */}
                  <div className="flex-1 bg-zinc-900 p-6 rounded-2xl shadow-xl border border-red-varese/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-varese/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="text-center mb-6 relative z-10">
                      <h5 className="font-oswald text-white font-bold uppercase tracking-wider text-xl">{t('premiumProgram')}</h5>
                      <div className="text-red-varese font-black text-2xl mt-1">€30.000/year</div>
                    </div>
                    <div className="space-y-3 relative z-10">
                      {[
                        t('privateSchool'),
                        t('fullTimeTraining'),
                        t('assignedToGroups'),
                        t('fullBoard'),
                        t('privateRoom')
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                          <CheckCircle2 size={16} className="text-red-varese flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                      
                      <div className="pt-4 mt-4 border-t border-white/10">
                        <div className="text-red-varese font-black uppercase tracking-widest text-xs mb-3">{t('elitePlayerPackage')}</div>
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            t('analytics'),
                            t('advancedStats'),
                            t('videoAnalysis'),
                            t('extraTraining')
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-white font-bold">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-varese"></div>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            if (line.includes("THE_PILLARS_PLACEHOLDER")) {
              const academyBoxes = [
                { title: t('ourKnowHow') },
                { title: t('eliteTrainingMethods') },
                { title: t('collaborationClubs') },
                { title: t('ourBrand') }
              ];
              return (
                <div key={lIdx} className="mt-8">
                  <h4 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-4 text-xl text-center">
                    {t('thePillars')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {academyBoxes.map((item, i) => (
                      <div key={i} className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center min-h-[100px]">
                        <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider text-lg">{item.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            if (line.includes("ACADEMY_TABLES_PLACEHOLDER")) {
              return (
                <div key={lIdx} className="mt-4 flex flex-col xl:flex-row gap-4 w-full">
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
                    <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-4 text-lg text-center">{t('theNextGeneration')}</h5>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {t('academyNextGenDesc')}
                    </p>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
                    <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-4 text-lg text-center">{t('highPotentialProspects')}</h5>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {t('academyProspectsDesc')}
                    </p>
                  </div>
                </div>
              );
            }
            if (line.includes("ELITE_PACKAGE_PLACEHOLDER")) {
              const packageItems = [
                {
                  title: t('elitePackageAnalyticsTitle'),
                  desc: t('elitePackageAnalyticsDesc'),
                  icon: <LineChart className="text-red-varese" size={24} />
                },
                {
                  title: t('elitePackageStatsTitle'),
                  desc: t('elitePackageStatsDesc'),
                  icon: <BarChart className="text-red-varese" size={24} />
                },
                {
                  title: t('elitePackageVideoTitle'),
                  desc: t('elitePackageVideoDesc'),
                  icon: <Play className="text-red-varese" size={24} fill="currentColor" />
                },
                {
                  title: t('elitePackageTrainingTitle'),
                  desc: t('elitePackageTrainingDesc'),
                  icon: <Dumbbell className="text-red-varese" size={24} />
                }
              ];
              return (
                <div key={lIdx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {packageItems.map((item, i) => (
                    <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
                      <div className="bg-red-varese/10 w-10 h-10 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-2 text-lg">{item.title}</h5>
                        <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.includes("HOUSING_FEATURES_PLACEHOLDER")) {
              const housingFeatures = [
                {
                  title: t('housingFeature1Title'),
                  desc: t('housingFeature1Desc')
                },
                {
                  title: t('housingFeature2Title'),
                  desc: t('housingFeature2Desc')
                },
                {
                  title: t('housingFeature3Title'),
                  desc: t('housingFeature3Desc')
                },
                {
                  title: t('housingFeature4Title'),
                  desc: t('housingFeature4Desc')
                }
              ];
              return (
                <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {housingFeatures.map((item, i) => (
                    <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-2 text-lg">{item.title}</h5>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.includes("HOUSING_EFFICIENCY_PLACEHOLDER")) {
              return (
                <div key={lIdx} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm mt-4">
                  <p className="text-zinc-600 text-sm leading-relaxed">{t('housingEfficiency')}</p>
                </div>
              );
            }
            if (line.includes("SUMMER_PROG_OFFER_BOXES")) {
              const boxes = [
                { icon: <Home className="text-red-varese" size={28} />, text: t('summerProgOffer1' as any) },
                { icon: <Utensils className="text-red-varese" size={28} />, text: t('summerProgOffer2' as any) },
                { icon: <Dumbbell className="text-red-varese" size={28} />, text: t('summerProgOffer3' as any) },
                { icon: <Plane className="text-red-varese" size={28} />, text: t('summerProgOffer4' as any) },
              ];
              return (
                <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-8">
                  {boxes.map((box, i) => (
                    <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
                      <div className="bg-red-varese/10 w-12 h-12 rounded-xl flex items-center justify-center">
                        {box.icon}
                      </div>
                      <div className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
                        {box.text}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.includes("SUMMER_PROG_EXTRA_SERVICES_BOXES")) {
              const boxes = [
                { icon: <Landmark className="text-red-varese" size={28} />, text: t('touristOptions' as any) },
                { icon: <Trophy className="text-red-varese" size={28} />, text: t('trainingAtArena' as any) },
                { icon: <Dumbbell className="text-red-varese" size={28} />, text: t('extraTrainings' as any) },
                { icon: <Megaphone className="text-red-varese" size={28} />, text: t('eliteTrainingStaff' as any) },
                { icon: <Stethoscope className="text-red-varese" size={28} />, text: t('physioterapists' as any) },
                { icon: <LineChart className="text-red-varese" size={28} />, text: t('consulting' as any) },
              ];
              return (
                <div key={lIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-8">
                  {boxes.map((box, i) => (
                    <div key={i} className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
                      <div className="bg-red-varese/10 w-12 h-12 rounded-xl flex items-center justify-center">
                        {box.icon}
                      </div>
                      <div className="text-zinc-900 font-bold uppercase tracking-wider text-sm">
                        {box.text}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.includes("WHAT_WE_OFFER_TABLE_PLACEHOLDER")) {
              return null;
            }
            if (line.includes("WHAT_IS_INCLUDED_TABLE_PLACEHOLDER")) {
              return (
                <div key={lIdx} className="mt-8 mb-8 w-full">
                  <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <tbody className="divide-y divide-zinc-100">
                        <tr>
                          <td className="px-6 py-4 font-bold text-zinc-900 w-1/3 align-top bg-zinc-50">{t('accomodation')}:</td>
                          <td className="px-6 py-4 text-zinc-600">
                            <ul className="space-y-1">
                              <li>{t('housing')}</li>
                              <li>{t('food')}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-zinc-900 w-1/3 align-top bg-zinc-50">{t('coaching')}:</td>
                          <td className="px-6 py-4 text-zinc-600">
                            <ul className="space-y-1">
                              <li>{t('serieAPractice')}</li>
                              <li>{t('coachesMeetings')}</li>
                              <li>{t('runDrills')}</li>
                              <li>{t('playersScouting')}</li>
                              <li>{t('serieAGames')}</li>
                              <li>{t('youthTeamsAssistant')}</li>
                              <li>{t('hudlVideoAnalysis')}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-zinc-900 w-1/3 align-top bg-zinc-50" colSpan={2}>{t('resumeOpportunity')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }
            if (line.includes("TABLES_PLACEHOLDER")) {
              return (
                <div key={lIdx} className="mt-4 flex flex-col xl:flex-row gap-4 w-full">
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                    <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-1 text-lg text-center">{t('residentialCamp')}</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[10px] sm:text-xs text-left">
                        <thead className="text-[10px] sm:text-xs text-zinc-500 uppercase bg-zinc-50">
                          <tr>
                            <th className="px-2 py-1.5 rounded-tl-lg">{t('time')}</th>
                            <th className="px-2 py-1.5 rounded-tr-lg">{t('activity')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">07:30</td><td className="px-2 py-1.5">{t('wakeUpBreakfast')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">09:00</td><td className="px-2 py-1.5">{t('morningPractice')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">11:30</td><td className="px-2 py-1.5">{t('strengthCond')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">13:00</td><td className="px-2 py-1.5">{t('lunchRest')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">15:30</td><td className="px-2 py-1.5">{t('afternoonPractice')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">18:00</td><td className="px-2 py-1.5">{t('freeTimeRecovery')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">19:30</td><td className="px-2 py-1.5">{t('dinner')}</td></tr>
                          <tr><td className="px-2 py-1.5 font-medium">21:30</td><td className="px-2 py-1.5">{t('lightsOut')}</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                    <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-1 text-lg text-center">{t('dayCamp')}</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[10px] sm:text-xs text-left">
                        <thead className="text-[10px] sm:text-xs text-zinc-500 uppercase bg-zinc-50">
                          <tr>
                            <th className="px-2 py-1.5 rounded-tl-lg">{t('time')}</th>
                            <th className="px-2 py-1.5 rounded-tr-lg">{t('activity')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">08:30</td><td className="px-2 py-1.5">{t('arrivalCheckIn')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">09:00</td><td className="px-2 py-1.5">{t('morningPractice')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">11:30</td><td className="px-2 py-1.5">{t('strengthCond')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">13:00</td><td className="px-2 py-1.5">{t('lunchRest')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">15:30</td><td className="px-2 py-1.5">{t('afternoonPractice')}</td></tr>
                          <tr className="border-b border-zinc-100"><td className="px-2 py-1.5 font-medium">18:00</td><td className="px-2 py-1.5">{t('freeTimeRecovery')}</td></tr>
                          <tr><td className="px-2 py-1.5 font-medium">18:30</td><td className="px-2 py-1.5">{t('pickUp')}</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            }
            if (line.startsWith("[img]") && line.endsWith("[/img]")) {
              const url = line.replace("[img]", "").replace("[/img]", "");
              return (
                <div key={lIdx} className="mt-4 mb-4">
                  <img src={url} alt="Housing" className="w-full h-auto rounded-xl shadow-lg object-cover" referrerPolicy="no-referrer" />
                </div>
              );
            }
            if (line.startsWith("SUBTITLE:")) {
              return (
                <h4 key={lIdx} className="font-oswald text-red-varese font-bold uppercase tracking-wider mt-12 mb-2 text-lg border-b border-zinc-200 pb-2">
                  {line.replace("SUBTITLE:", "")}
                </h4>
              );
            }
            if (line.includes("e.robbiani@pallacanestrovarese.it") || line.includes("f.bellotto@pallacanestrovarese.it") || line.includes(t('clickHere'))) {
              return renderLineWithLinks(line, lIdx);
            }
            if (line.startsWith("BOXES:")) {
              const boxes = line.replace("BOXES:", "").split("|").map(b => {
                const parts = b.split(":");
                return { title: parts[0].trim(), description: parts[1]?.trim() };
              });
              const gridCols = boxes.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2 lg:grid-cols-4';
              return (
                <div key={lIdx} className={`grid ${gridCols} gap-6 mt-8`}>
                  {boxes.map((box, bIdx) => (
                    <div key={bIdx} className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center hover:border-red-varese/50 transition-all hover:shadow-xl group min-h-[160px]">
                      <span className="text-zinc-900 font-bold uppercase tracking-widest text-sm group-hover:text-red-varese transition-colors mb-3">{box.title}</span>
                      {box.description && <p className="text-zinc-500 text-xs mt-1 leading-relaxed max-w-[200px] mx-auto">{box.description}</p>}
                    </div>
                  ))}
                </div>
              );
            }
            if (line.startsWith("TIMELINE:")) {
              const items = line.replace("TIMELINE:", "").split("|").map(item => {
                const [date, ...descParts] = item.split(":");
                return { date: date.trim(), description: descParts.join(":").trim() };
              });
              return (
                <div key={lIdx} className="mt-8 space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-100">
                  {items.map((item, iIdx) => (
                    <div key={iIdx} className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-red-varese bg-white group-hover:bg-red-varese transition-colors z-10" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <span className="font-oswald font-bold text-red-varese uppercase tracking-wider text-sm whitespace-nowrap">{item.date}</span>
                        <p className="text-zinc-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            if (line.startsWith("MAP:")) {
              const mapUrl = line.replace("MAP:", "").trim();
              return (
                <div key={lIdx} className="mt-6 w-full h-[300px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200 group relative bg-zinc-100">
                  <div className="absolute inset-0 bg-[url('https://i.imgur.com/8MA9g3s.png')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl max-w-xs transform group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="flex items-center justify-center w-12 h-12 bg-red-varese rounded-full mb-3 mx-auto shadow-lg shadow-red-varese/20">
                        <MapPin className="text-white w-6 h-6" />
                      </div>
                      <h5 className="font-oswald font-bold text-zinc-900 uppercase tracking-wider mb-1">Interactive Map</h5>
                      <p className="text-zinc-600 text-[10px] mb-4">View the strategic location of our facilities and the walking distance between them.</p>
                      <a 
                        href={mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-varese text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-md"
                      >
                        Open in Google Maps
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
            if (line.startsWith("INFO_BOX:")) {
              return (
                <div key={lIdx} className="mt-8 bg-zinc-50 border-l-4 border-red-varese p-6 rounded-r-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-varese/10 p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-red-varese" />
                    </div>
                    <p className="text-zinc-700 font-medium italic leading-relaxed">
                      {line.replace("INFO_BOX:", "").trim()}
                    </p>
                  </div>
                </div>
              );
            }
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0 && colonIndex < line.length - 1 && line[colonIndex + 1] === ' ' && colonIndex < 40) {
              const title = line.substring(0, colonIndex + 1);
              const content = line.substring(colonIndex + 1);
              return (
                <p key={lIdx}>
                  <strong className="text-red-varese font-bold">{title}</strong>{content}
                </p>
              );
            }
            return <p key={lIdx}>{line}</p>;
          })}
        </div>
      ))}
    </div>
  );
  };

  const getImage1 = () => {
    if (programId === 'academy') return "https://i.imgur.com/pXDyBdM.jpeg";
    if (programId === 'full-time') return "https://i.imgur.com/lZrpsVW.jpeg";
    if (programId === 'summer-camp') return "https://i.imgur.com/PU1FIpF.png";
    if (programId === 'internship') return "https://i.imgur.com/OzLgJN6.jpeg";
    if (programId === 'summer-prog') return "https://i.imgur.com/fFsfxKt.jpeg";
    if (programId === 'player-package') return "https://i.imgur.com/NahA03T.jpeg";
    return `https://picsum.photos/seed/${programId}-1/800/600`;
  };
  const getImage2 = () => {
    if (programId === 'academy') return "https://i.imgur.com/80WI5TR.png";
    if (programId === 'full-time') return "https://i.imgur.com/uRj4KZi.jpeg";
    if (programId === 'summer-camp') return "https://i.imgur.com/V5peTOC.png";
    if (programId === 'internship') return "https://i.imgur.com/ZbuFjIf.jpeg";
    if (programId === 'summer-prog') return "https://i.imgur.com/1y909x4.jpeg";
    if (programId === 'player-package') return "https://i.imgur.com/Vc8C4E6.jpeg";
    return `https://picsum.photos/seed/${programId}-2/800/600`;
  };
  const getImage3 = () => {
    if (programId === 'academy') return "https://i.imgur.com/QgRPCiU.jpeg";
    if (programId === 'full-time') return "https://i.imgur.com/8MA9g3s.png";
    if (programId === 'summer-camp') return "https://i.imgur.com/f3NtI5T.png";
    if (programId === 'internship') return "https://i.imgur.com/aJPDUxI.png";
    if (programId === 'summer-prog') return "https://i.imgur.com/Wm6SxMP.png";
    if (programId === 'player-package') return "https://i.imgur.com/xnFvd8X.jpeg";
    return `https://picsum.photos/seed/${programId}-3/800/600`;
  };

  return (
    <div className={`${className} text-sm leading-relaxed`}>
      <div className="flex flex-col gap-12">
        {sections.map((section, idx) => {
          let imageUrl: string | null = null;
          let imageUrls: string[] | null = null;
          let imagePosition = 'right';
          
          if (idx === 0) {
            imageUrl = getImage1();
            imagePosition = 'right';
          } else if (idx === 1) {
            imageUrl = getImage2();
            imagePosition = 'left';
          } else if (isTitleMatch(section.title, 'Sample Daily Routine')) {
            imageUrl = getImage3();
            imagePosition = 'left';
          } else if (isTitleMatch(section.title, 'what we offer') && programId === 'summer-prog') {
            imageUrls = [
              "https://i.imgur.com/vA5u7QX.png",
              "https://i.imgur.com/VhfguSQ.png",
              "https://i.imgur.com/5B8EOkI.png",
              "https://i.imgur.com/JF7bpGP.png",
              "https://i.imgur.com/atjdOhb.png",
              "https://i.imgur.com/nkKHSzi.png"
            ];
            imagePosition = 'right';
          } else if (isTitleMatch(section.title, 'extra services') && programId === 'summer-prog') {
            imageUrl = "https://i.imgur.com/VXwjt0o.jpeg";
            imagePosition = 'right';
          } else if (idx === 2 && !isTitleMatch(section.title, 'the training program') && !isTitleMatch(section.title, 'our elite housing') && programId !== 'full-time') {
            imageUrl = getImage3();
            imagePosition = 'right';
          } else if (idx === 3 && programId === 'full-time') {
            imageUrls = ["https://i.imgur.com/S30AYTl.png", "https://i.imgur.com/AtzE0c6.png"];
            imagePosition = 'right';
          } else if (idx === 4 && programId === 'full-time') {
            imageUrl = "https://i.imgur.com/jRv0Buv.jpeg";
            imagePosition = 'left';
          } else if (idx === 5 && programId === 'full-time') {
            imageUrl = null;
            imagePosition = 'right';
          } else if (isTitleMatch(section.title, 'Our special guest and CEO')) {
            imageUrl = "https://i.imgur.com/H0gXCIE.png";
            imagePosition = 'left';
          } else if (isTitleMatch(section.title, 'Unique events & meetings')) {
            imageUrl = "https://i.imgur.com/MafMwTk.png";
            imagePosition = 'right';
          }

          return (
            <div key={idx} className="flex flex-col">
              <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${idx > 0 ? 'mt-8' : ''}`}>
                {(imageUrl || imageUrls) && imagePosition === 'left' && (
                  <div className={`flex-1 ${isTitleMatch(section.title, 'Our special guest and CEO') ? 'lg:flex-[1] max-w-lg mx-auto' : (idx === 1 && (programId === 'academy' || programId === 'summer-prog' || programId === 'player-package') ? 'lg:flex-none lg:w-1/3 max-w-[350px] mx-auto' : (idx === 4 && programId === 'full-time' ? 'lg:flex-none lg:w-1/3 max-w-[400px] mx-auto' : 'lg:flex-[1.5]'))} w-full order-2 lg:order-1`}>
                    {imageUrl && <img src={imageUrl} alt={section.title || `Section ${idx + 1}`} className="w-full h-auto rounded-xl shadow-lg object-cover" referrerPolicy="no-referrer" />}
                    {imageUrls && (
                      isTitleMatch(section.title, 'what we offer') ? (
                        <ImageCarousel images={imageUrls} />
                      ) : (
                        <div className="flex flex-col gap-4">{imageUrls.map((url, i) => <img key={i} src={url} alt={`${section.title || `Section ${idx + 1}`} ${i + 1}`} className="w-full h-auto rounded-xl shadow-lg object-cover" referrerPolicy="no-referrer" />)}</div>
                      )
                    )}
                  </div>
                )}
                
                <div className={`flex-1 ${(imageUrl || imageUrls) ? (isTitleMatch(section.title, 'Our special guest and CEO') ? 'lg:flex-[1.8]' : ((idx === 1 && (programId === 'academy' || programId === 'summer-prog' || programId === 'player-package')) || ((idx === 2 || idx === 0) && programId === 'player-package') ? 'lg:flex-[2]' : 'lg:flex-[1.5]')) : 'w-full'} space-y-4 ${(imageUrl || imageUrls) && imagePosition === 'left' ? 'order-1 lg:order-2' : ''}`}>
                  {section.title && (
                    <h4 className={`font-oswald text-red-varese font-bold uppercase tracking-wider mb-4 text-lg border-b border-zinc-200 pb-2 ${isTitleMatch(section.title, 'A Comprehensive Two-Way Approach') ? 'text-center' : ''}`}>
                      {isTitleMatch(section.title, 'the elite player package') ? t('elitePlayerPackage') : section.title}
                    </h4>
                  )}
                  {renderSectionContent(section)}
                </div>

                {(imageUrl || imageUrls) && imagePosition === 'right' && (
                  <div className={`flex-1 ${((idx === 2 || idx === 0) && programId === 'player-package') ? 'lg:flex-none lg:w-1/3 max-w-[350px] mx-auto' : (idx === 4 && programId === 'full-time' ? 'lg:flex-none lg:w-1/3 max-w-[400px] mx-auto' : 'lg:flex-[1.5]')} w-full`}>
                    {imageUrl && <img src={imageUrl} alt={section.title || `Section ${idx + 1}`} className="w-full h-auto rounded-xl shadow-lg object-cover" referrerPolicy="no-referrer" />}
                    {imageUrls && (
                      isTitleMatch(section.title, 'what we offer') ? (
                        <ImageCarousel images={imageUrls} />
                      ) : (
                        <div className="flex flex-col gap-4">{imageUrls.map((url, i) => <img key={i} src={url} alt={`${section.title || `Section ${idx + 1}`} ${i + 1}`} className="w-full h-auto rounded-xl shadow-lg object-cover" referrerPolicy="no-referrer" />)}</div>
                      )
                    )}
                  </div>
                )}
              </div>
              
              {programId === 'summer-camp' && isTitleMatch(section.title, 'Sample Daily Routine') && (
                <div className="mt-12">
                  <h4 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-8 text-2xl md:text-3xl text-center border-b border-zinc-200 pb-4">{t('twoDifferentOptions')}</h4>
                  <div className="flex flex-col md:flex-row gap-8 w-full">
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-zinc-200 flex flex-col h-full">
                    <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-2 text-xl text-center">{t('residentialCamp')}</h5>
                    <p className="text-center text-zinc-600 font-semibold mb-4 border-b border-zinc-200 pb-3 text-lg">€990</p>
                    <div className="flex-grow">
                      <h6 className="font-bold text-zinc-800 mb-2">{t('included')}</h6>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-600">
                        <li>{t('privateSingleRoom')}</li>
                        <li>{t('sharedCommonSpaces')}</li>
                        <li>{t('meals3')}</li>
                        <li>{t('sportsNutrition')}</li>
                        <li>{t('individualizedTraining')}</li>
                        <li>{t('teamPractice')}</li>
                        <li>{t('strengthTraining')}</li>
                        <li>{t('personalAnalytics')}</li>
                        <li>{t('eliteCoaching')}</li>
                        <li>{t('officialGear')}</li>
                      </ul>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-center">
                      <a href="https://store.pallacanestrovarese.it/products/elite-summer-camp" target="_blank" rel="noopener noreferrer" className="bg-red-varese hover:bg-red-700 text-white font-oswald uppercase tracking-wider py-2.5 px-6 text-sm rounded-full transition-colors font-bold shadow-md">
                        {t('applyNowBtn')}
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-zinc-200 flex flex-col h-full">
                    <h5 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-2 text-xl text-center">{t('dayCamp')}</h5>
                    <p className="text-center text-zinc-600 font-semibold mb-4 border-b border-zinc-200 pb-3 text-lg">€690</p>
                    <div className="flex-grow">
                      <h6 className="font-bold text-zinc-800 mb-2">{t('included')}</h6>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-600">
                        <li>{t('lunch')}</li>
                        <li>{t('sportsNutrition')}</li>
                        <li>{t('individualizedTraining')}</li>
                        <li>{t('teamPractice')}</li>
                        <li>{t('strengthTraining')}</li>
                        <li>{t('personalAnalytics')}</li>
                        <li>{t('eliteCoaching')}</li>
                        <li>{t('officialGear')}</li>
                      </ul>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-center">
                      <a href="https://store.pallacanestrovarese.it/products/elite-summer-camp" target="_blank" rel="noopener noreferrer" className="bg-red-varese hover:bg-red-700 text-white font-oswald uppercase tracking-wider py-2.5 px-6 text-sm rounded-full transition-colors font-bold shadow-md">
                        {t('applyNowBtn')}
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              )}
              {programId === 'summer-camp' && isTitleMatch(section.title, 'Sample Daily Routine') && (
                <div className="mt-6 text-center">
                  <p className="text-red-varese font-bold text-lg md:text-xl uppercase tracking-wide bg-red-varese/10 inline-block px-6 py-3 rounded-xl border border-red-varese/20 shadow-sm" dangerouslySetInnerHTML={{ __html: t('depositNotice') }}>
                  </p>
                </div>
              )}
              {programId === 'summer-camp' && isTitleMatch(section.title, 'Sample Daily Routine') && (
                <div className="mt-12 bg-zinc-50 p-8 md:p-12 rounded-2xl border-2 border-red-varese/20 shadow-md">
                  <h4 className="font-oswald text-red-varese font-bold uppercase tracking-wider mb-8 text-3xl md:text-4xl text-center">{t('howToSubscribe')}</h4>
                  <div className="text-zinc-800 space-y-6 max-w-4xl mx-auto text-lg md:text-xl">
                    <p>
                      {t('depositDesc')}
                    </p>
                    <p className="font-bold text-xl md:text-2xl text-red-varese">
                      {t('followSteps')}
                    </p>
                    <ol className="list-decimal list-inside space-y-5 ml-2 md:ml-6">
                      <li>
                        <span className="font-bold">{t('visitStore')}</span> <a href="https://store.pallacanestrovarese.it/products/elite-summer-camp" target="_blank" rel="noopener noreferrer" className="text-red-varese underline hover:text-red-700 font-bold">{t('clickHere')}</a> {t('accessStore')}
                      </li>
                      <li>
                        <span className="font-bold">{t('submitDetails')}</span> {t('provideInfo')}
                      </li>
                      <li>
                        <span className="font-bold">{t('nextSteps')}</span> {t('onceDeposit')}
                      </li>
                    </ol>
                    <p className="text-center font-oswald text-red-varese font-bold text-2xl md:text-3xl mt-10 pt-6 border-t-2 border-red-varese/20 uppercase tracking-wider">
                      {t('waitingForYou')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [previousView, setPreviousView] = useState<View | null>(null);
  const [lang, setLang] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitted'>('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isFacilityView = ['arena', 'campus', 'housing'].includes(view);
  const isSubpage = ['programDetail', 'detailedPrograms', 'arena', 'campus', 'housing', 'palmares'].includes(view);

  const [sectionToScrollTo, setSectionToScrollTo] = useState<string | null>(null);

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

  // Consolidate scroll logic to handle both "scroll to top" and "scroll to section"
  useEffect(() => {
    if (view === 'home' && sectionToScrollTo) {
      const scroll = () => {
        const element = document.getElementById(sectionToScrollTo);
        if (element) {
          const yOffset = -100; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto'
          });
          setSectionToScrollTo(null);
          return true;
        }
        return false;
      };

      if (scroll()) return;

      const timer = setInterval(() => {
        if (scroll()) clearInterval(timer);
      }, 50);

      const timeout = setTimeout(() => clearInterval(timer), 2000);

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    } else if (!isSubpage && view !== 'home' && view !== 'programs') {
      window.scrollTo(0, 0);
    }
  }, [view, sectionToScrollTo, isSubpage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isApplying) {
            handleCloseFormModal();
        } else if (isJoinModalOpen) {
            handleCloseModal();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isApplying, isJoinModalOpen]);

  const handleCloseModal = () => {
    setSelectedProgram(null);
    setIsJoinModalOpen(false);
    setIsApplying(false);
    setSubmissionStatus('idle');
    setFormState({ firstName: '', lastName: '', organization: '', email: '', program: '', message: '' });
    setView('home');
  };
  
  const handleCloseFormModal = () => {
    setIsApplying(false);
    setSubmissionStatus('idle');
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
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formState.email) &&
      formState.program !== '' &&
      formState.message.trim() !== ''
    );
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

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
      setSectionToScrollTo(id);
      setView('home');
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + yOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'auto' });
      }
    }
  };

  const handleBack = () => {
    if (previousView === 'home') {
      let section = 'home';
      if (view === 'programDetail' || view === 'detailedPrograms') section = 'opportunities';
      else if (['arena', 'campus', 'housing'].includes(view)) section = 'facilities';
      else if (view === 'palmares') section = 'who-we-are';
      navigateToHomeSection(section);
    } else {
      setView(previousView || 'home');
    }
    setPreviousView(null);
  };

  const LangSwitcher = () => (
    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10">
      {[
        { code: 'en' as Language, label: 'EN' },
        { code: 'it' as Language, label: 'IT' },
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
  
  const SubmissionSuccessMessage = () => {
    let content;
    switch (submissionStatus) {
      case 'submitting':
        content = (
          <div className="text-center flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-varese"></div>
            <p className="text-white font-bold uppercase tracking-widest mt-6">{t('sending')}</p>
          </div>
        );
        break;
      case 'submitted':
        content = (
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
        break;
      case 'error':
        content = (
          <div className="flex flex-col items-center justify-center text-center h-full p-8 animate-in fade-in duration-500">
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-full mb-6">
              <XCircle size={48} />
            </div>
            <h3 className="font-oswald text-2xl uppercase text-white mb-3">{t('submissionErrorTitle')}</h3>
            <p className="text-gray-400 text-sm mb-8 max-w-sm">
              {t('submissionErrorMessage')}
            </p>
            <button
              onClick={() => setSubmissionStatus('idle')}
              className="bg-red-varese text-white py-3 px-8 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg"
            >
              {t('tryAgain')}
            </button>
          </div>
        );
        break;
      default:
        content = null;
    }

    return (
      <div className="flex items-center justify-center min-h-[400px]">
        {content}
      </div>
    );
  };

  const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
      { q: t('faq1Question'), a: t('faq1Answer') },
      { q: t('faq2Question'), a: t('faq2Answer') },
      { q: t('faq3Question'), a: t('faq3Answer') },
      { q: t('faq4Question'), a: t('faq4Answer') },
      { q: t('faq5Question'), a: t('faq5Answer') },
    ];

    const renderAnswer = (text: string) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const parts = text.split(urlRegex);
      return parts.map((part, i) => {
        if (part.match(urlRegex)) {
          return (
            <a 
              key={i} 
              href={part} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-varese hover:underline break-all"
            >
              {part}
            </a>
          );
        }
        return part;
      });
    };

    return (
      <section id="faq" className="py-24 bg-zinc-950 scroll-mt-24 relative overflow-hidden">
        {/* Modern Decors */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-varese/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-varese/5 rounded-full -mr-48 -mb-48 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">FAQ</p>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('faqTitle')}</h2>
            <div className="w-20 h-1.5 bg-red-varese mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-varese/30"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left group"
                >
                  <span className={`font-oswald text-lg md:text-xl uppercase transition-colors ${openIndex === index ? 'text-red-varese' : 'text-white group-hover:text-red-varese/80'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-red-varese' : 'text-gray-500'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {renderAnswer(faq.a)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

    const ProgramsGrid = ({ category }: { category?: 'top' | 'other' }) => (
    <div className="flex flex-wrap justify-center gap-3 md:gap-10">
      {PROGRAMS.filter(p => !category || p.category === category).map((prog) => {
        const translatedProg = translateProgram(prog, lang);
        const isOther = category === 'other';
        return (
        <div 
          key={translatedProg.id} 
          className={`relative card-glass rounded-xl md:rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 shadow-xl w-[calc(50%-6px)] md:w-[calc(50%-20px)] ${isOther ? 'lg:w-[calc(25%-30px)]' : 'lg:w-[calc(33.333%-27px)]'} ${translatedProg.id === 'full-time' ? 'border-red-varese' : 'hover:border-red-varese'}`}
        >
          <div className={`overflow-hidden relative ${isOther ? 'h-24 sm:h-32 md:h-40 lg:h-44' : 'h-32 sm:h-48 md:h-64'}`}>
            {translatedProg.image && (
              <img src={translatedProg.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={translatedProg.title} />
            )}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-varese text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-bold tracking-widest uppercase rounded">
              {translatedProg.timing}
            </div>
          </div>
          <div className={`flex-grow flex flex-col ${isOther ? 'p-2 sm:p-3 md:p-4' : 'p-3 sm:p-5 md:p-8'}`}>
            <h3 className={`font-oswald font-bold uppercase mb-1 md:mb-2 group-hover:text-red-varese transition-colors line-clamp-1 ${isOther ? 'text-[10px] sm:text-sm md:text-lg' : 'text-xs sm:text-lg md:text-2xl'}`}>{translatedProg.title}</h3>
            <p className={`text-red-varese font-bold uppercase tracking-widest mb-2 md:mb-4 flex-grow line-clamp-1 ${isOther ? 'text-[6px] sm:text-[8px] md:text-[9px]' : 'text-[7px] sm:text-[10px]'}`}>{translatedProg.target}</p>
            <div className={`space-y-1 md:space-y-3 mb-4 md:mb-8 hidden sm:block ${isOther ? 'hidden' : ''}`}>
              {translatedProg.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-semibold text-gray-300 uppercase tracking-wider">
                  <CheckCircle2 size={12} className="text-red-varese flex-shrink-0" /> {h}
                </div>
              ))}
            </div>
             <div className="mt-auto pt-2 md:pt-4 flex flex-col gap-2 sm:flex-row sm:gap-2">
                <button 
                  onClick={() => {
                    setSelectedProgram(translatedProg);
                    setPreviousView(view);
                    setView('programDetail');
                  }}
                  className="flex-1 bg-white/10 text-white hover:bg-white hover:text-black py-2 md:py-3 rounded font-bold uppercase tracking-widest text-[8px] md:text-xs transition-all"
                >
                  {t('findOutMore')}
                </button>
                <a
                  href={
                    translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "mailto:f.bellotto@pallacanestrovarese.it" :
                    translatedProg.id === 'full-time' ? "https://store.pallacanestrovarese.it/products/basketball-academy-copia" :
                    translatedProg.id === 'summer-camp' ? "https://store.pallacanestrovarese.it/products/elite-summer-camp?variant=52625081630986" :
                    translatedProg.id === 'internship' ? "https://store.pallacanestrovarese.it/products/coaches-internship-program?variant=52625121313034" :
                    "https://store.pallacanestrovarese.it/collections/elite-programs"
                  }
                  target={translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "_self" : "_blank"}
                  rel={translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "" : "noopener noreferrer"}
                  className="flex-1 bg-red-varese text-white hover:bg-red-700 py-2 md:py-3 rounded font-bold uppercase tracking-widest text-[8px] md:text-xs transition-all text-center"
                >
                  {translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? t('contactUs') : t('buyNow')}
                </a>
             </div>
          </div>
        </div>
      )})}
    </div>
  );
  
  const FacilityPage = ({ facility, onBack, t }: { facility: Facility; onBack: () => void; t: (key: any) => string; }) => {
    const images = facility.galleryImages;
    const gridClass = images.length === 4 
      ? 'grid-cols-2 md:grid-cols-2' 
      : 'grid-cols-2 lg:grid-cols-3';

    return (
      <main className="fixed inset-0 z-[60] bg-black overflow-y-auto pt-12 md:pt-20 animate-in fade-in duration-500">
         <button 
            onClick={onBack} 
            className="absolute top-16 md:top-24 left-4 sm:left-8 z-20 flex items-center justify-center bg-black/50 hover:bg-red-varese text-white w-10 h-10 md:w-12 md:h-12 rounded-full transition-colors"
            aria-label={t('back')}
        >
            <ArrowRight className="rotate-180" size={16} md:size={20} />
        </button>

        <section className="relative h-[30vh] md:h-[50vh] min-h-[200px] md:min-h-[300px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={facility.coverImage} className="w-full h-full object-cover opacity-50" alt={t(facility.titleKey as any)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="font-oswald text-3xl md:text-8xl font-bold uppercase leading-none tracking-tighter mb-2 md:mb-4">
                    {t(facility.titleKey as any)}
                </h1>
                <p className="text-xs md:text-xl text-gray-300 font-light max-w-2xl mx-auto uppercase tracking-widest leading-tight">
                    {t(facility.descriptionKey as any)}
                </p>
            </div>
        </section>
        
        <section className="py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {facility.galleryDescriptionKey && (
                    <div className="mb-8 md:mb-16 p-4 md:p-8 bg-zinc-900 border border-white/10 rounded-lg max-w-5xl mx-auto">
                        <p className="text-gray-300 text-center text-sm md:text-lg font-light leading-relaxed">{t(facility.galleryDescriptionKey as any)}</p>
                    </div>
                )}
                
                <div className={`grid ${gridClass} gap-6`}>
                    {images.map((src, index) => (
                        <div key={index} className="relative w-full aspect-[4/3] group overflow-hidden rounded-lg shadow-2xl bg-zinc-900">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                {facility.id === 'arena' && (
                  <div className="mt-12">
                    <a 
                      href="https://www.google.com/maps/place/Itelyum+Arena/@45.8359581,8.8001318,16z/data=!3m2!4b1!5s0x47867fb22c52188d:0x5848e1d0e0a51b2!4m6!3m5!1s0x47867fb22c0b8a7f:0xf4bebc3a4e59794f!8m2!3d45.8359581!4d8.8027067!16zL20vMGRya3Y3?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(227,6,19,0.3)] transition-shadow relative group border border-white/10"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                        <div className="bg-white text-red-varese px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all shadow-xl transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                          <MapPin size={18} />
                          {t('openInGoogleMaps')}
                        </div>
                      </div>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.502941320349!2d8.8001318!3d45.8359581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867fb22c0b8a7f%3A0xf4bebc3a4e59794f!2sItelyum%20Arena!5e0!3m2!1sen!2sit!4v1709614800000!5m2!1sen!2sit" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0, pointerEvents: 'none' }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Itelyum Arena Map"
                      ></iframe>
                    </a>
                  </div>
                )}

                {facility.id === 'campus' && (
                  <div className="mt-12">
                    <a 
                      href="https://www.google.com/maps/place/Campus+Varese/@45.8386915,8.8002913,647m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47867f004a963285:0x68ef706dc0f95da5!8m2!3d45.8386915!4d8.8028662!16s%2Fg%2F11zj10k1dfentry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(227,6,19,0.3)] transition-shadow relative group border border-white/10"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                        <div className="bg-white text-red-varese px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all shadow-xl transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                          <MapPin size={18} />
                          {t('openInGoogleMaps')}
                        </div>
                      </div>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.568461763133!2d8.80029127664188!3d45.83869147107873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867f004a963285%3A0x68ef706dc0f95da5!2sCampus%20Varese!5e0!3m2!1sen!2sit!4v1709614800000!5m2!1sen!2sit" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0, pointerEvents: 'none' }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Campus Varese Map"
                      ></iframe>
                    </a>
                  </div>
                )}

                {facility.id === 'housing' && (
                  <div className="mt-12">
                    <a 
                      href="https://www.google.com/maps/place/Seconda+Strada+Varese+-+Abbigliamento,+scarpe+e+accessori+moda/@45.8337006,8.7955912,647m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47867fad6f946d8b:0x84ecbc071b6f2b60!8m2!3d45.8337006!4d8.7981661!16s%2Fg%2F11c60jhr_w?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(227,6,19,0.3)] transition-shadow relative group border border-white/10"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                        <div className="bg-white text-red-varese px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all shadow-xl transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                          <MapPin size={18} />
                          Open in Google Maps
                        </div>
                      </div>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.819712038753!2d8.7955912!3d45.8337006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867fad6f946d8b%3A0x84ecbc071b6f2b60!2sSeconda%20Strada%20Varese%20-%20Abbigliamento%2C%20scarpe%20e%20accessori%20moda!5e0!3m2!1sen!2sit!4v1709614800000!5m2!1sen!2sit" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0, pointerEvents: 'none' }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Elite Housing Map"
                      ></iframe>
                    </a>
                  </div>
                )}

                {facility.secondaryGallery && (
                  <div className="mt-24">
                    <div className="text-center mb-16">
                      <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4 inline-block relative">
                          {t(facility.secondaryGallery.titleKey as any)}
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-red-varese"></div>
                      </h2>
                       {facility.secondaryGallery.descriptionKey && (
                         <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">{t(facility.secondaryGallery.descriptionKey as any)}</p>
                       )}
                    </div>
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6`}>
                        {facility.secondaryGallery.images.map((src, index) => (
                            <div key={index} className="relative w-full aspect-video group overflow-hidden rounded-lg shadow-2xl bg-zinc-900">
                                <img
                                    src={src}
                                    alt={`${t(facility.secondaryGallery.titleKey as any)} image ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                  </div>
                )}
            </div>
        </section>
      </main>
    );
  };

  const DetailedProgramsPage = () => {
    const [openProgramId, setOpenProgramId] = useState<string | null>(null);

    const toggleProgram = (id: string) => {
      setOpenProgramId(openProgramId === id ? null : id);
    };

    return (
      <main className="fixed inset-0 z-[60] bg-black overflow-y-auto p-4 sm:p-8 animate-in fade-in duration-500">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            <h2 className="text-[25rem] font-oswald font-black uppercase tracking-tighter text-white/5 select-none">VARESE</h2>
        </div>
        <div className="max-w-4xl mx-auto relative pt-20 pb-20 z-10">
          <button
            onClick={handleBack}
            className="absolute top-8 left-0 z-20 flex items-center gap-2 bg-black/50 hover:bg-red-varese text-white px-4 py-2 rounded-full transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowRight className="rotate-180" size={16} />
            {t('backToHome')}
          </button>
          
          <div className="text-center mb-12">
            <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('elitePrograms')}</p>
            <div className="inline-block relative">
                <h1 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('ourProgramsInDetail')}</h1>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-red-varese"></div>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto mt-8">{t('ourProgramsInDetailDesc')}</p>
          </div>
          
          <div className="space-y-4">
            {PROGRAMS.map(program => {
              const translatedProg = translateProgram(program, lang);
              return (
              <div key={translatedProg.id} className="bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleProgram(translatedProg.id)}
                  className="w-full flex justify-between items-center p-4 md:p-6 text-left hover:bg-white/5 transition-colors"
                  aria-expanded={openProgramId === translatedProg.id}
                  aria-controls={`program-details-${translatedProg.id}`}
                >
                  <h2 className={`font-oswald text-2xl md:text-3xl font-bold uppercase tracking-tight transition-all duration-300 ${openProgramId === translatedProg.id ? 'text-red-varese scale-105 origin-left' : 'text-white hover:text-red-varese/80'}`}>{translatedProg.title}</h2>
                  {openProgramId === translatedProg.id ? <ChevronUp className="text-red-varese scale-125 transition-transform" /> : <ChevronDown className="hover:text-red-varese transition-colors" />}
                </button>
                {openProgramId === translatedProg.id && (
                  <div 
                    id={`program-details-${translatedProg.id}`}
                    className="px-4 md:px-6 pb-6 animate-in fade-in duration-500 relative overflow-hidden"
                  >
                    {/* Modern Decors */}
                    <div className="absolute top-1/2 right-0 w-32 h-32 bg-red-varese/5 rounded-full -mr-16 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 text-[40px] font-black text-red-varese/5 select-none pointer-events-none">EBP</div>
                    
                    <div className="border-t border-white/10 pt-4 relative z-10">
                      <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 mb-4 md:mb-6">
                        <div>
                          <p className="text-red-varese text-[10px] md:text-xs font-bold uppercase tracking-widest mb-0.5 md:mb-1">{t('target')}</p>
                          <p className="text-gray-300 text-[10px] md:text-base leading-tight">{translatedProg.target}</p>
                        </div>
                        <div>
                          <p className="text-red-varese text-[10px] md:text-xs font-bold uppercase tracking-widest mb-0.5 md:mb-1">{t('timing')}</p>
                          <p className="text-gray-300 text-[10px] md:text-base leading-tight">{translatedProg.timing}</p>
                        </div>
                      </div>
                    {(translatedProg.detailImage || translatedProg.image) && (
                      <img src={translatedProg.detailImage || translatedProg.image} alt={translatedProg.title} className="w-full aspect-video object-cover rounded-lg my-6" />
                    )}
                      <div className="mb-6"><FormattedText text={translatedProg.details} programId={translatedProg.id} lang={lang} /></div>
                      <h4 className="text-white font-oswald text-lg md:text-xl font-bold uppercase tracking-widest mb-4 border-b border-red-varese/30 pb-2 inline-block">{t('keyHighlights')}</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-3 md:gap-x-6 gap-y-1.5 md:gap-y-2">
                        {translatedProg.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 md:gap-3">
                            <CheckCircle2 size={12} md:size={16} className="text-red-varese flex-shrink-0" />
                            <span className="text-gray-300 text-[10px] md:text-sm leading-tight">{h}</span>
                          </div>
                        ))}
                      </div>
                       <div className="mt-8 pt-6 border-t border-white/10">
                          {translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? (
                            <a
                              href="mailto:f.bellotto@pallacanestrovarese.it"
                              className="block w-full bg-red-varese text-white py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition-all text-sm rounded-sm text-center"
                            >
                              {t('contactUs')}
                            </a>
                          ) : (
                            <button
                                className="w-full bg-red-varese text-white py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition-all text-sm rounded-sm"
                            >
                                {t('buyNow')}
                            </button>
                          )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )})}
          </div>
        </div>
      </main>
    );
  };

    const ProgramDetailPage = ({ program, t, onBack, onRequestInfo, onBuyNow }: { program: Program, t: (key: any) => string, onBack: () => void, onRequestInfo: (p: Program) => void, onBuyNow: () => void }) => {
      return (
        <main className="fixed inset-0 z-[60] bg-white overflow-y-auto pb-24 animate-in fade-in duration-700">
          {/* Full Screen Hero Section */}
          <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
            {(program.detailImage || program.image) && (
              <img 
                src={program.detailImage || program.image} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={program.title} 
              />
            )}
            {/* Gradient fading to white instead of black */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            
            <div className="absolute top-24 left-4 sm:left-8 z-20">
              <button 
                  onClick={onBack} 
                  className="flex items-center justify-center bg-white/80 hover:bg-red-varese text-black hover:text-white w-12 h-12 rounded-full transition-all hover:scale-110 shadow-lg backdrop-blur-sm"
                  aria-label={t('back')}
              >
                  <ArrowRight className="rotate-180" size={20} />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
              <div className="max-w-7xl mx-auto text-center">
                <p className="text-red-varese font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 animate-in slide-in-from-bottom-4 duration-700">{t('detailedProgram')}</p>
                <h1 className="font-oswald text-4xl md:text-8xl font-bold uppercase leading-[0.85] tracking-tighter text-black mb-6 animate-in slide-in-from-bottom-8 duration-700 delay-100">
                  {program.title}
                </h1>
              </div>
            </div>
          </section>
    
          {/* Info Boxes Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16 relative z-20 mb-8 md:mb-12">
            {program.id === 'summer-camp' && (
              <div className="flex justify-center mb-6 md:mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
                <div className="bg-red-varese text-white font-bold uppercase tracking-widest text-sm md:text-lg px-8 py-3 rounded-full shadow-xl shadow-red-600/30 border-2 border-white">
                  {t('limitedSpots')}
                </div>
              </div>
            )}
            <div className={`grid ${program.id === 'academy' || program.id === 'player-package' ? 'grid-cols-4' : 'grid-cols-5'} justify-center gap-2 md:gap-8 animate-in slide-in-from-bottom-4 duration-700 delay-300`}>
              <div className="bg-white/90 backdrop-blur-md border border-zinc-200 px-1 py-3 md:px-8 md:py-6 rounded-xl shadow-xl shadow-zinc-200/50 text-center">
                <span className="text-red-varese text-[7px] md:text-sm font-bold uppercase tracking-wider block mb-1 md:mb-2">{t('target')}</span>
                <span className="text-black text-[8px] md:text-base font-medium leading-tight block">{program.target}</span>
              </div>
              <div className="bg-white/90 backdrop-blur-md border border-zinc-200 px-1 py-3 md:px-8 md:py-6 rounded-xl shadow-xl shadow-zinc-200/50 text-center">
                <span className="text-red-varese text-[7px] md:text-sm font-bold uppercase tracking-wider block mb-1 md:mb-2">{t('timing')}</span>
                <span className="text-black text-[8px] md:text-base font-medium leading-tight block">{program.timing}</span>
              </div>
              <div className="bg-white/90 backdrop-blur-md border border-zinc-200 px-1 py-3 md:px-8 md:py-6 rounded-xl shadow-xl shadow-zinc-200/50 text-center">
                <span className="text-red-varese text-[7px] md:text-sm font-bold uppercase tracking-wider block mb-1 md:mb-2">{t('where')}</span>
                <span className="text-black text-[8px] md:text-base font-medium leading-tight block">
                  {program.id === 'academy' ? t('tbdTogether') : program.id === 'player-package' ? t('campusVarese') : (program.id === 'summer-camp' && lang === 'it') ? 'Foresteria & Campus, Varese' : t('foresteriaCampus')}
                </span>
              </div>
              {program.id !== 'player-package' && (
                <div className="bg-white/90 backdrop-blur-md border border-zinc-200 px-1 py-3 md:px-8 md:py-6 rounded-xl shadow-xl shadow-zinc-200/50 text-center">
                  <span className="text-red-varese text-[7px] md:text-sm font-bold uppercase tracking-wider block mb-1 md:mb-2">{t('subscriptionDeadline')}</span>
                  <span className="text-black text-[8px] md:text-base font-medium leading-tight block">{program.deadline || '-'}</span>
                </div>
              )}
              {program.id !== 'academy' && (
                <div className="bg-white/90 backdrop-blur-md border border-zinc-200 px-1 py-3 md:px-8 md:py-6 rounded-xl shadow-xl shadow-zinc-200/50 text-center">
                  <span className="text-red-varese text-[7px] md:text-sm font-bold uppercase tracking-wider block mb-1 md:mb-2">{t('pricing')}</span>
                  <span className="text-black text-[8px] md:text-base font-medium leading-tight block">
                    {program.id === 'summer-camp' ? '€990 or €690' : 
                     program.id === 'player-package' ? '€1.000/10 sessions' :
                     program.id === 'full-time' ? '€15.000/year or €30.000/year' :
                     program.id === 'internship' ? '€1.500/month' :
                     program.id === 'summer-prog' ? t('tbdTogether') :
                     t('contactUs')}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 h-full">
                <div className="bg-white border border-zinc-200 p-8 md:p-12 rounded-2xl shadow-xl shadow-zinc-200/50 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                  {/* Modern Decors */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-varese/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-red-varese/10 rounded-full -ml-12 -mb-12 transition-transform group-hover:scale-125 duration-700"></div>
                  <div className="absolute top-1/2 left-4 w-1 h-12 bg-red-varese/20 rounded-full -translate-y-1/2"></div>
                  <div className="absolute top-1/2 right-4 w-1 h-12 bg-red-varese/20 rounded-full -translate-y-1/2"></div>
                  <div className="absolute top-4 left-4 text-[40px] font-black text-red-varese/5 select-none pointer-events-none">EBP</div>
                  <div className="absolute bottom-4 right-4 text-[40px] font-black text-red-varese/5 select-none pointer-events-none rotate-180">EBP</div>
                  <div className="absolute top-8 left-8 opacity-5">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H40V40H0V0Z" fill="url(#paint0_grid)" />
                      <defs>
                        <pattern id="paint0_grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                    </svg>
                  </div>

                  <h2 className="font-oswald text-3xl md:text-5xl font-black uppercase mb-8 text-red-varese flex flex-col items-center gap-4 relative z-10 tracking-tighter">
                    {t('overview')}
                    <div className="w-20 h-1.5 bg-red-varese rounded-full"></div>
                  </h2>
                  <div className="text-black text-base md:text-lg leading-relaxed space-y-6 font-light max-w-2xl relative z-10">
                    {(program.overview || program.description).split('\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar / Actions */}
              <div className="h-full">
                <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl shadow-xl shadow-zinc-200/30 h-full flex flex-col">
                  <h3 className="font-oswald text-2xl md:text-3xl font-black uppercase mb-8 text-red-varese tracking-tighter border-l-4 border-red-varese pl-4">{t('keyHighlights')}</h3>
                  <div className="space-y-5 mb-10">
                    {program.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="mt-1 bg-red-varese/10 p-1 rounded-full group-hover:bg-red-varese/20 transition-colors">
                          <CheckCircle2 size={16} className="text-red-varese flex-shrink-0" />
                        </div>
                        <span className="text-black text-sm font-medium leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex flex-col gap-4 fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-zinc-200 z-50 md:relative md:p-0 md:bg-transparent md:border-t-0 md:z-auto">
                    {program.id === 'academy' || program.id === 'summer-prog' ? (
                      <a
                        href="mailto:f.bellotto@pallacanestrovarese.it"
                        className="w-full bg-red-varese text-white py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg shadow-xl shadow-red-600/20 text-center flex items-center justify-center group"
                      >
                        {t('contactUs')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </a>
                    ) : program.id === 'full-time' ? (
                      <a
                        href="https://store.pallacanestrovarese.it/products/basketball-academy-copia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-red-varese text-white py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg shadow-xl shadow-red-600/20 text-center flex items-center justify-center group"
                      >
                        {t('buyNow')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </a>
                    ) : program.id === 'summer-camp' ? (
                      <a
                        href="https://store.pallacanestrovarese.it/products/elite-summer-camp?variant=52625081630986"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-red-varese text-white py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg shadow-xl shadow-red-600/20 text-center flex items-center justify-center group"
                      >
                        {t('buyNow')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </a>
                    ) : program.id === 'internship' ? (
                      <a
                        href="https://store.pallacanestrovarese.it/products/coaches-internship-program?variant=52625121313034"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-red-varese text-white py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg shadow-xl shadow-red-600/20 text-center flex items-center justify-center group"
                      >
                        {t('buyNow')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </a>
                    ) : (
                      <a
                        href="#"
                        target="_self"
                        rel=""
                        className="w-full bg-red-varese text-white py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg shadow-xl shadow-red-600/20 text-center flex items-center justify-center group"
                      >
                        {t('buyNow')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </a>
                    )}
                    
                    <div className="flex gap-2 md:flex-col md:gap-4">
                      <button 
                        onClick={() => onRequestInfo(program)} 
                        className="flex-1 border border-zinc-300 text-black py-3 md:py-4 font-bold uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all text-xs rounded-lg"
                      >
                        {t('requestMoreInfo')}
                      </button>

                      <a href="https://drive.google.com/file/d/1PQ7iSTdj0XC4TCMzENjinLr8Udv38-oW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex-1 border border-zinc-200 text-black py-3 font-bold uppercase tracking-widest hover:text-zinc-900 hover:border-zinc-400 transition-all text-[9px] md:text-xs rounded-lg text-center flex items-center justify-center">
                        {t('downloadBrochure')}
                      </a>
                    </div>
                    
                    {program.successStoryLink && (
                      <a href={program.successStoryLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex border border-zinc-200 text-black py-3 font-bold uppercase tracking-widest hover:text-zinc-900 hover:border-zinc-400 transition-all text-[9px] rounded-lg text-center items-center justify-center gap-1.5 mt-2">
                          <Star size={12}/> {t('successStory')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Details Section */}
          {program.details && (
            <div className="w-full bg-zinc-50 border-y border-zinc-200 mt-16 py-16">
              <div className="w-full px-4 sm:px-8 lg:px-12">
                <FormattedText text={program.details} className="text-black" programId={program.id} lang={lang} />
                
                <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
                  <a
                    href={program.id === 'academy' || program.id === 'summer-prog' ? "mailto:f.bellotto@pallacanestrovarese.it" : program.id === 'full-time' ? "https://store.pallacanestrovarese.it/products/basketball-academy-copia" : program.id === 'summer-camp' ? "https://store.pallacanestrovarese.it/products/elite-summer-camp?variant=52625081630986" : program.id === 'internship' ? "https://store.pallacanestrovarese.it/products/coaches-internship-program?variant=52625121313034" : "#"}
                    target={program.id === 'full-time' || program.id === 'summer-camp' || program.id === 'internship' ? "_blank" : "_self"}
                    rel={program.id === 'full-time' || program.id === 'summer-camp' || program.id === 'internship' ? "noopener noreferrer" : ""}
                    className="w-full sm:w-auto flex-1 bg-red-varese text-white py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-all text-sm rounded-lg shadow-xl shadow-red-600/20 text-center flex items-center justify-center group"
                  >
                    {program.id === 'academy' || program.id === 'summer-prog' ? t('contactUs') : t('buyNow')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                  <button 
                    onClick={() => onRequestInfo(program)} 
                    className="w-full sm:w-auto flex-1 border border-zinc-300 text-black py-4 md:py-5 font-bold uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all text-sm rounded-lg"
                  >
                    {t('requestMoreInfo')}
                  </button>
                  <a 
                    href="https://drive.google.com/file/d/1PQ7iSTdj0XC4TCMzENjinLr8Udv38-oW/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto flex-1 border border-zinc-300 text-black py-4 md:py-5 font-bold uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all text-sm rounded-lg text-center flex items-center justify-center"
                  >
                    {t('downloadBrochure')}
                  </a>
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
                  <a href="https://store.pallacanestrovarese.it/collections/elite-programs" target="_blank" rel="noopener noreferrer" className="bg-white text-red-varese px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all rounded-sm text-lg shadow-2xl">{t('buyNow')}</a>
                  <button onClick={() => setIsJoinModalOpen(true)} className="border border-white text-white px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all rounded-sm text-lg">{t('applyNow')}</button>
              </div>
              </div>
          </section>
        </main>
      );
    };


  return (
    <div className={`min-h-screen flex flex-col bg-[#0a0a0a] ${(isApplying || isJoinModalOpen || isMenuOpen) ? 'overflow-hidden h-screen' : ''}`}>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || view !== 'home' || isMenuOpen ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setView('home')}>
            <img src={CLUB_LOGO} alt="Varese Logo" className="h-10 w-auto" />
            <span className="font-oswald font-bold text-xl tracking-tighter uppercase hidden sm:block">
              Pallacanestro <span className="text-red-varese">Varese</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {(view === 'programs' || view === 'palmares' || isFacilityView || view === 'detailedPrograms' || view === 'programDetail') && (
              <button onClick={handleBack} className="hidden md:block text-xs font-bold uppercase tracking-widest hover:text-red-varese transition-colors">
                {t('backToHome')}
              </button>
            )}
            <div className="hidden md:flex items-center space-x-4">
                <a href="https://store.pallacanestrovarese.it/collections/elite-programs" target="_blank" rel="noopener noreferrer" className="bg-red-varese hover:bg-red-700 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase transition-all shadow-lg shadow-red-600/20">
                    {t('buyNow')}
                </a>
                <button onClick={() => setIsJoinModalOpen(true)} className="border border-white/50 text-white hover:bg-white hover:text-black px-6 py-2 rounded-sm text-sm font-bold uppercase transition-all">
                    {t('joinEBP')}
                </button>
            </div>
            <LangSwitcher />
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 z-50">
                {isMenuOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
      </nav>

        {isMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-black/95 pt-24 px-8 flex flex-col items-center space-y-6 animate-in fade-in duration-300">
                <a href="https://store.pallacanestrovarese.it/collections/elite-programs" target="_blank" rel="noopener noreferrer" className="w-full bg-red-varese hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-widest transition-all rounded-md">
                {t('buyNow')}
                </a>
                <button onClick={() => { setIsJoinModalOpen(true); setIsMenuOpen(false); }} className="w-full border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold uppercase tracking-widest transition-all rounded-md">
                {t('joinEBP')}
                </button>
                <div className="w-full border-t border-white/10 my-4"></div>
                <button onClick={() => { setView('programs'); setIsMenuOpen(false); }} className="text-xl font-oswald uppercase text-white/80 hover:text-white">{t('explorePrograms')}</button>
                <button onClick={() => { navigateToHomeSection('who-we-are'); setIsMenuOpen(false); }} className="text-xl font-oswald uppercase text-white/80 hover:text-white">{t('ourLegacy')}</button>
            </div>
        )}

      {view === 'home' && (
        <>
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://i.imgur.com/jgvkdMN.jpeg" className="w-full h-full object-cover opacity-40" alt="Hero background" />
              <div className="absolute inset-0 gradient-overlay"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <img src={CLUB_LOGO} alt="Logo" className="mx-auto h-24 md:h-48 mb-4 md:mb-8 animate-pulse" />
              <h1 className="font-oswald text-4xl md:text-8xl font-bold uppercase leading-none tracking-tighter mb-2 md:mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-sm md:text-2xl text-gray-300 font-light mb-6 md:mb-10 max-w-2xl mx-auto uppercase tracking-widest">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-row items-center justify-center gap-3 md:gap-4">
                  <button onClick={() => setView('programs')} className="flex-1 sm:flex-none bg-red-varese hover:bg-red-700 text-white px-4 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest transition-all shadow-xl shadow-red-600/20 flex items-center justify-center group text-[10px] md:text-base">
                      {t('explorePrograms')} <ArrowRight className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                  </button>
                  <button onClick={() => navigateToHomeSection('who-we-are')} className="flex-1 sm:flex-none border border-white hover:bg-white hover:text-black text-white px-4 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest transition-all text-[10px] md:text-base">
                      {t('ourLegacy')}
                  </button>
              </div>
            </div>
          </section>

          <section id="opportunities" className="py-24 bg-black scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('elitePrograms')}</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('ourTopPrograms')}</h2>
                <p className="text-gray-400 tracking-widest uppercase text-sm">{t('opportunitiesDesc')}</p>
              </div>
              <ProgramsGrid category="top" />
              
              <div className="text-center mt-24 mb-16">
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('eliteOpportunities')}</h2>
              </div>
              <ProgramsGrid category="other" />
              
              <div className="mt-24 text-center">
                <a 
                  href="https://store.pallacanestrovarese.it/collections/elite-programs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-red-varese text-white px-16 py-8 rounded-sm font-bold uppercase tracking-[0.3em] text-2xl hover:bg-white hover:text-black transition-all shadow-[0_0_40px_rgba(229,50,56,0.4)] hover:scale-105"
                >
                  {t('buyNow')}
                </a>
              </div>
            </div>
          </section>

          <section id="who-we-are" className="py-12 md:py-24 bg-zinc-900 scroll-mt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-oswald text-3xl md:text-7xl font-bold uppercase mb-8 md:mb-12 inline-block relative">
                {t('whoWeAre')}
                <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 md:h-2 bg-red-varese"></div>
              </h2>
              <div className="space-y-6 md:space-y-10 text-gray-400 text-sm md:text-xl leading-relaxed mb-8 md:mb-16 max-w-4xl mx-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <p>{t('whoWeAreP1')}</p>
                  <p>{t('whoWeAreP2')}</p>
                </div>
                
                <p className="text-white font-semibold italic text-lg md:text-2xl pt-2 md:pt-4 text-center">{t('whoWeAreQuote')}</p>
                
                <div className="pt-4 md:pt-8 text-center">
                  <button onClick={() => {
                    setPreviousView(view);
                    setView('palmares');
                  }} className="border border-white hover:bg-white hover:text-black text-white px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest transition-all text-xs md:text-base">
                    {t('ourPalmares')}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-8 max-w-4xl mx-auto mt-12 md:mt-20">
                {ACHIEVEMENTS.map((item, idx) => {
                  let titleKey: keyof typeof TRANSLATIONS['en'];
                  if (item.title.includes("CAMPIONATO")) {
                    titleKey = 'campionatoItaliano';
                  } else if (item.title.includes("SUPERCOPPA")) {
                    titleKey = 'supercoppa';
                  } else if (item.title.includes("COPPA ITALIA")) {
                    titleKey = 'coppaItalia';
                  } else if (item.title.includes("CAMPIONI")) {
                    titleKey = 'coppaCampioni';
                  } else if (item.title.includes("DELLE COPPE")) {
                    titleKey = 'coppaCoppe';
                  } else {
                    titleKey = 'coppaIntercontinentale';
                  }
                  return (
                  <div key={idx} className="relative flex flex-col items-center group">
                    <div className="bg-black w-full aspect-[2/3] relative flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-2" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)' }}>
                      <div className="bg-[#E30613] absolute inset-[2px] flex flex-col items-center justify-center p-4 text-center" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)' }}>
                        {item.title === "CAMPIONATO ITALIANO" && (
                            <div className="absolute top-0 left-0 right-0 h-2 flex z-20">
                                <div className="w-1/3 bg-[#009246]"></div>
                                <div className="w-1/3 bg-[#FFFFFF]"></div>
                                <div className="w-1/3 bg-[#ce2b37]"></div>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col items-center justify-between h-full w-full py-4">
                          <div className="flex flex-col items-center">
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

          <section id="where-we-are" className="py-12 md:py-24 bg-black relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                 <div className="order-2 lg:order-1 flex flex-col gap-3 md:gap-6">
                   <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-red-varese to-transparent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                     <img src="https://i.imgur.com/u1qdF6w.jpeg" className="relative rounded-lg md:rounded-xl shadow-2xl w-full h-auto object-cover aspect-video" alt="The Garden City" />
                   </div>
                   <a href="https://maps.app.goo.gl/WUqdjaf9duktWCNU8" target="_blank" rel="noopener noreferrer" className="relative group block overflow-hidden rounded-lg md:rounded-xl border border-white/10 shadow-xl transition-all hover:border-red-varese/50">
                     <div className="absolute inset-0 bg-red-varese/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                     <div className="h-[120px] md:h-[250px] w-full">
                        <iframe title="Varese Location" width="100%" height="100%" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Piazzale%20Antonio%20Gramsci,%20Varese+(Itely-Aitena-Arena)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className="pointer-events-none"></iframe>
                     </div>
                     <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-20 bg-black/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 rounded-full border border-white/10 flex items-center gap-1 md:gap-2">
                        <MapPin size={10} className="text-red-varese" />
                        <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-widest">{t('findUs')}</span>
                     </div>
                   </a>
                 </div>
                 <div className="order-1 lg:order-2">
                   <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-[8px] md:text-xs mb-2 md:mb-4">{t('whereWeAre')}</p>
                   <h2 className="font-oswald text-xl md:text-6xl font-bold uppercase mb-4 md:mb-8 leading-tight">{t('gardenCity')}</h2>
                  <div className="space-y-3 md:space-y-6 text-gray-300">
                    <div className="flex items-start gap-2 md:gap-4">
                      <MapPin className="text-red-varese mt-0.5 md:mt-1 flex-shrink-0" size={16} md:size={24} />
                      <div>
                        <p className="font-bold text-white uppercase tracking-wider mb-0.5 md:mb-1 text-[10px] md:text-sm">{t('strategicLocation')}</p>
                        <p className="text-gray-400 text-[10px] md:text-base leading-tight">{t('strategicLocationDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <Calendar className="text-red-varese mt-0.5 md:mt-1 flex-shrink-0" size={16} md:size={24} />
                      <div>
                        <p className="font-bold text-white uppercase tracking-wider mb-0.5 md:mb-1 text-[10px] md:text-sm">{t('eliteRegion')}</p>
                        <p className="text-gray-400 text-[10px] md:text-base leading-tight">{t('eliteRegionDesc')}</p>
                      </div>
                    </div>
                    <p className="pl-3 md:pl-10 text-gray-400 italic text-[10px] md:text-sm leading-relaxed border-l border-red-varese/30">{t('locationP')}</p>
                  </div>
                 </div>
              </div>
            </div>
          </section>

          <section id="leadership" className="py-24 bg-zinc-900 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
              <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('ourTeam')}</p>
              <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('ourLeadership')}</h2>
              <p className="text-gray-400 tracking-widest uppercase text-sm">{t('expertise')}</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
                {STAFF.map((member) => {
                  const translatedMember = translateStaff(member, lang);
                  return (
                  <div key={translatedMember.name} className="group cursor-pointer">
                    <div className="relative overflow-hidden aspect-[3/4] mb-4 md:mb-8 rounded-lg border border-white/5 shadow-2xl">
                      <img src={translatedMember.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={translatedMember.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
                        <p className="text-red-varese font-bold uppercase text-[8px] md:text-[12px] tracking-[0.2em] mb-0.5 md:mb-1">{translatedMember.role}</p>
                        <h3 className="font-oswald text-lg md:text-3xl font-bold uppercase leading-tight">{translatedMember.name}</h3>
                      </div>
                    </div>
                    <ul className="space-y-1.5 md:space-y-4 text-gray-300 text-[10px] md:text-lg tracking-wide">
                      {translatedMember.bio.map((point, i) => (
                        <li key={i} className="flex items-start gap-1.5 md:gap-3">
                          <div className="w-1 md:w-2 h-1 md:h-2 bg-red-varese rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span className="leading-tight">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )})}
              </div>
            </div>
          </section>

          <section id="facilities" className="py-24 bg-black overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('infrastructure')}</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">{t('eliteFacilities')}</h2>
                <p className="text-gray-400">{t('facilitiesDesc')}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                 {FACILITIES.map((facility) => (
                  <div
                    key={facility.id}
                    className={`relative h-[200px] sm:h-[350px] md:h-[450px] group overflow-hidden rounded-xl shadow-2xl cursor-pointer`}
                    onClick={() => {
                      setPreviousView(view);
                      setView(facility.id as View);
                    }}
                  >
                    <img src={facility.coverImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={t(facility.titleKey as keyof typeof TRANSLATIONS['en'])} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-3 md:p-8 pointer-events-none">
                      <h4 className="font-oswald text-lg md:text-3xl font-bold uppercase leading-tight">{t(facility.titleKey as keyof typeof TRANSLATIONS['en'])}</h4>
                      <p className="text-[10px] md:text-sm text-gray-300 line-clamp-1 md:line-clamp-none">{t(facility.descriptionKey as keyof typeof TRANSLATIONS['en'])}</p>
                      {facility.noteKey && <p className="text-[8px] md:text-[10px] text-red-varese font-bold uppercase tracking-widest mt-1 md:mt-2">{t(facility.noteKey as keyof typeof TRANSLATIONS['en'])}</p>}
                    </div>

                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-oswald text-xs md:text-xl font-bold uppercase tracking-widest">
                          {t('findOutMore')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>



          <div className="w-full bg-red-varese h-36 md:h-40 flex items-center justify-center overflow-hidden relative shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>
            <span className="font-oswald font-black uppercase text-[28vw] md:text-[16vw] tracking-widest text-red-950/40 select-none whitespace-nowrap drop-shadow-2xl mix-blend-multiply">
              VARESE
            </span>
            <span className="absolute font-oswald font-black uppercase text-[28vw] md:text-[16vw] tracking-widest text-white/10 select-none whitespace-nowrap mix-blend-overlay -translate-y-1 -translate-x-1">
              VARESE
            </span>
          </div>

          <FAQSection />
        </>
      )}
      
      {view === 'programs' && (
        <section className="pt-32 pb-24 min-h-screen bg-black animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('programsTraining')}</p>
              <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4">{t('ourTopPrograms')}</h1>
              <p className="text-gray-400 max-w-2xl text-lg uppercase tracking-wider font-light">{t('programsDesc')}</p>
            </div>
            <ProgramsGrid category="top" />
            
            <div className="mt-24 mb-16">
              <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4">{t('eliteOpportunities')}</h2>
            </div>
            <ProgramsGrid category="other" />
          </div>
        </section>
      )}

      {view === 'palmares' && (
        <section className="fixed inset-0 z-[60] overflow-hidden bg-zinc-900 animate-in fade-in duration-500">
            <img 
                src="https://i.imgur.com/8kq5iZS.jpeg" 
                alt="Pallacanestro Varese Trophies" 
                className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
            
            <button 
                onClick={handleBack} 
                className="absolute top-24 left-4 sm:left-8 z-20 flex items-center justify-center bg-black/50 hover:bg-red-varese text-white w-12 h-12 rounded-full transition-colors"
                aria-label={t('back')}
            >
                <ArrowRight className="rotate-180" size={20} />
            </button>
            
            <div className="relative z-10 w-full h-full overflow-y-auto p-8 sm:p-12 md:p-16 flex flex-col justify-end">
                <div className="w-full max-w-6xl mx-auto text-white animate-in slide-in-from-bottom-16 duration-700">
                    <img src={CLUB_LOGO} alt="Logo" className="h-16 md:h-20 mb-4" />
                    <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10">{t('palmaresTitle')}</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-8 text-xs md:text-lg">
                        <div>
                            <h3 className="font-oswald text-sm md:text-xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-1 md:pb-2 mb-3 md:mb-4">{t('nationalCompetitions')}</h3>
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>10</strong> &times; {t('scudetto')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>4</strong> &times; {t('italianCup')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>1</strong> &times; {t('italianSupercup')}</div></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-oswald text-sm md:text-xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-1 md:pb-2 mb-3 md:mb-4">{t('internationalCompetitions')}</h3>
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>5</strong> &times; {t('euroleague')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>2</strong> &times; {t('cupWinnersCup')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>3</strong> &times; {t('intercontinentalCup')}</div></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-oswald text-sm md:text-xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-1 md:pb-2 mb-3 md:mb-4">{t('youthCompetitions')}</h3>
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>3</strong> &times; {t('junioresChampionship')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>1</strong> &times; {t('u19Championship')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>2</strong> &times; {t('u17Championship')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>1</strong> &times; {t('u15Championship')}</div></li>
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>1</strong> &times; {t('joinTheGame')}</div></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-oswald text-sm md:text-xl uppercase text-red-varese border-b-2 border-red-varese/50 pb-1 md:pb-2 mb-3 md:mb-4">{t('otherCompetitions')}</h3>
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-center gap-2 md:gap-3"><Trophy size={14} className="text-red-varese/80 flex-shrink-0" /> <div className="leading-tight"><strong>1</strong> &times; {t('lombardyCup')}</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )}
      
      {isFacilityView && (
          <FacilityPage 
            facility={FACILITIES.find(f => f.id === view)!} 
            onBack={handleBack}
            t={t}
          />
      )}

      {view === 'detailedPrograms' && <DetailedProgramsPage />}

      {view === 'programDetail' && selectedProgram && (
        <ProgramDetailPage 
          program={translateProgram(PROGRAMS.find(p => p.id === selectedProgram.id)!, lang)}
          t={t}
          onBack={handleBack}
          onRequestInfo={(prog) => {
            setSelectedProgram(prog);
            setFormState(prevState => ({ ...prevState, program: prog.title }));
            setIsApplying(true);
          }}
          onBuyNow={() => {
            // Placeholder for buy now functionality
          }}
        />
      )}

      {selectedProgram && isApplying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-300" onClick={handleCloseFormModal}></div>
          <div className="relative bg-zinc-900 w-full max-w-7xl max-h-screen md:max-h-[95vh] overflow-y-auto rounded-none md:rounded-3xl shadow-[0_0_100px_rgba(227,6,19,0.3)] border-0 md:border md:border-white/10 flex flex-col md:flex-row animate-in zoom-in-95 duration-300 ease-out">
            <button onClick={handleCloseFormModal} className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-black/50 hover:bg-red-varese text-white p-2 md:p-3 rounded-full transition-colors backdrop-blur-md"><X size={24} /></button>
            <div className="md:w-[40%] relative h-48 md:h-auto overflow-hidden">
              {(selectedProgram.detailImage || selectedProgram.image) && (
                <img src={selectedProgram.detailImage || selectedProgram.image} className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100" alt={selectedProgram.title} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent md:bg-gradient-to-r"></div>
            </div>
            <div className="md:w-[60%] p-6 md:p-12 flex flex-col overflow-y-visible">
                {submissionStatus === 'submitted' ? (
                  <SubmissionSuccessMessage />
                ) : (
                <div className="flex-grow flex flex-col h-full animate-in slide-in-from-right-8 duration-500">
                  <div className="flex items-center gap-2 mb-8 cursor-pointer group w-fit" onClick={() => setIsApplying(false)}><ArrowRight className="rotate-180 text-red-varese group-hover:-translate-x-1 transition-transform" size={16} /><span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white">{t('backToDetails')}</span></div>
                  <div className="mb-6"><h3 className="text-white font-oswald text-xl md:text-2xl uppercase mb-2">{t('informationForm')}</h3><p className="text-gray-400 text-xs">{t('informationFormDescription')} <span className="text-red-varese font-bold">{selectedProgram.title}</span>.</p></div>
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
              )}
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
                <div className="space-y-1.5 relative"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('topicSelect')}</label><div className="relative"><select required name="program" value={formState.program} onChange={handleFormChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-red-varese transition-colors cursor-pointer"><option value="" disabled className="bg-zinc-900">{t('selectOption')}</option><option value="General Information" className="bg-zinc-900">{t('generalInformation')}</option>{PROGRAMS.map(p => { const translatedProg = translateProgram(p, lang); return <option key={translatedProg.id} value={translatedProg.title} className="bg-zinc-900">{translatedProg.title}</option>})}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} /></div></div>
                <div className="space-y-1.5"><label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">{t('messageInfo')}</label><textarea required name="message" value={formState.message} onChange={handleFormChange} rows={4} placeholder={t('messageInfoPlaceholder')} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors resize-none" /></div>
                <button type="submit" disabled={!isFormValid()} className={`w-full py-4 font-bold uppercase tracking-[0.2em] rounded-lg transition-all flex items-center justify-center gap-3 ${isFormValid() ? 'bg-red-varese hover:bg-red-700 text-white shadow-xl shadow-red-600/20' : 'bg-white/10 text-gray-500 cursor-not-allowed'}`}>{t('requestMoreInfo')} <Send size={18} /></button>
              </form>
            )}
          </div>
        </div>
      )}
      
      {view !== 'palmares' && !isFacilityView && view !== 'detailedPrograms' && view !== 'programDetail' && (
        <>
            <section className="py-32 bg-red-varese relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none"><h2 className="text-[30rem] font-oswald font-black uppercase tracking-tighter">VARESE</h2></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="font-oswald text-5xl md:text-8xl font-bold uppercase mb-8 leading-[0.9]" dangerouslySetInnerHTML={{ __html: t('ctaTitle').replace('Basketball Future', '<br/>Basketball Future') }}></h2>
                <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-white/90 uppercase tracking-widest">{t('ctaSubtitle')}</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="https://store.pallacanestrovarese.it/collections/elite-programs" target="_blank" rel="noopener noreferrer" className="bg-white text-red-varese px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all rounded-sm text-lg shadow-2xl">{t('buyNow')}</a>
                    <button onClick={() => setIsJoinModalOpen(true)} className="border border-white text-white px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all rounded-sm text-lg">{t('applyNow')}</button>
                </div>
                </div>
            </section>

            <footer className="bg-black py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16">
                    <div className="col-span-2 md:col-span-2">
                    <img src={CLUB_LOGO} alt="Varese" className="h-12 md:h-20 mb-4 md:mb-8" /><h4 className="font-oswald text-xl md:text-3xl font-bold uppercase mb-2 md:mb-4 tracking-tighter">Pallacanestro Varese <span className="text-red-varese">EBP</span></h4>
                    <p className="text-gray-500 max-w-sm mb-4 md:mb-8 leading-relaxed text-xs md:text-base">{t('footerSlogan')}</p>
                    <div className="flex gap-4 md:gap-6 items-center"><a href="https://www.linkedin.com/company/pallacanestro-varese-spa/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Linkedin size={20} md:size={24} /></a><a href="https://www.instagram.com/pallvarese?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Instagram size={20} md:size={24} /></a><a href="https://www.facebook.com/pallvarese/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Facebook size={20} md:size={24} /></a><a href="https://x.com/PallVarese" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><X size={20} md:size={24} /></a><a href="https://www.tiktok.com/@pallvarese?_r=1&_t=ZN-93rFmsKhFL8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.5a6.33 6.33 0 0 0-1.01-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.27A8.25 8.25 0 0 0 22 11.45V8.04a4.8 4.8 0 0 1-2.41-1.35z"/></svg></a></div>
                    </div>
                    <div>
                    <ul className="space-y-2 md:space-y-4 text-gray-500 text-[10px] md:text-sm md:mt-16">
                        <li><button onClick={() => navigateToHomeSection('who-we-are')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerLegacy')}</button></li>
                        <li><button onClick={() => navigateToHomeSection('where-we-are')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerRegion')}</button></li>
                        <li><button onClick={() => navigateToHomeSection('leadership')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerLeadership')}</button></li>
                        <li><button onClick={() => navigateToHomeSection('facilities')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerFacilities')}</button></li>
                        <li><button onClick={() => setView('programs')} className="hover:text-white transition-colors uppercase tracking-widest">{t('footerPrograms')}</button></li>
                        <li><button onClick={() => navigateToHomeSection('faq')} className="hover:text-white transition-colors uppercase tracking-widest">FAQ</button></li>
                    </ul>
                    </div>
                    <div>
                        <div className="flex items-start gap-2 md:gap-3 text-[10px] md:text-sm text-gray-500">
                            <MapPin size={16} md:size={20} className="text-red-varese mt-0.5 flex-shrink-0" />
                            <a href="https://maps.app.goo.gl/WUqdjaf9duktWCNU8" target="_blank" rel="noopener noreferrer" className="hover:text-red-varese transition-colors" dangerouslySetInnerHTML={{ __html: t('footerAddress').replace('\n', '<br/>') }}></a>
                        </div>
                        <div className="mt-4 md:mt-8">
                            <h5 className="font-bold uppercase mb-2 md:mb-4 tracking-[0.2em] text-[10px] md:text-xs text-white">{t('contactUs')}</h5>
                            <div className="text-[10px] md:text-sm text-gray-500">
                                <p>Email: <a href="mailto:f.bellotto@pallacanestrovarese.it" className="hover:text-red-varese transition-colors">f.bellotto@pallacanestrovarese.it</a></p>
                                <p className="text-[8px] md:text-[10px] uppercase tracking-widest mt-0.5 md:mt-1 text-gray-400">{t('footerCOO')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.1em]"><p>&copy; {new Date().getFullYear()} Pallacanestro Varese. {t('footerDevelopedBy')}</p></div>
                </div>
            </footer>
        </>
      )}
    </div>
  );
};

export default App;
