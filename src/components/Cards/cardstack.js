import '/src/components/Buttons/primarybutton.js';
import '/src/components/Buttons/secondarybutton.js';
import '/src/components/Additionals/stack.js';

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
                        <div class="flex flex-col gap-8">
                                <strong class="text-[1.5rem]">Stack</strong>
                                <div class="grid grid-cols-3 grid-rows-2 gap-6">
                                    <app-stack label="Java" icon-src="/src/assets/Icons/Stack/java.svg"></app-stack>
                                    <app-stack label="TypeScript" icon-src="/src/assets/Icons/Stack/typescript.svg"></app-stack>
                                    <app-stack label="Linux" icon-src="/src/assets/Icons/Stack/linux.svg"></app-stack>
                                    <app-stack label="PostgreSQL" icon-src="/src/assets/Icons/Stack/postgresql.svg"></app-stack>
                                    <app-stack label="Figma" icon-src="/src/assets/Icons/Stack/figma.svg"></app-stack>
                                    <app-stack label="Vercel" icon-src="/src/assets/Icons/Stack/vercel_dark.svg"></app-stack>
                                </div>
                        </div>
                </div>
            </div>
        `
    }
}

if (!customElements.get('app-cardstack')) {
    customElements.define('app-cardstack', CardStack);
}