with open("translations.ts", "r") as f:
    content = f.read()

# I will find the last occurrence of 'winter-elite-camp' which got injected into staffTranslations
# and remove it.

staff_end = """  "ZACKARY SOGOLOW": {
    it: { role: "GM OPERAZIONI BASKET", bio: ["2 anni Ufficio Lega NBA", "6 anni Philadelphia 76ers"] },
    es: { role: "GM OPERACIONES DE BALONCESTO", bio: ["2 años Oficina de la Liga NBA", "6 años Philadelphia 76ers"] },
    fr: { role: "GM OPÉRATIONS BASKETBALL", bio: ["2 ans Bureau de la Ligue NBA", "6 ans Philadelphia 76ers"] }
  },
  "winter-elite-camp": {"""

index = content.rfind(staff_end)
if index != -1:
    # Just grab everything up to this point and add proper closing for staffTranslations
    content = content[:index] + """  "ZACKARY SOGOLOW": {
    it: { role: "GM OPERAZIONI BASKET", bio: ["2 anni Ufficio Lega NBA", "6 anni Philadelphia 76ers"] },
    es: { role: "GM OPERACIONES DE BALONCESTO", bio: ["2 años Oficina de la Liga NBA", "6 años Philadelphia 76ers"] },
    fr: { role: "GM OPÉRATIONS BASKETBALL", bio: ["2 ans Bureau de la Ligue NBA", "6 ans Philadelphia 76ers"] }
  }
};"""

with open("translations.ts", "w") as f:
    f.write(content)
