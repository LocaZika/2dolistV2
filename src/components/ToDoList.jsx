import { isEmpty } from 'lodash';
import '../scss/todolist.scss';

export default function ToDoList(props) {
  const {
    tasks,
    sortTasks,
    onSetSortTasks,
    onCompleteTask,
    onRemoveTask,
    onRemoveCompletedTask
  } = props;
  const handleRemoveCompletedTask = () => {
    const taskIds = tasks.filter(({isCompleted}) => isCompleted === true).map(({id}) => id);
    onRemoveCompletedTask(taskIds);
  }
  const handleOption = (action) => {
    switch (action) {
      case 'all':
        onSetSortTasks(tasks);
        break;
      case 'active':
        onSetSortTasks(tasks.filter(task => task.isCompleted !== true));
        break;
      case 'completed':
        onSetSortTasks(tasks.filter(task => task.isCompleted === true));
        break;
      default: throw new Error(`Unknown action ${action}`);
    }
  };
  return (
    <ul className="todo-list">
      {
        isEmpty(sortTasks) === false ?
          sortTasks.map(({id, name, isCompleted}) => (
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
          <button onFocus={() => handleOption('all')} autoFocus={true}>All</button>
          <button onFocus={() => handleOption('active')}>Active</button>
          <button onFocus={() => handleOption('completed')}>Completed</button>
        </div>
        <button
          className="task-remove-completed"
          onClick={handleRemoveCompletedTask}
        >Clear completed</button>
      </li>
    </ul>
  )
}
