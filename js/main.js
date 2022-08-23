const menu = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
menu.onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("move");
}



// %%%%%%%%%%%%%%% swiper js started from here
const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
// %%%%%%%%%%%%%%% swiper js end  here