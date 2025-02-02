// Functie voor route-selectie vanuit keuze.html
function selectRoute(route) {
  sessionStorage.setItem('selectedRoute', route);  // Tijdelijk opslaan
  window.location.href = '../html/kilometers.html'; // Doorsturen naar de invoerpagina
}

// Functie voor het verwerken van het kilometerformulier
document.addEventListener('DOMContentLoaded', () => {
  const kmForm = document.getElementById('kmForm');
  if (kmForm) {
    kmForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const kilometers = document.getElementById('kilometers').value;
      sessionStorage.setItem('kilometers', kilometers); // Opslaan in sessie

      const route = sessionStorage.getItem('selectedRoute');
      if (route === 'fiets') {
        window.location.href = '../html/fiets.html';
      } else if (route === 'loop') {
        window.location.href = '../html/loop.html';
      }
    });
  }
});
