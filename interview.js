

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

  function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontentInterview" by default */
    var i, tabcontentInterview, tablinks;
    tabcontentInterview = document.getElementsByClassName("tabcontentInterview");
    for (i = 0; i < tabcontentInterview.length; i++) {
      tabcontentInterview[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();