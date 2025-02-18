// Header background scroll

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) { // Cuando el scroll pase 50px
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Header hover active

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los enlaces del menú
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Función que se ejecuta en cada evento de scroll
    function onScroll() {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      
      navLinks.forEach(link => {
        // Obtenemos la sección que coincide con el href del enlace
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
  
          // Ajusta el valor del offset (por ejemplo, 50) según tus necesidades
          if (scrollPos >= sectionTop - 150 && scrollPos < sectionTop + sectionHeight - 150) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }
  
    // Escuchamos el evento scroll
    window.addEventListener('scroll', onScroll);
    // Ejecutamos una vez al cargar la página
    onScroll();
});