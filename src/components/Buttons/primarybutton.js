class PrimaryButton extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') ?? '';

        this.innerHTML = `
            <button class="flex flex-row group relative overflow-hidden rounded-full bg-black px-7 py-3 text-white transition-all duration-200
            group-hover:drop-shadow-2xl w-fit h-fit">
                <span
                    class="font-mono transition-all duration-200 group-hover:opacity-0 group-hover:translate-x-6"
                >
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
        `
    }
}

if (!customElements.get('app-primarybutton')) {
    customElements.define('app-primarybutton', PrimaryButton);
}