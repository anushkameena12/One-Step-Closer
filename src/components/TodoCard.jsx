export function TodoCard(props){
    const { todo, handleDeleteToDo, todoIndex, handleCompleteToDo } = props
    
    
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete}
                onClick={() => {
                    handleCompleteToDo(todoIndex)
                }}>
                    
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