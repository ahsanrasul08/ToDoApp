import { useState } from 'react'


export default function TodoItem(props) {

    let TodoItems = props.taskList?.map((task) => {
 
        return <li id={task.id} key={task.id} className='todo__item'>
            <div className='todo__item__task'>
                <input className='todo__checkbox'
                    type="checkbox"
                    onChange={() => { props.completeToDo(task.id) }}
                    checked={task.complete}
                />
                <p>{task.taskName}</p>
            </div>
            <div className='todo__item__btnControls'>
                <button onClick={() => { props.editToDo(task.id) }}>Delete</button>
                <button onClick={() => { props.DeletToDo(task.id) }}>Delete</button>
            </div>
        </li>
    })
    return (
        <>
            {TodoItems}
        </>
    )
}


