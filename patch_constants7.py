with open("constants.tsx", "r") as f:
    content = f.read()

old_details = r'''    details: `the program
ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER

target audience
This program is designed for elite U18 athletes who aspire to a professional basketball career. These are young players who have already shown standout potential and are ready to take the next step — athletes who are hungry to be immersed in a serious, professional environment where they can grow both on and off the court. Our ideal participant is not just talented, but driven: someone who understands that reaching the professional level requires more than raw skill. They are motivated to develop the discipline, mindset, and habits of a true professional, and they're seeking a structured, high-performance setting that matches their ambition.`'''

new_details = r'''    details: `target audience
This program is designed for elite U18 athletes who aspire to a professional basketball career. These are young players who have already shown standout potential and are ready to take the next step — athletes who are hungry to be immersed in a serious, professional environment where they can grow both on and off the court. Our ideal participant is not just talented, but driven: someone who understands that reaching the professional level requires more than raw skill. They are motivated to develop the discipline, mindset, and habits of a true professional, and they're seeking a structured, high-performance setting that matches their ambition.

the program
ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER`'''

content = content.replace(old_details, new_details)

with open("constants.tsx", "w") as f:
    f.write(content)
