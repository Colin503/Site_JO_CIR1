

function timer() {
    // Set the date we're counting down to
    var countDownDate = new Date("July 26, 2024 14:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";

    }
    }, 1000);
}

function addToCart() {
    console.log('Ajouté au panier!');
    alert('Ajouté au panier!')
    // Ici, vous pouvez ajouter du code pour manipuler le panier d'achat
}



function validateForm() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var sport = document.getElementById("sport").value;
    var date = document.getElementById("date").value;

    if (nom === "" || prenom === "" || email === "" || telephone === "" || sport === "" || date === "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }



document.querySelectorAll('.slink').forEach(link => {
    link.addEventListener('mouseover', () => {
        document.querySelectorAll('.simage').forEach(image => {
            image.style.display = 'none';
        });
        const imageId = link.getAttribute('data-image');
        document.getElementById(imageId).style.display = 'block';
    });

    link.addEventListener('mouseout', () => {
        document.getElementById(link.getAttribute('data-image')).style.display = 'none';
    });
});
function lessports(){
    if (window.innerWidth <= 900) {
        var sportimage = document.getElementById("sportimage-container");
        sportimage.style.display="none";
    }
    else{
        sportimage.style.display="flex";
    }
}





function toggleMenu() {
    if (window.innerWidth <= 900) {
      var navLinks = document.getElementById("navfacile");
      var divbad = document.getElementById("suitebadminton");
      var imgb = document.getElementById("imgbad");
    
      if (navLinks.style.display === "block") {
          navLinks.style.display = "none";
          divbad.style.display="block";
          imgb.style.display="block";
          /*document.body.style.backgroundColor="#FFFFFF";*/
          

      } 
      else {
          navLinks.style.display = "block";
          divbad.style.display="none";
          imgb.style.display="none";
          /*document.body.style.backgroundColor="#142b63";*/

      }
    }

  }
  window.addEventListener('resize', function() {
    var navLinks = document.getElementById("navfacile");
    var divbad = document.getElementById("suitebadminton");
      var imgb = document.getElementById("imgbad");
    if (window.innerWidth >= 900) {
        navLinks.style.display = "flex";
        divbad.style.display="flex";
        imgb.style.display="block";
    } else {
        navLinks.style.display = "none";
        divbad.style.display="block";
        
        
    }
});
    alert("Vous êtes inscrit en tant que spectateur !");
    return true;
}
var diapoRolling = 0;
var currentImg = 0;
var nbImg = 3;
var images = ["img/basket_diapo.jpg","img/athlé_diapo.jpg","img/natation_diapo.jpg"];
function prev() {
  	currentImg--;
    if(currentImg < 0){
    	currentImg = nbImg - 1;
    }
    document.getElementById("myImg").src = images[currentImg];
}

function next() {
    currentImg++;
    if(currentImg > nbImg - 1){
    	currentImg = 0;
    }
	//alert(images[currentImg]);
    document.getElementById("myImg").src=images[currentImg];
}

function startstop(){
	timer();
	if(diapoRolling==0){
    	diapoRolling = 1;
	launch();
    } else {
    	clearTimeout(myVar);
        diapoRolling = 0;
    }
}

function launch(){
	myVar = setTimeout(launch,3000);
    	next();
}
