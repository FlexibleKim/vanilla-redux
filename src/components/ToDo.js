import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove as deleteTodo} from "../store"

const ToDo = ({text, id}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(deleteTodo(id))
    }
        return (<li>
            <Link to ={`${id}`} >
                {text} 
            </Link>
            <button onClick={onClick}>DEL</button>
        </li>
    );
} 

export default ToDo;