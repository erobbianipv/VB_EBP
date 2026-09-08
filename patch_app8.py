with open("App.tsx", "r") as f:
    content = f.read()

content = content.replace("https://i.imgur.com/mVN6zQs.png", "https://i.imgur.com/dfpiZZP.png")

with open("App.tsx", "w") as f:
    f.write(content)
