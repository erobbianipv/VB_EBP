with open("App.tsx", "r") as f:
    content = f.read()

# Replace rendering line
old_line = '<img src={translatedProg.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={translatedProg.title} />'
new_line = '<img src={translatedProg.image} className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity ${translatedProg.imagePosition || \'\'}`} alt={translatedProg.title} />'

content = content.replace(old_line, new_line)

with open("App.tsx", "w") as f:
    f.write(content)
