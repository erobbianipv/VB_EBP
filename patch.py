with open("constants.tsx", "r") as f:
    content = f.read()

new_prog = """  },
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

content = content.replace("  }\n];", new_prog)
with open("constants.tsx", "w") as f:
    f.write(content)
