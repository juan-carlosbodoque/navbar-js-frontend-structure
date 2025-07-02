document.addEventListener("DOMContentLoaded", function(){
    const navbarelement = document.querySelector(".navbar-container");
    
    if(navbarelement){
        fetch("/frontend/public/views/components/navbar.html")
        .then(response => response.text())
        .then(data => {navbarelement.innerHTML = data;
     })
     .catch(error => console.error("error cargando el navbar",error));
    }






});

