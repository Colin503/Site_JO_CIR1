function lesSports(){
if(window.innerWidth <=900){
    image.style.display="none";
}
else{
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
}
window.addEventListener('resize', function() {
    if(window.innerWidth >900){
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
    }
});
}
/*function lessports(){
    if (window.innerWidth <= 900) {
        var sportimage = document.getElementById("sportimage-container");
        sportimage.style.display="none";
    }
    else{
        sportimage.style.display="flex";
    }
}*/





function toggleMenu() {
    if (window.innerWidth <= 900) {
      var navLinks = document.getElementById("navfacile");
      var divbad = document.getElementById("suitebadminton");
      var imgb = document.getElementById("imgbad");
      var letoutboutique = document.getElementById("theboutique");
      var calendrier= document.getElementById("calendar");
      var footer= document.getElementById("footer");
      var inscription= document.getElementById("form_container");
      var footsport= document.getElementById("sportFooter");
      var touslessports= document.getElementById("tousLesSports");
      var toutindex= document.getElementById("toutindex");
      
    
      if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        if (divbad) divbad.style.display = "block";
        if (imgb) imgb.style.display = "block";
        if (letoutboutique) letoutboutique.style.display = "block";
        calendrier.style.display="block";
        footer.style.display="none";
        inscription.style.width="50%";
        if (footsport) footsport.style.display="block";
        touslessports.style.display="block";
        if(toutindex) toutindex.style.display="block";
        
    } else {
        navLinks.style.display = "block";
        if (divbad) divbad.style.display = "none";
        if (imgb) imgb.style.display = "none";
        if (letoutboutique) letoutboutique.style.display = "none";
        calendrier.style.display="none";
        footer.style.display="none";
        if (footsport) footsport.style.display="none";
        if(toutindex) toutindex.style.display="none";
        
    }
    }
    
  }
  window.addEventListener('resize', function() {
    var navLinks = document.getElementById("navfacile");
    var divbad = document.getElementById("suitebadminton");
    var imgb = document.getElementById("imgbad");
    var letoutboutique = document.getElementById("theboutique");
    var calendrier= document.getElementById("calendar");
    var footsport= document.getElementById("sportFooter");
    var touslessports= document.getElementById("tousLesSports");
    var toutindex= document.getElementById("toutindex");
    

    if (window.innerWidth >= 900) {
        if (navLinks) navLinks.style.display = "flex";
        if (divbad) divbad.style.display = "flex";
        if (imgb) imgb.style.display = "block";
        if (letoutboutique) letoutboutique.style.display = "block";
        calendrier.style.display="flex";
        footer.style.display="relative";
        if (footsport) footsport.style.display="block";
        touslessports.style.display="flex";
        if(toutindex) toutindex.style.display="block";
        
    } else {
        if (navLinks) navLinks.style.display = "none";
        if (divbad) divbad.style.display = "block";
        calendrier.style.display="block";
        if (letoutboutique) letoutboutique.style.display = "none";
        footer.style.display="none";
        if (footsport) footsport.style.display="none";
        touslessports.style.display="none";
        if(toutindex) toutindex.style.display="none";
        
    }
});
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
}
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
	myVar = setTimeout(launch,5000);
    	next();
}