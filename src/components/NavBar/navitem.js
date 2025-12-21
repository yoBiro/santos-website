class NavItem extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') ?? '';
        const href = this.getAttribute('href') ?? '#';
        const src = this.getAttribute('icon-src');

        this.innerHTML = `
                <a href="${href}"
                class="flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-neutral-300
                text-sm font-medium
                hover:bg-neutral-100 transition">

            ${src ? `<img src="${src}" class="w-5 h-5">` : ''}

            <span>${label}</span>
        </a>
        `;
    }
}

if (!customElements.get('nav-item')) {
    customElements.define('nav-item', NavItem);
}  