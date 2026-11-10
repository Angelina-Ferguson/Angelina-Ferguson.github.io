
class NavBar extends HTMLElement {
    constructor () {
        super()
    }

    connectedCallback () {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <div>
                <h1>
                    Angelina M. Ferguson
                </h1>
                <h3>
                    Full-Stack Software Developer
                </h3>
                <p>Passionate about crafting adaptive, user-friendly software solutions.</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/angelina-ferguson-3303712b0" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                <a href="https://github.com/Angelina-Ferguson" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github fa-2xl"></i></a>
                <a id="resume-btn" href="./pdfs/Angelina Ferguson Resume.pdf" target="_blank" type="application/pdf" rel="alternate" media="print"> View Resume</a>
            </div>
        `;

    }

} 
customElements.define('nav-bar', NavBar);