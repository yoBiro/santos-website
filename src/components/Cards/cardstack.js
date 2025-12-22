import '/src/components/Buttons/primarybutton.js';
import '/src/components/Buttons/secondarybutton.js';

class CardStack extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="border border-neutral-300 rounded-lg p-8 w-fit gap-8">
                <div class="flex flex-row gap-8">
                    <div class="flex flex-col items-start justify-between gap-8 w-64">
                            <strong class="text-[1.5rem]">Journey</strong>
                            <p class="text-justify text-neutral-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="flex flex-col gap-3">
                                <app-primarybutton label="→ View Projects"></app-primarybutton>
                                <app-secondarybutton label="View Blog" icon-src="https://img.icons8.com/?size=100&id=iGTqSjdkxMJw&format=png&color=000000"></app-secondarybutton>
                        </div>
                    </div>
                        <div class="flex flex-row">
                                <strong class="text-[1.5rem]">Stack</strong>
                        </div>
                </div>
            </div>
        `
    }
}

if (!customElements.get('app-cardstack')) {
    customElements.define('app-cardstack', CardStack);
}