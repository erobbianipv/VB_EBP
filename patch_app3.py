with open("App.tsx", "r") as f:
    content = f.read()

# Edit 1: change €1.500/month to €2.000/month in App.tsx
content = content.replace("program.id === 'internship' ? '€1.500/month' :", "program.id === 'internship' ? '€2.000/month' :")

# Edit 2: change getImage3 for internship
content = content.replace("if (programId === 'internship') return \"https://i.imgur.com/aJPDUxI.png\";", "if (programId === 'internship') return \"https://i.imgur.com/70Tjrqq.jpeg\";")

with open("App.tsx", "w") as f:
    f.write(content)
