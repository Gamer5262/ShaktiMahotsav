import "./About.css";
import img1 from "../assets/about.png";

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
        <p className="para">
          Navaratri is a major Hindu festival lasting nine nights and ten days, celebrating the goddess Durga in her various forms. It signifies the victory of good over evil and includes fasting, prayer, and dance performances like Garba and Dandiya.
           </p>
        <img src={img1} className="logo"></img>
        </div>
        <Button changes={change} />
      </div>
    </div>
  )
}

export default About
