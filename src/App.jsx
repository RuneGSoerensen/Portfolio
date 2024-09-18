import LandingPage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
