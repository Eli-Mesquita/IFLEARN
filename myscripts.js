function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });  

    function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'pt-br'}, 'google_translate_element');
    }
 
