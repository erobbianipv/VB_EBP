import re

with open("App.tsx", "r") as f:
    content = f.read()

# I will replace the button specifically in ProgramsGrid
old_button = """                <button 
                  onClick={() => {
                    setSelectedProgram(translatedProg);
                    setPreviousView(view);
                    setView('programDetail');
                  }}
                  className="flex-1 flex items-center justify-center whitespace-nowrap px-1 bg-white/10 text-white hover:bg-white hover:text-black py-2 md:py-3 rounded font-bold uppercase tracking-widest text-[10px] md:text-[10px] lg:text-[10px] xl:text-[11px] transition-all"
                >
                  {t('findOutMore')}
                </button>"""

new_button = """                <button 
                  onClick={() => {
                    if (translatedProg.id === 'winter-elite-camp') return;
                    setSelectedProgram(translatedProg);
                    setPreviousView(view);
                    setView('programDetail');
                  }}
                  className={`flex-1 flex items-center justify-center whitespace-nowrap px-1 py-2 md:py-3 rounded font-bold uppercase tracking-widest text-[10px] md:text-[10px] lg:text-[10px] xl:text-[11px] transition-all ${translatedProg.id === 'winter-elite-camp' ? 'bg-white/5 text-gray-500 cursor-default' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}
                >
                  {translatedProg.id === 'winter-elite-camp' ? 'Coming soon' : t('findOutMore')}
                </button>"""

content = content.replace(old_button, new_button)

with open("App.tsx", "w") as f:
    f.write(content)
