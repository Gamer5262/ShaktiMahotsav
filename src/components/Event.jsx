import "./Event.css"
/* import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; */
/* import { Navigation } from 'swiper/modules';
import MediaQuery from 'react-responsive'; */
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img4.avif'
import img5 from '../assets/img5.avif'


const Button = ({changer}) => {
  function handleClick() {
    changer();
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
    ["Day 1", "11:00 AM", "Pallakotsavam and Vigraha Prathistha", "Description", img1],
    ["Day 1", "6:30 PM", "Sahasra Deepa Aalankaraana", "Description", img4],
    ["Day 2", "6:30 PM", "Shakti Moolam Balley", "Description", img1],
    ["Day 3", "6:30 PM", "Statewise Cultural Dances", "Description", img2],
    ["Day 4", "6:30 PM", "Sangītotsav", "Description",img1],
    ["Day 5", "6:30 PM", "Khel Mela", "Description",img2],
    ["Day 6", "6:30 PM", "Ten Team Games", "Description",img5],
    ["Day 7", "10:00 am", "Competitions", "Description",img3],
    ["Day 7", "6:30 PM", "Housie", "Description",img2],
    ["Day 8", "10:00 AM", "Treasure Hunt", "Description",img5],
    ["Day 8", "6:30 PM", "Bhagavati Seva", "Description",img1],
    ["Day 9", "11:00 AM", "Ayudh Pooja", "Description",img4],
    ["Day 9", "6:30 PM", "Bathukamma", "Description",img5],
    ["Day 10", "11:00 AM", "Nimarjan Pooja", "Description",img3],
    ["Day 10", "3:00 PM", "Nimarjanam ", "Description",img4],
    ["Day 10", "7:30 PM", "Ravan Dahan", "Description",img2],
  ];
  const day_events = {
    "Day 1": [
      ["11:00 AM","Pallakotsavam and Vigraha Prathistha","Description",img1],
      ["5:30 PM","Sandhya Pooja", "Description",img2],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description",img3],
      ["6:30 PM","Sahasra Deepa Aalankaraana", "Description",img4],
      ["7:30 PM","Garba", "Description",img5],
    ],
    "Day 2": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Shakti Moolam Balley", "Description"],
      ["9:00 PM", "Dandiya", "Description"]
    ],
    "Day 3": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Statewise Cultural Dances", "Description"],
      ["9:00 PM","Garba", "Description"],
    ],
    "Day 4": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Sangītotsav", "Description"],
      ["9:00 PM", "Dandiya", "Description"]
    ],
    "Day 5": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Khel Mela", "Description"],
      ["9:00 PM","Garba", "Description"],
    ],
    "Day 6": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Ten Team Games", "Description"],
      ["9:00 PM", "Dandiya", "Description"]
    ],
    "Day 7": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["10:00 am","Competitions", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Housie", "Description"],
      ["9:00 PM","Garba", "Description"],
    ],
    "Day 8": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["10:00 AM","Treasure Hunt", "Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Bhagavati Seva", "Description"],
      ["9:00 PM", "Dandiya", "Description"]
    ],
    "Day 9": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["11:00 AM","Ayudh Pooja", "Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Bathukamma", "Description"],
      ["9:00 PM","Garba", "Description"],
    ],
    "Day 10": [
      ["7:30 AM","Pratah Pooja and Aarti","Description"],
      ["11:00 AM","Nimarjan Pooja", "Description"],
      ["3:00 PM","Nimarjanam ", "Description"],
      ["7:30 PM","Ravan Dahan", "Description"],
    ],
  }
  function day_selected() {
    return (  
      <div className="timeline">
        <div className="grid-container">
        {
          featured_events.map((event) => (
            <div className="box" key={event[0]}>
              <div className="box-container">
                <div className="box-img">
                <img src={event[4]} className="" />
                </div>
                <div className="content">
                <h5>{event[2]}</h5>
                <h7>{event[0]}</h7>
                <br/>
                <h7>{event[1]}</h7>
                <br/>
                <p>{event[3]}</p>
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
        <h2 className="h4">Featured Events</h2>
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
