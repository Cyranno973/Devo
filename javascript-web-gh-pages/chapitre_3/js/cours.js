document.getElementById('langages').innerHTML += '<li id="c">C</li>';
//document.getElementById('langages').innerHTML = '';
document.querySelector('h1').textContent += 'de programmation';
document.querySelector('h1').setAttribute('id', 'titre');
//document.querySelector('h1').id = 'titre';
//document.querySelector('h1').setAttribute('class','tittle');
var titreElt = document.querySelector('h1');

titreElt.classList.remove("debut");

titreElt.classList.add('titre');
console.log(titreElt);
var pythonElt = document.createElement('li');
pythonElt.id = "titre";
pythonElt.textContent = "Python";
document.getElementsByTagName('ul')[0].appendChild(pythonElt);
//document.getElementById('langages').appendChild(pythonElt);
var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément
var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt,
    document.getElementById("php"));
    // Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin",
    '<li id="javascript">JavaScript</li>');
