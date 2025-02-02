// Functie voor route-selectie vanuit keuze.html
window.selectRoute = function(route) {
  sessionStorage.setItem('selectedRoute', route);
  window.location.href = '../html/kilometers.html';
};

// Functie voor het verwerken van het kilometerformulier
document.addEventListener('DOMContentLoaded', () => {
  const kmForm = document.getElementById('kmForm');
  const locationPopup = document.getElementById('location-popup');

  if (kmForm) {
    kmForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const kilometers = document.getElementById('kilometers').value;
      sessionStorage.setItem('kilometers', kilometers);

      // Toon de locatie-popup
      locationPopup.style.display = 'block';
    });
  }

  // Locatie delen
  const allowLocationBtn = document.getElementById('allow-location');
  const denyLocationBtn = document.getElementById('deny-location');

  if (allowLocationBtn && denyLocationBtn) {
    allowLocationBtn.addEventListener('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            sessionStorage.setItem('latitude', position.coords.latitude);
            sessionStorage.setItem('longitude', position.coords.longitude);
            redirectToRoute();
          },
          (error) => {
            alert('Locatie ophalen mislukt: ' + error.message);
            redirectToRoute();
          }
        );
      } else {
        alert('Geolocatie wordt niet ondersteund door deze browser.');
        redirectToRoute();
      }
    });

    denyLocationBtn.addEventListener('click', () => {
      redirectToRoute();
    });
  }

  function redirectToRoute() {
    const route = sessionStorage.getItem('selectedRoute');
    if (route === 'fiets') {
      window.location.href = '../html/fiets.html';
    } else if (route === 'loop') {
      window.location.href = '../html/loop.html';
    }
  }
});
