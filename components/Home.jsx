import { Link } from 'react-router-dom';
import programming from "../src/images/programming.jpg";
import '../src/index.css';

export default function Home() {
  return (
    <section id="intro" className="introContainer">
      <div className="introContentLeft">
        <span className="hello">Hello,</span>
        <br />
        <span className="introText">
          I am <span className="introName">Aleksandr Pimenov</span>
          <br />Website Designer
          <p className="introPara">
        My expertise lies in designing web pages that are both attractive and easy to use. I have a background in web development and graphic design, and I can create websites that suit different needs and preferences.
      </p>
        </span>

        <div className="buttonsContainer">
          <Link to="/about">
            <button className="WebButtons">About Me</button>
          </Link>
          <Link to="/contact">
            <button className="WebButtons">Contact Me</button>
          </Link>
        </div>
      </div>

      <div className="introContentRight">
      < img src={programming}alt="programming" className="programmingImage"/>
        
      </div>

      
    </section>
  );
}
