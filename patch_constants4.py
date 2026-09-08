with open("constants.tsx", "r") as f:
    content = f.read()

import re

old_overview = r'''overview: "Live basketball like a pro with a flexible-duration immersive experience at Pallacanestro Varese.
Train in top-level facilities alongside elite coaches and staff, experience our professional methodology first-hand, and develop your game within the environment of a club with a unique basketball heritage.
The experience can also include the opportunity to join our Travel Team, representing Pallacanestro Varese in international tournaments around the world.",'''

new_overview = r'''overview: `Live basketball like a pro with a flexible-duration immersive experience at Pallacanestro Varese.
Train in top-level facilities alongside elite coaches and staff, experience our professional methodology first-hand, and develop your game within the environment of a club with a unique basketball heritage.
The experience can also include the opportunity to join our Travel Team, representing Pallacanestro Varese in international tournaments around the world.`,'''

content = content.replace(old_overview, new_overview)

with open("constants.tsx", "w") as f:
    f.write(content)
