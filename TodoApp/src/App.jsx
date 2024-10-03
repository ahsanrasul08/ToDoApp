import Form from "./components/form";
import Todo from "./components/todo_item";
import TaskQueues from "./components/task_queues";
import { useState } from "react";

function App(props) {

  const taskQueue = [
    { queueName: "all", active: true, id: crypto.randomUUID() }
    , { queueName: "active", active: false, id: crypto.randomUUID() }
    , { queueName: "complete", active: false, id: crypto.randomUUID() }
  ]


  const [tasks, setTask] = useState([]);
  const [currentTaskQueue, updateQueue] = useState(taskQueue)

  let taskCount = tasks.length;

// Find the active queue
const activeQueue = currentTaskQueue.find((queue) => {if(queue.active === true) return queue});

let taskList=[]

if (activeQueue.queueName === "all") {
  taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
      editToDo={editToDo}
    />
  ));
} else if (activeQueue.queueName === "active") {
  taskList = tasks
    ?.filter((task) => task.completed === false)
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editToDo={editToDo}
      />
    ));
} else if (activeQueue.queueName === "complete") {
  taskList = tasks
    ?.filter((task) => task.completed === true)
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editToDo={editToDo}
      />
    ));
}













  const queueList = currentTaskQueue.map((queue) => (
    <TaskQueues
      queueName={queue.queueName}
      activeStatus={queue.active}
      id={queue.id}
      key={queue.id}
      changeQueue={changeQueue}
    />
  ))


  function changeQueue(id, activeStatus) {
    let updateTaskQueue = currentTaskQueue.map((queue) => {
      if (queue.id === id) {
        queue.active = true;
      }
      else {
        queue.active = false;
      }

      return queue;
    })
    updateQueue(updateTaskQueue);

  }

  function addTask(taskName) {
    let newTask = { id: crypto.randomUUID(), name: taskName, completed: false }
    setTask([...tasks, newTask]);
  }


  function deleteTodo(id) {
    let updateTasks = tasks.filter((task) => {
      if (task.id != id) {
        return task;
      }
    });
    setTask(updateTasks);
  }

  function completeTodo(id) {
    let updateTasks = tasks.map((task) => {
      if (task.id == id) {
        task.completed = !task.completed
      }
      return task;
    });
    setTask(updateTasks);
  }

  function editToDo(id, updatedTaskname) {
    let updateTasks = tasks.map(((task) => {
      if (task.id == id) {
        task.name = updatedTaskname;
      }
      return task;
    }))
    setTask(updateTasks);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        {queueList}
      </div>
      {taskCount == 0 ? <h2 id="list-heading">No Tasks remaining</h2>
        :
        <h2 id="list-heading">{taskCount} tasks remaining</h2>
      }

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
