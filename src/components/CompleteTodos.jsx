import React from 'react'

export const CompleteTodos = (props) => {
  const {todos,onClickBack} = props;
  return(
    <div>
      <p>完了のTODO</p>
        <ul>
        {todos.map((todo) => {
            return (
              <div key={todo}>
              <li>aaaaa</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
            );
          })}
        </ul>
    </div>
  );
};
