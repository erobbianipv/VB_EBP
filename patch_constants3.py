with open("constants.tsx", "r") as f:
    content = f.read()

import re

old_details = r"details: `The Elite Development Program is tailored for U18 Elite Players.`"

new_content_block = """    overview: "Live basketball like a pro with a flexible-duration immersive experience at Pallacanestro Varese.\\nTrain in top-level facilities alongside elite coaches and staff, experience our professional methodology first-hand, and develop your game within the environment of a club with a unique basketball heritage.\\nThe experience can also include the opportunity to join our Travel Team, representing Pallacanestro Varese in international tournaments around the world.",
    details: `target audience
This program is designed for elite U18 athletes who aspire to a professional basketball career. These are young players who have already shown standout potential and are ready to take the next step — athletes who are hungry to be immersed in a serious, professional environment where they can grow both on and off the court. Our ideal participant is not just talented, but driven: someone who understands that reaching the professional level requires more than raw skill. They are motivated to develop the discipline, mindset, and habits of a true professional, and they're seeking a structured, high-performance setting that matches their ambition.`"""

content = re.sub(old_details, new_content_block, content)

with open("constants.tsx", "w") as f:
    f.write(content)
