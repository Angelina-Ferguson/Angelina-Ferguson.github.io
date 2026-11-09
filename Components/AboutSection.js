
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
                    Hello, I'm Angelina Ferguson. I am a full-stack developer skilled in the maintenance and improvement of scalable applications.
                    </div>
                    <div>
                    <br>
                    My passion for computer science began in college, creating web pages with HTML and JavaScript for an introductory computer
                    science course. This allowed me to creatively express myself while also engaging my love of problem solving.
                    <br><br>
                    Through learning full-stack development, I found fullfillment in implementig complex systems that solved unique customer problems, seeing customer productivity improve
                    and frustrations decrease.
                    <br><br>
                    I continue to be inspired by the challenges I face and how I can provide a solution to them in a way that fulfills client needs.

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
                        <button>PHP</button>
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