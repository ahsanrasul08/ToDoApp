import { useState } from 'react'

import TaskQueues from './components/task_queues'
import TodoItem from './components/todo_item'
import TodoForm from './components/form'
import './App.css'

function App() {
return (
<>
<div className='wrapper'>
  <div className='TodoApp'>
    <TodoForm />
    <TaskQueues/>

    <ul className='todo__item__list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  </div>
</div>
</>
)
}

export default App
