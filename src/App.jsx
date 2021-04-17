import React from "react";
import ReactDOM from "react-dom";
import "./App.css"

import { App } from  "./App";

export const App = () => {
  const [incompleteTodos,setIncompleteTodos] = useState(['ああああ','いいいいい']);
  const [completeTodos,setCompleteTodos] = useState(["うううう"]);
  return (
    <>
    <div>
      <input placeholder="TODOを入力"/>
      <button>追加</button>
    </div>
    <div>
      <p>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          );
        })}
        
        <div>
          <li>いいい</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
    </div>
    <div>
    <p>完了のTODO</p>
      <ul>
      {incompleteTodos.map((todo) => {
          return (
            <div key={todo}>
            <li>aaaaa</li>
            <button>戻す</button>
          </div>
          );
        })}
        
      </ul>
    </div>
    
    </>
  );
}