$(document).ready(function() {

  var

    $mots = $('.mots'),
    $motSeul = $('.mots .motSeul'),
    $nbrMots = $motSeul.length - 1,
    a = 0,
    $currentmot = $motSeul.eq(a);
  $motSeul.css('display', 'none');
  $currentmot.css('display', 'block');



  $mots.append('<div class="controlls"><div class="prev"> précedent </div><div class="next"> Suivant </div></div>');



  $('.next').click(function() {
    a++;
    if (a <= $nbrMots) {


      $motSeul.css('display', 'none');
      $currentmot = $motSeul.eq(a);
      $currentmot.css('display', 'block');

    } else {
      a = $nbrMots;
      //a = 0;
    }


  });


  $('.prev').click(function() {
    a--;
    if (a >= 0) {
      $motSeul.css('display', 'none');

      $currentmot = $motSeul.eq(a);
      $currentmot.css('display', 'block');
    } else {
      a = 0;
    }

    console.log(a);
  });

  function changementdemot() {

    $currentmot.slideUp(3000);
    setTimeout(function() {

      if (a < $nbrMots) {
        a++;
        console.log(a);


        $motSeul.css('display', 'none');
        $currentmot = $motSeul.eq(a);
        $currentmot.css('display', 'block');
        $currentmot.slideUp(3000);

      } else {
        a = 0;
      }

      changementdemot();
    }, 3000);

  };

  changementdemot();









});
