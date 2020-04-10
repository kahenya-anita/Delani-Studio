$(function() {
    const $gallery =
$('.gallery, a')
  .lightbox();
});

$(document).ready(function(){
    $("#form-control").submit(function(event){
      var emailInput = $("input#email").val();
      if ($("input#email") {
        alert (email + ", We have received your details!. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your  email!");

        event.preventDefault();
      }
      
    });
  
  });
