
import TaskQueues from './components/task_queues';
import TodoItem from './components/todo_item';
import TodoForm from './components/form';
import './App.css';
import { useState } from 'react'



function App() {

  const [taskList,setTask]=useState([]);

  function DeletToDo(event){
    console.log("delete todo")
    let TodoItemId=event.target.closest("li").id;


    let updatedTaskList=taskList.filter((task)=>{
      if(task.id!=TodoItemId){
        console.log(TodoItemId);
        console.log(task.id);
        return task;
      }
    });


    setTask(updatedTaskList);
    console.log(updatedTaskList);
  }

  function addTodo(event){
    event.preventDefault();
    console.log("add todo")

    let taskName=event.target.form[0].value;
    let updatedTaskList=taskList.slice()
    updatedTaskList.push({id:updatedTaskList.length+1, title:taskName, complete:false, key:updatedTaskList.length+1 });
    console.log(updatedTaskList)
    setTask(updatedTaskList);
  }

return (
<>
<div className='wrapper'>
  <div className='TodoApp'>
    <TodoForm addTodo={addTodo} />
    <TaskQueues/>

    <ul className='todo__item__list'>
      <TodoItem taskList={taskList} DeletToDo={DeletToDo}/>

    </ul>
  </div>
</div>
</>
)
}

export default App
