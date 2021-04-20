import React from 'react';

export const inputTodo = (props) => {
  const { todoText, onChange, onClick,disabled} = props;
  return (

    <div>
      <input  disabled={} placeholder="TODOを入力" value={todoText} onChange={onChange}/>
      <button disabled={} onClick={onClick}>追加</button>
    </div>
  );
  
};

