/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];


// TODO : compléter ce fichier pour ajouter les liens à la page web
// Creation de la balises span et ul
var spanElem = document.createElement("span");
var ulElem = document.createElement("ul");
// ul est un enfant de span
spanElem.appendChild(ulElem);
// ici un foreach pour parcourir le tableau
listeLiens.forEach(function(liens){
  //creation de la balise li
  var listeElem = document.createElement('li');
  // ajout d'une class lien au balise li
  listeElem.classList.add("lien");
  //suppression du style sur les li
  listeElem.style.listStyleType = "none";
  // li est un enfant de ul
  ulElem.appendChild(listeElem);
  //creation de la balise strong
  var strongElem = document.createElement('strong');
  // strong est un enfant de li
  listeElem.appendChild(strongElem);
  //creation de la balise a
  var lienElem = document.createElement('a');
    // a est un enfant de strong
    strongElem.appendChild(lienElem);
    lienElem.style.color = "#428bca";
    //je defini la couleur de a
    lienElem.style.textDecoration = "none";
  lienElem.textContent = liens.titre;
  // le contenu de a diriger vers l'objet listeLiens
  lienElem.href=liens.url;
  // le contenu de a diriger vers l'objet listeLiens
  listeElem.appendChild(document.createTextNode(" "+liens.url));
  //creation de la balise p
  var pElem = document.createElement('p');
    // p est un enfant de li
  listeElem.appendChild(pElem);
  pElem.textContent = "Ajouté par "+liens.auteur;
//objet représentant la div id contenu et elle a pour enfant span
document.getElementById("contenu").appendChild(spanElem);




});
