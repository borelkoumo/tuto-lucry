// Inclusion du module fs (filesystem) pour la gestion du système de fichiers
const fs = require('fs');

// Read a configuration file, then call the callback function
fs.readFile('hello.txt', 'utf-8', (err, text) => {
  if (err) {
    // If there was an error, display a warning, but continue
    console.error('Could not read hello.txt file:', err);
  } else {
    // Otherwise, afficher le texte dans la console
    console.log(text.substring(0, 100));
  }
});

console.log('Je lis le fichier')
