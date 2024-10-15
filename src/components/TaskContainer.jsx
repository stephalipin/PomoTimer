import React, {useState} from 'react'
import './css/task-container.css'
import TodoList from './TodoList';
import { IoSendSharp } from "react-icons/io5";

const TaskContainer = ({fontColor}) => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    //add new task to the list
    const handleAddTask = () => {
        // ignore empty input from user
        if(inputValue.trim() === '') return; 
        // add to task array
        setTasks([...tasks, {text : inputValue, isDone: false}]); 
        // clear input field after adding
        setInputValue('');
    };

    // Handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Mark task as done
    const handleTaskDone = (index) =>{
        const updateTask = tasks.map((task,i) =>
            i === index ? {...task, isDone: !task.isDone}  : task
        );
        setTasks(updateTask);
    };

    //delete Tasks
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task by index
        setTasks(updatedTasks);
    };

  return (
    <div className='task-container'>
        <p className='task-title'>Task</p>
        <div className='task-input-cont'>
            <input 
                className='task-input' 
                type="text" 
                placeholder='What needs to done?'
                value={inputValue}
                onChange={handleInputChange} />
            <button className='btn-task'  onClick={handleAddTask} ><IoSendSharp size={30} color={fontColor}/>
            </button>
        </div>
        <TodoList tasks={tasks} handleTaskDone={handleTaskDone} handleDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default TaskContainer