//chiedo al utente di inserire una parola

let parolaInserita = prompt ("Inserisci una parola!");

//stampo la funzione

let parolaInseritaInvertita = stringaInvertita (parolaInserita);

//verifico se la parola inserita dal utente è palindroma

if (parolaInserita == parolaInseritaInvertita){
    console.log ("la parola inserita è palindroma")
}



// creo la funzione dove posso invertire una stringa

function stringaInvertita (stringa) {

   let stringaInversa = stringa.split('').reverse().join('');  
  return stringaInversa;
}


/* .split = separo le lettere cioe creo un array della parola dove le lettere diventano i singoli elementi
   . reverse = si inverte l'array della parola creata con split ;
   . join = l'array della parola diventa stringa */