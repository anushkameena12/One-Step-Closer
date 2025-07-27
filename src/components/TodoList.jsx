import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props
    const filtertodolist = selectedTab === "All" ? todos : 
    selectedTab === "Done" ? 
        todos.filter(todo => todo.complete) : 
        todos.filter(todo => !todo.complete)
    
    return(
       <>
       {filtertodolist.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex}
            todoIndex={todos.findIndex(val => val.input == todo.input )}
            {...props}
            todo = {todo}/>
                )
                

        
        
       })}
       </>
    )
}