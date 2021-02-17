

$(function(){
    $("#navigation").load("navigation.html"); 
  });



  $(function(){
    $("#footer").load("footer.html"); 
  });


  $(function(){
    $("#Cara").load("Cara.html"); 
  });

  
  $(function(){
    $("#David").load("David.html"); 
  });

  
  $(function(){
    $("#Muriel").load("Muriel.html"); 
  });

  $(function(){
    $("#designtypes").load("designtypesindex.html"); 
  });



  
  // Get the element with id="defaultOpen" and click on it

  

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").onmouseover();