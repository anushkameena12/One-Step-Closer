export function Header(props) {
    const { todos } = props
    const todoLength = todos.length
    const isPlural = todoLength !== 1
    const taskText = isPlural ? "tasks" : "task"

    
    return (
        <header>
            <h1>TO-DO LIST !</h1>
            <h1 className="text-gradient">You have {todoLength} {taskText} left.</h1>
        </header>
    )
}