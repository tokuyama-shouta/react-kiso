import React from 'react';

const App = () => {
  const onClickButton = () => alert();
  return(
    <React.Fragment>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
    
  );
};

export default App;