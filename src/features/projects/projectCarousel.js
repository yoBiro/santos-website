import './projectCard.js';

class ProjectsCarousel extends HTMLElement {
  connectedCallback() {
    this.className = 'flex gap-8 justify-center items-center';

    // Aguarda DOM estabilizar
    requestAnimationFrame(() => {
      this.cards = Array.from(this.querySelectorAll('project-card'));

      this.cards.forEach((card, index) => {
        index === 0 ? card.activate() : card.deactivate();
      });
    });

    this.addEventListener('card-selected', (e) => {
      this.setActive(e.detail);
    });
  }

  setActive(activeCard) {
    this.cards.forEach(card => card.deactivate());
    activeCard.activate();
  }
}

customElements.define('projects-carousel', ProjectsCarousel);
