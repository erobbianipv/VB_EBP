with open("constants.tsx", "r") as f:
    content = f.read()

import re

old_block = r'''
the program
ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER'''

content = content.replace(old_block, "")

with open("constants.tsx", "w") as f:
    f.write(content)
