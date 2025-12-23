class Stack extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') ?? '';
        const iconSrc = this.getAttribute('icon-src');

        this.innerHTML = `
            <div class="flex flex-col items-center justify-center gap-2">
                    <img src="${iconSrc}" class="w-24 h-24">
                    <strong class="text-[1.25rem] font-mono font-medium">${label}</strong>
            </div>
        `;
    }
}

if (!customElements.get('app-stack')) {
    customElements.define('app-stack', Stack);
}