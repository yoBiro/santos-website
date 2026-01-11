class PrimaryButton extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') ?? '';
        const src = this.getAttribute('icon-src');
        const link = this.getAttribute('link') ?? '#';

        this.innerHTML = `
            <a href="${link}">
                <button class="flex flex-row group relative overflow-hidden rounded-full bg-black px-7 py-3 text-white transition-all duration-200
                group-hover:drop-shadow-2xl w-fit h-fit before:bg-linear-to-b before:from-white/20 before:to-transparent">
                    <span
                        class="flex flex-row gap-4 font-mono transition-all duration-200 group-hover:opacity-0 group-hover:translate-x-6 align-middle"
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
                        ${src ? `<img src="${src}" class="w-5 h-5">` : '→'}
                    </span>
                </button>
            </a>
        `
    }
}

if (!customElements.get('app-primarybutton')) {
    customElements.define('app-primarybutton', PrimaryButton);
}