
window.addEventListener("scroll", function () {
console.clear()
var soustitre = document.querySelectorAll('subname');
var window_bottom_position = window.scrollY + window.innerHeight;



});

soustitre.forEach(function(element) {
if (element.getBoundingClientRect().top >= window.scrollY && element.getBoundingClientRect().top <= window_bottom_position){

console.log(element.textContent);
}


});

});


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
