with open("constants.tsx", "r") as f:
    content = f.read()

import re

# Revert the previous bad patch
content = content.replace("the program\nELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER\n\ntarget audience", "target audience")

# Now selectively apply only to elite-development-program
old_details = r'''    details: `target audience
This program is designed for elite U18 athletes who aspire to a professional basketball career.'''

new_details = r'''    details: `the program
ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER

target audience
This program is designed for elite U18 athletes who aspire to a professional basketball career.'''

content = content.replace(old_details, new_details)

with open("constants.tsx", "w") as f:
    f.write(content)
