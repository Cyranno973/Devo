// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [{
    enonce: "Combien font 2+2 ?",
    reponse: "2+2 = 4"
  },
  {
    enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
    reponse: "1492"
  },
  {
    enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
    reponse: "La lettre N"
  }
];
var i = 0; // Permet de numéroter les questions
questions.forEach(function(question) {
  i++; // s'incremente a chaque ligne du tableau

  // titre de la question
  var titreElt = document.createElement("strong");
  titreElt.textContent = "Question " + i + ' :';

  var divElt = document.createElement("div");
  divElt.appendChild(titreElt);
  var spanElt = document.createElement("span");
  spanElt.style.fontStyle = "italic";
  divElt.appendChild(spanElt);
  spanElt.textContent = " " + question.enonce;
  var pElt = document.createElement("p");
  var pEltReponse = document.createElement("p");

  divElt.appendChild(pEltReponse);
  pElt.textContent = question.reponse;
  pElt.style.display = "none";
  divElt.appendChild(pElt);
  // bouton
  var boutonElt = document.createElement("button");
  boutonElt.textContent = "Afiicher la réponse";
  boutonElt.id = "boutonReponse";

  boutonElt.addEventListener("click", function() {
    pElt.style.display = "block";
    pEltReponse.style.display = "none";
  });
  pEltReponse.appendChild(boutonElt);





  document.getElementById("contenu").appendChild(divElt);
});
/*


//
divElt.appendChild(spanElt);




*/