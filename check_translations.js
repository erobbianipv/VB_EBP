
import fs from 'fs';

const content = fs.readFileSync('App.tsx', 'utf8');
const translationsMatch = content.match(/const TRANSLATIONS = ({[\s\S]*?});/);

if (translationsMatch) {
  try {
    // We need to be careful with eval, but this is a controlled environment.
    // However, the object has some JSX-like strings or comments.
    // Let's try to extract the keys more simply.
    
    const translationsStr = translationsMatch[1];
    
    const getKeys = (lang) => {
      const langMatch = translationsStr.match(new RegExp(`${lang}: \\{([\\s\\S]*?)\\n  \\},`));
      if (!langMatch) return [];
      const lines = langMatch[1].split('\n');
      return lines
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('//'))
        .map(line => line.split(':')[0].trim())
        .filter(key => key);
    };

    const enKeys = getKeys('en');
    const itKeys = getKeys('it');
    const esKeys = getKeys('es');
    const frKeys = getKeys('fr');

    console.log('EN Keys count:', enKeys.length);
    console.log('IT Keys count:', itKeys.length);
    console.log('ES Keys count:', esKeys.length);
    console.log('FR Keys count:', frKeys.length);

    const findMissing = (base, target, name) => {
      const missing = base.filter(key => !target.includes(key));
      if (missing.length > 0) {
        console.log(`Missing keys in ${name}:`, missing);
      } else {
        console.log(`No missing keys in ${name}`);
      }
    };

    findMissing(enKeys, itKeys, 'IT');
    findMissing(enKeys, esKeys, 'ES');
    findMissing(enKeys, frKeys, 'FR');

  } catch (e) {
    console.error('Error parsing translations:', e);
  }
} else {
  console.error('Could not find TRANSLATIONS object');
}
