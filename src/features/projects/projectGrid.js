import './projectCard.js';

class ProjectsGrid extends HTMLElement {
  connectedCallback() {
    this.classList.add('block');
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

customElements.define('projects-grid', ProjectsGrid);
