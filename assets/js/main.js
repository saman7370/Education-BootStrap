// header start ===========>

function loaded(){
    var load = $("#preloader");
    load.addClass("d-none");}

$(function(){
    setTimeout(loaded , 3000);

    // notification==========>

    $('.custom-dropdown').on('show.bs.dropdown', function() {
        // $(this).find('.dropdown-menu').first().stop(false, false).slideDown();
         // $(this).find('.dropdown-menu').addClass('active');
         var that = $(this);
        setTimeout(function(){
            that.find('.dropdown-menu').addClass('active');
        }, 100);
        
    
      });
      $('.custom-dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').removeClass('active');
      });
})

// header end ===========>

//main slider start ===========>


$('#slider-one').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:true,
  items:1,
  autoplay:true,
  autoplayHoverPause:true,
  smartSpeed:1000
})


// slider two ===========>


$('#slider-two').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:true,
  items:1,
  autoplay:true,
  autoplayHoverPause:true,
  smartSpeed:1000
})


// slider three ===========>


$('#slider-three').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:true,
  items:1,
  autoplay:true,
  autoplayHoverPause:true,
  smartSpeed:1000
})

// slider-four


$('#slider-four').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:true,
  items:6,
  autoplay:true,
  autoplayHoverPause:true,
  smartSpeed:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})