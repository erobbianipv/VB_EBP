with open("constants.tsx", "r") as f:
    content = f.read()

# Edit 3: change constants pricing text
old_text = "The program has a price of €1.500 a month. Please contact us for detailed pricing information or any other general information tailored to your specific needs at ebp@pallacanestrovarese.it."
new_text = "The program has a price of €2.000 a month. Please contact us for detailed pricing information or any other general information tailored to your specific needs at ebp@pallacanestrovarese.it."

content = content.replace(old_text, new_text)

with open("constants.tsx", "w") as f:
    f.write(content)
