import React from 'react';
import CountUp from 'react-countup';
const CounterCard = () => {
    const countersData = [
      { label: 'Expert Tutors', start: 0, end: 6, duration: 1, color: 'white' },
      { label: 'Courses', start: 0, end: 118, duration: 3, color: 'white' },
      { label: 'Enrolled Students', start: 0, end: 126, duration: 4, color: 'white' },
      { label: 'Years Of Establishment', start: 0, end: 6, duration: 1, color: 'white' }
    ];
  
    return (
      <div className="py-5 bg-blue-500 mx-auto bg-cover w-screen overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3-4 text-center py-4 bg-light rounded pb-5">
          {countersData.map((counter, index) => (
            <div key={index} className="col-span-1">
              <CountUp start={counter.start} end={counter.end} duration={counter.duration}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} className="font-bold text-5xl mb-5" style={{ color: 'white' }}>
                      {counter.end}
                    </span>
                    <p className="text-xl" style={{ color: counter.color }}>
                      <b>{counter.label}</b>
                    </p>
                  </div>
                )}
              </CountUp>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CounterCard;
  