const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Menampilkan Konten Berdasarkan Pilihan
document.getElementById('tentang-batik').addEventListener('click', function() {
    document.getElementById('content-area').innerHTML = `
        <h2>Manage Tentang Batik</h2>
        <form>
            <label for="about">About Batik</label>
            <textarea id="about" rows="5" placeholder="Enter about Batik Tegal..."></textarea>
            <button type="submit">Save</button>
        </form>
    `;
});

document.getElementById('event').addEventListener('click', function() {
    document.getElementById('content-area').innerHTML = `
        <h2>Manage Event</h2>
        <form>
            <label for="event-name">Event Name</label>
            <input type="text" id="event-name" placeholder="Event name...">
            <label for="event-description">Event Description</label>
            <textarea id="event-description" rows="5" placeholder="Event description..."></textarea>
            <button type="submit">Save</button>
        </form>
    `;
});

document.getElementById('kontak').addEventListener('click', function() {
    document.getElementById('content-area').innerHTML = `
        <h2>Manage Contact Information</h2>
        <form>
            <label for="email">Contact Email</label>
            <input type="email" id="email" placeholder="Enter contact email...">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter phone number...">
            <button type="submit">Save</button>
        </form>
    `;
});

document.getElementById('user').addEventListener('click', function() {
    document.getElementById('content-area').innerHTML = `
        <h2>Manage Users</h2>
        <p>Here you can manage users' information.</p>
    `;
});

function initMap() {
    // Center of Kabupaten Tegal
    const kabupatenTegal = { lat: -6.879704, lng: 109.125595 };

    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: kabupatenTegal,
    });

    // Markers for Batik Shops
    const batikShops = [
        {
            name: "Toko Batik A",
            position: { lat: -6.868233, lng: 109.138248 },
            googleMapLink: "https://goo.gl/maps/example1",
        },
        {
            name: "Toko Batik B",
            position: { lat: -6.888404, lng: 109.146667 },
            googleMapLink: "https://goo.gl/maps/example2",
        },
        {
            name: "Toko Batik C",
            position: { lat: -6.897543, lng: 109.153469 },
            googleMapLink: "https://goo.gl/maps/example3",
        },
    ];

    // Add markers to the map
    batikShops.forEach((shop) => {
        const marker = new google.maps.Marker({
            position: shop.position,
            map: map,
            title: shop.name,
        });

        // Add click event to redirect to Google Maps
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${shop.name}</h3><a href="${shop.googleMapLink}" target="_blank">Buka di Google Maps</a>`,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

// Load the map after the page loads
window.onload = initMap;
