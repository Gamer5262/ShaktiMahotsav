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
    ["Day 1", "15th Oct", "11:00 AM","Venue", "Pallakotsavam and Vigraha Prathistha", "Description", img1],
    ["Day 2", "16th Oct", "6:30 PM","Venue", "Shakti Moolam Balley", "Description", img1],
    ["Day 3", "17th Oct","6:30 PM", "Venue","Statewise Cultural Dances", "Description", img2],
    ["Day 4", "18th Oct","6:30 PM","Venue", "Khel Mela", "Description",img2],
    ["Day 5", "19th Oct","6:30 PM","Venue", "Ten Team Games", "Description",img5],
    ["Day 6", "20th Oct","10:00 am","Venue", "Competitions", "Description",img3],
    ["Day 7", "21st Oct","10:00 AM", "Venue","Treasure Hunt", "Description",img5],
    ["Day 8", "22nd Oct","6:30 PM", "Venue","Bathukamma", "Description",img5],
    ["Day 9", "23rd Oct","7:30 PM", "Venue","Ravan Dahan", "Description",img2],
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
                    <h6>{event[0]}</h6>
                    <h6>({event[1]})</h6>
                  </div>
                  <div>
                    <div className="box-content-h5">
                      <h5>{event[4]}</h5></div>
                    <div className="box-content-div1">
                      <h6>{event[2]}</h6>
                      <h6>({event[3]})</h6>
                    </div>
                  </div>
                  <br></br>
                  <p>{event[5]}</p>
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
        <h2>Featured Events</h2>
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
