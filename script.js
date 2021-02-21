// Declare map variable
let map;

// Initialize and add map
function initMap() {
    // Centered map on location
  map = new google.maps.Map(document.querySelector("#map"), {
    //   My location
    center: { lat: 6.623550, lng: 3.500190 },
    zoom: 16
  });
}

// Smooth Scrolling
$('.navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );
    }
});