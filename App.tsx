import React, { useState, useEffect } from 'react';
import { CLUB_LOGO, ACHIEVEMENTS, STAFF, PROGRAMS } from './constants';
import { Program } from './types';
import { Trophy, MapPin, Users, Home, GraduationCap, Calendar, ArrowRight, Menu, X, Instagram, Facebook, CheckCircle2, Send, Mail, Linkedin, Star, ChevronDown, Award } from 'lucide-react';

type Language = 'it' | 'en' | 'es' | 'fr';

const TRANSLATIONS = {
  it: {
    heroTitle: "Elite Basketball",
    heroSubtitle: "Un Pilastro dell'Eccellenza Europea",
    explorePrograms: "Esplora i Programmi",
    ourLegacy: "La Nostra Storia",
    whoWeAre: "Chi Siamo",
    whereWeAre: "Dove Siamo",
    ourTeam: "Il Nostro Team",
    ourLeadership: "La Nostra Leadership",
    ourPalmares: "Il Nostro Palmarès",
    eliteOpportunities: "Opportunità d'Elite",
    transformFuture: "Trasforma il Tuo Futuro nel Basket",
    applyNow: "Candidati Ora",
    joinEBP: "Unisciti all'EBP",
    moreInfo: "Più Informazioni",
    backHome: "Torna alla Home",
    target: "Target",
    firstName: "Nome",
    lastName: "Cognome",
    email: "Email",
    message: "Messaggio",
    submit: "Invia",
    gardenCity: "La Città Giardino",
    strategicLocation: "Posizione Strategica",
    strategicDesc: "40 min da Milano, 20 min dalla Svizzera, 25 min da Malpensa.",
    eliteRegion: "Regione d'Elite",
    eliteRegionDesc: "Seconda regione economica più ricca d'Europa.",
    universityOfBasketball: "La Pallacanestro Varese è un pilastro del basket europeo con 10 Campionati Italiani e 5 titoli di Eurolega.",
    locatedInHeart: "Situati nel cuore di Varese, siamo circondati da leader del settore e innovazione.",
    championship: "CAMPIONATO ITALIANO",
    coppaItalia: "COPPA ITALIA",
    supercoppa: "SUPERCOPPA",
    euroleague: "COPPA CAMPIONI",
    cupWinners: "COPPA DELLE COPPE",
    intercontinental: "INTERCONTINENTALE",
    facilities: "Strutture",
    expertiseFrom: "Esperienza dall'NBA all'EuroLeague"
  },
  en: {
    heroTitle: "Elite Basketball",
    heroSubtitle: "A Cornerstone of European Excellence",
    explorePrograms: "Explore Programs",
    ourLegacy: "Our Legacy",
    whoWeAre: "Who We Are",
    whereWeAre: "Where We Are",
    ourTeam: "Our Team",
    ourLeadership: "Our Leadership",
    ourPalmares: "Our Palmarès",
    eliteOpportunities: "Elite Opportunities",
    transformFuture: "Transform Your Basketball Future",
    applyNow: "Apply Now",
    joinEBP: "Join EBP",
    moreInfo: "More Info",
    backHome: "Back to Home",
    target: "Target",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    message: "Message",
    submit: "Submit",
    gardenCity: "The Garden City",
    strategicLocation: "Strategic Location",
    strategicDesc: "40 min from Milan, 20 min from Switzerland, 25 min from Malpensa.",
    eliteRegion: "Elite Region",
    eliteRegionDesc: "Located in the 2nd wealthiest economic region in Europe.",
    universityOfBasketball: "Pallacanestro Varese is a cornerstone of European basketball with 10 Italian Championships and 5 Euroleague titles.",
    locatedInHeart: "Located in the heart of Varese, Italy, we are surrounded by industry leaders and innovation.",
    championship: "ITALIAN CHAMPIONSHIP",
    coppaItalia: "ITALIAN CUP",
    supercoppa: "ITALIAN SUPERCUP",
    euroleague: "EUROLEAGUE",
    cupWinners: "CUP WINNERS' CUP",
    intercontinental: "INTERCONTINENTAL CUP",
    facilities: "Facilities",
    expertiseFrom: "Expertise from the NBA to the EuroLeague"
  },
  es: {
    heroTitle: "Baloncesto de Élite",
    heroSubtitle: "Un Pilar de la Excelencia Europea",
    explorePrograms: "Explorar Programas",
    ourLegacy: "Nuestro Legado",
    whoWeAre: "Quiénes Somos",
    whereWeAre: "Dónde Estamos",
    ourTeam: "Nuestro Equipo",
    ourLeadership: "Nuestro Liderazgo",
    ourPalmares: "Nuestro Palmarés",
    eliteOpportunities: "Oportunidades de Élite",
    transformFuture: "Transforma tu Futuro en el Baloncesto",
    applyNow: "Postular Ahora",
    joinEBP: "Únete a EBP",
    moreInfo: "Más Información",
    backHome: "Volver al Inicio",
    target: "Objetivo",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar",
    gardenCity: "La Ciudad Jardín",
    strategicLocation: "Ubicación Estratégica",
    strategicDesc: "40 min de Milán, 20 min de Suiza, 25 min de Malpensa.",
    eliteRegion: "Región de Élite",
    eliteRegionDesc: "Ubicado en la segunda región económica más rica de Europa.",
    universityOfBasketball: "Pallacanestro Varese es una piedra angular del baloncesto europeo con 10 Campeonatos de Italia.",
    locatedInHeart: "Situados en el corazón de Varese, estamos rodeados de líderes del sector e innovación.",
    championship: "CAMPEONATO ITALIANO",
    coppaItalia: "COPA ITALIA",
    supercoppa: "SUPERCOPA",
    euroleague: "EUROLIGA",
    cupWinners: "RECOPA",
    intercontinental: "INTERCONTINENTAL",
    facilities: "Instalaciones",
    expertiseFrom: "Experiencia de la NBA a la Euroliga"
  },
  fr: {
    heroTitle: "Basket d'Élite",
    heroSubtitle: "Un Pilier de l'Excellence Européenne",
    explorePrograms: "Explorer les Programmes",
    ourLegacy: "Notre Héritage",
    whoWeAre: "Qui Sommes Nous",
    whereWeAre: "Où Nous Sommes",
    ourTeam: "Notre Équipe",
    ourLeadership: "Notre Leadership",
    ourPalmares: "Notre Palmarès",
    eliteOpportunities: "Opportunités d'Élite",
    transformFuture: "Transformez Votre Avenir au Basket",
    applyNow: "Postuler Maintenant",
    joinEBP: "Rejoindre l'EBP",
    moreInfo: "Plus d'Infos",
    backHome: "Retour à l'Accueil",
    target: "Cible",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    message: "Message",
    submit: "Envoyer",
    gardenCity: "La Cité-Jardin",
    strategicLocation: "Emplacement Stratégique",
    strategicDesc: "40 min de Milan, 20 min de la Suisse, 25 min de Malpensa.",
    eliteRegion: "Région d'Élite",
    eliteRegionDesc: "Situé dans la deuxième région économique la plus riche d'Europe.",
    universityOfBasketball: "Pallacanestro Varese est un pilier du basket européen avec 10 titres d'Italie.",
    locatedInHeart: "Situés au cœur de Varèse, nous sommes entourés de leaders du secteur et d'innovation.",
    championship: "CHAMPIONNAT D'ITALIE",
    coppaItalia: "COUPE D'ITALIE",
    supercoppa: "SUPERCOUPE",
    euroleague: "EUROLEGUE",
    cupWinners: "COUPE DES COUPES",
    intercontinental: "INTERCONTINENTALE",
    facilities: "Installations",
    expertiseFrom: "Expertise de la NBA à l'EuroLeague"
  }
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'programs' | 'palmares'>('home');
  const [lang, setLang] = useState<Language>('it');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  
  const t = (key: keyof typeof TRANSLATIONS['en']) => TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key];

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    program: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    if (view !== 'home') setView('home');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const LangSwitcher = () => (
    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
      {[
        { code: 'it' as Language, flag: '🇮🇹' },
        { code: 'en' as Language, flag: '🇺🇸' },
        { code: 'es' as Language, flag: '🇪🇸' },
        { code: 'fr' as Language, flag: '🇫🇷' }
      ].map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`text-lg transition-all ${lang === l.code ? 'scale-125 grayscale-0 opacity-100' : 'grayscale opacity-40 hover:opacity-100'}`}
        >
          {l.flag}
        </button>
      ))}
    </div>
  );

  const BannerGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-16 max-w-6xl mx-auto px-4">
      {ACHIEVEMENTS.map((item, idx) => {
        let key: keyof typeof TRANSLATIONS['en'] = 'championship';
        if (item.title.includes('COPPA ITALIA')) key = 'coppaItalia';
        if (item.title.includes('SUPERCOPPA')) key = 'supercoppa';
        if (item.title.includes('CAMPIONI')) key = 'euroleague';
        if (item.title.includes('COPPE')) key = 'cupWinners';
        if (item.title.includes('INTERCONTINENTALE')) key = 'intercontinental';
        
        return (
          <div key={idx} className="relative group">
            <div className="bg-[#E30613] aspect-[2/3] flex flex-col items-center justify-between p-4 text-center shadow-2xl transition-transform hover:-translate-y-2" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}>
               <div className="mt-4">
                 {item.title === "CAMPIONATO ITALIANO" && (
                    <div className="flex h-1.5 w-10 mb-2 rounded-sm overflow-hidden mx-auto">
                      <div className="bg-[#009246] flex-1"></div>
                      <div className="bg-[#FFFFFF] flex-1"></div>
                      <div className="bg-[#ce2b37] flex-1"></div>
                    </div>
                 )}
                 <div className="text-5xl md:text-6xl font-oswald font-black text-white">{item.count}</div>
               </div>
               <div className="mb-8">
                 <h4 className="font-oswald text-[10px] md:text-xs font-bold text-white/90 leading-tight uppercase">{t(key)}</h4>
               </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || view !== 'home' ? 'bg-black/95 py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <img src={CLUB_LOGO} alt="Logo" className="h-10" />
            <span className="font-oswald font-bold text-xl uppercase tracking-tighter hidden sm:block">Pallacanestro <span className="text-red-varese">Varese</span></span>
          </div>
          <div className="flex items-center gap-6">
            <LangSwitcher />
            <button onClick={() => setIsJoinModalOpen(true)} className="bg-red-varese px-5 py-2 text-xs font-bold uppercase rounded-sm hover:bg-red-700 transition-colors">
              {t('joinEBP')}
            </button>
          </div>
        </div>
      </nav>

      {view === 'home' && (
        <>
          {/* Hero */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <img src="https://i.imgur.com/jgvkdMN.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Varese" />
            <div className="absolute inset-0 gradient-overlay"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <img src={CLUB_LOGO} className="h-32 md:h-48 mx-auto mb-8" alt="Logo" />
              <h1 className="font-oswald text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-4">
                {t('heroTitle')} <span className="text-red-varese">Program</span>
              </h1>
              <p className="text-gray-300 uppercase tracking-widest text-lg md:text-2xl mb-10">{t('heroSubtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setView('programs')} className="bg-red-varese px-10 py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-all flex items-center gap-2">
                  {t('explorePrograms')} <ArrowRight size={18} />
                </button>
                <button onClick={() => navigateToSection('who-we-are')} className="border border-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  {t('ourLegacy')}
                </button>
              </div>
            </div>
          </section>

          {/* Who We Are */}
          <section id="who-we-are" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="font-oswald text-4xl md:text-7xl font-bold uppercase mb-12">{t('whoWeAre')}</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-gray-400 text-lg md:text-xl">
                <p>{t('universityOfBasketball')}</p>
                <p>{t('locatedInHeart')}</p>
              </div>
              <BannerGrid />
            </div>
          </section>

          {/* Where We Are */}
          <section id="where-we-are" className="py-24 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                   <img src="https://i.imgur.com/u1qdF6w.jpeg" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" alt="Varese" />
                </div>
                <div className="h-[300px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                   <iframe title="Map" width="100%" height="100%" frameBorder="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Piazzale%20Antonio%20Gramsci,%20Varese+(Itely-Aitena-Arena)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
              </div>
              <div>
                <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">{t('whereWeAre')}</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-8">{t('gardenCity')}</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="text-red-varese shrink-0" size={28} />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('strategicLocation')}</h4>
                      <p className="text-gray-400">{t('strategicDesc')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Calendar className="text-red-varese shrink-0" size={28} />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{t('eliteRegion')}</h4>
                      <p className="text-gray-400">{t('eliteRegionDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section id="leadership" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-oswald text-4xl md:text-7xl font-bold uppercase mb-4">{t('ourLeadership')}</h2>
                <p className="text-gray-500 uppercase tracking-widest text-sm">{t('expertiseFrom')}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {STAFF.map(member => (
                  <div key={member.name} className="group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6 border border-white/5 shadow-2xl">
                      <img src={member.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={member.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                      <div className="absolute bottom-6 left-6">
                        <p className="text-red-varese font-bold uppercase text-[10px] tracking-widest mb-1">{member.role}</p>
                        <h3 className="font-oswald text-3xl font-bold uppercase">{member.name}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-400 text-sm">
                      {member.bio.map((b, i) => <li key={i} className="flex gap-2"><CheckCircle2 className="text-red-varese shrink-0" size={14} /> {b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {view === 'programs' && (
        <section className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
          <h2 className="font-oswald text-4xl md:text-7xl font-bold uppercase mb-16">{t('eliteOpportunities')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map(prog => (
              <div key={prog.id} className="card-glass rounded-xl overflow-hidden group border border-white/10 hover:border-red-varese transition-all flex flex-col">
                <div className="h-64 relative overflow-hidden">
                  <img src={prog.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={prog.title} />
                  <div className="absolute top-4 left-4 bg-red-varese text-white text-[10px] font-bold px-3 py-1 uppercase rounded">{prog.timing}</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-oswald text-2xl font-bold uppercase mb-2">{prog.title}</h3>
                  <p className="text-red-varese text-[10px] font-bold uppercase mb-4">{prog.target}</p>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{prog.description}</p>
                  <button onClick={() => setSelectedProgram(prog)} className="w-full border border-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    {t('moreInfo')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-16">
          <div>
            <img src={CLUB_LOGO} className="h-20 mb-6" alt="Varese" />
            <p className="text-gray-500 text-sm max-w-xs mb-6">Empowering the next generation of elite basketball players.</p>
            <div className="flex gap-4">
              <Linkedin className="text-gray-500 hover:text-red-varese cursor-pointer" />
              <Instagram className="text-gray-500 hover:text-red-varese cursor-pointer" />
              <Facebook className="text-gray-500 hover:text-red-varese cursor-pointer" />
            </div>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8">Navigation</h5>
            <ul className="space-y-4 text-gray-500 text-sm uppercase tracking-tighter">
              <li className="hover:text-white cursor-pointer" onClick={() => navigateToSection('who-we-are')}>{t('ourLegacy')}</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateToSection('where-we-are')}>{t('whereWeAre')}</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateToSection('leadership')}>{t('ourLeadership')}</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setView('programs')}>{t('eliteOpportunities')}</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8">Contact</h5>
            <p className="text-gray-500 text-sm mb-4">Piazzale Gramsci, Varese (Italy)</p>
            <p className="text-gray-500 text-sm font-bold">f.bellotto@pallacanestrovarese.it</p>
          </div>
        </div>
      </footer>

      {/* Program Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProgram(null)}></div>
          <div className="relative bg-zinc-900 w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-[0_0_50px_rgba(227,6,19,0.3)]">
            <div className="md:w-1/2 h-64 md:h-auto">
              <img src={selectedProgram.image} className="w-full h-full object-cover" alt={selectedProgram.title} />
            </div>
            <div className="p-10 md:w-1/2 flex flex-col">
              <button onClick={() => setSelectedProgram(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={32} /></button>
              <h2 className="font-oswald text-4xl font-bold uppercase mb-6">{selectedProgram.title}</h2>
              <div className="bg-red-varese/10 p-4 border-l-4 border-red-varese mb-6">
                 <p className="text-red-varese font-bold uppercase text-[10px] tracking-widest">{t('target')}: {selectedProgram.target}</p>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">{selectedProgram.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {selectedProgram.highlights.map((h, i) => (
                  <div key={i} className="flex gap-2 items-center text-[10px] text-white font-bold uppercase">
                    <CheckCircle2 size={14} className="text-red-varese" /> {h}
                  </div>
                ))}
              </div>
              <button onClick={() => { setView('home'); setSelectedProgram(null); setIsJoinModalOpen(true); }} className="w-full bg-red-varese py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-all">
                {t('applyNow')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Join Modal */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsJoinModalOpen(false)}></div>
          <div className="relative bg-zinc-900 w-full max-w-xl p-10 rounded-2xl border border-white/10 shadow-2xl">
            <button onClick={() => setIsJoinModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={24} /></button>
            <h2 className="font-oswald text-3xl font-bold uppercase text-center mb-8">{t('joinEBP')}</h2>
            <form onSubmit={(e) => { e.preventDefault(); setIsJoinModalOpen(false); alert('Sent!'); }} className="space-y-4">
              <input required placeholder={t('firstName')} className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-red-varese" />
              <input required placeholder={t('lastName')} className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-red-varese" />
              <input required type="email" placeholder={t('email')} className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-red-varese" />
              <textarea required placeholder={t('message')} rows={4} className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-red-varese resize-none" />
              <button type="submit" className="w-full bg-red-varese py-4 font-bold uppercase rounded-lg hover:bg-red-700 transition-all">
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;