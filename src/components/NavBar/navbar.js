class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="app-container">
            <div class="flex items-center justify-between h-16 py-4">

                <!-- LEFT -->
                <div class="flex items-center justify-between gap-2">
                <div>
                    <a href="/" class="text-3xl font-bold">
                    SantosLoveTech
                    </a>
                </div>
                </div>

                <span class="w-px h-8 bg-neutral-300"></span>

                <!-- CENTER -->
                <div class="flex items-center gap-2">
                    <img src="/src/assets/Icons/SocialMedia/YoutubeLogo.svg" class="w-7 h-7 opacity-70 hover:opacity-100 transition">
                    <img src="/src/assets/Icons/SocialMedia/LinkedinLogo.svg" class="w-7 h-7 opacity-70 hover:opacity-100 transition">
                    <img src="/src/assets/Icons/SocialMedia/GithubLogo.svg" class="w-7 h-7 opacity-70 hover:opacity-100 transition">
                </div>

                <!-- RIGHT -->
                <div class="flex items-center gap-2">
                ${this.navItem('Home')}
                ${this.navItem('About')}
                ${this.navItem('Blog')}
                ${this.navItem('Projects')}
                </div>

            </div>
            </div>
        `;
    }

    navItem(label) {
        return `
        <a href="#"
            class="flex items-center gap-2 px-4 py-1.5 rounded-full
                    border border-neutral-300
                    text-sm font-medium
                    hover:bg-neutral-100 transition">
            ${label}
        </a>
        `;
    }
    }

    if (!customElements.get('app-navbar')) {
    customElements.define('app-navbar', AppNavbar);
    }
