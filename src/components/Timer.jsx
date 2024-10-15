import React, {useState, useEffect} from 'react'
import './css/times.css'

const Timer = ({mins, color}) => {
    const [minutes, setMinutes] = useState(mins);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setMinutes(mins);
        setSeconds(0);
        setIsActive(false); // Optional: stop the timer when the prop changes
      }, [mins]);

    useEffect(() => {
        let intervalId;
    
        if (isActive) {
          intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
              if (prevSeconds > 0) {
                return prevSeconds - 1;
              } else if (minutes > 0) {
                setMinutes((prevMinutes) => prevMinutes - 1);
                return 59; // Reset seconds to 59 when minutes decrease
              } else {
                // Stop timer when it reaches 0
                setIsActive(false);
                setMinutes(mins);
                alert("Time's up!")
                return 0;
              }
            });
          }, 1000);
        }
    
        return () => clearInterval(intervalId);
      }, [isActive, minutes]);

    // restart the timer
    const resetTimer = () => {
        setMinutes(mins);
        setSeconds(0);
        setIsActive(false);
    };


  return (
    <div className='timer-cont'>
        <h1 className='time'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        <div className='btns'>
            <button className='btn' style={{color: color}} onClick={() =>  setIsActive(!isActive)}>
                {isActive ? 'Pause': 'Start'}
            </button>
            <button className='btn' style={{color: color}} onClick={resetTimer}>
                Reset
            </button>
        </div>
    </div>
  )
}

export default Timer