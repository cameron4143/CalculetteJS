const prompt = require('prompt-sync')({sigint: true});
let result;
let a = parseInt(prompt('entrez un première nombre : '));
let b = parseInt(prompt('entrez un deuxième nombre : '));
let choix = prompt('choisissez entre 1 et 4 : ');


if (choix == 1) {
    result = a + b;
} else if (choix == 2) {
    result = a - b;
} else if (choix == 3) {
    result = a * b;
} else if (choix == 4) {
    result = a / b;
}
console.log('le resultat est  : ', result);





