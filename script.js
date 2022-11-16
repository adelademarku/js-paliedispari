
let parolaInserita = prompt ("Inserisci una parola!");

let parolaInseritaInvertita = stringaInvertita (parolaInserita);

if (parolaInserita == parolaInseritaInvertita){
    console.log ("la parola inserita è palindroma")
}


function stringaInvertita (stringa) {

   let stringaInversa = stringa.split('').reverse().join('');  
  return stringaInversa;
}


/* .split = separo le lettere cioe creo un array della parola dove le lettere diventano i singoli elementi
   . reverse = si inverte l'array della parola creata con split ;
   . join = l'array della parola diventa stringa */