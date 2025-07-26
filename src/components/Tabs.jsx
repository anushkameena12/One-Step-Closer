export function Tabs(props){
    const { todos } = props
    const tabs = ["All", "To-Do", "Done"]
    return (
            <nav className="tab-container">
                {tabs.map((tab, tabIndex) => {
                    // Here you can implement logic to count todos based on their status
                    const numofTasks = tab === "All" ? todos.length : tab === "To-Do" ? todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length

                    return (
                        <button key={tabIndex}
                        className="tab-button">
                            <h4>{tab}
                                <span>
                                    ({numofTasks})
                                </span>
                                </h4>
                        </button>
                    )
                })}
                
            </nav>

      
    )
}