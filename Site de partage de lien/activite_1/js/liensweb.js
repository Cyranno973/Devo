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
var lienElt = document.createElement("ul");
lienElt.id = "puce";


var liElt = document.createElement("li");
liElt.classList.add ("lienliste");
lienElt.appendChild(liElt);
var aElt = document.createElement("a");
//aElt.setAttribute("title", "So Foot");
aElt.setAttribute("href", "http://sofoot.com");
var textliElt = document.createTextNode('So Foot');
liElt.appendChild(aElt);
aElt.appendChild(textliElt);
aElt.textContent = "";

//lieElt.setAttribute("auteur", "yann.usaill")
//document.getElementById("puce").appendChild(liElt);

document.getElementById("contenu").appendChild(lienElt);
// TODO : compléter ce fichier pour ajouter les liens à la page web
