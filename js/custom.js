$(document).ready(function(){ 

 /* Periodic Timer. Period is equal 10 days */
$("#periodic-timer_period_days").syotimer({
  date: new Date(2015, 0, 1, 20),
  layout: "hms",
  periodic: true,
  periodInterval: 10,
  periodUnit: "d",
});
 //team-slider;
 $('.game-details').slick({
    autoplay: true,
    autoplaySpeed: 1800, 
    centerMode:true,
    centerPadding:'0px',
    slidesToShow:3,
    arrows:false,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
            arrows:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    

    });

});     