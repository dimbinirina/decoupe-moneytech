$(document).ready(function(){
   $('.kl-slide-client').owlCarousel({
            items : 6,
            autoPlay : 3000,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet : [600,2],
            itemsMobile : [479,1]
        }); 
   $('.kl-close-this-block').click(function(){
      $('.kl-collapse').removeClass('show').slideUp(800);
      return false;
    });
   $('.kl-custom-file-input input').change(function(){
      var file_val = $(this)[0].files[0];
      $(this).closest('.kl-custom-file-input').find('.kl-upload-file').html(file_val.name);
    });
    $("#id-menu-service-step-1").on('click', function(event) {
        if (event.isTrigger == undefined) {
            $('html, body').animate({
                scrollTop: $("#id-scroll-1").offset().top-100
            }, 1500);
        }
    });
    $("#id-menu-service-step-2").on('click', function(event) {
        if (event.isTrigger == undefined) {
            $('html, body').animate({
                scrollTop: $("#id-scroll-2").offset().top-100
            }, 1500);
        }
    });
    $("#id-menu-service-step-3").on('click', function(event) {
        if (event.isTrigger == undefined) {
            $('html, body').animate({
                scrollTop: $("#id-scroll-3").offset().top-100
            }, 1500);
        }
    });
    $("#id-menu-service-step-4").on('click', function(event) {
        if (event.isTrigger == undefined) {
            $('html, body').animate({
                scrollTop: $("#id-scroll-4").offset().top-100
            }, 1500);
        }
    });
    $("#id-menu-service-step-5").on('click', function(event) {
        if (event.isTrigger == undefined) {
            $('html, body').animate({
                scrollTop: $("#id-scroll-5").offset().top-100
            }, 1500);
        }
    });
    $("#id-menu-service-step-6").on('click', function(event) {
        if (event.isTrigger == undefined) {
            $('html, body').animate({
                scrollTop: $("#id-scroll-6").offset().top-100
            }, 1500);
        }
    });
    $(window).scroll(function(){
      if($(window).scrollTop() + $(window).height() >= 700){
        $("#id-totop").show();
      }else{
          $("#id-totop").hide();
      }
      return false;
    });
    $("#id-totop").on('click', function(event) {
      if (event.isTrigger == undefined) {
        $('html, body').animate({
          scrollTop: $("#id-header").offset().top - 1500
        }, 1000);
      }
    });
    /*map contact*/
    $('#id-map')
        .gmap3({
            center:[-18.908762, 47.5183773],
            zoom:17
        })
        .marker([
            {position:[-18.908762, 47.5183773]},
            {address:"22, rue Andrianary Ratianarivo Ampasamadinika, Antananarivo 101"}
        ])
        .on('click', function (marker) {
            marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
        });


});
