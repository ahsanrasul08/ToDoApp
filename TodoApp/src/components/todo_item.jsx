export default function TodoItem(props) {
    let TodoItems = props.taskList.map((task) => {
        return <li id={task.id} key={task.id} className='todo__item'>
            <div className='todo__item__task'>
                <input className='todo__checkbox' type="checkbox"
                  />
                <p>{task.title}</p>
            </div>
            <div className='todo__item__btnControls'>
                <button >Edit</button>
                <button onClick={props.DeletToDo}>Delete</button>
            </div>
        </li>
    })
    return (
        <>
        {TodoItems}
        </>
    )
}

