// Initialize and add the map
function initMap() {
    // The location of Uluru
    const lagos = { lat: 6.623550, lng: 3.500190 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: lagos,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }



// Smooth Scrolling
// $('.navbar a').on('click', function(event) {
//     if (this.hash !== '') {
//         event.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate(
//             {
//                 scrollTop: $(hash).offset().top -100
//             },
//             800
//         );
//     }
// });

// Logo
// let logo = document.querySelector('.logo-name');
// let blackbuffet = logo.textContent;
// console.log(blackbuffet);
// let firstLetter = blackbuffet.split('');
// firstLetter[0].style.color = 'white';

// var changeColor = function (className, color) {
//     var elems = document.getElementsByClassName (className);
//     console.log(elems[0].textContent.split('')[0])

//     // Change the text color
//     elems[0].textContent.split('')[0].st = color;
// }
// changeColor ("logo-name", "red");