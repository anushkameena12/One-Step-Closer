export function TodoCard(props){
    const { todo, handleDeleteToDo, todoIndex } = props
    
    
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteToDo(todoIndex)
                }}>
                <h6>Delete</h6>
                </button>
            </div>

            
        </div>
    )
}