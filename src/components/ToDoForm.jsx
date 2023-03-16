
import React, { useState } from 'react';
import '../scss/todoform.scss';
import 'react-toastify/dist/ReactToastify.css';
export default function ToDoForm(props) {
  const [taskName, setTaskName] = useState('');
  
  const handleChange = (e) => {
    setTaskName(e.target.value);
  }
  const handleSubmit = () => {
    props.onAddTask(taskName);
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <button className='btn'></button>
      <input type="text" placeholder='Create a new task' onChange={handleChange} />
    </form>
  )
}
