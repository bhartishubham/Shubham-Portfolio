$(window).on('load', function() { // makes sure the whole site is loaded
  $('.loader').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})



$("#js-rotating").Morphext({
    animation: "flipInX", // Overrides default "bounceIn"
    separator: "|", // Overrides default ","
    speed: 3000, // Overrides default 2000
    complete: function () {
        // Overrides default empty function
    }
});

    var body = document.body;
    var burgerMenu = document.getElementsByClassName('s-menu')[0];
    var burgerContain = document.getElementsByClassName('s-container')[0];
    var burgerNav = document.getElementsByClassName('s-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    }, false);

    $('.s-link a').click(function(event) {
        var id = $(this).attr("href");
        var offset = 70;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".s-nav", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });

      } // End if

    });

    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );




    $(window).scroll(function() {

      var wScroll = $(this).scrollTop();



      if (wScroll > 300) {
    		$('.scroll-to-top').fadeIn();
    	} else {
    	  $('.scroll-to-top').fadeOut();
    	}
    });



          /* animate skill bars */


// Video FullScreen //
$('#home_1').scrollTo();
$('#next').scrollTo();
$('#nextTimeline').scrollTo();
$('#nextSkills').scrollTo();
$('#nextPortfolio').scrollTo();
$('#nextContact').scrollTo();


$(function() {
    // Snazzy Map Style - https://snazzymaps.com/style/6618/cladme
    var mapStyle = [{'featureType': 'administrative', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#444444'}]}, {'featureType': 'landscape', 'elementType': 'all', 'stylers': [{'color': '#f2f2f2'}]}, {'featureType': 'poi', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'road', 'elementType': 'all', 'stylers': [{'saturation': -20}, {'darkness': 45}]}, {'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{'visibility': 'simplified'}]}, {'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'transit', 'elementType': 'all', 'stylers': [{'visibility': 'off'}]}, {'featureType': 'water', 'elementType': 'all', 'stylers': [{'color': '#4f595d'}, {'visibility': 'on'}]}];

    // Create the map
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 14,
        styles: mapStyle,
        center: new google.maps.LatLng(30.7469851,76.7303744)
    });

    // Add a marker
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(30.7469851,76.7303744)
    });

    // Add a Snazzy Info Window to the marker
    var info = new SnazzyInfoWindow({
      marker: marker,
      placement: 'right',
      offset: {
          left: '20px'
      },
      content:  '<div>Shubham Bharti</div>' +
                '<div># C-8</div>' +
               '<div>Imtech Housing, Sector 39-A</div>' +
               '<div><strong>Chandigarh</strong></div>',
      showCloseButton: true,
      closeOnMapClick: true,
      padding: '48px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      border: false,
      borderRadius: '0px',
      shadow: false,
      fontColor: '#fff',
      fontSize: '15px',
    });
    info.open();
});
