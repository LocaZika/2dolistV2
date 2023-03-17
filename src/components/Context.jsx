import { createContext, useEffect, useState } from 'react'
import { get } from '../api/RESTfulApi';
import ToDo from './ToDo';
export const ToDoContext = createContext();
export default function Context() {
  const [tasks, setTasks] = useState([]);
  const getTasks = async() => {
    await get('tasks').then(res => setTasks(res.data))
  }
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <ToDoContext.Provider value={{
      tasks,
      setTasks
    }}>
      <ToDo />
    </ToDoContext.Provider>
  )
}
