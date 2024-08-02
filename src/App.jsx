import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../toDolist";
import { myDel } from "../toDolist";


const App=()=>{
const[val,setVal]=useState("");
const work=useSelector((State)=>State.todolist.task);
// const delet=useSelector((State)=>State.todolist.task)
const mydispatch=useDispatch();

const taskAdd=()=>{
  mydispatch(addTask({id:Date.now(), task:val}))
  setVal("");
}


  const del = (index) => {
    mydispatch(myDel(index));
  };


let sno=0;
const ans=work.map((key)=>{
  sno++
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.task}</td>
      <td><button type="delete" onClick={del(index)}>Delete</button></td>
      </tr>    
    </>
  )
})




  return(
    <>
    <h1> To do list</h1>
    <input type="text" placeholder="enter your task" value={val} onChange={(e)=>{setVal(e.target.value)}} />
    <button onClick={taskAdd}>add</button>

    <table>
      <thead>
        <th>Number</th>
        <th>Task</th>
        <th>Delete</th>
      </thead>
      <tbody>{ans}</tbody>
    </table>
    </>
  )
}

export default App;