// Projects images:
import Aiguide from "../../assets/ai-guide.webp";
import Astroteket from "../../assets/astroteket.webp";
import Gotfred from "../../assets/gotfred.webp";
import Troeborg from "../../assets/troeborg.webp";

// Icons:
import Html from "../../assets/html5-brands-solid.svg";
import Js from "../../assets/square-js-brands-solid.svg";
import Css from "../../assets/css3-alt-brands-solid.svg";

export default function ProjectTemplate() {
  return (
    <>
      <div className="project">
        <h2>AI GUIDE</h2>
        <img src={Aiguide} />
        <div className="tech--container">
          <img src={Html} />
          <img src={Css} />
          <img src={Js} />
        </div>
        <p>
          One of my first projects, built with HTML, CSS, and JavaScript. It is
          an online magazine that explores AI chats, including popular tools
          like ChatGPT, discussing their uses, future potential, and societal
          impacts.
        </p>
        <div className="btn--container">
          <a
            className="btn"
            href="https://github.com/RuneGSoerensen/online-magasin-ai"
          >
            GitHub
          </a>
          <a className="btn" href="https://ai-guide.runegstudio.dk/">
            Live Demo
          </a>
        </div>
      </div>

      <div className="project">
        <h2>ASTROTEKTET</h2>
        <img src={Astroteket} />
        <div className="tech--container">
          <img src={Html} />
          <img src={Css} />
          <img src={Js} />
        </div>
        <p>
          A school project done with 3 other students, based on a danish sciene
          museum. It uses three.js to render planets onto the website, otherwise
          built with html, js and css.
        </p>
        <div className="btn--container">
          <a
            className="btn"
            href="https://github.com/RuneGSoerensen/storytelling-astrotek"
          >
            GitHub
          </a>
          <a className="btn" href="http://astrotektet-steno.runegstudio.dk/">
            Live Demo
          </a>
        </div>
      </div>

      <div className="project">
        <h2>GOTFRED</h2>
        <img src={Gotfred} />
        <div className="tech--container">
          <img src={Html} />
          <img src={Css} />
          <img src={Js} />
        </div>
        <p>
          A school project created for Gotfred, a bakery in Aarhus. We
          collaborated extensively, refining the design until they were
          satisfied. The project was built using HTML, CSS, JSON, and JavaScript
        </p>
        <div className="btn--container">
          <a
            className="btn"
            href="https://github.com/MortenKirch/gotfred-presentation"
          >
            GitHub
          </a>
          <a className="btn" href="https://gotfred.runegstudio.dk/">
            Live Demo
          </a>
        </div>
      </div>

      <div className="project">
        <h2>TROEJBORG</h2>
        <img src={Troeborg} />
        <div className="tech--container">
          <img src={Html} />
          <img src={Css} />
          <img src={Js} />
        </div>
        <p>
          This solo project involved a case study for a company producing
          non-alcoholic beers. I learned a lot from it. Built with HTML, CSS,
          and JavaScript, the design and code are both clean and functional.
        </p>
        <div className="btn--container">
          <a
            className="btn"
            href="https://github.com/RuneGSoerensen/Troejborg-bryggeri"
          >
            GitHub
          </a>
          <a className="btn" href="https://troejborg-bryg.runegstudio.dk/">
            Live Demo
          </a>
        </div>
      </div>
    </>
  );
}
