import React, {useState,useEffect} from 'react';
import ColofulMessage from './components/ColorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {
    if(num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    }else{
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num])


  
  return(
    <React.Fragment>
      <h1>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>こん</p>}
      
    </React.Fragment>
    
  );
};

export default App;