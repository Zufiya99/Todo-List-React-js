import React, { useState } from 'react'

function Todo() {

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    function handleClick(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItems(){
        setItems(prevValue=> [...prevValue, inputText])
    }
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
                <div className="form">
                    <input type="text" value={inputText} onChange={handleClick}/>
                    <button onClick={addItems}>
                        <span>Add</span>
                    </button>
                </div>
                <div>
                    <ul>
                        {items.map((item)=><li>{item}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo
