import { useState } from "react";

function TaskQueues(props){

  const [activeQueue,changeActiveQueue] = useState([])

  function handleQueueChange(id,status){
    props.changeQueue(id,status)
  }

  return (<>
          <button
          key={props.id}
           id={props.id}
          aria-pressed={props.activeStatus} type="button" 
          className="btn toggle-btn"         
          onClick={()=>{handleQueueChange(props.id,props.activeStatus)}}
          >
          <span className="visually-hidden">Show </span>
          <span>{props.queueName}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        </>)
}

export default TaskQueues;

//onClick={() => {props.changeQueue(props.queueName,props.activeStatus)}}
