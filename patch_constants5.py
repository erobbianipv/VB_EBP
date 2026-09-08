with open("constants.tsx", "r") as f:
    content = f.read()

import re

old_details = r'''details: `target audience'''

new_details = r'''details: `the program
ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER

target audience'''

content = content.replace(old_details, new_details)

with open("constants.tsx", "w") as f:
    f.write(content)
