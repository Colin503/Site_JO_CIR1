

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
    alert("Vous êtes inscrit en tant que spectateur !");
    return true;
}

