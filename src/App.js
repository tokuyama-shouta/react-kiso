import React from 'react';
import ColofulMessage from './components/ColorfulMessage';

const App = () => {
  const onClickButton = () => alert();
  return(
    <React.Fragment>
      <h1>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
    
  );
};

export default App;