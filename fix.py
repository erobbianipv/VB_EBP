with open("constants.tsx", "r") as f:
    content = f.read()

# remove the wrongly inserted program from the end
wrong_str = """  },
  {
    id: "winter-elite-camp",
    title: "WINTER ELITE CAMP",
    target: "2009 to 2013",
    timing: "December 2027, TBD",
    description: "Join our Winter Elite Camp to experience top-tier training during the winter break. Sharpen your skills with professional coaches and prepare for the second half of the season.",
    highlights: ["Serie A techniques", "Elite competition", "Performance analytics"],
    image: "https://i.imgur.com/aqpljEk.jpeg",
    detailImage: "https://i.imgur.com/aqpljEk.jpeg",
    category: 'top',
    details: `About the Camp
An intensive winter training camp designed for ambitious players looking to maximize their potential during the winter break.

More details will be available soon.`
  }
];"""

content = content.replace(wrong_str, "  }\n];")

# Now properly insert into PROGRAMS array. 
# The last program in PROGRAMS is travel-team.
# So we look for GUEST_PLAYER_PACKAGES\n[img]https://i.imgur.com/owlvKPk.png[/img]`\n  }\n];
# and replace it.

correct_str = """[img]https://i.imgur.com/owlvKPk.png[/img]`
  },
  {
    id: "winter-elite-camp",
    title: "WINTER ELITE CAMP",
    target: "2009 to 2013",
    timing: "December 2027, TBD",
    description: "Join our Winter Elite Camp to experience top-tier training during the winter break. Sharpen your skills with professional coaches and prepare for the second half of the season.",
    highlights: ["Serie A techniques", "Elite competition", "Performance analytics"],
    image: "https://i.imgur.com/aqpljEk.jpeg",
    detailImage: "https://i.imgur.com/aqpljEk.jpeg",
    category: 'top',
    details: `About the Camp
An intensive winter training camp designed for ambitious players looking to maximize their potential during the winter break.

More details will be available soon.`
  }
];"""

content = content.replace("[img]https://i.imgur.com/owlvKPk.png[/img]`\n  }\n];", correct_str)

with open("constants.tsx", "w") as f:
    f.write(content)
