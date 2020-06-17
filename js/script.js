/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
e l’età del passeggero.
Sulla base di queste informazioni dovrà:
calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

var printBtn = document.getElementById('printBiglietto');
var annulla = document.getElementById('reset');

printBtn.addEventListener ("click" , function () {
  var prezzoTot;
  var prezzoAlKm = 0.21;
  var scontoMinorenni = 0.2;
  var scontoOver = 0.4;
  var nMinTreno = 40;
  var nMaxTreno = 300;
  var nMinCarrozza = 1;
  var nMaxCarrozza = 20;

  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;
  var treno = Math.floor(Math.random() * (nMaxTreno - nMinTreno + 1)) + nMinTreno;
  var carrozza = Math.floor(Math.random() * (nMaxCarrozza - nMinCarrozza + 1)) + nMinCarrozza;



  if (eta == "Minorenne") {
    prezzoTot = (km * prezzoAlKm) - scontoMinorenni * (km * prezzoAlKm);
  } else if (eta == "Over65") {
    prezzoTot = (km * prezzoAlKm) - scontoOver * (km * prezzoAlKm);
  } else {
    prezzoTot = (km * prezzoAlKm);
  }

  document.getElementById('passeggero').innerHTML = nome;
  document.getElementById('treno').innerHTML = "n°" + treno;
  document.getElementById('carrozza').innerHTML = "n°" + carrozza;
  document.getElementById('prezzo').innerHTML = prezzoTot + "€";
  document.getElementById('categoriaEta').innerHTML = eta;
  document.getElementById('biglietto').className = "show";
})

annulla.addEventListener ("click" , function () {

  document.getElementById('passeggero').innerHTML = "";
  document.getElementById('treno').innerHTML = "";
  document.getElementById('carrozza').innerHTML = "";
  document.getElementById('prezzo').innerHTML = "";
  document.getElementById('categoriaEta').innerHTML = "";
  var nome = document.getElementById('nome').value = "";
  var km = document.getElementById('km').value = "";
  var eta = document.getElementById('eta').value = "Maggiorenne";
  document.getElementById('biglietto').className = "hidden";
})
