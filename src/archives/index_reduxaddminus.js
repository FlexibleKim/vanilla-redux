//yarn add redux
import {createStore} from "redux";

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = "ADD"
const MINUS = "MINUS"

//data를 수정하는 function
const countModifier = (count = 0/*0은 state의 initialize */, action) => {
  switch(action.type) {
    case ADD:
      return count + 1 
    case MINUS:
      return count - 1
    default:
      return count
  }
}

const countStore = createStore(countModifier)//countModifier를 reducer라고 함

const onChange = () => {
  number.innerText = countStore.getState()
}

countStore.subscribe(onChange) //redux data가 변경될 때마다 불림



add.addEventListener("click", ()=> countStore.dispatch({type:ADD}))
minus.addEventListener("click", ()=> countStore.dispatch({type:MINUS}))

console.log(countStore.getState())