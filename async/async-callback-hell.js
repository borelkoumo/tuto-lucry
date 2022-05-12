// Inclusion du module fs (filesystem) pour la gestion du système de fichiers
const fs = require('fs');

// Read file1, then call the callback function
fs.readFile('text1.txt', 'utf-8', (err, text1) => {
  if (err) {
    // If there was an error, display a warning, but continue
    console.error('Could not read text1.txt file:', err);
  } else {
    // Otherwise, lire file2
    fs.readFile('text2.txt', 'utf-8', (err, text2) => {
      if (err) {
        // If there was an error, display a warning, but continue
        console.error('Could not read text2.txt file:', err);
      } else {
        // Otherwise, concatener les resultats
        let text3 = text1 + text2
        fs.writeFile('text-result.txt', text3, (err) => {
          if (err) {
            // If there was an error, display a warning, but continue
            console.error('Could not read hello.txt file:');
          } else {
             console.error('Tout sest bien passe:');
          }
        });
      }
    });
  }
});

console.log('Je lis le fichier');
