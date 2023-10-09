import "./Event.css"
import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import MediaQuery from 'react-responsive';


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
      <div className="timeline">
        <MediaQuery maxWidth={3000} minWidth={1163} >
        <VerticalTimeline>
          {
            selected_day.map((event) => (
              <VerticalTimelineElement
                key={event[0]}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255,255,255,0.02)', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
                date={event[0]}
                iconStyle={{ background: '#ffffff', color: '#fff', height: '30px', width: '30px', marginLeft:'-15px'}}
              >
                <h4 className="vertical-timeline-element-title">{event[1]}</h4>
                <p className="vertical-timeline-element-subtitle">{event[2]}</p>
              </VerticalTimelineElement>
            ))
          }
          </VerticalTimeline>
        </MediaQuery>
        <MediaQuery maxWidth={1163} minWidth={0} >
        <VerticalTimeline>
          {
            selected_day.map((event) => (
              <VerticalTimelineElement
                key={event[0]}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={event[0]}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', height: '30px', width: '30px', marginLeft:'5px'}}
              >
                <h4 className="vertical-timeline-element-title">{event[1]}</h4>
                <p className="vertical-timeline-element-subtitle">{event[2]}</p>
              </VerticalTimelineElement>
            ))
          }
          </VerticalTimeline>
        </MediaQuery>
      </div>
    )
  }
  return (
    <div className="container-event" id='events'>
      <div className="section-event">
        <div className="days-change">
          <MediaQuery maxWidth={3000} minWidth={1025} >
            <Swiper
              navigation={true}
              modules={[ Navigation]}
              className="mySwiper"
              slidesPerView={8}
              >
                <div className="mySwiper">
                <SwiperSlide>
                  <button
                    className={selected === days[0] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[0])}
                  >
                    {days[0]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[1] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[1])}
                  >
                    {days[1]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[2] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[2])}
                  >
                    {days[2]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[3] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[3])}
                  >
                    {days[3]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[4] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[4])}
                  >
                    {days[4]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[5] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[5])}
                  >
                    {days[5]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[6] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[6])}
                  >
                    {days[6]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[7] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[7])}
                  >
                    {days[7]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[8] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[8])}
                  >
                    {days[8]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[9] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[9])}
                  >
                    {days[9]}
                  </button>
                  </SwiperSlide>
                </div>
            </Swiper>
          </MediaQuery>
          <MediaQuery maxWidth={1024}  minWidth={426}>
            <Swiper
              navigation={true}
              modules={[ Navigation]}
              className="mySwiper"
              slidesPerView={5}
              >
                <div className="mySwiper">
                <SwiperSlide>
                  <button
                    className={selected === days[0] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[0])}
                  >
                    {days[0]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[1] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[1])}
                  >
                    {days[1]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[2] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[2])}
                  >
                    {days[2]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[3] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[3])}
                  >
                    {days[3]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[4] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[4])}
                  >
                    {days[4]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[5] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[5])}
                  >
                    {days[5]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[6] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[6])}
                  >
                    {days[6]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[7] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[7])}
                  >
                    {days[7]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[8] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[8])}
                  >
                    {days[8]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[9] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[9])}
                  >
                    {days[9]}
                  </button>
                  </SwiperSlide>
                </div>
            </Swiper>
          </MediaQuery>
          <MediaQuery maxWidth={426} minWidth={0}>
            <Swiper
              navigation={true}
              modules={[ Navigation]}
              className="mySwiper"
              slidesPerView={3}
              >
                <div className="mySwiper">
                <SwiperSlide>
                  <button
                    className={selected === days[0] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[0])}
                  >
                    {days[0]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[1] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[1])}
                  >
                    {days[1]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[2] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[2])}
                  >
                    {days[2]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[3] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[3])}
                  >
                    {days[3]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[4] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[4])}
                  >
                    {days[4]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[5] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[5])}
                  >
                    {days[5]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[6] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[6])}
                  >
                    {days[6]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[7] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[7])}
                  >
                    {days[7]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[8] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[8])}
                  >
                    {days[8]}
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    className={selected === days[9] ? " selected" : "btn-event"}
                    onClick={() => setSelected(days[9])}
                  >
                    {days[9]}
                  </button>
                  </SwiperSlide>
                </div>
            </Swiper>
          </MediaQuery>
          
          
        </div>
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
