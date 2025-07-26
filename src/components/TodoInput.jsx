import { useState } from 'react';

export function TodoInput(props) {
    const { handleAddToDo } = props
    const  [inputValue, setInputValue] = useState('')
    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder="Add a new task..." />
            <button onClick={() => {
                if(!inputValue.trim() === '') { return }
                handleAddToDo(inputValue)
                setInputValue('') // Clear input after adding 
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
            
        </div>
    )
}