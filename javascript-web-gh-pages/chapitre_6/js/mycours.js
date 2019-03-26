 var pseudoElt = document.getElementById('pseudo');
 pseudoElt.value = "cyranno";
 // Affichage d'un message contextuel pour la saisie du pseudo
 pseudoElt.addEventListener("focus", function() {
   document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
 });
 // Suppression du message contextuel pour la saisie du pseudo
 pseudoElt.addEventListener("blur", function() {
   document.getElementById("aidePseudo").textContent = "";
 });