
import TaskQueues from './components/task_queues';
import TodoItem from './components/todo_item';
import TodoForm from './components/form';
import './App.css';
import { useState } from 'react'



function App() {

  

  const [taskList,setTask]=useState([]);


  function DeletToDo(id){
    console.log(`id :${id}`)

    let updatedTaskList=taskList.filter((task)=>{
      if(task.id!=id){
        return task;
      }
    });
    setTask(updatedTaskList);
  }

  function addTodo(taskName){
    console.log(`add todo ${taskName}`);
    console.log(`Task List : ${taskList}`)
 
    let newTask={id:crypto.randomUUID(), taskName, completed:false, edit:false}

    setTask([...taskList,newTask]);
  }

  function completeToDo(id){
    console.log(id)
     let updatedTaskList=taskList.map((task)=>{
      if(task.id==id){
       task.completed = !task.completed
       console.log("test");
      }
      return task;
    })
    setTask(updatedTaskList);
  }

  function editToDo(id,name){
    let updatedTaskList=taskList.map((task)=>{
      if(task.id==id){
       task.taskName = name
      }
      return task;
    })
    setTask(updatedTaskList);
  }

return (
<>
<div className='wrapper'>
  <div className='TodoApp'>
    <TodoForm addTodo={addTodo} />
    <TaskQueues/>

    <ul className='todo__item__list'>
      <TodoItem 
      taskList={taskList} 
      DeletToDo={DeletToDo} 
      completeToDo={completeToDo}
      editToDo={editToDo} />
    </ul>
  </div>
</div>
</>
)
}

export default App
