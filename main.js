const btnAcercaMi = document.querySelector('.acercademi');
const btnProyectos = document.querySelector('.proyectos');
const btnContacto = document.querySelector('.contacto');
const seccionAcercaMi = document.querySelector('.seccion1');
const seccionProyectos = document.querySelector('.seccion2');
const seccionContacto = document.querySelector('.seccion3');

btnAcercaMi.addEventListener('click', scrollToSection);
btnProyectos.addEventListener('click', scrollToSection);
btnContacto.addEventListener('click', scrollToSection);

function scrollToSection(event) {
  event.preventDefault();
  
  if (event.target.classList.contains('acercademi')) {
    seccionAcercaMi.scrollIntoView({ behavior: 'smooth' });
  } else if (event.target.classList.contains('proyectos')) {
    seccionProyectos.scrollIntoView({ behavior: 'smooth' });
  } else if (event.target.classList.contains('contacto')) {
    seccionContacto.scrollIntoView({ behavior: 'smooth' });
  }
}

$(document).ready(function() {
  $('.acercademi').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.seccion1').offset().top
    }, 1000, 'easeInOutCubic');
  });

  $('.proyectos').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.seccion2').offset().top
    }, 1000, 'easeInOutCubic');
  });

  $('.contacto').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.seccion3').offset().top
    }, 1000, 'easeInOutCubic');
  });
});

