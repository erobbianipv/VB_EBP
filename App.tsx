import React, { useState, useEffect } from 'react';
import { CLUB_LOGO, ACHIEVEMENTS, STAFF, PROGRAMS } from './constants';
import { Program } from './types';
import { Trophy, MapPin, Users, Home, GraduationCap, Calendar, ArrowRight, Menu, X, Instagram, Facebook, CheckCircle2, Send, Mail, Linkedin, Star, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'programs'>('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    program: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProgram(null);
        setIsJoinModalOpen(false);
        setIsApplying(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCloseModal = () => {
    setSelectedProgram(null);
    setIsJoinModalOpen(false);
    setIsApplying(false);
    setFormState({
      firstName: '',
      lastName: '',
      organization: '',
      email: '',
      program: '',
      message: ''
    });
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
  };

  const navigateToHomeSection = (id: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              onClick={() => {
                setSelectedProgram(prog);
                setIsApplying(false);
              }}
              className="w-full bg-white text-black hover:bg-red-varese hover:text-white py-4 font-bold uppercase tracking-widest transition-all text-sm rounded-sm mt-auto"
            >
              More Info
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col bg-[#0a0a0a] ${(selectedProgram || isJoinModalOpen) ? 'overflow-hidden' : ''}`}>
      {/* Navigation */}
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
                Back to Home
              </button>
            )}
            <button 
              onClick={() => setIsJoinModalOpen(true)}
              className="bg-red-varese hover:bg-red-700 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase transition-all shadow-lg shadow-red-600/20"
            >
              Join EBP
            </button>
          </div>
        </div>
      </nav>

      {view === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.imgur.com/jgvkdMN.jpeg" 
                className="w-full h-full object-cover opacity-40"
                alt="Hero background"
              />
              <div className="absolute inset-0 gradient-overlay"></div>
            </div>
            
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <img src={CLUB_LOGO} alt="Logo" className="mx-auto h-32 md:h-48 mb-8 animate-pulse" />
              <h1 className="font-oswald text-5xl md:text-8xl font-bold uppercase leading-none tracking-tighter mb-4">
                Elite Basketball <span className="text-red-varese">Program</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto uppercase tracking-widest">
                A Cornerstone of European Excellence
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setView('programs')}
                  className="w-full sm:w-auto bg-red-varese hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center group shadow-xl shadow-red-600/20"
                >
                  Explore Programs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button onClick={() => navigateToHomeSection('who-we-are')} className="w-full sm:w-auto border border-white hover:bg-white hover:text-black text-white px-10 py-4 font-bold uppercase tracking-widest transition-all">
                  Our Legacy
                </button>
              </div>
            </div>
          </section>

          {/* Legacy Section */}
          <section id="who-we-are" className="py-24 bg-black scroll-mt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-oswald text-4xl md:text-7xl font-bold uppercase mb-12 inline-block relative">
                Who We Are
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-red-varese"></div>
              </h2>
              <div className="space-y-6 text-gray-400 text-xl leading-relaxed mb-16 max-w-4xl mx-auto">
                <p>Pallacanestro Varese is a cornerstone of European basketball with 10 Italian Championships and 5 Euroleague titles. Our historic achievements speak for themselves, including an unmatched 10 consecutive Euroleague finals appearances.</p>
                <p>Located in the heart of Varese, Italy, we are surrounded by industry leaders and innovation. Basketball is not just a sport here; it is a beloved tradition deeply ingrained in our city's culture.</p>
                <p className="text-white font-semibold italic text-2xl pt-4">"We remain future-focused, committed to adding to our legacy and being a source of pride for Varese."</p>
              </div>

              {/* Banners Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto mt-20">
                {ACHIEVEMENTS.map((item, idx) => (
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
                          <h3 className="font-oswald text-xs md:text-sm font-bold uppercase tracking-tight leading-tight text-white/90">{item.title}</h3>
                          <div className="mt-auto h-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location Section */}
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
                        <iframe title="Varese Location" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Piazzale%20Antonio%20Gramsci,%20Varese+(Itely-Aitena-Arena)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className="pointer-events-none"></iframe>
                     </div>
                     <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                        <MapPin size={14} className="text-red-varese" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Find us in Varese</span>
                     </div>
                   </a>
                 </div>
                 <div className="order-1 lg:order-2">
                   <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">Where We Are</p>
                   <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-8">The Garden <span className="text-red-varese">City</span></h2>
                  <div className="space-y-6 text-gray-300">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-red-varese mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-white uppercase tracking-wider mb-1 text-sm">Strategic Location</p>
                        <p className="text-gray-400">40 min from Milan, 20 min from Switzerland, 25 min from Malpensa Airport.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Calendar className="text-red-varese mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-bold text-white uppercase tracking-wider mb-1 text-sm">Elite Region</p>
                        <p className="text-gray-400">Located in the 2nd wealthiest economic region in Europe.</p>
                      </div>
                    </div>
                    <p className="pl-10 text-gray-400 italic text-sm leading-relaxed border-l border-red-varese/30">Characterized by stunning natural beauty, boasting lakes, hills, and parks that make Varese a popular tourist destination.</p>
                  </div>
                 </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="leadership" className="py-24 bg-black scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
              <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Team</p>
              <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">Our Leadership</h2>
              <p className="text-gray-400 tracking-widest uppercase text-sm">Expertise from the NBA to the EuroLeague</p>
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

          {/* Facilities Section */}
          <section id="facilities" className="py-24 bg-zinc-900 overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">Infrastructure</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">Elite Facilities</h2>
                <p className="text-gray-400">Professional infrastructure for high-performance training</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative h-[450px] group overflow-hidden rounded-xl shadow-2xl">
                  <img src="https://i.imgur.com/PVVnsrw.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Arena" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                    <h4 className="font-oswald text-3xl font-bold uppercase">The Arena</h4>
                    <p className="text-sm text-gray-300">5,352 seat capacity with premium hospitality</p>
                  </div>
                </div>
                <div className="relative h-[450px] group overflow-hidden rounded-xl shadow-2xl">
                  <img src="https://i.imgur.com/7oppVoG.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Campus" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                    <h4 className="font-oswald text-3xl font-bold uppercase">Campus</h4>
                    <p className="text-sm text-gray-300">Professional training center</p>
                    <p className="text-[10px] text-red-varese font-bold uppercase tracking-widest mt-2">3M € renovation project starting this summer</p>
                  </div>
                </div>
                <div className="relative h-[450px] group overflow-hidden rounded-xl shadow-2xl">
                  <img src="https://i.imgur.com/LfpEJsZ.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Elite Housing" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
                    <h4 className="font-oswald text-3xl font-bold uppercase">Elite Housing</h4>
                    <p className="text-sm text-gray-300">Luxury student-athlete living</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Elite Opportunities Section */}
          <section id="opportunities" className="py-24 bg-black scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">Elite Programs</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase mb-4">Elite Opportunities</h2>
                <p className="text-gray-400 tracking-widest uppercase text-sm">A complete ecosystem for the next generation of basketball excellence</p>
              </div>
              <ProgramsGrid />
            </div>
          </section>
        </>
      ) : (
        /* Dedicated Programs View (The "Other Page") */
        <section className="pt-32 pb-24 min-h-screen bg-black animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-red-varese font-bold uppercase tracking-[0.3em] text-xs mb-4">Programs & Training</p>
              <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4">Elite <span className="text-red-varese">Opportunities</span></h1>
              <p className="text-gray-400 max-w-2xl text-lg uppercase tracking-wider font-light">
                Discover our specialized paths for players and coaches within the Pallacanestro Varese ecosystem.
              </p>
            </div>
            <ProgramsGrid />
          </div>
        </section>
      )}

      {/* Program Modal (Expanded View) */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
            onClick={handleCloseModal}
          ></div>
          
          <div className="relative bg-zinc-900 w-full max-w-7xl max-h-screen md:max-h-[95vh] overflow-y-auto rounded-none md:rounded-3xl shadow-[0_0_100px_rgba(227,6,19,0.3)] border-0 md:border md:border-white/10 flex flex-col md:flex-row animate-in zoom-in-95 duration-300 ease-out">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-black/50 hover:bg-red-varese text-white p-2 md:p-3 rounded-full transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>

            <div className="md:w-[40%] relative h-48 md:h-auto overflow-hidden">
              <img src={selectedProgram.image} className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100" alt={selectedProgram.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent md:bg-gradient-to-r"></div>
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="bg-red-varese text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded">
                  {selectedProgram.timing}
                </span>
              </div>
            </div>

            <div className="md:w-[60%] p-6 md:p-12 flex flex-col overflow-y-visible">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-red-varese font-bold uppercase tracking-[0.2em] text-[10px] mb-1">Elite Program Detail</p>
                  <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tighter">
                    {selectedProgram.title}
                  </h2>
                </div>
                {!isApplying && (
                  <span className="hidden md:inline-block bg-red-varese text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">
                    {selectedProgram.timing}
                  </span>
                )}
              </div>
              
              {!isApplying ? (
                <>
                  <div className="mb-6 p-3 border-l-2 border-red-varese bg-white/5 rounded-r-lg">
                    <p className="text-white font-bold uppercase tracking-[0.05em] text-xs">Target: {selectedProgram.target}</p>
                  </div>
                  <div className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    <p className="mb-4">{selectedProgram.description}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {selectedProgram.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded border border-white/10">
                        <CheckCircle2 size={14} className="text-red-varese flex-shrink-0" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-white truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <button onClick={handleApplyNowInModal} className="flex-1 bg-red-varese text-white py-3 md:py-4 font-bold uppercase tracking-[0.15em] hover:bg-red-700 transition-all text-[11px] rounded-lg shadow-xl shadow-red-600/20">Apply Now</button>
                    <a href="https://drive.google.com/file/d/1PQ7iSTdj0XC4TCMzENjinLr8Udv38-oW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex-1 border border-white/20 text-white py-3 md:py-4 font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all text-[11px] rounded-lg text-center flex items-center justify-center">Download Brochure</a>
                  </div>
                </>
              ) : (
                <div className="flex-grow flex flex-col h-full animate-in slide-in-from-right-8 duration-500">
                  <div className="flex items-center gap-2 mb-8 cursor-pointer group w-fit" onClick={() => setIsApplying(false)}>
                    <ArrowRight className="rotate-180 text-red-varese group-hover:-translate-x-1 transition-transform" size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white">Back to Details</span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-white font-oswald text-xl md:text-2xl uppercase mb-2">Application Form</h3>
                    <p className="text-gray-400 text-xs">Please provide your details below to apply for the <span className="text-red-varese font-bold">{selectedProgram.title}</span>.</p>
                  </div>
                  <form onSubmit={handleJoinSubmit} className="space-y-4 md:space-y-6 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">First Name *</label>
                        <input required type="text" name="firstName" value={formState.firstName} onChange={handleFormChange} placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Last Name *</label>
                        <input required type="text" name="lastName" value={formState.lastName} onChange={handleFormChange} placeholder="Your Surname" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Club / Academy / Federation *</label>
                      <input required type="text" name="organization" value={formState.organization} onChange={handleFormChange} placeholder="Current Organization" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Email Address *</label>
                      <input required type="email" name="email" value={formState.email} onChange={handleFormChange} placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
                    </div>
                    <div className="space-y-1.5 flex-grow">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Message & Info Request *</label>
                      <textarea required name="message" value={formState.message} onChange={handleFormChange} rows={4} placeholder="Tell us about your interest..." className="w-full h-full min-h-[100px] bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors resize-none" />
                    </div>
                    <div className="pt-4 mt-auto">
                      <button type="submit" disabled={!isFormValid()} className={`w-full py-4 font-bold uppercase tracking-[0.2em] rounded-lg transition-all flex items-center justify-center gap-3 ${isFormValid() ? 'bg-red-varese hover:bg-red-700 text-white shadow-xl shadow-red-600/20' : 'bg-white/10 text-gray-500 cursor-not-allowed'}`}>
                        Submit Application <Send size={18} />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Join EBP Modal Form (Global) */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={handleCloseModal}></div>
          <div className="relative bg-zinc-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-[0_0_100px_rgba(227,6,19,0.3)] border border-white/10 p-8 md:p-12 animate-in zoom-in-95 duration-300">
            <button onClick={handleCloseModal} className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-red-varese text-white p-2 rounded-full transition-colors"><X size={20} /></button>
            <div className="text-center mb-10">
              <img src={CLUB_LOGO} alt="Logo" className="h-12 mx-auto mb-4" />
              <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2">Join the <span className="text-red-varese">Program</span></h2>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Submit your application to enter the Varese elite opportunities</p>
            </div>
            <form onSubmit={handleJoinSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Name *</label>
                  <input required type="text" name="firstName" value={formState.firstName} onChange={handleFormChange} placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Last Name *</label>
                  <input required type="text" name="lastName" value={formState.lastName} onChange={handleFormChange} placeholder="Surname" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Email *</label>
                <input required type="email" name="email" value={formState.email} onChange={handleFormChange} placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Club / Academy / Federation *</label>
                <input required type="text" name="organization" value={formState.organization} onChange={handleFormChange} placeholder="Current Organization" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors" />
              </div>
              <div className="space-y-1.5 relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Select Program *</label>
                <div className="relative">
                  <select required name="program" value={formState.program} onChange={handleFormChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-red-varese transition-colors cursor-pointer">
                    <option value="" disabled className="bg-zinc-900">Select an option</option>
                    <option value="Basketball Academy" className="bg-zinc-900">Basketball Academy</option>
                    <option value="Full Time Training" className="bg-zinc-900">Full Time Training</option>
                    <option value="Elite Summer Camp" className="bg-zinc-900">Elite Summer Camp</option>
                    <option value="Coaches Internship" className="bg-zinc-900">Coaches Internship</option>
                    <option value="Summer Program" className="bg-zinc-900">Summer Program</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-red-varese">Message & Information Request *</label>
                <textarea required name="message" value={formState.message} onChange={handleFormChange} rows={4} placeholder="Tell us about your interest..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-varese transition-colors resize-none" />
              </div>
              <button type="submit" disabled={!isFormValid()} className={`w-full py-4 font-bold uppercase tracking-[0.2em] rounded-lg transition-all flex items-center justify-center gap-3 ${isFormValid() ? 'bg-red-varese hover:bg-red-700 text-white shadow-xl shadow-red-600/20' : 'bg-white/10 text-gray-500 cursor-not-allowed'}`}>
                Submit Application <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section (Visible on both views) */}
      <section className="py-32 bg-red-varese relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <h2 className="text-[30rem] font-oswald font-black uppercase tracking-tighter">VARESE</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-oswald text-5xl md:text-8xl font-bold uppercase mb-8 leading-[0.9]">Transform Your <br/>Basketball Future</h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-white/90 uppercase tracking-widest">Applications for the 2026/27 Season are now open.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => setIsJoinModalOpen(true)} className="bg-white text-red-varese px-16 py-6 font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all rounded-sm text-lg shadow-2xl">Apply Now</button>
          </div>
        </div>
      </section>

      {/* Footer (Visible on both views) */}
      <footer className="bg-black py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <img src={CLUB_LOGO} alt="Varese" className="h-20 mb-8" />
              <h4 className="font-oswald text-3xl font-bold uppercase mb-4 tracking-tighter">Pallacanestro Varese <span className="text-red-varese">EBP</span></h4>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">Empowering the next generation of elite basketball players through professional infrastructure and legendary expertise.</p>
              <div className="flex gap-6 items-center">
                <a href="https://www.linkedin.com/company/pallacanestro-varese-spa/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Linkedin size={24} /></a>
                <a href="https://www.instagram.com/pallvarese?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Instagram size={24} /></a>
                <a href="https://www.facebook.com/pallvarese/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><Facebook size={24} /></a>
                <a href="https://x.com/PallVarese" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><X size={24} /></a>
                <a href="https://www.tiktok.com/@pallvarese?_r=1&_t=ZN-93rFmsKhFL8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-varese transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.5a6.33 6.33 0 0 0-1.01-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.27A8.25 8.25 0 0 0 22 11.45V8.04a4.8 4.8 0 0 1-2.41-1.35z"/></svg></a>
              </div>
            </div>
            <div>
              <ul className="space-y-4 text-gray-500 text-sm md:mt-16">
                <li><button onClick={() => navigateToHomeSection('who-we-are')} className="hover:text-white transition-colors uppercase tracking-widest">Our Legacy</button></li>
                <li><button onClick={() => navigateToHomeSection('where-we-are')} className="hover:text-white transition-colors uppercase tracking-widest">The Region</button></li>
                <li><button onClick={() => navigateToHomeSection('leadership')} className="hover:text-white transition-colors uppercase tracking-widest">Leadership</button></li>
                <li><button onClick={() => navigateToHomeSection('facilities')} className="hover:text-white transition-colors uppercase tracking-widest">Facilities</button></li>
                <li><button onClick={() => setView('programs')} className="hover:text-white transition-colors uppercase tracking-widest">Programs</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold uppercase mb-8 tracking-[0.2em] text-xs text-white">Contact Us</h5>
              <ul className="space-y-6 text-gray-500 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-red-varese mt-0.5" />
                  <a 
                    href="https://maps.app.goo.gl/WUqdjaf9duktWCNU8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-red-varese transition-colors"
                  >
                    Piazzale Antonio Gramsci,<br/>Varese, Italy
                  </a>
                </li>
                <li>
                  <p>Email: <a href="mailto:f.bellotto@pallacanestrovarese.it" className="hover:text-red-varese transition-colors">f.bellotto@pallacanestrovarese.it</a></p>
                  <p className="text-[10px] uppercase tracking-widest mt-1 text-gray-400">Chief Operating Officer</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.1em]">
            <p>&copy; {new Date().getFullYear()} Pallacanestro Varese. Developed for Elite Basketball Program.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;