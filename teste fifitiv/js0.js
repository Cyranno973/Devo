
window.addEventListener("scroll", function() {
  console.clear();
  var gslistAartcles = [];
  var gslistPrix = [];
  var gsnomArticle = document.querySelectorAll(' .product-name[title],.price');


    gsnomArticle.forEach(function(element) {
      if (element.getBoundingClientRect().top >= -24000000 && element.getBoundingClientRect().top <= (window.innerHeight - 8)){
         console.log(element.textContent);
         if(element.textContent != " Offerte ") gslistAartcles.push(element.textContent);
       }
    });

    gsprixArticle.forEach(function(elementa) {
      if (elementa.getBoundingClientRect().top >= -24000000 && elementa.getBoundingClientRect().top <= (window.innerHeight - 8)){
          console.log(elementa.textContent);
          if((elementa.textContent != "0,00 €") && (elementa.textContent != " Offerte ")) gslistPrix.push(elementa.textContent);

        }
    });
    for (var i = 0; i < gslistAartcles.length; i++) {

      console.log(gslistAartcles[i] +"=" + gslistPrix[i] );
    }
});



console.log(gslistAartcles)

/*
console.log(test[0]);

window.addEventListener("scroll", function() {
  console.clear();
  var soustitre = document.querySelectorAll('.product-name[title]');
  var prix = document.querySelectorAll('.product-price');

  soustitre.forEach(function(element) {
    if (element.getBoundingClientRect().top >= -24000000 && element.getBoundingClientRect().top <= (window.innerHeight - 8))
      console.log(element.textContent);



  });
  prix.forEach(function(elementa) {
    if (elementa.getBoundingClientRect().top >= -24000000 && elementa.getBoundingClientRect().top <= (window.innerHeight - 8))
      console.log(elementa.textContent);



  });

});

*/














/*
window.addEventListener("scroll", function () {
console.clear();
var soustitre = document.querySelectorAll('h3');

soustitre.forEach(function(element) {
if (element.getBoundingClientRect().top >= -24 && element.getBoundingClientRect().top <= (window.innerHeight - 8)){
console.log(element.textContent);

}

});

});
*/









/*

window.addEventListener("scroll", function () {
console.clear()
var soustitre = document.querySelectorAll('h3');
var window_bottom_position = window.scrollY + window.innerHeight;

soustitre.forEach(function(element) {
console.log("scrolly= " + window.scrollY + " position= " + element.getBoundingClientRect().top + " elem = " + element.textContent);

});

soustitre.forEach(function(element) {
if (element.getBoundingClientRect().top >= window.scrollY && element.getBoundingClientRect().top <= window_bottom_position){
console.log("position elem = " + element.getBoundingClientRect().top);
console.log(element.textContent);
}


});

});
*/
