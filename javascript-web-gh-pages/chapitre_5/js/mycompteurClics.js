
var boutonElt = document.getElementById('clic');
var compteurClics = document.getElementById("compteurClics");
var disableEvent = document.getElementById('desactiver');

function clic() {
  var compteur = compteurClics.innerHTML;
  compteur++;
  compteurClics.innerHTML = compteur;
};
boutonElt.addEventListener("click", clic);


function desactiver() {

  boutonElt.removeEventListener("click", clic);
};

disableEvent.addEventListener("click", desactiver);
