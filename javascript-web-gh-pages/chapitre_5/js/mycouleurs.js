var divs = document.querySelectorAll('div');
var couleur = "";


 window.addEventListener("keypress", function (e) {
      var touches = String.fromCharCode(e.charCode);
      touches = touches.toLowerCase();
      if (touches === 'r')
      {
        divs.forEach(function(dagobert){

        dagobert.style.backgroundColor = "red";
      });

    };
      if (touches === 'b')
      {
        divs.forEach(function(dagobert){

        dagobert.style.backgroundColor = "white";
      });

    };
    if (touches === 'v')
    {
      divs.forEach(function(dagobert){

      dagobert.style.backgroundColor = "green";
    });

  };

  if (touches === 'j')
  {
    divs.forEach(function(dagobert){

    dagobert.style.backgroundColor = "yellow";
  });

};


  });
