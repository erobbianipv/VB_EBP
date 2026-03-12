import { Language, Program, StaffMember } from './types';

const programTranslations: Record<string, Record<string, Partial<Program>>> = {
  "academy": {
    it: {
      title: "ACCADEMIA DI BASKET",
      target: "Dedicato ai ragazzi tra i 5 e i 19 anni",
      timing: "Tutto l'anno",
      description: "Un impegno per favorire la crescita attraverso un approccio a due vie: Grassroots e Sviluppo di Giocatori d'Elite.",
      overview: "La Pallacanestro Varese è orgogliosa di annunciare la fondazione della sua Basketball Academy, un progetto nato da un profondo impegno per favorire la crescita del basket sia a livello locale che nazionale. Questo non è solo un programma sportivo; è uno sforzo collaborativo per costruire un'eredità di eccellenza, lavoro di squadra e passione per il gioco.",
      highlights: ["Allenatori Esperti", "Strutture di alta qualità", "Coinvolgimento della comunità"],
      details: `Un Approccio Completo a Due Vie
La nostra Accademia si basa su due pilastri fondamentali progettati per servire ogni aspetto dello sport:

Eccellenza di Base: Crediamo nel basket come potente strumento per la comunità. Il nostro programma promuove uno spirito attivo e positivo, aiutando i giovani atleti a sviluppare abilità sociali e uno stile di vita sano.

Sviluppo di Giocatori d'Elite: Per coloro che sognano i campionati maggiori, forniamo il percorso definitivo. Offrendo allenatori esperti, programmi di allenamento professionali e accesso a strutture di alta qualità, coltiviamo le stelle del basket di domani.

la nostra visione
La Pallacanestro Varese è orgogliosa di esportare la sua leggendaria eredità cestistica attraverso il nostro Global Academy Expansion Program. Colmiamo il divario tra la storica tradizione europea e il talento internazionale stabilendo accademie satellite ufficiali in collaborazione diretta con Federazioni Nazionali, club d'élite e organizzazioni sportive in tutto il mondo. Questo non è un franchising; è un allineamento tecnico strategico progettato per trapiantare la nostra collaudata metodologia di Serie A nel tuo ecosistema cestistico locale.

il programma
Pallacanestro Varese Academy esporta il prestigioso patrimonio e l'eccellenza tecnica del nostro club per elevare il basket giovanile in tutto il mondo. Collaborando con club locali e federazioni nazionali, forniamo accesso esclusivo al nostro know-how d'élite, a standard di allenamento di alto livello e a un'esperienza organizzativa strategica. Questa iniziativa è progettata per favorire la crescita professionale attraverso una visione condivisa, sfruttando il potere del nostro marchio per guidare il successo atletico e operativo su scala globale.
THE_PILLARS_PLACEHOLDER

pubblico di riferimento
ACADEMY_TABLES_PLACEHOLDER

contattaci
Per maggiori informazioni e per candidarsi al programma Basketball Academy contattaci all'indirizzo e.robbiani@pallacanestrovarese.it

prezzi
Contattaci o clicca qui per informazioni dettagliate sui prezzi in base alle tue esigenze specifiche.`
    },
    es: {
      title: "ACADEMIA DE BALONCESTO",
      target: "Dedicado a niños entre 5 y 19 años",
      timing: "Todo el año",
      description: "Un compromiso para fomentar el crecimiento a través de un enfoque de dos vías: Base y Desarrollo de Jugadores de Élite.",
      overview: "Pallacanestro Varese se enorgullece de anunciar el establecimiento de su Academia de Baloncesto, un proyecto nacido de un profundo compromiso para fomentar el crecimiento del baloncesto tanto a nivel local como nacional. Esto no es solo un programa deportivo; es un esfuerzo colaborativo para construir un legado de excelencia, trabajo en equipo y pasión por el juego.",
      highlights: ["Entrenadores Expertos", "Instalaciones de alta calidad", "Participación comunitaria"],
      details: `Un Enfoque Completo de Dos Vías
Nuestra Academia se basa en dos pilares fundamentales diseñados para servir a todos los aspectos del deporte:

Excelencia de Base: Creemos en el baloncesto como una herramienta poderosa para la comunidad. Nuestro programa promueve un espíritu activo y positivo, ayudando a los jóvenes atletas a desarrollar habilidades sociales y un estilo de vida saludable.

Desarrollo de Jugadores de Élite: Para aquellos que sueñan con las grandes ligas, proporcionamos el camino definitivo. Al ofrecer entrenadores expertos, programas de entrenamiento profesional y acceso a instalaciones de alta calidad, cultivamos a las estrellas del baloncesto del mañana.

nuestra visión
Pallacanestro Varese se enorgullece de exportar su legendario legado de baloncesto a través de nuestro Global Academy Expansion Program. Cerramos la brecha entre la histórica tradición europea y el talento internacional mediante el establecimiento de academias satélite oficiales en colaboración directa con Federaciones Nacionales, clubes de élite y organizaciones deportivas de todo el mundo. Esto no es una franquicia; es una alineación técnica estratégica diseñada para trasplantar nuestra probada metodología de la Serie A a su ecosistema de baloncesto local.

el programa
Pallacanestro Varese Academy exporta el prestigioso patrimonio y la excelencia técnica de nuestro club para elevar el baloncesto juvenil en todo el mundo. Al asociarnos con clubes locales y federaciones nacionales, brindamos acceso exclusivo a nuestro know-how de élite, estándares de entrenamiento de alto nivel y experiencia organizativa estratégica. Esta iniciativa está diseñada para fomentar el crecimiento profesional a través de una visión compartida, aprovechando el poder de nuestra marca para impulsar el éxito atlético y operativo a escala global.
THE_PILLARS_PLACEHOLDER

público objetivo
ACADEMY_TABLES_PLACEHOLDER

contáctanos
Para obtener más información y postularse para el programa Basketball Academy, contáctenos en e.robbiani@pallacanestrovarese.it

precios
Contáctanos o haz clic aquí para obtener información detallada sobre los precios adaptada a tus necesidades específicas.`
    },
    fr: {
      title: "ACADÉMIE DE BASKETBALL",
      target: "Dédié aux enfants de 5 à 19 ans",
      timing: "Toute l'année",
      description: "Un engagement à favoriser la croissance grâce à une approche à deux voies : Base et Développement de Joueurs d'Élite.",
      overview: "Pallacanestro Varese est fier d'annoncer la création de son Académie de Basketball, un projet né d'un profond engagement à favoriser la croissance du basketball aux niveaux local et national. Ce n'est pas seulement un programme sportif ; c'est un effort de collaboration pour bâtir un héritage d'excellence, de travail d'équipe et de passion pour le jeu.",
      highlights: ["Entraîneurs Experts", "Installations de haute qualité", "Engagement communautaire"],
      details: `Une Approche Complète à Deux Voies
Notre Académie repose sur deux piliers fondamentaux conçus pour servir tous les aspects du sport :

Excellence de Base : Nous croyons au basketball comme un outil puissant pour la communauté. Notre programme promeut un esprit actif et positif, aidant les jeunes athlètes à développer des compétences sociales et un mode de vie sain.

Développement de Joueurs d'Élite : Pour ceux qui rêvent des grandes ligues, nous offrons la voie ultime. En proposant des entraîneurs experts, des programmes d'entraînement professionnels et un accès à des installations de haute qualité, nous cultivons les stars du basketball de demain.

notre vision
Pallacanestro Varese est fier d'exporter son héritage légendaire du basketball à travers notre Global Academy Expansion Program. Nous comblons le fossé entre la tradition européenne historique et les talents internationaux en créant des académies satellites officielles en collaboration directe avec les fédérations nationales, les clubs d'élite et les organisations sportives du monde entier. Il ne s'agit pas d'une franchise ; c'est un alignement technique stratégique conçu pour transplanter notre méthodologie éprouvée de Serie A dans votre écosystème de basketball local.

le programme
Pallacanestro Varese Academy exporte l'héritage prestigieux et l'excellence technique de notre club pour élever le basketball des jeunes dans le monde entier. En nous associant à des clubs locaux et à des fédérations nationales, nous offrons un accès exclusif à notre savoir-faire d'élite, à des normes d'entraînement de haut niveau et à une expertise organisationnelle stratégique. Cette initiative est conçue pour favoriser la croissance professionnelle grâce à une vision partagée, en tirant parti de la puissance de notre marque pour stimuler le succès athlétique et opérationnel à l'échelle mondiale.
THE_PILLARS_PLACEHOLDER

public cible
ACADEMY_TABLES_PLACEHOLDER

contactez-nous
Pour plus d'informations et pour postuler au programme Basketball Academy, veuillez nous contacter à e.robbiani@pallacanestrovarese.it

prix
Contactez-nous ou cliquez ici pour obtenir des informations détaillées sur les prix adaptées à vos besoins spécifiques.`
    }
  },
  "full-time": {
    it: {
      title: "PROGRAMMA DI ALLENAMENTO FULL TIME",
      target: "Età 13-17 (Idealmente < 15 per lo Status Italiano)",
      timing: "Da fine agosto a fine giugno",
      description: "Vivi un'esperienza di basket senza pari, tutto l'anno a Varese. Questo programma è un pacchetto meticolosamente progettato che offre un ambiente su misura e servizi di alto livello per elevare i giocatori dedicati al livello successivo. Dalla fine di agosto alla fine di giugno, fornisce un'atmosfera professionale e costante per la crescita.",
      highlights: ["Potenziale Status di Giocatore Italiano", "Programmi di allenamento su misura", "Ambiente competitivo"],
      details: `Pubblico di riferimento
Questo percorso professionale d'élite è stato meticolosamente progettato per giovani atleti altamente ambiziosi che dimostrano un profondo impegno nello stabilire una carriera a lungo termine e di alto livello all'interno del competitivo ecosistema del basket europeo. Riconosciamo che il viaggio verso i ranghi professionali richiede più del semplice talento; richiede un ambiente strutturato e ad alte prestazioni che colmi il divario tra il potenziale giovanile e l'esecuzione professionale.
Il programma è strategicamente adattato per affrontare le esigenze di sviluppo fisiologico e tecnico uniche degli studenti-atleti di età strettamente compresa tra i 13 e i 17 anni. Concentrandoci su questa fascia di età critica, siamo in grado di fornire un quadro competitivo specializzato essenziale per eccellere nel moderno circuito professionale. Il nostro curriculum garantisce che ogni partecipante sia dotato dell'intelligenza tattica e della preparazione fisica necessarie per navigare nelle complessità del basket europeo ai massimi livelli.

Opportunità Future
La nostra strategia di reclutamento attribuisce un'alta priorità agli atleti che non hanno più di 15 anni al momento del loro ingresso iniziale nel programma. Questa specifica soglia di età è una scelta deliberata, progettata per facilitare il complesso processo legale e sportivo di acquisizione dello Status di Giocatore Italiano. Iniziando in questa fase di sviluppo, garantiamo che ci sia tempo sufficiente per soddisfare i requisiti di residenza e registrazione previsti dalle normative sportive nazionali.

Impegnandosi in un mandato completo di quattro anni all'interno del nostro sistema integrato, ai giocatori viene offerto un duplice vantaggio unico. Possono completare con successo i passaggi necessari per ottenere il loro status italiano, offrendo loro una maggiore flessibilità nei campionati professionistici europei, pur mantenendo contemporaneamente la loro piena idoneità a rappresentare le rispettive squadre nazionali sul palcoscenico internazionale. Questa struttura consente ai nostri atleti di ampliare i propri orizzonti professionali senza sacrificare le proprie aspirazioni patriottiche.

le nostre offerte
OFFERS_TABLES_PLACEHOLDER
Nessun programma include voli, visti, pratiche burocratiche, trasporto da/per l'aeroporto, trasporto locale

the elite player package
Questo pacchetto garantisce un ambiente personalizzato e ad alta intensità dove ogni minuto in campo è ottimizzato per una crescita di livello d'élite. L'elite player package è disponibile solo per il Programma Premium.
ELITE_PACKAGE_PLACEHOLDER

Quando e dove
Le nostre strutture premium, tra cui la Foresteria Elite Housing e il Campus di via Pirandello, sono strategicamente posizionate a 5 minuti a piedi l'una dall'altra. Questo layout integrato ottimizza le transizioni quotidiane per la durata del programma, che va da fine agosto a fine giugno, consentendo agli atleti di concentrarsi interamente sul loro rigoroso programma di allenamento.

prezzi
Contattaci o clicca qui per informazioni dettagliate sui prezzi in base alle tue esigenze specifiche.`
    },
    es: {
      title: "PROGRAMA DE ENTRENAMIENTO A TIEMPO COMPLETO",
      target: "Edades 13-17 (Idealmente < 15 para el Estatus Italiano)",
      timing: "De finales de agosto a finales de junio",
      description: "Experimenta un viaje de baloncesto sin igual durante todo el año en Varese. Este programa es un paquete meticulosamente diseñado que ofrece un entorno a medida y servicios de alto nivel para elevar a los jugadores dedicados al siguiente nivel. Desde finales de agosto hasta finales de junio, proporciona un ambiente profesional y constante para el crecimiento.",
      highlights: ["Potencial Estatus de Jugador Italiano", "Programas de entrenamiento a medida", "Entorno competitivo"],
      details: `Público objetivo
Este camino profesional de élite ha sido meticulosamente diseñado para jóvenes atletas altamente ambiciosos que demuestran un profundo compromiso para establecer una carrera a largo plazo y de alto nivel dentro del competitivo ecosistema del baloncesto europeo. Reconocemos que el viaje a las filas profesionales requiere más que solo talento; exige un entorno estructurado y de alto rendimiento que cierre la brecha entre el potencial juvenil y la ejecución profesional.
El programa está estratégicamente adaptado para abordar las necesidades únicas de desarrollo fisiológico y técnico de los estudiantes-atletas de edades comprendidas estrictamente entre 13 y 17 años. Al centrarnos en este grupo de edad crítico, podemos proporcionar un marco competitivo especializado que es esencial para sobresalir en el circuito profesional moderno. Nuestro plan de estudios garantiza que cada participante esté equipado con la inteligencia táctica y la preparación física necesarias para navegar por las complejidades del baloncesto europeo en sus niveles más altos.

Oportunidades Futuras
Nuestra estrategia de reclutamiento otorga una alta prioridad a los atletas que no tienen más de 15 años en el momento de su ingreso inicial al programa. Este umbral de edad específico es una elección deliberada, diseñada para facilitar el complejo proceso legal y deportivo de adquirir el Estatus de Jugador Italiano. Al comenzar en esta etapa de desarrollo, nos aseguramos de que haya tiempo suficiente para cumplir con los requisitos de residencia y registro exigidos por las regulaciones deportivas nacionales.

Al comprometerse con un mandato completo de cuatro años dentro de nuestro sistema integrado, a los jugadores se les ofrece una doble ventaja única. Pueden completar con éxito los pasos necesarios para obtener su estatus italiano, brindándoles una mayor flexibilidad en las ligas profesionales europeas, al tiempo que mantienen su plena elegibilidad para representar a sus respectivos equipos nacionales en el escenario internacional. Esta estructura permite a nuestros atletas ampliar sus horizontes profesionales sin sacrificar sus aspiraciones patrióticas.

nuestras ofertas
OFFERS_TABLES_PLACEHOLDER
Ningún programa incluye vuelos, visado, trámites, transporte desde/hacia el aeropuerto, transporte local

the elite player package
Este paquete garantiza un entorno personalizado y de alta intensidad donde cada minuto en la cancha se optimiza para el crecimiento de nivel élite. El elite player package solo está disponible para el Programa Premium.
ELITE_PACKAGE_PLACEHOLDER

Cuándo y dónde
Nuestras instalaciones premium, que incluyen la Foresteria Elite Housing y el Campus de via Pirandello, están ubicadas estratégicamente a 5 minutos a pie una de la otra. Este diseño integrado optimiza las transiciones diarias durante la duración del programa, que se extiende desde finales de agosto hasta finales de junio, lo que permite a los atletas concentrarse por completo en su riguroso programa de entrenamiento.

precios
Contáctanos o haz clic aquí para obtener información detallada sobre los precios adaptada a tus necesidades específicas.`
    },
    fr: {
      title: "PROGRAMME D'ENTRAÎNEMENT À TEMPS PLEIN",
      target: "Âges 13-17 (Idéalement < 15 pour le Statut Italien)",
      timing: "De fin août à fin juin",
      description: "Vivez un parcours de basketball inégalé tout au long de l'année à Varèse. Ce programme est un forfait méticuleusement conçu offrant un environnement sur mesure et des services de haut niveau pour élever les joueurs dévoués au niveau supérieur. De fin août à fin juin, il offre une atmosphère professionnelle et constante pour la croissance.",
      highlights: ["Potentiel Statut de Joueur Italien", "Programmes d'entraînement sur mesure", "Environnement compétitif"],
      details: `Public cible
Ce parcours professionnel d'élite a été méticuleusement conçu pour de jeunes athlètes très ambitieux qui démontrent un profond engagement à établir une carrière à long terme de haut niveau au sein de l'écosystème compétitif du basketball européen. Nous reconnaissons que le parcours vers les rangs professionnels exige plus que du talent ; il nécessite un environnement structuré et de haute performance qui comble le fossé entre le potentiel des jeunes et l'exécution professionnelle.
Le programme est stratégiquement adapté pour répondre aux besoins uniques de développement physiologique et technique des étudiants-athlètes âgés strictement de 13 à 17 ans. En nous concentrant sur cette tranche d'âge critique, nous sommes en mesure de fournir un cadre compétitif spécialisé qui est essentiel pour exceller dans le circuit professionnel moderne. Notre programme garantit que chaque participant est doté de l'intelligence tactique et de la préparation physique nécessaires pour naviguer dans les complexités du basketball européen à ses plus hauts niveaux.

Opportunités Futures
Notre stratégie de recrutement accorde une priorité absolue aux athlètes qui n'ont pas plus de 15 ans au moment de leur entrée initiale dans le programme. Ce seuil d'âge spécifique est un choix délibéré, conçu pour faciliter le processus juridique et sportif complexe d'acquisition du Statut de Joueur Italien. En commençant à ce stade de développement, nous nous assurons qu'il y a suffisamment de temps pour répondre aux exigences de résidence et d'inscription imposées par les réglementations sportives nationales.

En s'engageant pour un mandat complet de quatre ans au sein de notre système intégré, les joueurs bénéficient d'un double avantage unique. Ils peuvent franchir avec succès les étapes nécessaires pour obtenir leur statut italien — leur offrant une plus grande flexibilité dans les ligues professionnelles européennes — tout en conservant simultanément leur pleine éligibilité pour représenter leurs équipes nationales respectives sur la scène internationale. Cette structure permet à nos athlètes d'élargir leurs horizons professionnels sans sacrifier leurs aspirations patriotiques.

nos offres
OFFERS_TABLES_PLACEHOLDER
Aucun programme n'inclut les vols, les visas, les formalités administratives, le transport depuis/vers l'aéroport, le transport local

the elite player package
Ce forfait garantit un environnement personnalisé et de haute intensité où chaque minute sur le terrain est optimisée pour une croissance de niveau élite. L'elite player package est uniquement disponible pour le Programme Premium.
ELITE_PACKAGE_PLACEHOLDER

Quand et où
Nos installations haut de gamme, notamment la Foresteria Elite Housing et le Campus de via Pirandello, sont stratégiquement situées à 5 minutes à pied l'une de l'autre. Cet aménagement intégré optimise les transitions quotidiennes pendant la durée du programme, qui s'étend de fin août à fin juin, permettant aux athlètes de se concentrer entièrement sur leur programme d'entraînement rigoureux.

prix
Contactez-nous ou cliquez ici pour obtenir des informations détaillées sur les prix adaptées à vos besoins spécifiques.`
    }
  },
  "summer-camp": {
    it: {
      title: "ELITE SUMMER CAMP",
      target: "Nati tra il 2007 e il 2011",
      timing: "Una settimana (6 giorni, 5 notti)",
      description: "Ti invitiamo a unirti alla Pallacanestro Varese per un'esperienza trasformativa e all-inclusive di una settimana specificamente progettata per aspiranti giocatori di basket che hanno la spinta per superare i propri limiti fisici e mentali. Questo non è semplicemente un campo di allenamento; è un'immersione profonda in una cultura professionale, offrendo ai partecipanti un assaggio raro e autentico dell'incessante dedizione e disciplina necessarie per raggiungere il successo ai massimi livelli del basket d'élite.",
      highlights: ["Tecniche di Serie A", "Competizione d'Elite", "Analisi delle Prestazioni"],
      details: `Pubblico di riferimento
Questa esperienza estiva di prim'ordine è stata progettata e curata esclusivamente per un gruppo selezionato di giovani atleti ambiziosi, in particolare quelli nati tra il 2007 e il 2011, che dimostrano un impegno incrollabile nel raggiungere prestazioni di livello d'élite. Comprendiamo che la bassa stagione è una finestra critica per la crescita e questo programma funge da piattaforma definitiva per i giocatori che fanno sul serio riguardo alla loro traiettoria atletica e allo sviluppo a lungo termine.
Per facilitare questa crescita, il programma offre un ambiente di allenamento sofisticato e ad alta intensità, meticolosamente adattato per soddisfare le esigenze dei giocatori ad alto potenziale. Il nostro obiettivo principale è fornire a questi atleti gli strumenti tecnici avanzati e le intuizioni tattiche necessarie per affinare le loro abilità individuali. Immergendo i partecipanti in un'atmosfera di livello professionale, diamo loro la possibilità di elevare il loro gioco a uno standard che soddisfi le rigorose esigenze del moderno circuito professionale.

Quando e dove
Le nostre strutture premium, tra cui la Foresteria Elite Housing e il Campus di via Pirandello, sono strategicamente posizionate a 5 minuti a piedi l'una dall'altra. Questo layout integrato ottimizza le transizioni quotidiane per la durata del programma, che va da fine agosto a fine giugno, consentendo agli atleti di concentrarsi interamente sul loro rigoroso programma di allenamento.

il programma di allenamento
Placeholder

Esempio di Routine Giornaliera
TABLES_PLACEHOLDER`
    },
    es: {
      title: "CAMPAMENTO DE VERANO DE ÉLITE",
      target: "Nacidos entre 2007 y 2011",
      timing: "Una semana (6 días, 5 noches)",
      description: "Te invitamos a unirte a Pallacanestro Varese para una experiencia transformadora e integral de una semana diseñada específicamente para aspirantes a jugadores de baloncesto que tienen el impulso de superar sus límites físicos y mentales. Este no es simplemente un campo de entrenamiento; es una inmersión profunda en una cultura profesional, ofreciendo a los participantes una muestra rara y auténtica de la dedicación y disciplina implacables requeridas para lograr el éxito en los niveles más altos del baloncesto de élite.",
      highlights: ["Técnicas de Serie A", "Competición de Élite", "Análisis de Rendimiento"],
      details: `Público objetivo
Esta experiencia de verano de primer nivel ha sido diseñada y seleccionada exclusivamente para un grupo selecto de jóvenes atletas ambiciosos, específicamente aquellos nacidos entre 2007 y 2011, que demuestran un compromiso inquebrantable para lograr un rendimiento de nivel de élite. Entendemos que la temporada baja es una ventana crítica para el crecimiento, y este programa sirve como la plataforma definitiva para los jugadores que se toman en serio su trayectoria atlética y su desarrollo a largo plazo.
Para facilitar este crecimiento, el programa ofrece un entorno de entrenamiento sofisticado y de alta intensidad que se adapta meticulosamente para satisfacer las necesidades de los jugadores de alto potencial. Nuestro objetivo principal es proporcionar a estos atletas las herramientas técnicas avanzadas y los conocimientos tácticos necesarios para perfeccionar sus conjuntos de habilidades individuales. Al sumergir a los participantes en una atmósfera de nivel profesional, los empoderamos para elevar su juego a un estándar que cumpla con las rigurosas demandas del circuito profesional moderno.

Cuándo y dónde
Nuestras instalaciones premium, que incluyen la Foresteria Elite Housing y el Campus de via Pirandello, están ubicadas estratégicamente a 5 minutos a pie una de la otra. Este diseño integrado optimiza las transiciones diarias durante la duración del programa, que se extiende desde finales de agosto hasta finales de junio, lo que permite a los atletas concentrarse por completo en su riguroso programa de entrenamiento.

el programa de entrenamiento
Placeholder

Ejemplo de Rutina Diaria
TABLES_PLACEHOLDER`
    },
    fr: {
      title: "CAMP D'ÉTÉ D'ÉLITE",
      target: "Nés entre 2007 et 2011",
      timing: "Une semaine (6 jours, 5 nuits)",
      description: "Nous vous invitons à rejoindre Pallacanestro Varese pour une expérience transformatrice et tout compris d'une semaine spécialement conçue pour les aspirants joueurs de basketball qui ont la volonté de repousser leurs limites physiques et mentales. Ce n'est pas simplement un camp d'entraînement ; c'est une plongée profonde dans une culture professionnelle, offrant aux participants un aperçu rare et authentique du dévouement et de la discipline implacables requis pour réussir aux plus hauts niveaux du basketball d'élite.",
      highlights: ["Techniques de Serie A", "Compétition d'Élite", "Analyse des Performances"],
      details: `Public cible
Cette expérience estivale de premier plan a été exclusivement conçue et organisée pour un groupe restreint de jeunes athlètes ambitieux, en particulier ceux nés entre 2007 et 2011, qui font preuve d'un engagement inébranlable à atteindre des performances de niveau élite. Nous comprenons que la saison morte est une fenêtre critique pour la croissance, et ce programme sert de plate-forme définitive pour les joueurs qui prennent au sérieux leur trajectoire athlétique et leur développement à long terme.
Pour faciliter cette croissance, le programme offre un environnement d'entraînement sophistiqué et de haute intensité qui est méticuleusement adapté pour répondre aux besoins des joueurs à fort potentiel. Notre objectif principal est de fournir à ces athlètes les outils techniques avancés et les connaissances tactiques nécessaires pour affiner leurs compétences individuelles. En plongeant les participants dans une atmosphère de niveau professionnel, nous leur donnons les moyens d'élever leur jeu à un niveau qui répond aux exigences rigoureuses du circuit professionnel moderne.

Quand et où
Nos installations haut de gamme, notamment la Foresteria Elite Housing et le Campus de via Pirandello, sont stratégiquement situées à 5 minutes à pied l'une de l'autre. Cet aménagement intégré optimise les transitions quotidiennes pendant la durée du programme, qui s'étend de fin août à fin juin, permettant aux athlètes de se concentrer entièrement sur leur programme d'entraînement rigoureux.

le programme d'entraînement
Placeholder

Exemple de Routine Quotidienne
TABLES_PLACEHOLDER`
    }
  },
  "internship": {
    it: {
      title: "PROGRAMMA DI TIROCINIO PER ALLENATORI",
      target: "Aspiranti Allenatori",
      timing: "Durata Flessibile",
      description: "Ti invitiamo a entrare nel prestigioso mondo del basket europeo d'élite con un'opportunità senza pari di integrarti direttamente con lo staff tecnico professionistico della Pallacanestro Varese. Questo programma immersivo è stato specificamente progettato per allenatori internazionali ambiziosi che non cercano solo un seminario, ma sono desiderosi di acquisire un'esperienza diretta e di alto livello all'interno di un ambiente professionale ad alto rischio. Lavorando a fianco del nostro team tecnico, i partecipanti assisteranno alle operazioni quotidiane, alla pianificazione tattica e alle strategie di gestione dei giocatori che definiscono la competizione europea di alto livello.",
      highlights: ["Studio della Metodologia", "Osservazione degli Allenamenti", "Integrazione nello Staff"],
      details: `Pubblico di riferimento
Ti invitiamo a entrare nel prestigioso mondo del basket europeo d'élite con un'opportunità senza pari di integrarti direttamente con lo staff tecnico professionistico della Pallacanestro Varese. Questo programma immersivo è stato specificamente progettato per allenatori internazionali ambiziosi che non cercano solo un seminario, ma sono desiderosi di acquisire un'esperienza diretta e di alto livello all'interno di un ambiente professionale ad alto rischio. Lavorando a fianco del nostro team tecnico, i partecipanti assisteranno alle operazioni quotidiane, alla pianificazione tattica e alle strategie di gestione dei giocatori che definiscono la competizione europea di alto livello.

Il programma è strutturato per allinearsi alla stagione ufficiale della LBA (Lega Basket Serie A), operando a pieno regime dalle preparazioni pre-stagionali iniziali di agosto fino alle fasi competitive finali di giugno. Per garantire che ogni allenatore in visita abbia tutto il tempo necessario per assorbire le complessità del nostro sistema e costruire relazioni professionali significative, il programma richiede un impegno minimo di almeno un mese. Questa durata consente una comprensione completa della nostra filosofia di allenamento, dallo scouting e dall'analisi video all'esecuzione di piani di gioco di livello d'élite.

Integrazione Professionale d'Elite
Questo è più di un semplice corso; è un'immersione nelle operazioni quotidiane di una squadra di basket di Serie A. Come stagista, potrai:

Seguire i Professionisti: Acquisisci preziose intuizioni osservando e imparando dai nostri esperti professionisti dell'allenamento durante gli allenamenti e le partite.

Partecipazione Attiva in Campo: Assumi un ruolo pratico conducendo esercitazioni con i giocatori di Serie A e assistendo agli allenamenti professionali.

Sviluppo Strategico: Partecipa alle riunioni degli allenatori per comprendere i processi decisionali tattici e strategici ai massimi livelli.

Sviluppo Giovanile: Contribuisci al futuro dello sport assistendo lo staff tecnico delle nostre squadre giovanili.

Quando e dove
Il programma sarà ospitato presso le nostre strutture di prim'ordine, in particolare la Foresteria Elite Housing e il nostro Campus in via Pirandello. Queste due sedi di punta sono strategicamente situate a soli 5 minuti a piedi l'una dall'altra, garantendo transizioni senza interruzioni tra residenza e allenamento. Questa configurazione logistica integrata consente agli atleti di massimizzare il loro tempo e concentrarsi interamente sul loro sviluppo professionale.

prezzi
Contattaci o clicca qui per informazioni dettagliate sui prezzi in base alle tue esigenze specifiche.`
    },
    es: {
      title: "PROGRAMA DE PRÁCTICAS PARA ENTRENADORES",
      target: "Aspirantes a Entrenadores",
      timing: "Duración Flexible",
      description: "Te invitamos a adentrarte en el prestigioso mundo del baloncesto europeo de élite con una oportunidad inigualable de integrarte directamente con el cuerpo técnico profesional de Pallacanestro Varese. Este programa inmersivo ha sido diseñado específicamente para ambiciosos entrenadores internacionales que no solo buscan un seminario, sino que están ansiosos por obtener experiencia de primera mano y de alto nivel dentro de un entorno profesional de alto riesgo. Al trabajar junto a nuestro equipo técnico, los participantes presenciarán las operaciones diarias, la planificación táctica y las estrategias de gestión de jugadores que definen la competición europea de primer nivel.",
      highlights: ["Estudio de Metodología", "Observación de Entrenamientos", "Integración en el Personal"],
      details: `Público objetivo
Te invitamos a adentrarte en el prestigioso mundo del baloncesto europeo de élite con una oportunidad inigualable de integrarte directamente con el cuerpo técnico profesional de Pallacanestro Varese. Este programa inmersivo ha sido diseñado específicamente para ambiciosos entrenadores internacionales que no solo buscan un seminario, sino que están ansiosos por obtener experiencia de primera mano y de alto nivel dentro de un entorno profesional de alto riesgo. Al trabajar junto a nuestro equipo técnico, los participantes presenciarán las operaciones diarias, la planificación táctica y las estrategias de gestión de jugadores que definen la competición europea de primer nivel.

El programa está estructurado para alinearse con la temporada oficial de la LBA (Lega Basket Serie A), operando a plena capacidad desde los preparativos iniciales de pretemporada en agosto hasta las etapas competitivas finales en junio. Para garantizar que cada entrenador visitante tenga tiempo suficiente para absorber las complejidades de nuestro sistema y construir relaciones profesionales significativas, el programa requiere un compromiso mínimo de al menos un mes. Esta duración permite una comprensión integral de nuestra filosofía de entrenamiento, desde el scouting y el análisis de video hasta la ejecución de planes de juego de nivel de élite.

Integración Profesional de Élite
Esto es más que un simple curso; es una inmersión en las operaciones diarias de un equipo de baloncesto de la Serie A. Como pasante, podrás:

Seguir a los Profesionales: Obtén información invaluable observando y aprendiendo de nuestros experimentados profesionales del entrenamiento durante prácticas y juegos.

Participación Activa en la Cancha: Asume un papel práctico dirigiendo ejercicios con jugadores de la Serie A y ayudando en prácticas profesionales.

Desarrollo Estratégico: Asiste a las reuniones de entrenadores para comprender los procesos de toma de decisiones tácticas y estratégicas al más alto nivel.

Desarrollo Juvenil: Contribuye al futuro del deporte ayudando al cuerpo técnico de nuestros equipos juveniles.

Cuándo y dónde
El programa se llevará a cabo en nuestras instalaciones de primer nivel, específicamente la Foresteria Elite Housing y nuestro Campus en via Pirandello. Estas dos ubicaciones emblemáticas están estratégicamente situadas a solo 5 minutos a pie una de la otra, lo que garantiza transiciones fluidas entre la residencia y el entrenamiento. Esta configuración logística integrada permite a los atletas maximizar su tiempo y concentrarse por completo en su desarrollo profesional.

precios
Contáctanos o haz clic aquí para obtener información detallada sobre los precios adaptada a tus necesidades específicas.`
    },
    fr: {
      title: "PROGRAMME DE STAGE POUR ENTRAÎNEURS",
      target: "Aspirants Entraîneurs",
      timing: "Durée Flexible",
      description: "Nous vous invitons à pénétrer dans le monde prestigieux du basketball européen d'élite avec une opportunité inégalée de vous intégrer directement au personnel d'entraîneurs professionnels de Pallacanestro Varese. Ce programme immersif a été spécialement conçu pour les entraîneurs internationaux ambitieux qui ne recherchent pas seulement un séminaire, mais qui sont impatients d'acquérir une expérience de première main et de haut niveau dans un environnement professionnel à enjeux élevés. En travaillant aux côtés de notre équipe technique, les participants seront témoins des opérations quotidiennes, de la planification tactique et des stratégies de gestion des joueurs qui définissent la compétition européenne de haut niveau.",
      highlights: ["Étude de Méthodologie", "Observation des Entraînements", "Intégration au Personnel"],
      details: `Public cible
Nous vous invitons à pénétrer dans le monde prestigieux du basketball européen d'élite avec une opportunité inégalée de vous intégrer directement au personnel d'entraîneurs professionnels de Pallacanestro Varese. Ce programme immersif a été spécialement conçu pour les entraîneurs internationaux ambitieux qui ne recherchent pas seulement un séminaire, mais qui sont impatients d'acquérir une expérience de première main et de haut niveau dans un environnement professionnel à enjeux élevés. En travaillant aux côtés de notre équipe technique, les participants seront témoins des opérations quotidiennes, de la planification tactique et des stratégies de gestion des joueurs qui définissent la compétition européenne de haut niveau.

Le programme est structuré pour s'aligner sur la saison officielle de la LBA (Lega Basket Serie A), fonctionnant à pleine capacité depuis les préparatifs initiaux de pré-saison en août jusqu'aux étapes compétitives finales en juin. Pour s'assurer que chaque entraîneur visiteur dispose de suffisamment de temps pour assimiler les complexités de notre système et nouer des relations professionnelles significatives, le programme nécessite un engagement minimum d'au moins un mois. Cette durée permet une compréhension globale de notre philosophie d'entraînement, du recrutement et de l'analyse vidéo à l'exécution de plans de match de niveau élite.

Intégration Professionnelle d'Élite
C'est plus qu'un simple cours ; c'est une immersion dans les opérations quotidiennes d'une équipe de basketball de Serie A. En tant que stagiaire, vous pourrez :

Suivre les Pros : Obtenez des informations inestimables en observant et en apprenant de nos professionnels de l'entraînement expérimentés lors des entraînements et des matchs.

Participation Active sur le Terrain : Jouez un rôle pratique en dirigeant des exercices avec des joueurs de Serie A et en participant à des entraînements professionnels.

Développement Stratégique : Assistez aux réunions des entraîneurs pour comprendre les processus de prise de décision tactique et stratégique au plus haut niveau.

Développement des Jeunes : Contribuez à l'avenir du sport en assistant le personnel d'entraîneurs de nos équipes de jeunes.

Quand et où
Le programme sera hébergé dans nos installations de premier ordre, à savoir la Foresteria Elite Housing et notre Campus de via Pirandello. Ces deux sites phares sont stratégiquement situés à seulement 5 minutes à pied l'un de l'autre, assurant des transitions fluides entre la résidence et l'entraînement. Cette configuration logistique intégrée permet aux athlètes de maximiser leur temps et de se concentrer entièrement sur leur développement professionnel.

prix
Contactez-nous ou cliquez ici pour obtenir des informations détaillées sur les prix adaptées à vos besoins spécifiques.`
    }
  },
  "summer-prog": {
    it: {
      title: "PROGRAMMA ESTIVO",
      target: "Club e Accademie Internazionali",
      timing: "Luglio",
      description: "Cicli di allenamento ad alta intensità a breve termine progettati per club e accademie internazionali durante la bassa stagione. La Pallacanestro Varese invita la tua squadra a sperimentare il Summer Program, una residenza premium progettata per le Squadre Nazionali Giovanili (da U14 a U18), Programmi Junior e club Senior professionistici. Questo programma è più di un semplice campo di allenamento; è un ecosistema ad alte prestazioni in cui gli atleti possono immergersi nel gioco.",
      highlights: ["Allenamento ad Intensità", "Competizione d'Elite", "Sviluppo delle Abilità"],
      details: `programma di livello pro
La nostra formula all-inclusive di minimo sette giorni è stata strategicamente sviluppata per fornire un ambiente d'élite e ad alte prestazioni che elimina efficacemente ogni possibile distrazione esterna. Fornendo un'esperienza logistica senza interruzioni e completamente gestita, consentiamo sia allo staff tecnico che ai giocatori di dedicare tutta la loro attenzione allo sviluppo intensivo delle abilità e al processo critico di costruzione della chimica di squadra. Riteniamo che rimuovendo gli oneri amministrativi e logistici del viaggio, il gruppo possa raggiungere un livello di sinergia e crescita che semplicemente non è possibile in un ambiente di allenamento standard.

Per garantire che ogni gruppo raggiunga i propri obiettivi unici, ogni singolo aspetto di questo programma è completamente modulare e altamente flessibile. Comprendiamo che non esistono due squadre con gli stessi obiettivi; pertanto, il curriculum può essere personalizzato con precisione per soddisfare i requisiti tecnici specifici della tua squadra e le esigenze di programmazione individuali. Che tu abbia bisogno di procedure tattiche avanzate, condizionamento fisico intensivo o sessioni specifiche di studio video, il nostro quadro è progettato per adattarsi alla tua visione, fornendo un'esperienza professionale su misura dall'inizio alla fine.

Pubblico di riferimento
Le nostre strutture all'avanguardia e i programmi di allenamento specializzati sono stati specificamente progettati per ospitare le Squadre Nazionali Giovanili, che vanno dalle categorie U14 a U18, nonché prestigiosi Programmi Junior alla ricerca di un ambiente di prestazioni d'élite. Comprendiamo le esigenze uniche dello sviluppo giovanile di alto livello e la nostra infrastruttura è progettata per fornire i rigorosi standard richiesti dalle federazioni nazionali per preparare la loro prossima generazione di talenti per le competizioni internazionali.

Oltre alle nostre iniziative incentrate sui giovani, ci rivolgiamo ampiamente anche a squadre Senior di Livello Medio che cercano il perfetto equilibrio strategico tra logistica di livello professionale e preparazione atletica di alta qualità. Che il tuo obiettivo sia lo sviluppo a lungo termine di giovani prospetti emergenti o la meticolosa rifinitura delle strategie di livello senior in vista di una nuova stagione, il nostro campo fornisce il supporto completo e su misura necessario per il successo. Siamo orgogliosi di offrire una piattaforma versatile in cui ogni squadra, indipendentemente dal proprio livello competitivo specifico, può trovare gli strumenti professionali e l'ambiente dedicato di cui ha bisogno per eccellere.

Quando e dove
Sperimenta alloggi d'élite di 400 mq con giardini privati, situati a soli cinque minuti dall'arena. Il campo richiede un soggiorno minimo di 1 settimana (7 giorni, 6 notti), su misura per le esigenze specifiche e la disponibilità della tua squadra. Per garantire un relax totale, gestiamo tutta la logistica: due furgoni da 9 posti forniscono trasferimenti aeroportuali senza interruzioni sia per l'arrivo che per la partenza. Questa configurazione offre il perfetto equilibrio tra privacy e comunità per un'esperienza di allenamento professionale e senza stress.

prezzi
Contattaci o clicca qui per informazioni dettagliate sui prezzi in base alle tue esigenze specifiche.`
    },
    es: {
      title: "PROGRAMA DE VERANO",
      target: "Clubes y Academias Internacionales",
      timing: "Julio",
      description: "Ciclos de entrenamiento de alta intensidad a corto plazo diseñados para clubes y academias internacionales durante la temporada baja. Pallacanestro Varese invita a tu equipo a experimentar el Programa de Verano, una residencia premium diseñada para Selecciones Nacionales Juveniles (U14 a U18), Programas Junior y clubes Senior profesionales. Este programa es más que un simple campo de entrenamiento; es un ecosistema de alto rendimiento donde los atletas pueden sumergirse en el juego.",
      highlights: ["Entrenamiento de Intensidad", "Competición de Élite", "Desarrollo de Habilidades"],
      details: `programa de nivel pro
Nuestra fórmula todo incluido de un mínimo de siete días ha sido desarrollada estratégicamente para proporcionar un entorno de élite y alto rendimiento que elimina de manera efectiva todas las posibles distracciones externas. Al proporcionar una experiencia logística fluida y totalmente gestionada, permitimos que tanto el cuerpo técnico como los jugadores dediquen toda su atención al desarrollo intensivo de habilidades y al proceso crítico de construir la química del equipo. Creemos que al eliminar las cargas administrativas y logísticas de los viajes, el grupo puede lograr un nivel de sinergia y crecimiento que simplemente no es posible en un entorno de entrenamiento estándar.

Para garantizar que cada grupo logre sus objetivos únicos, cada aspecto de este programa es completamente modular y altamente flexible. Entendemos que no hay dos equipos que tengan los mismos objetivos; por lo tanto, el plan de estudios se puede adaptar con precisión para satisfacer los requisitos técnicos específicos de tu equipo y las necesidades de programación individuales. Ya sea que necesites recorridos tácticos avanzados, acondicionamiento físico intensivo o sesiones específicas de estudio de video, nuestro marco está diseñado para adaptarse a tu visión, brindando una experiencia profesional a medida de principio a fin.

Público objetivo
Nuestras instalaciones de última generación y programas de entrenamiento especializados han sido diseñados específicamente para albergar a Selecciones Nacionales Juveniles, que van desde las categorías U14 hasta U18, así como prestigiosos Programas Junior en busca de un entorno de rendimiento de élite. Entendemos las demandas únicas del desarrollo juvenil de alto nivel, y nuestra infraestructura está diseñada para proporcionar los rigurosos estándares requeridos por las federaciones nacionales para preparar a su próxima generación de talentos para la competencia internacional.

Además de nuestras iniciativas centradas en los jóvenes, también atendemos ampliamente a equipos Senior de Nivel Medio que buscan el equilibrio estratégico perfecto entre la logística de nivel profesional y la preparación atlética de alta calidad. Ya sea que tu objetivo sea el desarrollo a largo plazo de jóvenes prospectos emergentes o el refinamiento meticuloso de las estrategias de nivel senior antes de una nueva temporada, nuestro campamento brinda el apoyo integral y personalizado necesario para el éxito. Nos enorgullecemos de ofrecer una plataforma versátil donde cada equipo, independientemente de su nivel competitivo específico, puede encontrar las herramientas profesionales y el entorno dedicado que necesitan para sobresalir.

Cuándo y dónde
Experimenta alojamientos de élite de 400 metros cuadrados con jardines privados, ubicados a solo cinco minutos de la arena. El campamento requiere una estadía mínima de 1 semana (7 días, 6 noches), adaptada a las necesidades específicas y la disponibilidad de tu equipo. Para garantizar una relajación total, gestionamos toda la logística: dos furgonetas de 9 plazas proporcionan traslados al aeropuerto sin problemas tanto para la llegada como para la salida. Esta configuración ofrece el equilibrio perfecto entre privacidad y comunidad para una experiencia de entrenamiento profesional y sin estrés.

precios
Contáctanos o haz clic aquí para obtener información detallada sobre los precios adaptada a tus necesidades específicas.`
    },
    fr: {
      title: "PROGRAMME D'ÉTÉ",
      target: "Clubs et Académies Internationaux",
      timing: "Juillet",
      description: "Cycles d'entraînement à haute intensité à court terme conçus pour les clubs et académies internationaux pendant la saison morte. Pallacanestro Varese invite votre équipe à découvrir le Programme d'Été, une résidence premium conçue pour les Équipes Nationales de Jeunes (U14 à U18), les Programmes Junior et les clubs professionnels Senior. Ce programme est plus qu'un simple camp d'entraînement ; c'est un écosystème de haute performance où les athlètes peuvent s'immerger dans le jeu.",
      highlights: ["Entraînement d'Intensité", "Compétition d'Élite", "Développement des Compétences"],
      details: `programme de niveau pro
Notre formule tout compris d'un minimum de sept jours a été stratégiquement développée pour fournir un environnement d'élite et de haute performance qui élimine efficacement toutes les distractions extérieures possibles. En offrant une expérience logistique fluide et entièrement gérée, nous permettons au personnel d'entraîneurs et aux joueurs de consacrer toute leur attention au développement intensif des compétences et au processus critique de renforcement de la cohésion d'équipe. Nous pensons qu'en supprimant les charges administratives et logistiques liées aux déplacements, le groupe peut atteindre un niveau de synergie et de croissance qui n'est tout simplement pas possible dans un cadre d'entraînement standard.

Pour s'assurer que chaque groupe atteint ses objectifs uniques, chaque aspect de ce programme est entièrement modulaire et très flexible. Nous comprenons qu'il n'y a pas deux équipes qui ont les mêmes objectifs ; par conséquent, le programme peut être précisément adapté pour répondre aux exigences techniques spécifiques de votre équipe et à ses besoins de planification individuels. Que vous ayez besoin de parcours tactiques avancés, d'un conditionnement physique intensif ou de séances d'étude vidéo spécifiques, notre cadre est conçu pour s'adapter à votre vision, offrant une expérience professionnelle sur mesure du début à la fin.

Public cible
Nos installations de pointe et nos programmes d'entraînement spécialisés ont été spécialement conçus pour accueillir les Équipes Nationales de Jeunes, allant des catégories U14 à U18, ainsi que de prestigieux Programmes Junior à la recherche d'un environnement de performance d'élite. Nous comprenons les exigences uniques du développement des jeunes de haut niveau, et notre infrastructure est conçue pour fournir les normes rigoureuses exigées par les fédérations nationales pour préparer leur prochaine génération de talents à la compétition internationale.

En plus de nos initiatives axées sur les jeunes, nous répondons également largement aux équipes Senior de Niveau Moyen qui recherchent l'équilibre stratégique parfait entre une logistique de niveau professionnel et une préparation athlétique de haute qualité. Que votre objectif soit le développement à long terme de jeunes espoirs émergents ou l'affinement méticuleux des stratégies de niveau senior avant une nouvelle saison, notre camp fournit le soutien complet et sur mesure nécessaire au succès. Nous sommes fiers d'offrir une plate-forme polyvalente où chaque équipe, quel que soit son niveau de compétition spécifique, peut trouver les outils professionnels et l'environnement dédié dont elle a besoin pour exceller.

Quand et où
Découvrez des hébergements d'élite de 400 m² avec jardins privés, situés à seulement cinq minutes de l'arène. Le camp nécessite un séjour minimum d'une semaine (7 jours, 6 nuits), adapté aux besoins spécifiques et à la disponibilité de votre équipe. Pour assurer une détente totale, nous gérons toute la logistique : deux fourgonnettes de 9 places assurent des transferts aéroport fluides à l'arrivée et au départ. Cette configuration offre l'équilibre parfait entre intimité et communauté pour une expérience d'entraînement professionnelle et sans stress.

prix
Contactez-nous ou cliquez ici pour obtenir des informations détaillées sur les prix adaptées à vos besoins spécifiques.`
    }
  }
};

