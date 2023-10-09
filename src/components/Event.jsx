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
import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Form from './Form.jsx';


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
    ["Day 2", "6:30 PM", "Shakti Moolam Balley", "Description", img1],
    ["Day 3", "6:30 PM", "Statewise Cultural Dances", "Description", img2],
    ["Day 5", "6:30 PM", "Khel Mela", "Description",img2],
    ["Day 6", "6:30 PM", "Ten Team Games", "Description",img5],
    ["Day 7", "10:00 am", "Competitions", "Description",img3],
    ["Day 8", "10:00 AM", "Treasure Hunt", "Description",img5],
    ["Day 9", "6:30 PM", "Bathukamma", "Description",img5],
    ["Day 10", "7:30 PM", "Ravan Dahan", "Description",img2],
  ];
  const [selected, setSelected] = useState("Day 1");
  let days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"];
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
                <div className="box-content">
                <h5>{event[2]}</h5>
                <br></br>
                <h6>{event[0]}</h6>
                <br></br>
                <h6>{event[1]}</h6>
                <br></br>
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
  function days_change() {
    const selected_day = day_events[selected];
    return (  
      <VerticalTimeline>
        {
          selected_day.map((event) => (
            <VerticalTimelineElement
              key={event[0]}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={event[0]}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' , width:"25px", height:"25px", marginLeft:"-12.5px", marginTop:"20px"}}
              animate={true}
            >
              <h4 className="vertical-timeline-element-title">{event[1]}</h4>
              <p className="vertical-timeline-element-subtitle">{event[2]}</p>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    )
  }
  return (<div>
    <div className="container-event" id='events'>
      <div className="section-event">
        <h2>Featured Events</h2>
        {
            day_selected()
        }
        <div>
          <Button changer={click} />
        </div>
      </div>
    </div>
    <div className="container-event" id='events'>
      <div className="section-event">
        <div className="days-change">

          {days.map((day) => (
            <button
              key={day}
              className={selected === day ? " selected" : "btn-event"}
              onClick={() => setSelected(day)}
            >
              {day}
            </button>
          ))}
          
        </div>
        {
            days_change()
        }
      </div>
    </div>
  </div>
  )
}

export default Event
