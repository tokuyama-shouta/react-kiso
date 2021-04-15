import React, {useState} from 'react';
import ColofulMessage from './components/ColorfulMessage';

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return(
    <React.Fragment>
      <h1>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </React.Fragment>
    
  );
};

export default App;