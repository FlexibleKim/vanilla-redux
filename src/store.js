import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";



/*const reducer = (state = [], action) => {
    switch(action.type) {
        case addTodo.type :
            return [{text:action.payload, id: Date.now()}, ...state]
        case deleteTodo.type : 
            return state.filter(todo => todo.id !== action.payload)
        default :
            return state
    }
}*/

/* //v2
export const addTodo = createAction("ADD")
export const deleteTodo = createAction("DELETE")
//action과 payload만 존재 

//mutate -> 새로 만들지 않고 기존 구조체를 쓰는것  배열에서 push pop 쓰는 것처럼... 이건 원래 리듀서에서 용인안됨
//createReducer는 써도됨... 알아서 새로 만들어 주는듯
const reducer = createReducer([],{
    [addTodo] : (state, action) => {
        state.push({text:action.payload, id: Date.now()}) // mutation해서 기존 state 변경, return 할 필요없음. 허용됨...
    },
    [deleteTodo] : (state, action) => 
        state.filter(todo => todo.id !== action.payload)    //mutation안하고 바로 넘겨주는 것
})
*/

const toDos = createSlice({
    name : 'toDosReducer',
    initialState : [],
    reducers: {
        add: (state, action) => {
            state.push({text:action.payload, id: Date.now()}) // mutation해서 기존 state 변경, return 할 필요없음. 허용됨...
        },
        remove: (state, action) => 
            state.filter(todo => todo.id !== action.payload)    //mutation안하고 바로 넘겨주는 것

    }
})// createSlice로 하면 reducer와 createAction을 동시에 만들어줌....짱!!!



//const store = createStore(reducer)
//const store = configureStore({reducer})
const store = configureStore({reducer : toDos.reducer})

export const { add, remove} = toDos.actions;
//redux developer tool 사용 가능 

export default store;

