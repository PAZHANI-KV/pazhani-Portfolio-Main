import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa'



const Education = () => {
  return (
    <section id='education'>
      <h5>What I have studied</h5>
      <h2>Education</h2>
         
<VerticalTimeline>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.4) ' }}
           date='2014 - 2018'
           iconStyle={{  background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Vel Tech High Tech Engineering College</h3>
          <p className="vertical-timeline-element-subtitle">Bachelor Degree in Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="2012 - 2014"
           iconStyle={{ background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Valluvar Matriculation Higher Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle">Higher Secondary</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="2005 - 2012"
           iconStyle={{background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Sacred Heart Matriculation Higher Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle">Lower Secondary</h4>
        </VerticalTimelineElement>
        
     </VerticalTimeline>
      </section >
  )
}

export default Education

/*  */