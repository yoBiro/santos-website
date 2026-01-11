import '../../components/Tags/taginfo.js';
import '/src/components/Buttons/primarybutton.js';
import '/src/components/Buttons/secondarybutton.js';

class ProjectCard extends HTMLElement {
    connectedCallback() {
        const imageSrc = this.getAttribute('image') || '';
        const title = this.getAttribute('Title') || 'Project Title';
        const labelTag1 = this.getAttribute('labelTag1') || 'Tag';
        const labelTag2 = this.getAttribute('labelTag2') || 'Tag';
        const desc = this.getAttribute('desc') || '';


        this.className = `
            transition-all duration-300 ease-out
        `;

        this.innerHTML = `
            <div class="p-6
                project-card
                cursor-pointer
                w-full h-fit rounded-xl
                border border-neutral-300
            ">
                <div class="flex flex-row">
                    <div class="flex flex-col justify-between">
                    <img src="${imageSrc}" alt="Project Image" class="w-300px h-150px mr-4 rounded-xl"/>
                        <strong class="text-[1.25rem] mt-4">${title}</strong>
                        <div class="flex flex-row gap-4">
                            <app-taginfo label="${labelTag1}"></app-taginfo>
                            <app-taginfo label="${labelTag2}"></app-taginfo>
                        </div>
                        <div class="mt-4 text-neutral-700 text-justify">
                            ${desc}
                        </div>
                        <div class="flex flex-row gap-6 mt-4">
                            <app-primarybutton label="View Repository" icon-src="https://img.icons8.com/?size=100&id=OgWMizyweRZT&format=png&color=FFFFFF"></app-primarybutton>

                            <app-secondarybutton label="Live Demo" icon-src="https://img.icons8.com/?size=100&id=11501&format=png&color=000000"></app-secondarybutton>
                        </div>
                    </div>
                </div>
            </div>
        `;


    this.addEventListener('click', () => {
        this.dispatchEvent(
            new CustomEvent('card-selected', {
                bubbles: true,
                composed: true,
                detail: this
            })
        );
        });
    }

        activate() {
            this.classList.remove('opacity-100', 'scale-95', 'blur-sm');
            this.classList.add('opacity-100', 'scale-100');
        }

        deactivate() {
            this.classList.remove('opacity-100', 'scale-100');
            this.classList.add('opacity-40', 'scale-95', 'blur-sm');
        }
}

customElements.define('project-card', ProjectCard);