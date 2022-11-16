/*TESTO ESERCIZIO :
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata */



//------------MAIN-----------------

//chiedo al utente di inserire una parola

let parolaInserita = prompt("Inserisci una parola!");

//converto tutto in minuscolo 

let parolaInseritaInMinuscolo = parolaInserita.toLocaleLowerCase();

//stampo la funzione

let parolaInseritaInvertita = getstringaInvertita(parolaInseritaInMinuscolo);

//verifico se la parola inserita dal utente è palindroma

if (parolaInseritaInMinuscolo == parolaInseritaInvertita) {
    console.log("la parola inserita è palindroma")
}

//------------------------------





// --------creo la funzione dove posso invertire una stringa ---------

function getstringaInvertita(stringa) {

    let stringaInversa = stringa.split('').reverse().join('');
    return stringaInversa;
}


/* .split = separo le lettere cioe creo un array della parola dove le lettere diventano i singoli elementi
   . reverse = si inverte l'array della parola creata con split ;
   . join = l'array della parola diventa stringa */