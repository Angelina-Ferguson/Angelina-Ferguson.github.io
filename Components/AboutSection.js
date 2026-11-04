
class AboutSection extends HTMLElement {
    constructor () {
        super()
    }

    connectedCallback () {
        this.render();
    }
    render () {    
       this.innerHTML = `
        
        <table>
        <tr>
        <td> <img src="/images/Toste_Angelina_Photo.png"></td>
        <td> 
        <div>
        <h2>ABOUT</h2>
        Hello, I'm Angelina Ferguson and I am a Full-stack developer skilled in maintenance and improvement of scalable applications, construction and execution of test plans, and resolving IT issues.
        </div>
        <div>
        <br>
        My passion for computer science began after creating web pages with html, javascript, php, and sql for 
        a Intro to Web Development course I took in College. I view Full-Stack development as a way to solve-customer needs
        while also fulfilling my passion for creativity and problem-solving.
        </div></td>
        </tr>
        </table> 
       
       
       `;

    }

} 
customElements.define('about-section', AboutSection);