import { useState, useEffect } from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import '../scss/todo.scss';
import ToDoTheme from './ToDoTheme';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { get, post, update, remove } from '../api/RESTfulApi';

export default function ToDo(props) {
  const [tasks, setTasks] = useState([]);
  const getData = async() => await get('tasks').then(data => {
    setTasks(data.data);
  });
  useEffect(() => {
    getData();

  }, [])
  const handleAddTask = (taskName) => {
    if(taskName.trim() !== ''){
      const task = {
        name: taskName,
        isCompleted: false
      };
      post('tasks', task);
      setTasks([task, ...tasks]);
      toast.success("Task is added successfully", {
        icon: '🔥',
      });
    }else{
      toast.error("Please enter the content task", {
        icon: '😑',
      })
    }
  }
  const handleCompleteTask = (taskId) => {
    const tasksClone = [...tasks];
    const index = tasksClone.findIndex(({id}) => id === taskId);
    let checkComplete = tasksClone[index].isCompleted;
    checkComplete = !tasksClone[index].isCompleted;
    const data = {isCompleted: checkComplete};
    try {
      update('tasks', taskId, data);
      tasksClone[index].isCompleted = checkComplete;
      setTasks([...tasksClone]);
      toast.info("Task is updated successfully",{
        icon : "🌈",
      });
    } catch (error) {
      console.log(error);
    }
  }
  const handleRemoveTask = (taskId) => {
    const tasksClone = [...tasks];
    const index = tasksClone.findIndex(({id}) => id === taskId);
    try {
      remove('tasks', taskId);
      tasksClone.splice(index, 1);
      setTasks([...tasksClone]);
      toast.info("Task is removed successfully",{
        icon : "🌈",
      });
    } catch (e) {
      console.log(e);
    }
  }
  const handleRemoveCompletedTask = (taskIds) => {
    const tasksClone = [...tasks];
    const inCompletedTasks = tasksClone.filter(task => task.isCompleted !== true);
    try {
      taskIds.forEach(taskId => remove('tasks', taskId));
      setTasks([inCompletedTasks])
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className='todo'>
      <ToDoTheme {...props} />
      <ToDoForm onAddTask={handleAddTask} />
      <ToDoList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onRemoveTask={handleRemoveTask}
        onRemoveCompletedTask={handleRemoveCompletedTask}
      />
      <ToastContainer
        autoClose={1000}
        transition={Slide}
        style={{fontSize: '1.4rem'}}
      />
    </div>
  )
}
