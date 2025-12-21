import './navitem.js';

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

                
                <!-- CENTER -->
                <div class="flex items-center gap-2">
                <a href="https://www.youtube.com/@santoslovetech"><img src="/src/assets/Icons/SocialMedia/YoutubeLogo.svg" class="w-7 h-7"></a>
                <a href="https://www.linkedin.com/in/gabrielsdev"><img src="/src/assets/Icons/SocialMedia/LinkedinLogo.svg" class="w-7 h-7"></a>
                <a href="https://github.com/yoBiro"><img src="/src/assets/Icons/SocialMedia/GithubLogo.svg" class="w-7 h-7"></a>
                </div>
                
                <span class="w-px h-8 bg-neutral-300"></span>

                <!-- RIGHT -->
                    <div class="flex items-center gap-2">
                    <nav-item
                        label="Home" 
                        href="/index.html"
                        icon-src="https://img.icons8.com/?size=100&id=KM1nMFNMGbRI&format=png&color=000000">
                    </nav-item>

                        <nav-item
                            label="About Me"
                            href="/src/pages/about.html"
                            icon-src="https://img.icons8.com/?size=100&id=N0kAkzTwlI3p&format=png&color=000000">
                        </nav-item>

                        <nav-item 
                            label="Blog" 
                            href="/blog"
                            icon-src="https://img.icons8.com/?size=100&id=iGTqSjdkxMJw&format=png&color=000000">
                        </nav-item>

                        <nav-item 
                            label="Projects" 
                            href="/projects"
                            icon-src="https://img.icons8.com/?size=100&id=2lzi4NM0vE21&format=png&color=000000">
                        </nav-item>
                    </div>

            </div>
            </div>
        `;
    }
    }

    if (!customElements.get('app-navbar')) {
        customElements.define('app-navbar', AppNavbar);
    }
