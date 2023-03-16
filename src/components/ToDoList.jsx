import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react'
import '../scss/todolist.scss';
export default function ToDoList(props) {
  const [sortTasks, setSortTasks] = useState([]);
  const {tasks, onCompleteTask, onRemoveTask, onRemoveCompletedTask} = props;
  useEffect(() => {
    setSortTasks([...tasks]);
  }, [])
  const handleRemoveCompletedTask = () => {
    const taskIds = tasks.filter(({isCompleted}) => isCompleted === true).map(({id}) => id);
    onRemoveCompletedTask(taskIds);
  }
  return (
    <ul className="todo-list">
      {
        isEmpty(tasks) === false ?
          tasks.map(({id, name, isCompleted}) => (
            <li key={id} className={
              isCompleted === true ? 'task-done' : null
            }>
              <button className='btn' onClick={() => onCompleteTask(id)}></button>
              <span>{name}</span>
              <button className='remove' onClick={() => onRemoveTask(id)}></button>
            </li>
          )) :
          <li className='empty-list'>Empty List</li>
      }
      <li>
      <span
        className="task-count">
        {
          tasks.filter(task => task.isCompleted === false).length
        } task left
      </span>
      <div className="task-control">
        <button >All</button>
        <button >Active</button>
        <button >Completed</button>
      </div>
      <button
        className="task-remove-completed"
        onClick={handleRemoveCompletedTask}
      >Clear completed</button>
    </li>
    </ul>
  )
}
