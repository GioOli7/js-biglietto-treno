//********** Calcolo biglietto treno

// chiedo numero km da percorrere
// chiedo età passeggero
// calcolo il prezzo, che sarà km * prezzo al km (0.21 euro)
// se l'età del passeggero è inferiore ai 18, applico sconto del 20%
// se l'età del passeggero è superiore ai 65, applico sconto del 40%
// stampo risultato con massimo due decimali


// PREZZO BIGLIETTO E SCONTI
var priceKm = 0.21;
var scontoUnder18 = 0.2;
var scontoOver65 = 0.4;


// CHIEDO KM DA PERCORRERE
var kmViaggio = parseInt( prompt("Quanti chilometri deve percorrere") );
// servirebbe un loop, ma non ci siamo ancora arrivati
// se il dato non è numerico, faccio ripetere l'inserimento dati
if (isNaN(kmViaggio) || kmViaggio < 0) {
    kmViaggio = parseInt( prompt("Inserire un dato numerico valido") );
}
document.getElementById('km-viaggio').innerHTML = kmViaggio; 
console.log("Km da percorrere: ", kmViaggio);


// CHIEDO ETÀ DEL PASSEGGERO
var age = parseInt( prompt("Indichi la sua età") );
// se il dato non è numerico, faccio ripetere l'inserimento dati
if (isNaN(age) || age < 0) {
    age = parseInt( prompt("Inserire un dato numerico valido") );
}
document.getElementById('age-passenger').innerHTML = age; 
console.log("Età del passeggero: ", age);


// CALCOLO PREZZO STANDARD
var price = kmViaggio * priceKm;


// APPORTO SCONTI SE NECESSARIO
if (age < 18) {
    price -= price * scontoUnder18;
    // formatto l'output del prezzo
    var formatPrice = price.toFixed(2) + ' euro';
    document.getElementById('prezzo-biglietto').innerHTML = formatPrice;
    console.log("Prezzo scontato per Under18: ", price);
} else if (age >= 65){
    price -= price * scontoOver65;
    // formatto l'output del prezzo
    var formatPrice = price.toFixed(2) + ' euro';
    document.getElementById('prezzo-biglietto').innerHTML = formatPrice;
    console.log("Prezzo scontato per Over65: ", price);
} else {
    // formatto l'output del prezzo
    var formatPrice = price.toFixed(2) + ' euro';
    document.getElementById('prezzo-biglietto').innerHTML = formatPrice;
    console.log("Prezzo del biglietto standard: ", price);
}