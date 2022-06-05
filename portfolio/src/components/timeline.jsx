import React from 'react';
import timelineData from '../data';
import TimelineItem from './timelineItem';


const Timeline = () =>
    timelineData.length > 0 && (
        <div style={{
            backgroundColor: 'rgba(52, 52, 52, 0.8)'
          }}>
            {/* <h3 className="title-a">
                My Story So Far
            </h3> */}
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    );
    export default Timeline;