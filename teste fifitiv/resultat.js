// Creation d'un event et je met l'écoute sur le scroll

window.addEventListener("scroll", function() {
  console.clear();
  // je selectionne toutes les div .product-container

  var gsnomArticle = document.querySelectorAll('.product-container');

  // du tableau récupérer je met un forEach pour le parcourir

  gsnomArticle.forEach(function(element) {

    // ici une condition pour le viewport

    if (element.getBoundingClientRect().top >= -24000000 && element.getBoundingClientRect().top <= (window.innerHeight - 8)) {

      //je selectionne les classes et les mets dans la variable

      var gsArticles = element.querySelectorAll('.product-name[title],.price');

      // j'affiche mon tableau [0] etant le nom et [1] le prix

      console.log(gsArticles[0].textContent +"= "+ gsArticles[1].textContent);

    };

  });

});
            //Ce fut un test vraiment intérresant je vous remercie.
