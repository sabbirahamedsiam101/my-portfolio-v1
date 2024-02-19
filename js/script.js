/*==================== toggle icon navbar ====================*/
let menuIcon = document.getElementById('menu-icon');
let navBar = document.getElementById('navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active') 
}



/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });

  /*==================== hide the navber and and x incon when i scroll the website ====================*/
  
  menuIcon.classList.remove('bx-x')
  navBar.classList.remove('active') 
}

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(' .home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-img , .about , .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/