import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos } = props
    const tab = "All" 
    const filtertodolist = tab === "All" ? todos : 
    tab === "Done" ? 
        todos.filter(todo => todo.complete) : 
        todos.filter(todo => !todo.complete)
    
    return(
       <>
       {filtertodolist.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex}
            todo = {todo}/>
                )

        
        
       })}
       </>
    )
}