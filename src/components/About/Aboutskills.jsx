import CodeIcon from "../../assets/code-solid.svg";
import DesignIcon from "../../assets/pen-nib-solid.svg";
import { NavLink } from "react-router-dom";

export default function AboutSkills() {
  return (
    <>
      <section className="about--skills">
        <div className="skills--left skills--flex">
          <h2>FRONTEND</h2>
          <div className="circle">
            <img className="skills--icons" src={CodeIcon} alt="Code icon" />
          </div>
          <p>
            I love writing clean and functional code, bringing the design to
            reality
          </p>
          <h3>Languages that I speak:</h3>
          <p>HTML, CSS, JS AND REACT</p>
          <h3>Dev tools:</h3>
          <ul>
            <li>VS. CODE</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div className="skills--flex">
          <h2>DESIGN</h2>
          <div className="circle">
            <img className="skills--icons" src={DesignIcon} alt="Design icon" />
          </div>
          <p>
            I prefer simple content and clean design, with the user in focus
          </p>
          <h3>Things I enjoy designing:</h3>
          <p>UI, Web, and Apps</p>
          <h3>Design tools:</h3>
          <ul>
            <li>Figma</li>
            <li>Pen & Paper</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
      </section>
      <div className="about--buttons">
        <button>
          <NavLink className="navlink--white" to="/Projects">
            Check out my projects
          </NavLink>
        </button>
        <button>Download my resume</button>
      </div>
    </>
  );
}
