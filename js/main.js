// # Raccolta Dati 
const firstUserAge = parseInt(prompt("Età del passeggero")); // età del passeggero
const distance = parseInt(prompt("Numero dei km"));   // distanza in km
const priceAtKm = 0.21 ;     // prezzo al km
const totalprice = distance * priceAtKm;     // prezzo totale del viaggio

const discountPerc1 = 20;   // sconto per i minorenni
const discountPerc2 = 40;  // sconto per gli over.65

const discountAmount1 = totalprice * discountPerc1 / 100; // sconto per i minorenni
const discountAmount2 = totalprice * discountPerc2 / 100; // sconto per gli over.65

console.log(firstUserAge);
console.log(distance);
console.log(discountAmount1);
console.log(discountAmount2);
console.log(priceAtKm);



// # SVOLGIMENTO 
if (firstUserAge > 18 && firstUserAge < 65) {
        console.log(totalprice + "€");
        
    }
    else if (firstUserAge < 18) {
        console.log(totalprice + discountAmount1 + "€");
    }
    else if (firstUserAge > 65) {
        console.log(totalprice + discountAmount2 + "€");
    }
    


// # OUTPUT
  output = alert( "Il prezzo del biglietto è di " + totalprice.toFixed(0.21) + "€");
  output = alert("Il prezzo del biglietto con sconto minorenni è di " + (totalprice - discountAmount1) .toFixed(0.21) + "€");
  output = alert("Il prezzo del biglietto con sconto over65 è di " + (totalprice - discountAmount2) .toFixed(0.21) + "€"); 


