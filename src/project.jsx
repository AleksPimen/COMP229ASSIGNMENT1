import bug from '../src/images/buggame.png';
import slide from '../src/images/slideshow.png';
import mult from '../src/images/multiplication.png';
import '../src/index.css';
import '../src/project.css';

export default function Project() {
  return (
      <>
      <br /><br /><br /><br />

      <section id="skill">
      <span className="skillTitle">Projects</span>
          <div className="skillBar">
          <img src={bug} alt="backend" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Bug Smasher</h2>
               <p>This is a bug smashing game that I developed using HTML, CSS and JavaScript. The game involves clicking on bugs that appear randomly on the screen. I was responsible for both the frontend and backend development of the game, which involved designing the user interface, creating the game logic, and implementing the scoring system.</p>
               </div>

          </div>
          
          <div className="skillBar">
          <img src={slide} alt="frontend" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Interactive Slideshow</h2>
               <p>I created an interactive slideshow website that showcases multiple images using HTML, CSS and JavaScript. I was responsible for both the frontend and backend development of this website.</p>
               </div>

          </div>

          <div className="skillBar">
          <img src={mult} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Multiplication Table</h2>
               <p>This is a Multiplication Table website, a project that I created using HTML, CSS and JavaScript. Website which allows users to generate multiplication tables of any size they want. You can enter the number of rows and columns you want, and the website will display the table for you. </p>
               </div>

          </div>
          </section>
      </>
  );
}
