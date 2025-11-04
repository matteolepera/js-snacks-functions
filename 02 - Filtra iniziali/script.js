/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const filterByFirstLetter = (array, letter) => {

    const arrayByFirstLetter = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i][0] === letter) {
            arrayByFirstLetter.push(array[i]);
        }

    } return arrayByFirstLetter;
}

let insertLetter = prompt("Inserisci una lettera!");
console.log(insertLetter);

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByFirstLetter(names, insertLetter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]