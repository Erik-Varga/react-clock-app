import React, { useState, useEffect } from 'react';
import Footer from './Footer';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

let rndInt = randomIntFromInterval(1, 8);

const Clock = () => {
    const [time, setTime] = useState('00:00:00 xm');
    const [date, setDate] = useState('day, month 00, 0000');
    const [randomInt, setRandomInt] = useState('');

    useEffect(() => {
        setInterval(() => {
            const dt = new Date();
            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            let hour = dt.getHours();
            let minute = dt.getMinutes();
            let second = dt.getSeconds();
            let xm = (hour >= 12) ? 'PM' : 'AM';

            hour = (hour > 12) ? hour - 12 : hour;
            hour = (hour < 10) ? '0' + hour : hour;
            minute = (minute < 10) ? '0' + minute : minute;
            second = (second < 10) ? '0' + second : second;

            let newTime = `${hour}:${minute}:${second} ${xm}`;
            setTime(newTime);
            
            let dayIndex = dt.getDay();
            let dayName = dayNames[dt.getDay()];

            let monthIndex = dt.getMonth();
            let monthName = monthNames[dt.getMonth()];

            let today = dt.getDate();
            let year = dt.getFullYear();
            
            today = (today < 10) ? '0' + today : today;
            
            let newDate = `${dayName}, ${monthName} ${today}, ${year}`;
            setDate(newDate);

            let newInt = setRandomInt(Math.random(1,8));

            setRandomInt(newInt);

        }, 1000);
    });

  return (

      <div className='clock'>
        <h1>{time}</h1>
        <p>{date}</p>
        <Footer />
      </div>
  ); 
};

export default Clock;
