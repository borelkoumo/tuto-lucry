// Verifier les updates toutes les 5 secondes

console.log('Hello');
setTimeout(verifierUpdates, 5000);
console.log('Bonjour');
console.log('Bonsoir');

// La fonction de callback
function verifierUpdates() {
  console.log('Verification des mises a jour');
}
