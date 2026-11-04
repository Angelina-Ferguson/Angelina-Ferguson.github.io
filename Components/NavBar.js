
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
                <div class="btn-div">
                <table>
                <tr>
                <td>
                 <button class="social-btn">
                 <i class="fa-brands fa-linkedin fa-2xl"></i>
                 
                </button>
                 </td>
                
                <td>
                <button class="social-btn" >
                <i class="fa-brands fa-square-github fa-2xl"></i>
                </button>
                </td>
                <td>
                <button id="resume-btn"> View Resume</button>
                </td>
                </tr>
                </div>
            </div>
        `;

    }

} 
customElements.define('nav-bar', NavBar);