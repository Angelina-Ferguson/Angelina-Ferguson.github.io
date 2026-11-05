
class ProjectsSection extends HTMLElement {
    constructor () {
        super()
    }

    connectedCallback () {
        this.render();
    }
    render () {    
        this.innerHTML = `
        <h2>PROJECTS</h2>
        <table >
            <tr>
                <td>
                <h3>Indigo</h3>
                <h4>Senior Project, University of North Dakota</h4>
                <h5>August 2025 - May 2026</h5>
                <a id="resume-btn" href="https://github.com/OptionsIRCIL/indigo-frontend" target="_blank" rel="noopener noreferrer"> View on Gitub </a>
                </td>
                <td>
                    <p>
                    Collaborated as a front-end engineer to develop an open-source, web-application customized to accomodate the daily business operations of Options IRCIL (a center for independent living) such as managing consumer information within the associate database or assisting with consumer intake based on existing forms. 
                    <ul>
                        <li>Developed User Interface designs for consumer data entry with iterative input from the Project Sponsor.</li>
                        <li>Implemented User Interface designs using Angular and the Material UI library, incorporating feedback from team collaborators and the project sponsor.</li>
                        <li>Maintained accordance with Web Content Accessibility Guidelines and HIPAA, through testing procedures and development practices.</li>
                    </ul>
                    <div class="skills-btn-panel">
                        Skills: <br/>
                        <button>Angular</button>
                        <button>Material UI</button>
                        <button>TypeScript</button>
                    </div>
                    </p>
                </td>
            </tr>
            
        </table>
       
       `;


    }

} 
customElements.define('projects-section', ProjectsSection);