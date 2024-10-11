document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const airship = document.querySelector('.airship-container');
const navbarLinks = document.querySelectorAll('.navbar a');

function updateNavbarColor() {
    const airshipRect = airship.getBoundingClientRect();
    const airshipMidX = airshipRect.left + airshipRect.width / 2;

    navbarLinks.forEach(link => {
        const linkRect = link.getBoundingClientRect();
        const linkMidX = linkRect.left + linkRect.width / 2;

        if (airshipMidX >= linkRect.left && airshipMidX <= linkRect.right) {
            link.classList.add('passed'); // Change color when airship passes
        } else {
            link.classList.remove('passed'); // Revert back when airship moves away
        }
    });
}

// Continuously check the airship position as it animates
setInterval(updateNavbarColor, 50); // Check every 50ms