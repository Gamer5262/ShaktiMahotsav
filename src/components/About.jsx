import "./About.css";
import img1 from "../assets/img3.avif";

const Button = ({changes }) => {
  function handleClick() {
    changes();
    window.scrollTo(0, 0);
  }
  return (
    <div className="btn-form" onClick={handleClick}>
      Register
    </div>
  )
};

function About({ change }) {
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
        <Button changes={change} />
      </div>
    </div>
  )
}

export default About
