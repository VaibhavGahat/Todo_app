import React, { useState } from "react";
import { addToDo, deletToDo, removeToDo } from "../Actions";
import { useSelector, useDispatch } from "react-redux";
import "./list.css";

const List = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <div className="main-div"> 
    <div className="child-div">
        <h3 className="heading">Add list here </h3>

        <div className="addItems">
          <input
            className="input-area"
            type="text"
            placeholder="Enter your task here"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => dispatch(addToDo(input), setInput(""))}
          >
            Add
          </button>
        </div>
        </div>
       
          {list.map((ele) => {
            return (
              <div className="items" key={ele.id}>
                <h3>{ele.data}</h3>
                <button
            className="add-btn"
                  onClick={() => dispatch(deletToDo(ele.id))}
               >Remove</button>
                
              </div>
            );
          })}
                  <button
            className="chcklist-btn"
                  onClick={() => dispatch(removeToDo())}
               >CheckList</button>
    
        </div>
  );
};

export default List;
