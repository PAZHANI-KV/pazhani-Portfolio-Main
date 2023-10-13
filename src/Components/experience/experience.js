import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBriefcase} from 'react-icons/fa'



const Experience = () => {
  return (
    <section id='experience'>
        <h5>Previous Employment</h5>
      <h2>Experience</h2>
      
         
<VerticalTimeline>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.4) ' }}
           date='JANUARY 2019 - DECEMBER 2019'
           iconStyle={{  background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">ERP END USER</h3>
          <p className="vertical-timeline-element-subtitle">TI Cycles of India (CHENNAI)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="FEBRUARY 2022 - OCTOBER 2022"
           iconStyle={{ background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">BUSINESS DEVELOPMENT ASSOCIATE</h3>
          <h4 className="vertical-timeline-element-subtitle">Nxt Wave (CHENNAI)</h4>
        </VerticalTimelineElement>
      
        
     </VerticalTimeline>
      </section >
  )
}

export default Experience