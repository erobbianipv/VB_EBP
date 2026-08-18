with open("translations.ts", "r") as f:
    content = f.read()

# Update travel-team timing
content = content.replace('timing: "Tutto l\'anno",\n      description: "Unisciti al nostro travel team', 'timing: "Durata flessibile",\n      description: "Unisciti al nostro travel team')
content = content.replace('timing: "Todo el año",\n      description: "Únete a nuestro equipo', 'timing: "Duración flexible",\n      description: "Únete a nuestro equipo')
content = content.replace('timing: "Toute l\'année",\n      description: "Rejoignez notre équipe', 'timing: "Durée flexible",\n      description: "Rejoignez notre équipe')

new_camp = """  },
  "winter-elite-camp": {
    it: {
      title: "WINTER ELITE CAMP",
      target: "2009 al 2013",
      timing: "Dicembre 2027, da definire",
      description: "Partecipa al nostro Winter Elite Camp per vivere un allenamento di altissimo livello durante la pausa invernale. Affina le tue abilità con allenatori professionisti e preparati per la seconda metà della stagione.",
      highlights: ["Tecniche di Serie A", "Competizione d'élite", "Analisi delle prestazioni"],
      details: `Informazioni sul Camp
Un camp di allenamento invernale intensivo progettato per giocatori ambiziosi che cercano di massimizzare il loro potenziale durante la pausa invernale.

Maggiori dettagli saranno disponibili presto.`
    },
    es: {
      title: "WINTER ELITE CAMP",
      target: "2009 al 2013",
      timing: "Diciembre 2027, por determinar",
      description: "Únete a nuestro Winter Elite Camp para experimentar un entrenamiento de primer nivel durante las vacaciones de invierno. Perfecciona tus habilidades con entrenadores profesionales y prepárate para la segunda mitad de la temporada.",
      highlights: ["Técnicas de la Serie A", "Competición de élite", "Análisis de rendimiento"],
      details: `Sobre el campamento
Un campamento de entrenamiento de invierno intensivo diseñado para jugadores ambiciosos que buscan maximizar su potencial durante las vacaciones de invierno.

Pronto habrá más detalles disponibles.`
    },
    fr: {
      title: "WINTER ELITE CAMP",
      target: "2009 à 2013",
      timing: "Décembre 2027, à définir",
      description: "Rejoignez notre Winter Elite Camp pour découvrir un entraînement de haut niveau pendant les vacances d'hiver. Aiguisez vos compétences avec des entraîneurs professionnels et préparez-vous pour la seconde moitié de la saison.",
      highlights: ["Techniques de Serie A", "Compétition d'élite", "Analyse des performances"],
      details: `À propos du camp
Un camp d'entraînement d'hiver intensif conçu pour les joueurs ambitieux cherchant à maximiser leur potentiel pendant les vacances d'hiver.

Plus de détails seront disponibles bientôt.`
    }
  }
};"""

content = content.replace("  }\n};", new_camp)

with open("translations.ts", "w") as f:
    f.write(content)
