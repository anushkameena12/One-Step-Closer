import { useState } from 'react';

export function TodoInput(props) {
    const { handleAddToDo, selectedTab } = props
    const  [inputValue, setInputValue] = useState('')

    if(selectedTab == 'Done') {
        return null
    } 
    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder="Add a new task..."
               onKeyDown={(e) => {
                if(e.key === 'Enter' && inputValue) {
                    handleAddToDo(inputValue)
                    setInputValue('') // Clear input after adding
                }
               }}
               />
               
            <button onClick={() => {
                if(!inputValue) { return }
                handleAddToDo(inputValue)
                setInputValue('') // Clear input after adding 
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
            
        </div>
    )
}