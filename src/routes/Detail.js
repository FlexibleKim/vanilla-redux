import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Detail = () => {
    const id = useParams().id;
    const toDos = useSelector(state => state)
    const todoText = toDos.find((todo) => todo.id === parseInt(id))
    
    return (
        <>
            <h1>{todoText?.text}</h1>
            Created at : {todoText?.id}
        </>
    );
}

export default Detail;