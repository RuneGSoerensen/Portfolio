import { NavLink } from "react-router-dom";

export default function ProjectsInfo() {
  return (
    <>
      <div className="purple--background"></div>
      <main className="z--index projects--info">
        <h1>Projects</h1>
        <p>
          Here are the projects I’ve worked on so far, each showcasing the
          technologies I’ve used, accompanied by their respective icons. To
          learn more about my journey and skills, feel free to visit my About
          page.
        </p>
        <button>
          <NavLink to="/About" className="navlink--purple">
            ABOUT ME
          </NavLink>
        </button>
      </main>
    </>
  );
}
