export function Header(props) {
    const { todos } = props
    const activeTodos = todos.filter(todo => !todo.complete)
    const todoLength = activeTodos.length
    const isPlural = todoLength !== 1
    const taskText = isPlural ? "tasks" : "task"
    

    
    return (
        <header>
            <div className="todo-heading">TO-DO LIST !</div>
            <h1 className="text-gradient">You have {todoLength} {taskText} left.</h1>
        </header>
    )
}