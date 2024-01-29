import { useState } from 'react';

import portrait from "../src/images/portrait.jpg";
import '../src/index.css';
import '../src/about.css';

export default function About() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <section id="intro" className="introContainer">
      <div className="introContentLeft">
        <br />
        <span className="introText">
          <span className="introName">Aleksandr Pimenov</span>
          <p className="introPara">
            As an international student, I have developed a strong expertise in designing and developing websites that are visually appealing, user-friendly, and responsive. I also have proficiency in other programming languages, such as C#, Java, and SQL, that enable me to create dynamic and interactive web applications.
          </p>
        </span>

        <br />
        <br />
      </div>

      <div className="introContentRight">
        <img src={portrait} alt="portrait" className="portraitImage" />
        <div className={`resumeBar ${showResume ? 'active' : ''}`} onClick={toggleResume}>
          Show Resume
        </div>
        {showResume && (
          <iframe
            title="Resume"
            src="../src/images/resumepdf.pdf"
            width="200%"
            height="800px"
          ></iframe>
        )}
      </div>
    </section>
  );
}
