import React, {useEffect, useState} from 'react'
import Timer from './Timer';
import './css/timerOptions.css';

const TimerOptions = ({onChangeBackgroundColor}) => {
    const [minutes, setMins] = useState(25);
    const [fontColor, setFontColor] = useState('#3f88fc')
    const [timerColor, setTimerColor] = useState('#6ea6ff')

    useEffect(() => {
        
    },[timerColor])

    const handleOptionChange = (mins, color, tcolor) => {
        setMins(mins);
        setFontColor(color);
        onChangeBackgroundColor(color);
        setTimerColor(tcolor)
    };

  return (
    <div className='container' style={{backgroundColor: timerColor}}>
        <div className='timer-opt-container'>
            <div className='btn-list'>
                <button className='btn-choice'  onClick={() => handleOptionChange(25, '#3f88fc', '#6ea6ff')}>Pomodoro</button>
                <button className='btn-choice'  onClick={() => handleOptionChange(5, '#9734e3', "#aa5fe3")}>Short Break</button>
                <button className='btn-choice'  onClick={() => handleOptionChange(15, '#f09835', '#f7a84f')}>Long break</button>
            </div>
            <Timer mins={minutes} color={fontColor}/>
        </div>
    </div>
  )
}

export default TimerOptions