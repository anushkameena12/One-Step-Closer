export function TodoCard(props){
    const { todo } = props
    
    
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button>Delete</button>
            </div>

            
        </div>
    )
}