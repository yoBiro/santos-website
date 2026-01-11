import './components/NavBar/navbar.js';
import './components/Tags/taginfo.js';
import './components/Cards/cardstack.js';
import './components/Buttons/primarybutton.js';
import './components/Buttons/secondarybutton.js';
import './components/Cards/cardimage.js';
import './features/projects/projectCard.js';
import './features/projects/projectGrid.js';


// Page load animations
window.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page');
    page.classList.remove('opacity-0', 'translate-y-2');
});

// Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('opacity-0');

    setTimeout(() => {
        loader.remove();
    }, 500);
});
