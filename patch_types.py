with open("types.ts", "r") as f:
    content = f.read()

content = content.replace("  detailImage?: string;\n  category?: 'top' | 'other';", "  detailImage?: string;\n  imagePosition?: string;\n  category?: 'top' | 'other';")

with open("types.ts", "w") as f:
    f.write(content)
