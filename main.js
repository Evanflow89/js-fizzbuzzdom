// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

const items = document.querySelector(".items");

for (let number = 1; number <= 100; number++) {
    const element = document.createElement("div");
    element.classList.add("item");
    items.append(element);
    if ((number % 3 == 0) && (number % 5 == 0)) {
        element.classList.add("item", "fizzBuzz-active");
        element.innerHTML += "fizzbuzz";
        console.log("FizzBuzz");
    } else if (number % 3 == 0) {
        element.classList.add("item", "fizz-active");
        element.innerHTML += "Fizz";
        console.log("Fizz");
    } else if (number % 5 == 0) {
        element.classList.add("item", "buzz-active");
        element.innerHTML += "Buzz";
        console.log("Buzz");
    } else {
        element.classList.add("item");
        element.innerHTML += number;
        console.log(number);
    }
}








// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"