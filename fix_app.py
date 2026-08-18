with open("App.tsx", "r") as f:
    content = f.read()

bad_str = """nestrovarese.it" :
                    translatedProg.id === 'full-time' ? "https://store.pallacanestrovarese.it/products/basketball-academy-copia" :
                    translatedProg.id === 'summer-camp' ? "https://store.pallacanestrovarese.it/products/elite-summer-camp?variant=52625081630986" :
                    translatedProg.id === 'internship' ? "https://store.pallacanestrovarese.it/products/coaches-internship-program?variant=52625121313034" :
                    "https://store.pallacanestrovarese.it/collections/elite-programs"
                  }
                  target={translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "_self" : "_blank"}
                  rel={translatedProg.id === 'academy' || translatedProg.id === 'summer-prog' ? "" : "noopener noreferrer"}
                  className="flex-1 bg-red-varese text-white hover:bg-red-700 py-2 md:py-3 rounded font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all text-center"
                >
                  {t('contactUs')}
                </a>
             </div>"""

content = content.replace(bad_str, "")

with open("App.tsx", "w") as f:
    f.write(content)
