
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
        a Intro to Web Development course I took in college. I view Full-Stack development as a way to solve-customer needs
        while also fulfilling my passion for creativity and problem-solving.
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <h3>Education</h3>
        </td>
        <td>
        <h4>Bachelor of Science in Computer Science, Minor in Mathematics  </h4>
        <h4>University of North Dakota, GPA 3.79 / 4.0 </h4> 
        <h5>January 2022 - May 2026</h5>
        </td>
        </tr>
        </table> 

        
       
       
       `;

    }

} 
customElements.define('about-section', AboutSection);