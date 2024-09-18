export default function TaskQueues(){
    return (<>
    <div id="todo__queues">
      <button className="todo__queue__btn todo__queue__active">Active</button>
      <button className="todo__queue__btn todo__queue__pending">Pending</button>
      <button className="todo__queue__btn todo__queue__completed">Completed</button>
    </div>
    </>)
}