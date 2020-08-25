// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// 1. array cognomi default
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 2. chiedere all'utente di inserire il suo cognome
do {
  var inputUtente = prompt("Inserisci il tuo cognome");
  inputUtente = inputUtente.charAt(0).toUpperCase() + inputUtente.slice(1);
} while (!isNaN(inputUtente));

// 3. inserire il cognome dell'utente nell'array "cognomi" e ordinamento alfabetico
cognomi.push(inputUtente);
cognomi.sort();

// 4. stampa della lista ordinata alfabeticamente
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById("lista").innerHTML += "<li>" + cognomi[i] + "</li>";
}

// 5. scrittura posizione esatta del cognome dell'utente nella Lista
document.getElementById("posizione").innerHTML = cognomi.indexOf(inputUtente) + 1;
