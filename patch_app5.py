with open("App.tsx", "r") as f:
    content = f.read()

import re
get_image1_orig = r"if \(programId === 'travel-team'\) return \"https://i.imgur.com/Cww97Hr.png\";"
get_image1_new = r"""if (programId === 'travel-team') return "https://i.imgur.com/Cww97Hr.png";
    if (programId === 'elite-development-program') return "https://i.imgur.com/mVN6zQs.png";"""
content = re.sub(get_image1_orig, get_image1_new, content)

with open("App.tsx", "w") as f:
    f.write(content)
