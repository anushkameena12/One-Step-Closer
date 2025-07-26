import { useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  // const todos = [
  //   { input: "Buy groceries", complete: false },
  //   { input: "Walk the dog", complete: true },
  //   { input: "Read a book", complete: false },
  //   { input: "Finish homework", complete: true },
  //   { input: "Clean the house", complete: false },

  // ]

  const [todos, setToDos] = useState([
    { input: "Hello! Add Your First To-Do!", complete: true, placeholder: true }
  ]) 


 function handleAddToDo(newToDo) {
  const filteredTodos = todos.filter(todo => !todo.placeholder)
  const newToDoList = [...filteredTodos, {input: newToDo, complete: false}]
  setToDos(newToDoList)
  


 }

 function handleDeleteToDo() {

 }

 function handleCompleteToDo() {

 }



  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput handleAddToDo={handleAddToDo}/>
    </>
    
  )
}

export default App
