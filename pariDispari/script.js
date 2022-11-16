/* TESTO ESERCIZIO:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */ 


//chiedo al utente di inserire un numero da 1 a 5 
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

//richiamo la funzione per generare un numero randum da 1 a 5
let numeroRandom = getRndInteger(1,5);

console.log ("il numero estrato dal computer è : " + numeroRandom)


//genero la somma

let sum = numeroUtente + numeroRandom

console.log ("la somma dei due numeri è:" + sum);

//richiamo la funzione per vedere se la somma è pari o dispari 

let risultato = stampaNumeroPariDispari (sum)




// -----------creo una funzione per capire se il numero è pari o dispari-------

function stampaNumeroPariDispari(num){

    if(num % 2 == 0){ 
        console.log("il numero è pari quindi hai vinto!!");
    } else {
        
        console.log(" il numero è dispari hai perso ! ");
    }
}


// ----------creo una funzione per generare un numero randum -----------

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }