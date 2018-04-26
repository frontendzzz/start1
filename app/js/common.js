$(document).ready(function(){

  // Import modules HTML
  $("#header").load("../modules/header/header.html");
  $("#footer").load("../modules/footer/footer.html");
  $("#nav").load("../modules/nav/nav.html");

  // Реализованно так по тому что навигация подгружается/импортируется в HTML средством .load
  $(document).on('click','.nav__btn', function(){
    $(".nav__ul").slideToggle(500);
  });

	
  // Nav  responsive 

    // $("#nav__tah-btn").click(function(){});

    // $( window ).resize( function() {});

    // $(window).scroll( function(){

    // 	var w_size = $(window).width();
    // 	var scrollTop = $(window).scrollTop();

    //   if( w_size > '975' && scrollTop > 250 ){ alert(" w_size > '975' && scrollTop > 250 ")};
    // });


  // Tabs
    // $(".tabs__item").not(":first").hide();
    // $(".tabs__btn").click(function(){
    //       $(".tabs__btn").removeClass("active").eq($(this).index()).addClass("active");
    //       $(".tabs__item").hide().eq($(this).index()).fadeIn()
    //     }).eq(0).addClass("active");
  
	
  // Mgf-popup
    // $('.popup-gallery').magnificPopup({
    //   mainClass: 'mfp-zoom-in',
    //   delegate: 'a',
    //   type: 'image',
    //   tLoading: '',
    //   gallery:{
    //     enabled:true,
    //   },
    //   removalDelay: 300,
    //   callbacks: {
    //     beforeChange: function() {
    //       this.items[0].src = this.items[0].src + '?=' + Math.random(); 
    //     },
    //     open: function() {
    //       $.magnificPopup.instance.next = function() {
    //         var self = this;
    //         self.wrap.removeClass('mfp-image-loaded');
    //         setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
    //       }
    //       $.magnificPopup.instance.prev = function() {
    //         var self = this;
    //         self.wrap.removeClass('mfp-image-loaded');
    //         setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
    //       }
    //     },
    //     imageLoadComplete: function() { 
    //       var self = this;
    //       setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
    //     }
    //   }
    // });
 
  // Gallery
    // $(".gallery__btn").on("click", function(){
    //   $(".gallery_open:hidden").slice(0, 1).fadeIn(1000);
    //   if($('.gallery_last').is(":visible")){
    //       $(".gallery__btn").hide();
    //       $(".gallery__btn_collapse").show();
    //   };
    // });
    // $(".gallery__btn_collapse").on("click", function(){
    //   $(".gallery_open:visible").hide();
    //   $(this).hide();
    //   $(".gallery__btn").show();
    // });
    
  // Spoilers
    // $(".spoiler").on("click", ".spoiler__header", function(e){
    //   $(this).children(".spoiler__btn").toggleClass("spoiler__btn_active");
    //   $(this).parent().children(".spoiler__content").slideToggle(300);
    //   // $(".spoiler__content").slideToggle(300)
    // });
  
  // Map 
    // ymaps.ready(init);
    //     var myMap, 
    //         myPlacemark;

    //     function init(){ 
    //         myMap = new ymaps.Map("map", {
    //             center: [55.67597565, 37.84302220],
    //             zoom: 11 ,
    //             controls: ['zoomControl']
    //         }); 
            
    //         myPlacemark = new ymaps.Placemark([55.63517104, 38.01282908], {
    //             hintContent: ' ТехГарант ',
    //             balloonContent: '140032, Московская обл., Люберецкий р-н, пос. Малаховка, ул. Шоссейная, д. 40, офис 320'
    //         });
            
    //         myMap.geoObjects.add(myPlacemark);
    //     };




	  
  
 // alert(jQuery.fn.jquery);
});


// Owl-carousel
$(".owl-carousel").owlCarousel({
    loop: true ,
    center: true ,
    autoplay: true ,
    autoplayTimeout: 3000 ,
    smartSpeed: 800 ,

    responsive: {
      0: {
        items: 2
      },
    },
  });








  // Animation
  // $(window).scroll(function() {
  //   $('.facts_animation').each(function(){
  //     var imagePos = $(this).offset().top;
  //     var topOfWindow = $(window).scrollTop();
  //     if (imagePos < topOfWindow+20) {
  //       $('.facts_animation').addClass('facts_animation-true');
  //     }
  //   });
  // });
