export default function TodoItem() {
    return (
        <>
            <li className='todo__item'>
                <div className='todo__item__task'>
                    <input className='todo__checkbox' type="checkbox" /><p>Todo Task</p>
                </div>
                <div className='todo__item__btnControls'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </li>
        </>
    )
}