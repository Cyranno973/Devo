/*function clic() {
  console.log("click");
}
var boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click",clic);
boutonElt.removeEventListener("click",clic);
*/

// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});
