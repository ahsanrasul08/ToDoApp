import { useState } from 'react'

export default function TodoForm(props) {
  const [name, setName] = useState("")

  function handleChange(event) {
    let taskName = event.target.value;
    setName(taskName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTodo(name);
    setName("");
  }

  return (
    <>
      <form id="todo__form" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={name} id="todo__input" type="text" placeholder='Type your task item' />
        <button id="todo__submit" type='submit' >Submit</button>
      </form>
    </>
  )
}