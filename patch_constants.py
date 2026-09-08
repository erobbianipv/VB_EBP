with open("constants.tsx", "r") as f:
    content = f.read()

new_program = """  {
    id: "elite-development-program",
    title: "ELITE DEVELOPMENT PROGRAM",
    target: "U18 Elite Players",
    timing: "Flexible",
    description: "An elite development path focused on customized training sessions, pro experience, and international experience opportunities.",
    highlights: ["customized training sessions", "pro experience", "international experience opportunities"],
    image: "https://i.imgur.com/kRADld5.jpeg",
    detailImage: "https://i.imgur.com/kRADld5.jpeg",
    category: 'other',
    details: `The Elite Development Program is tailored for U18 Elite Players.`
  }"""

# Insert before the end of the array, or just append it.
# Let's find the winter-elite-camp which is the last one.
import re
match = re.search(r"winter-elite-camp.*?\}", content, re.DOTALL)
if match:
    insert_pos = match.end()
    new_content = content[:insert_pos] + ",\\n" + new_program + content[insert_pos:]
    with open("constants.tsx", "w") as f:
        f.write(new_content)
    print("Success")
else:
    print("Not found")
