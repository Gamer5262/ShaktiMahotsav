import "./Event.css"
import img1 from "../assets/Event/day1.jpg"
import img2 from "../assets/Event/day2.jpg"
import img3 from "../assets/Event/day3.jpg"
import img4 from "../assets/Event/day4.jpg"
import img5 from "../assets/Event/day5.jpg"
import img6 from "../assets/Event/day6.jpg"
import img7 from "../assets/Event/day7.jpg"
import img8 from "../assets/Event/day8.jpg"
import img9 from "../assets/Event/day9.jpg"


const Button = ({changer}) => {
  function handleClick() {
    changer();
    window.scrollTo(0, 0);
  }
  return (
    <div className="btn-form" onClick={handleClick}>
      Register
    </div>
  )
}

const Event = ({ change }) => {
  function click() {
    change();
  }

  const featured_events = [
    ["Day 1", "15th Oct", "11:00 AM","Venue", "Pallakotsavam and Vigraha Prathistha", "Pallakotsavam refers to the grand procession where deities are carried in a palanquin", img1],
    ["Day 2", "16th Oct", "6:30 PM","Venue", "Shakti Moolam Balley", "Shakti Moolam symbolizes the divine feminine energy as the foundational force in Hindu Culture.", img2],
    ["Day 3", "17th Oct","6:30 PM", "Venue","Statewise Cultural Dances", "Statewise cultural dances in India showcase the nation's rich diversity, each state having its distinct traditional dance forms", img3],
    ["Day 4", "18th Oct","6:30 PM","Venue", "Khel Mela", "A carnival of traditional and modern games, fostering an atmosphere of fun and friendly competition.",img4],
    ["Day 5", "19th Oct","6:30 PM","Venue", "Ten Team Games", "Engaging team-based games designed to promote teamwork, collaboration, and leadership skills.",img5],
    ["Day 6", "20th Oct","10:00 am","Venue", "Competitions", "Engaging competitions showcasing students' talents by fostering friendly rivalry and diverse art forms.",img6],
    ["Day 7", "21st Oct","10:00 AM", "Venue","Treasure Hunt", "Thrilling treasure hunt, combining elements of exploration, intellectual challenge, and camaraderie.",img7],
    ["Day 8", "22nd Oct","6:30 PM", "Venue","Bathukamma", "Vibrant celebration of Telangana's Bathukamma festival, incorporating traditional rituals.",img8],
    ["Day 9", "23rd Oct","7:30 PM", "Venue","Ravan Dahan", "Ravan Dahan is a Hindu ritual symbolizing the victory of good over evil, where an effigy of the demon king Ravana is burned.",img9],
  ];
  function day_selected() {
    return (  
      <div className="timeline">
        <div className="grid-container">
        {
          featured_events.map((event) => (
            <div className="box" key={event[0]}>
              <div className="box-container">
                <div className="box-img">
                <img src={event[6]} className="" />
                </div>
                <div className="box-content">
                  <div className="box-content-div2">
                    <h6 style={{fontSize:"15px"}}>{event[0]}</h6>
                    <h6 style={{fontSize:"15px"}}>({event[1]})</h6>
                  </div>
                  <div>
                    <div className="box-content-h5">
                      <h5 style={{fontSize:"18px"}}>{event[4]}</h5>
                    </div>
                    <div className="box-content-div1">
                      <h6 style={{fontSize:"15px"}}>{event[2]}</h6>
                      <h6 style={{fontSize:"15px"}}>({event[3]})</h6>
                    </div>
                  </div>
                  <br/>
                  <p style={{fontSize:"12px"}}>{event[5]}</p>
                </div>
              </div>
          </div>
          ))
          }
        </div>
      </div>
    )
  }
  return (
    <div className="container-event" id='events'>
      <div className="section-event">
        <h2 style={{fontFamily: "Signika Negative, sans-serif"}}>Featured Events</h2>
        {
            day_selected()
        }
        <div>
          <Button changer={click} />
        </div>
      </div>
    </div>
  )
}

export default Event
