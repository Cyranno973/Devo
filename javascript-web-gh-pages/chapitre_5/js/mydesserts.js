
var ulElt = document.getElementById('desserts');

document.querySelector('button').addEventListener("click", function(){
  var newDessert = prompt("Bonjour quel dessert souhaitez vous ajoutez ?");

  var liElt = document.createElement('li');
  liElt.textContent = newDessert;

liElt.addEventListener("click", function (e)
 {
  var editDessert = prompt("modifier :", e.target.textContent);
e.target.textContent = editDessert;


});
ulElt.appendChild(liElt);

});
