import '/src/components/Buttons/primarybutton.js';
import '/src/components/Buttons/secondarybutton.js';
import '/src/components/Additionals/stack.js';
import '/src/components/Cards/cardimage.js';

class CardStack extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="border border-neutral-300 rounded-lg p-8 w-fit gap-8">
                <div class="flex flex-row gap-8">
                    <div class="flex flex-col items-start justify-between gap-8 w-64">
                            <strong class="text-[1.5rem]">Journey</strong>
                            <p class="text-justify text-neutral-700">Trainee Developer passionate about technology. Focused on scalable solutions, software architecture, and paradigms.</p>
                        <div class="flex flex-col gap-3">
                                <app-primarybutton label="→ View Projects"></app-primarybutton>
                                <app-secondarybutton label="View Blog" icon-src="https://img.icons8.com/?size=100&id=iGTqSjdkxMJw&format=png&color=000000"></app-secondarybutton>
                        </div>
                    </div>
                        <div class="flex flex-col gap-8">
                                <strong class="text-[1.5rem]">Stack</strong>
                                <div class="grid grid-cols-4 grid-rows-3 gap-6 flex-wrap">
                                    <app-stack label="VSCode" icon-src="/src/assets/Icons/Stack/vscode.svg"></app-stack>
                                    <app-stack label="IntelliJ" icon-src="/src/assets/Icons/Stack/intellijidea.svg"></app-stack>
                                    <app-stack label="Java" icon-src="/src/assets/Icons/Stack/java.svg"></app-stack>
                                    <app-stack label="TypeScript" icon-src="/src/assets/Icons/Stack/typescript.svg"></app-stack>
                                    <app-stack label="Fastify" icon-src="/src/assets/Icons/Stack/fastify.svg"></app-stack>
                                    <app-stack label="Node.JS" icon-src="/src/assets/Icons/Stack/nodejs.svg"></app-stack>
                                    <app-stack label="Linux" icon-src="/src/assets/Icons/Stack/linux.svg"></app-stack>
                                    <app-stack label="PostgreSQL" icon-src="/src/assets/Icons/Stack/postgresql.svg"></app-stack>
                                    <app-stack label="Git" icon-src="/src/assets/Icons/Stack/git.svg"></app-stack>
                                    <app-stack label="GitHub" icon-src="/src/assets/Icons/SocialMedia/GithubLogo.svg"></app-stack>
                                    <app-stack label="Figma" icon-src="/src/assets/Icons/Stack/figma.svg"></app-stack>
                                    <app-stack label="Vercel" icon-src="/src/assets/Icons/Stack/vercel_dark.svg"></app-stack>
                                </div>
                            </div>
                                <app-cardimage image-src="/src/assets/Images/image-removebg-preview.png"></app-cardimage>
                </div>
            </div>
        `
    }
}

if (!customElements.get('app-cardstack')) {
    customElements.define('app-cardstack', CardStack);
}