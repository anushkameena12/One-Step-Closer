import dayjs from 'dayjs'
export function Header(props) {
    const today = dayjs().format('dddd, MMMM D, YYYY')
    const { todos } = props
    const activeTodos = todos.filter(todo => !todo.complete)
    const todoLength = activeTodos.length
    const isPlural = todoLength !== 1
    const taskText = isPlural ? "tasks" : "task"
    

    
    return (
        <header>

            <div className="todo-heading text-gradient-secondary">TO-DO LIST !
            </div>
                <h3 className='date-heading'>({today})</h3> 
            <div>
                <h2 className="text-heading">You have {todoLength} {taskText} left.
                </h2>
            </div>

            
        </header>
    )
}