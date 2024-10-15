import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import TimerOptions from './components/TimerOptions'
import TaskContainer from './components/TaskContainer';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#3f88fc');

  const onChangeBackgroundColor = (color => {
    setBackgroundColor(color);
  })

  return (
    <div className='app-container' style={{backgroundColor, height: '100vh', transition: 'background-color 0.5s', margin: 'auto'}}>
      <Navigation title={'PomoTimer'}/>
      <TimerOptions onChangeBackgroundColor={onChangeBackgroundColor}/>
      <TaskContainer fontColor={backgroundColor}/>
    </div>
  )
}

export default App
