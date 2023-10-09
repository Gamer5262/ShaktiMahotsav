import "./About.css";
import img1 from "../assets/img3.avif";

function About() {
  return (
    <div className='about' id='about'>
      <div className='section-about'>
        <h4>Navratri</h4>
        <div className="content">
        <p>
          Celebrating the victory of good over evil.

          Something something...
           </p>
        <img src={img1} className="logo"></img>
        </div>
      </div>
    </div>
  )
}

export default About
