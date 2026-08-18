with open("App.tsx", "r") as f:
    content = f.read()

# Update detail images in App.tsx
old1 = '<img src={translatedProg.detailImage || translatedProg.image} alt={translatedProg.title} className="w-full aspect-video object-cover rounded-lg my-6" />'
new1 = '<img src={translatedProg.detailImage || translatedProg.image} alt={translatedProg.title} className={`w-full aspect-video object-cover rounded-lg my-6 ${translatedProg.imagePosition || \'\'}`} />'
content = content.replace(old1, new1)

old2 = '<img src={selectedProgram.detailImage || selectedProgram.image} className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100" alt={selectedProgram.title} />'
new2 = '<img src={selectedProgram.detailImage || selectedProgram.image} className={`absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100 ${selectedProgram.imagePosition || \'\'}`} alt={selectedProgram.title} />'
content = content.replace(old2, new2)

with open("App.tsx", "w") as f:
    f.write(content)
