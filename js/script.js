// MENU OPEN CLOSE 
const navSlide =() => {

    let header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    
    
 

    burger.addEventListener('click', () => {
    //nav mobile open close
    header.classList.toggle('menu-open');

   // stop scroll
   document.body.classList.toggle('nav_fixed');
        
        //Burger Animation
        burger.classList.toggle('toggle');
        
    });
}
navSlide(); 
// END MENU OPEN CLOSE 





// CAROUSEL AUTO PLAY 

var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;

    counter++;

    if (counter>4){
        counter = 1;
    }
},5000);

// END CAROUSEL 

//VALIDATE EMAIL
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text("");
      document.getElementById("email").value = ""; 
    } else {
      $result.text("Please insert a valid email");
    //   $result.css("color", "var(--BrightRed)");
    }
    return false;
  }
  
  $("#validate").on("click", validate);