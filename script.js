// Initialize and add the map
function initMap() {
    // The location of Lagos
    const lagos = { lat: 6.623550, lng: 3.500190 };
    // The map, centered at Lagos
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: lagos,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: lagos,
      map: map,
    });
  }


function hamburger() {
  let ul = document.getElementById('ul');
  let logo = document.getElementById('logo')
  if (ul.style.display === 'none') {
    ul.style.display = 'block';
  } else {
    ul.style.display = 'none';
  }

  if(ul.style.display === 'block') {
    logo.style.display = 'none';
  } else {
    logo.style.display = 'flex';
  }
}
