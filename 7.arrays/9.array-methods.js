/**
 * 
 */
forEach();

/**
 *
 * map();
 */

// let tab = [1, 2, 3];
// let tab2 = [];
// let i = 0;
// tab.forEach((x) => {
//   tab2[i] = x * x;
//   i++;
// });
// console.log(tab2)

// Ajouter +2 à tous les élèves en classe
let tab = [1, 2, 3];
let tab2 = tab.map((x) => x + 2);
console.log(tab2);

/**
 * Filter
 */
// Sélectionner les élèves ayant moins de 15 ans
const eleves = [
  { name: 'Pierre', age: 15, aPaye: true },
  { name: 'Jacques', age: 10, aPaye: false },
  { name: 'Jean', age: 25, aPaye: false },
  { name: 'André', age: 12, aPaye: true },
  { name: 'Philippe', age: 23, aPaye: false },
];
const eleveMoins15 = eleves.filter((e) => e.age <= 15);

// Passer d'un sparse à un dense array
let arr = [1, , , , 5, , , 8, 9, 7, , 5, 'borel'];
arr = arr.filter((x) => x !== undefined && x !== null);

/**
 * Find et find index
 */
const eleveJean = eleves.find((e) => e.name === 'Jean'); // returns { name: 'Jean', age: 25, aPaye: false },
const indiceJean = eleves.findIndex((e) => e.name === 'Jean'); // returns 2

// find() returns undefined and findIndex() returns -1 if predicate not found

/**
 * every() ====> tous vérifient la condition / quelquesoit mathématique , 
 * some() ====> il existe au moins 1 qui verifie la condition / il existe mathématique
 */

// est ce que tout le monde a payé la pension : every()
const ontTousPayé = eleves.every((e) => e.aPaye === true);
const quelquesOntPayé = eleves.some((e) => e.aPaye === true);

/**
 * reduce() and reduceRight()
 */


/**
 * concat()
 */


/**
 * push(), pop(), shift(), and unshift()
 */


/**
 * slice(), splice(), fill(), and copyWithin()
 */


/**
 * indexOf() and lastIndexOf()
 */


/**
 * includes()
 */


/**
 * sort()
 */


/**
 * reverse()
 */
