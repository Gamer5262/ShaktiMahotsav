import "./Event.css"
import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Form from './Form.jsx';


function displayFrom() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Event() {
  const [selected, setSelected] = useState("Day 1");
  let days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"];
  const day_events = {
    "Day 1": [
      ["11:00 AM","Pallakotsavam and Vigraha Prathistha","Description"],
      ["5:30 PM","Sandhya Pooja", "Description"],
      ["5:45 PM","Lalitha Sahasranamam, Aarti, Kanya Pooja", "Description"],
      ["6:30 PM","Sahasra Deepa Aalankaraana", "Description"],
      ["7:30 PM","Garba", "Description"],
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
      ["10:00 am","Code", "Description"],
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
  return (
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
            day_selected()
        }
        <div>
          <button className="btn-form" onClick={displayFrom()}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Event
