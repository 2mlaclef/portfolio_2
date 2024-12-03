// module.exports for Flowbite plugin configuration (should be in the Tailwind config file, not JS file)
module.exports = {
    plugins: [
        require('flowbite/plugin')
    ],
    content: [
        "./node_modules/flowbite/**/*.js"
    ]
};

// Fonction pour activer/désactiver le menu hamburger
function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Ajout d'un écouteur d'événement pour le bouton du menu (hamburger)
document.addEventListener('DOMContentLoaded', function () {
    const menuToggleButton = document.querySelector('.menu-toggle');
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', toggleMenu);
    }
});

// Optionnel : Vous pouvez aussi ajouter des animations ou des transitions pour améliorer l'expérience utilisateur.
