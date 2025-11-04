/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const counterVocal = (string) => {
    string = string.toLowerCase();
    const vocalArray = ["a", "e", "i", "o", "u"];

    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (vocalArray.includes(string[i])) {
            counter++;
        }
    } return counter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(counterVocal(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)