const staffTranslations: Record<string, Record<string, Partial<StaffMember>>> = {
  "LUIS SCOLA": {
    it: { role: "AMMINISTRATORE DELEGATO", bio: ["26 anni come giocatore PRO", "10 stagioni nella NBA", "12 stagioni in Eurolega"] },
    es: { role: "DIRECTOR EJECUTIVO", bio: ["26 años como jugador PRO", "10 temporadas en la NBA", "12 temporadas en la Euroliga"] },
    fr: { role: "DIRECTEUR GÉNÉRAL", bio: ["26 ans en tant que joueur PRO", "10 saisons en NBA", "12 saisons en Euroligue"] }
  },
  "MAKSIM HOROWITZ": {
    it: { role: "GM STRATEGIA BASKET", bio: ["2 anni Ufficio Lega NBA", "5 anni Atlanta Hawks"] },
    es: { role: "GM ESTRATEGIA DE BALONCESTO", bio: ["2 años Oficina de la Liga NBA", "5 años Atlanta Hawks"] },
    fr: { role: "GM STRATÉGIE BASKETBALL", bio: ["2 ans Bureau de la Ligue NBA", "5 ans Atlanta Hawks"] }
  },
  "ZACKARY SOGOLOW": {
    it: { role: "GM OPERAZIONI BASKET", bio: ["2 anni Ufficio Lega NBA", "6 anni Philadelphia 76ers"] },
    es: { role: "GM OPERACIONES DE BALONCESTO", bio: ["2 años Oficina de la Liga NBA", "6 años Philadelphia 76ers"] },
    fr: { role: "GM OPÉRATIONS BASKETBALL", bio: ["2 ans Bureau de la Ligue NBA", "6 ans Philadelphia 76ers"] }
  }
};

export const translateProgram = (program: Program, lang: Language): Program => {
  if (lang === 'en') return program;
  const translations = programTranslations[program.id]?.[lang];
  if (!translations) return program;
  return { ...program, ...translations };
};

export const translateStaff = (member: StaffMember, lang: Language): StaffMember => {
  if (lang === 'en') return member;
  const translations = staffTranslations[member.name]?.[lang];
  if (!translations) return member;
  return { ...member, ...translations };
};
