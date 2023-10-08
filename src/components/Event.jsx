import "./Event.css"
import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Form from './Form'


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
      ["09:30 am","Day 1","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 2": [
      ["09:30 am","Day 2","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 3": [
      ["09:30 am","Day 3","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 4": [
      ["09:30 am","Day 4","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 5": [
      ["09:30 am","Day 5","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 6": [
      ["09:30 am","Day 6","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 7": [
      ["09:30 am","Day 7","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 8": [
      ["09:30 am","Day 8","Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 9": [
      ["09:30 am","Day 9", "Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
    "Day 10": [
      ["09:30 am","Day 10", "Description"],
      ["10:00 am","Code", "Description"],
      ["12:00 am","Sleep", "Description"],
     [ "9:00 am","Day ", "Description"],
    ],
  }
  function day_selected() {
    const selected_day = day_events[selected];
    console.log(selected_day);
    return (  
      <VerticalTimeline>
        {
          selected_day.map((event) => (
            <VerticalTimelineElement
              key={event[0]}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={event[0]}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
