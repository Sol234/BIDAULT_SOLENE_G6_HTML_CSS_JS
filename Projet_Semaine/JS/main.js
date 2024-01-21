/*Menus burgers*/
let accordions = document.querySelectorAll (".accordeon")
accordions.forEach ( function(item){ 
    item.addEventListener('click', function(){
        this.classList.toggle('open')
    })
})

/*Dark Mode*/ 
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});

/*Tabs*/

  /*Cacher les éléments du tab*/
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

  /*SWIPER*/
 