
class AboutSection extends HTMLElement {
    constructor () {
        super()
    }

    connectedCallback () {
        this.render();
    }
    render () {    
       this.innerHTML = `
        <h2>ABOUT</h2>
        <table>
        <tr>
        <td>
         <img src="/images/Toste_Angelina_Photo.png"></td>
        <td> 
        
        <table>
            <tr>
                <td colspan="2">
                <div>
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
                    <div class="skills-btn-panel">
                        Skills: <br/>
                        <button>HTML</button>
                        <button>JavaScript</button>
                        <button>CSS</button>
                        <button>C#</button>
                        <button>Java</button>
                        <button>Python</button>
                        <button>C</button>
                        <button>C++</button>
                        <button>SQL</button>
                        <button>Angular</button>
                        <button>Material UI</button>
                        <button>TypeScript</button>
                    </div>
                </td>
            </tr>
        </table>
        </td>
        </tr>
        </table> 

        
       
       
       `;

    }

} 
customElements.define('about-section', AboutSection);