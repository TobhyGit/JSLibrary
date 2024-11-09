document.addEventListener('DOMContentLoaded', function () {
    // Initialize Glide.js for the image slider
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
        animationDuration: 800,
        gap: 10
    });

    glide.mount();

    // Custom controls for Glide.js
    document.getElementById('pause').addEventListener('click', () => glide.pause());
    document.getElementById('play').addEventListener('click', () => glide.play());
    document.getElementById('next').addEventListener('click', () => glide.go('>'));
    document.getElementById('prev').addEventListener('click', () => glide.go('<'));

    // Fullscreen functionality for the video using Screenfull.js
    const fullscreenButton = document.getElementById('fullscreenButton');
    const promoVideo = document.getElementById('promoVideo');

    fullscreenButton.addEventListener('click', () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(promoVideo);
        }
    });

    // Initialize Leaflet Map for Lagos, Nigeria
    const map = L.map('map').setView([6.5244, 3.3792], 13); // Coordinates for Lagos

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for the shop location
    L.marker([6.5244, 3.3792]).addTo(map)
        .bindPopup("<b>Tobi's Furniture Store</b><br>Lagos, Nigeria")
        .openPopup();
});
