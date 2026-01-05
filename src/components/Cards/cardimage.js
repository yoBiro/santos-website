class CardImage extends HTMLElement {
    connectedCallback() {
        const imageSrc = this.getAttribute('image-src') || '';

        this.innerHTML = `
            <div class="class="border border-neutral-300 rounded-lg p-8 w-fit">
                <img src="${imageSrc}" alt="${this.getAttribute('image-alt')}" class="w-full h-full object-cover">
            </div>
        `
    }
}

if (!customElements.get('app-cardimage')) {
    customElements.define('app-cardimage', CardImage);
}