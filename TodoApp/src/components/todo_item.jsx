import { useState } from "react"

function Todo(props) {

const [isEditing,editTask] = useState(false);
const [taskName,updateTaskName] = useState(props.name);

function handleEdit(){
  editTask(true);
}

function handleTaskChange(event){
console.log(`name : ${event.target.value}`)
updateTaskName(event.target.value);
}

function handleTaskSave(id){
props.editToDo(id,taskName);
editTask(false);
  
}


  let viewTemplate = (
    <>
      <div className="c-cb">
        <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => { props.completeTodo(props.id) }} />
        <label className="todo-label" htmlFor={props.id}>
          {taskName}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={handleEdit}>
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button onClick={() => { props.deleteTodo(props.id) }} type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </>
  )


  let editTemplate = (
    <>
      <div className="c-cb">
        <input id={props.id} type="text" value={taskName} 
        onChange={handleTaskChange} 
        onBlur={() => {handleTaskSave(props.id)}}
        onSubmit={() => {handleTaskSave(props.id)}}
         className="input input__lg"/>
      </div>
      <div className="btn-group">
        <button onClick={() => {handleTaskSave(props.id)}} type="button" className="btn">
          Save<span className="visually-hidden">Eat</span>
        </button>
        <button onClick={() => { props.deleteTodo(props.id) }} type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </>
  )


  return (
    <li className="todo stack-small" key={props.id}>
      {isEditing ? editTemplate : viewTemplate}
    </li>
  );
}

export default Todo;
