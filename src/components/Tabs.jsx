export function Tabs(props){
    const { todos, selectedTab, setSelectedTab, } = props
    const tabs = ["All", "To-Do", "Done"]
    return (
            <nav className="tab-container">
                {tabs.map((tab, tabIndex) => {
                    const numofTasks = tab === "All" ? todos.length : tab === "To-Do" ? todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length

                    return (
                        <button onClick={() => {
                            setSelectedTab(tab)}} 
                        key={tabIndex}
                        className={"tab-button " + 
                        (tab === selectedTab ? "tab-selected" : " ")}>
                            <h4>{tab}
                                <span>
                                    ({numofTasks})
                                </span>
                                </h4>
                        </button>
                    )
                })}
                <hr />
            </nav>

      
    )
}


    