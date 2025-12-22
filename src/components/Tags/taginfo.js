class TagInfo extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') ?? '';
        const src = this.getAttribute('icon-src');

        this.innerHTML = `
            <div class="pt-4">
                <div class="border border-neutral-900/10 rounded-[3rem] p-2 px-4 mb-6 w-fit flex flex-row items-center gap-8 bg-neutral-50">
                    ${src ? `<img src="${src}" class="w-5 h-5">` : ''}
                    <p class="text-sm text-neutral-800 font-medium">${label}</p>
                </div>
            </div>
            `
    }
}

    if (!customElements.get('app-taginfo')) {
        customElements.define('app-taginfo', TagInfo);
    }