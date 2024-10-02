import Form from "./components/form";
import Todo from "./components/todo_item";
import TaskQueues from "./components/task_queues";
import { useState } from "react";

function App(props) {

  const [tasks,setTask]=useState([])

  console.log(`current tasks:`)
  console.log(tasks);

  const taskList = tasks?.map((task) => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed} 
    key={task.id} 
    deleteTodo={deleteTodo}
    completeTodo={completeTodo}
    />
  ));
  

  function addTask(taskName){
    let newTask={id:crypto.randomUUID(), name:taskName, completed:false }
    setTask([...tasks,newTask]);
  }


  function deleteTodo(id){
    let updateTasks = tasks.filter((task)=>{
      if(task.id != id){
        return task;
      }
    });
    setTask(updateTasks); 
  }

  function completeTodo(id){
    let updateTasks = tasks.map((task)=>{
      if(task.id == id){
        task.completed != task.completed
      }
    });
    setTask(updateTasks);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>

      <div className="filters btn-group stack-exception">
        <TaskQueues />
        <TaskQueues />
        <TaskQueues />

      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
  
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
         {taskList}
      
      </ul>


    </div>
  );
}

export default App;
