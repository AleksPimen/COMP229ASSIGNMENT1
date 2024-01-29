import FE from '../src/images/frontend.jpg';
import BE from '../src/images/backend.png';
import AD from '../src/images/appdesign.png';
import '../src/index.css';
import '../src/services.css';

export default function Services() {
  return (
      <>
      <br /><br />

      <section id="skill">
      <span className="skillTitle">Services</span>
          <span className="skillDesc">I have the skills and passion to create websites that are user-friendly and appealing. I can handle both backend and frontend development, using the latest technologies and best practices. I enjoy working on challenging projects and delivering high-quality results.</span> 
          <div className="skillBar">
          <img src={BE} alt="backend" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Backend Development</h2>
               <p>I have extensive experience in programming with Python, C#, and SQL. I can use these languages to develop web applications, data analysis tools, and database systems. I am proficient in writing clean, efficient, and well-documented code that follows the best practices of software engineering.</p>
               </div>

          </div>
          
          <div className="skillBar">
          <img src={FE} alt="frontend" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Frontend Development</h2>
               <p>I have a solid understanding of web development technologies, such as JavaScript, HTML, and CSS. I can use these skills to create dynamic and interactive websites that meet the needs of the clients and the users.</p>
               </div>

          </div>

          <div className="skillBar">
          <img src={AD} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>App Design</h2>
               <p>I have experience working with various graphic design tools, such as Photoshop, Illustrator and Figma. I can create and edit images, logos, icons, and other visual elements using these software. I am proficient in using different features and functions of these tools to achieve the desired results.</p>
               </div>

          </div>
          </section>
      </>
  );
}
