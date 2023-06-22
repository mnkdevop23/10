$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 2,
      margin: 60,
      loop: true,
    //   nav: true,
    dots:true,
      lazyLoad: true,
      autoplay:true,
      smartSpeed:250,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
        0:{
          items:1,
          touchDrag:true
        },
        768:{
          items:1,
          touchDrag:true
        },
        1180:{
          items:2
        }
      }
    });
    // owl.on('mousewheel', '.owl-stage', function (e) {
    //     if (e.deltaY>0) {
    //         owl.trigger('next.owl');
    //     } else {
    //         owl.trigger('prev.owl');
    //     }
    //     e.preventDefault();
    // });
  });