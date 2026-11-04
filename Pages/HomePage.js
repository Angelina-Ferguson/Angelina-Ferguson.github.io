
class HomePage extends HTMLElement {
    constructor () {
        super()
    }

    connectedCallback () {
        this.render();
    }
    render () {    
        this.innerHTML = `
        <div>
            <button id="about-btn">ABOUT</button>
            <button id="exp-btn">EXPERIENCE</button>
            <button id="proj-btn">PROJECTS</button>
            <table>
            <tr>
                <td id="section-container"> <about-section></about-section></td>   
            </tr>
            </table>
            
        </div>

        `;

    }

} 
customElements.define('home-page', HomePage);