with open("App.tsx", "r") as f:
    content = f.read()

start_marker = "const ProgramsGrid = ({ category }: { category?: 'top' | 'other' }) => ("
end_marker = "  const FacilityPage = ({ facility, onBack, t }: { facility: Facility; onBack: () => void; t: (key: any) => string; }) => {"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_grid = """const ProgramsGrid = ({ category }: { category?: 'top' | 'other' }) => (
    <div className="flex flex-wrap justify-center gap-3 md:gap-10">
      {PROGRAMS.filter(p => !category || p.category === category).map((prog) => {
        const translatedProg = translateProgram(prog, lang);
        const isOther = category === 'other';
        return (
        <div 
          key={translatedProg.id} 
          className={`relative card-glass rounded-xl md:rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 shadow-xl w-[calc(50%-6px)] md:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] ${translatedProg.id === 'full-time' ? 'border-red-varese' : 'hover:border-red-varese'}`}
        >
          <div className={`overflow-hidden relative ${isOther ? 'h-24 sm:h-32 md:h-40 lg:h-44' : 'h-32 sm:h-48 md:h-64'}`}>
            {translatedProg.image && (
              <img src={translatedProg.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={translatedProg.title} />
            )}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-varese text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-bold tracking-widest uppercase rounded">
              {translatedProg.timing}
            </div>
          </div>
          <div className={`flex-grow flex flex-col ${isOther ? 'p-2 sm:p-3 md:p-4' : 'p-3 sm:p-5 md:p-6 lg:p-4 xl:p-6'}`}>
            <h3 className={`font-oswald font-bold uppercase mb-1 md:mb-2 group-hover:text-red-varese transition-colors line-clamp-1 ${isOther ? 'text-sm md:text-lg' : 'text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl'}`}>{translatedProg.title}</h3>
            <p className={`text-red-varese font-bold uppercase tracking-widest mb-2 md:mb-4 flex-grow line-clamp-1 ${isOther ? 'text-[10px] md:text-xs' : 'text-xs sm:text-sm lg:text-xs xl:text-sm'}`}>{translatedProg.target}</p>
            <div className={`space-y-1 md:space-y-3 mb-4 md:mb-8 hidden sm:block ${isOther ? 'hidden' : ''}`}>
              {translatedProg.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm lg:text-xs xl:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <CheckCircle2 size={12} className="text-red-varese flex-shrink-0" /> <span className="truncate">{h}</span>
                </div>
              ))}
            </div> 
             <div className="mt-auto pt-2 md:pt-4 flex flex-col gap-2 xl:flex-row xl:gap-2">
                <button 
                  onClick={() => {
                    setSelectedProgram(translatedProg);
                    setPreviousView(view);
                    setView('programDetail');
                  }}
                  className="flex-1 flex items-center justify-center whitespace-nowrap px-1 bg-white/10 text-white hover:bg-white hover:text-black py-2 md:py-3 rounded font-bold uppercase tracking-widest text-[10px] md:text-[10px] lg:text-[10px] xl:text-[11px] transition-all"
                >
                  {t('findOutMore')}
                </button>
                <a
                  href={
                    translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "mailto:ebp@pallacanestrovarese.it" :
                    translatedProg.id === 'full-time' ? "https://store.pallacanestrovarese.it/products/basketball-academy-copia" :
                    translatedProg.id === 'summer-camp' ? "https://store.pallacanestrovarese.it/products/elite-summer-camp?variant=52625081630986" :
                    translatedProg.id === 'internship' ? "https://store.pallacanestrovarese.it/products/coaches-internship-program?variant=52625121313034" :
                    "https://store.pallacanestrovarese.it/collections/elite-programs"
                  }
                  target={translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "_self" : "_blank"}
                  rel={translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "" : "noopener noreferrer"}
                  className="flex-1 flex items-center justify-center whitespace-nowrap px-1 bg-red-varese text-white hover:bg-red-700 py-2 md:py-3 rounded font-bold uppercase tracking-widest text-[10px] md:text-[10px] lg:text-[10px] xl:text-[11px] transition-all text-center"
                >
                  {t('contactUs')}
                </a>
             </div>
          </div>
        </div>
      )})}
    </div>
  );

"""
    content = content[:start_idx] + new_grid + content[end_idx:]
    with open("App.tsx", "w") as f:
        f.write(content)
