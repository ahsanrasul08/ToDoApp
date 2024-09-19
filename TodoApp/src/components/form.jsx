export default function TodoForm(props){
    return (
        <>
    <form id="todo__form">
      <input id="todo__input" type="text" placeholder='Type your task item'/>
      <button id="todo__submit" onClick={props.addTodo} type='submit'>Submit</button>
    </form>
    </>
    )
}