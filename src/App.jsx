import React,{useState} from "react";
import ReactDOM from "react-dom";
import "./App.css"
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';

import { App } from  "./App";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText,setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState([]);
  const [completeTodos,setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5}/>
    {incompleteTodos.length >= 5 && (
      <p>登録できるTodoは5個までdayo</p>
    )}
  
    <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDlete={onClickDelete}/>
    <CompleteTodos todos={completeTodos} onClickBack={onClickBack}/>
    
    </>
  );
}