
class ExperienceSection extends HTMLElement {
    constructor () {
        super()
    }

    connectedCallback () {
        this.render();
    }
    render () {    
       this.innerHTML = `
        <h2>EXPERIENCE</h2>
        <table>
            <tr>
                <td>
                <h3>Full-Stack Developer and Support Engineer</h3>
                <h4>3S Design LLC</h4>
                    <h5>July 2025 - Present</h5>
                </td>
                <td>
                    
                    <p>
                    Built and maintained scalable full-stack solutions integrating React UI with a Laravel and MySQL backend, implementing critical software fixes and deployments to support business operations and growth in a high-pressure Agile team environment.
                        <ul>
                            <li> Developed a route mapping feature using a location sorting algorithm with Google API implementation </li>
                            <li> Implemented a marketing campaign feature with email scheduling, increasing customer outreach. </li>
                            <li> Redesigned and optimized an email templating interface to improve usability and minimize user errors. </li>
                            <li> Optimized full-stack applications, drastically reducing load times in key areas. </li>
                            <li> Collaborated closely with clients to define project requirements, ensuring solutions aligned with business needs. </li>
                            <li> Provided assistance and solutions for customers resolving software issues, installations, and IT support. </li>
                        </ul>
                        <div class="skills-btn-panel">
                        Skills: <br/>
                            <button>React</button>
                            <button>Laravel PHP </button>
                            <button>SQL</button>
                            <button>Agile Development</button>
                        </div>

                    </p>
                
                </td>
            </tr>
            <tr>
                <td>
                <h3>Quality Assurance Intern </h3>
                <h4>XYPRO Technology Corporation</h4>
                <h5>December 2024 - June 2025</h5>
                </td>
                <td>
                    <p>
                    Created manual test cases in Qmetry and automated API/frontend tests using Java and JavaScript in an Agile environment. Logged detailed Jira bugs and authored test plans with linked cases to track fixes and resolution. 
                        <ul>
                            <li> Led successful installation of a new feature on Linux and Windows systems, providing critical feedback that improved the product installation process. </li>
                            <li> Supported regression testing for a major release by identifying and assisting resolution of failed test cases. </li>
                        </ul>
                    </p>
                    <div class="skills-btn-panel">
                        Skills: <br/>
                        <button>Java</button>
                        <button>JavaScript </button>
                        <button>Jira</button>
                        <button>Confluence</button>
                        <button>Linux</button>
                        <button>Test Case Automation</button>
                        <button>Agile Development</button>
                    </div>
            </td>
            </tr>
            <tr>
                <td>
                <h3>Customer Support Intern</h3>
                <h4>XYPRO Technology Corporation</h4>
                <h5>June 2024 - December 2024</h5>
                </td>
                <td>
                    <p>
                    Designed a data analysis tool for extrapolating yearly, quarterly, and monthly support data. Led a detail-oriented overhaul of outdated documentation. Managed documentation changes and Jira tickets in User Acceptance Testing of new product versions.
                    </p>
                    <div class="skills-btn-panel">
                        Skills: <br/>
                        <button>Confluence</button>
                        <button>Jira</button>
                        <button>Google Sheets Formulas</button>
                        <button>Jira Query Language</button>
                        <button>User Acceptance Testing</button>
                        <button>Agile Development</button>
                    </div>
                
                </td>
            </tr>

        </table>
       
       `;

    }

} 
customElements.define('experience-section', ExperienceSection);