class ProjectCard extends HTMLElement {
    connectedCallback() {
    this.className = `
        project-card
        cursor-pointer
        transition-all duration-300 ease-out
        w-fit h-fit rounded-xl
        bg-neutral-900 text-white
        flex items-center justify-center
    `;

    this.innerHTML = `
        <div class="p-6">
            <slot></slot>
        </div>
    `;


this.addEventListener('click', () => {
    this.dispatchEvent(
        new CustomEvent('card-selected', {
            bubbles: true,
            composed: true,
            detail: this
        })
    );
    });
}

    activate() {
        this.classList.remove('opacity-40', 'scale-95', 'blur-sm');
        this.classList.add('opacity-100', 'scale-100');
    }

    deactivate() {
        this.classList.remove('opacity-100', 'scale-100');
        this.classList.add('opacity-40', 'scale-95', 'blur-sm');
    }
}

customElements.define('project-card', ProjectCard);