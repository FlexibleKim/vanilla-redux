import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo} from "../store"

const ToDo = ({text, id}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(deleteTodo(id))
    }
        return (<li>
            <Link to ={`${id}`} >
                {text} <button onClick={onClick}>DEL</button>
            </Link>
        </li>
    );
} 

export default ToDo;