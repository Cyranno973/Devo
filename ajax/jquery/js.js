$(document).ready(function(){
  console.log("page charger");

  $('#submit').click(function(){
    $.post(
      'connexion.php',
      {
        username : $("#username").val(),
        password : $('password').val()
      },
      function(data){

      },
      'text'
    );
  });
});
