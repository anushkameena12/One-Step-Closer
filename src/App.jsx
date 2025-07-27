import { useState, useEffect } from "react"
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

  const [selectedTab, setSelectedTab] = useState("All")


 function handleAddToDo(newToDo) {
  const filteredTodos = todos.filter(todo => !todo.placeholder)
  const newToDoList = [...filteredTodos, {input: newToDo, complete: false}]
  setToDos(newToDoList)
  handleSaveData(newToDoList)
  


 }

 function handleDeleteToDo(index) {
  let newToDoList = todos.filter((val, valIndex) => {
    return valIndex !== index
  })
  setToDos(newToDoList)
  handleSaveData(newToDoList)
 }



 function handleCompleteToDo(index){
  let newToDoList = [...todos]
  let completedToDo = newToDoList[index]
  completedToDo['complete'] = true
  newToDoList[index] = completedToDo
  setToDos(newToDoList)
  handleSaveData(newToDoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-list', JSON.stringify({ todos: currentTodos }))

  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-list')) {return}
    let db = JSON.parse(localStorage.getItem('todo-list'))
    setToDos(db.todos)
    
  }, [])
 

  
  





  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab = { selectedTab } setSelectedTab= {setSelectedTab} todos={todos}/>
      <TodoList handleCompleteToDo={handleCompleteToDo} handleDeleteToDo={handleDeleteToDo} selectedTab={selectedTab}  todos={todos}/>
      <TodoInput handleAddToDo={handleAddToDo}/>
    </>
    
  )
}

export default App
