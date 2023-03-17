
import { useState, useRef } from 'react';
import '../scss/todoform.scss';
import 'react-toastify/dist/ReactToastify.css';
import { debounce } from 'lodash';
export default function ToDoForm(props) {
  const [taskName, setTaskName] = useState('');
  const inputRef = useRef();
  const handleChange = debounce((e) => {
    setTaskName(e.target.value);
  }, 300)
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTask(taskName);
    setTaskName('');
    inputRef.current.value = '';
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <button className='btn'></button>
      <input type="text" placeholder='Create a new task' ref={inputRef} onChange={handleChange} />
    </form>
  )
}
