import Landingpageimage from "../assets/landing-page-greyscale.webp";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="purple--background"></div>
      <section className="landing--page--introduction">
        <div>
          <h1>STUDENT FRONTEND DEVELOPER</h1>
          <p>
            Hello! I’m Rune Gerner, a junior frontend developer based in
            Skanderborg, Denmark. Currently studying at the Business Academy
            Aarhus, I’ve had the opportunity to work on multiple school
            projects, honing my skills in HTML, CSS, JavaScript, and React. I
            focus on writing clean, efficient code to create functional and
            user-friendly web experiences.
          </p>
          <button>
            <NavLink className="navlink--white" to="/Projects">
              Check out my projects
            </NavLink>
          </button>
        </div>
      </section>
      <img className="landing--page--image" src={Landingpageimage} alt="" />
    </>
  );
}
