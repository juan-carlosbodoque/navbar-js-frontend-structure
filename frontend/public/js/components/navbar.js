document.addEventListener("DOMContentLoaded", function(){
    const navbarElement = document.querySelector(".navbar-container");
    
    if(navbarElement){
        fetch("/frontend/public/views/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarElement.innerHTML = data;
            //logica para resaltar el enlace que esta activo en el navbar

            //obtener la ruta actual
            //si no hay un archivo especifico vamos asumir que es el index
            const currentPage = window.location.pathname.split("/").pop() ||" index.html";

            //seleccciona todos los enlaces del navbar que usaran la clase personalizada
            const navLinks = navbarElement.querySelectorAll("navbar_link")

            //recorrer cada enlace del navbar
            navLinks.forEach(link => {
                //verifica si el href del enlace incluye el nombre de la pagina actual
                if(link.getAtribute("href").includes(currentPage)){
                    //si es la pagina actual se le asigna la clase 'active' para destacarla visualmente
                    link.classList.add("active");
                }
            });
     })
     .catch(error => console.error("error cargando el navbar",error));
    }






});

