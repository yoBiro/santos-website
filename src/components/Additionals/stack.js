class Stack extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') ?? '';
        const iconSrc = this.getAttribute('icon-src');

        this.innerHTML = `
            <div class="flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform">
                    <img src="${iconSrc}" class="w-16 h-16">
                    <strong class="text-[1rem] font-mono font-medium">${label}</strong>
            </div>
        `;
    }
}

if (!customElements.get('app-stack')) {
    customElements.define('app-stack', Stack);
}