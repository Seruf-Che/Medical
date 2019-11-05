var lightbox = GLightbox({
    touchNavigation: true,
    loopAtEnd: true
});

var testimonials = tns({
  container: '.testimonials__container',
  items: 1,
  controls: true,
  controlsPosition: 'bottom',
  controlsContainer: '.testimonials__arrows',
  controlsText: ["",""],
  nav: true,
  navPosition: 'bottom',
  navContainer: '.testimonials__dots', 
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 5000,
  mouseDrag: false,
  startIndex: 2,
});

var pageAnchors = scrollHandler(['about','features','services','gallery','testimonials','contacts']);