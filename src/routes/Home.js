import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add as addTodo} from "../store"
import ToDo from "../components/ToDo"

function Home() {
    const [text, setText] = useState("")
    const todos = useSelector((state) => state)
    const dispatch = useDispatch();

    console.log(todos)
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        dispatch(addTodo(text))
        setText("")
    }
    return (
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {todos.map(todo => <ToDo {...todo}/>)}
            </ul>
        </>
    )
}


export default Home;