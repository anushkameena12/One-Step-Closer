import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  const todos = [
    { input: "Buy groceries", complete: false },
    { input: "Walk the dog", complete: true },
    { input: "Read a book", complete: false },
    { input: "Finish homework", complete: true },
    { input: "Clean the house", complete: false },

  ]



  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoInput/>
      <TodoList todos={todos}/>
    </>
    
  )
}

export default App
