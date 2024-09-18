import AboutPicture from "../../assets/done-greyscale.webp";

export default function AboutInfo() {
  return (
    <>
      <div className="purple--background"></div>
      <header className="about--info z--index">
        <div className="about--info-text--container">
          <h1>ABOUT.</h1>
          <p>
            Hi! I’m a 30-year-old student from Denmark, currently studying at
            Erhvervsakademiet Aarhus. I’m passionate about coding and always
            looking to improve. Lately, I’ve been diving into React and really
            enjoying it.
            <br />
            <br />
            In my free time, I love fishing, playing games, and hanging out with
            friends and family. People I’ve worked with describe me as
            dependable, a quick learner, and, above all, someone who’s kind and
            approachable. I value good company and enjoy being part of a
            positive team.
          </p>
        </div>
        <div className="about--info--picture--container">
          <img className="about--info--picture" src={AboutPicture} alt="" />
        </div>
      </header>
    </>
  );
}
