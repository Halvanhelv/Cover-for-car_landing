$(document).ready(function(){
  $(".owl-theme").owlCarousel({
      
     items:4 ,
  loop: true,
  nav: true,
  dots: false,
  margin: 50,
  autoplay: true,
  autoplayTimeout: 3500,
      dotsEach:true,
      navText: ['<img src=\"img/dx.jpg"\>','<img src=\"img/sx.jpg"\>'],
   
  });

    
     $(".second-owl-theme").owlCarousel({
      
     items:4 ,
  loop: true,
  nav: true,
  dots: false,
  margin: 50,
  autoplay: true,
  autoplayTimeout: 4500,
      dotsEach:true,
      navText: ['<img src=\"img/dx.jpg"\>','<img src=\"img/sx.jpg"\>'],
   
  });
    
});






