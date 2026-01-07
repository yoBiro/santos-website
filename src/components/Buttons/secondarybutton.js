class SecondaryButton extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') ?? '';
        const src = this.getAttribute('icon-src');

        this.innerHTML = `
            <button class="group relative overflow-hidden rounded-full border-black border bg-white px-7 py-3 text-black transition-all duration-200
            group-hover:drop-shadow-2xl gap-3 flex flex-row h-fit w-fit">
            <span
            class="font-mono flex flex-row gap-3 transition-all duration-200 group-hover:opacity-0 group-hover:translate-x-6"
            >
                    ${src ? `<img src="${src}" class="w-5 h-5">` : ''}
                    ${label}
                </span>

                <span
                    class="absolute inset-0 flex items-center justify-center
                        opacity-0
                        -translate-x-3
                        transition-all duration-200
                        group-hover:opacity-100
                        group-hover:translate-x-0"
                >
                    →
                </span>
            </button>

        `;
    }
}

if (!customElements.get('app-secondarybutton')) {
    customElements.define('app-secondarybutton', SecondaryButton);
}