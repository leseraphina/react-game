import Border from './Border';
import Button from './Button';
import './App.css';
import { useState } from 'react';

function App(){
  const [myHistory,setHistory] = useState([]);
  const [otherHistory,setOtherHistory] = useState([]);

  function random(n){
    return Math.ceil(Math.random()* n)
  }
  function playClick(){
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setHistory([...myHistory,nextMyNum]);
    setOtherHistory([...otherHistory,nextOtherNum])
  }
  function resetClick(){
    setHistory([]);
    setOtherHistory([])
  }
  return (
    <div id="box">
     <div id="btn">
      <Button onClick = {playClick}>start</Button>
      <Button onClick = {resetClick}>reset</Button>
     </div>
     <div id="container">
      <Border name="A팀" color="red" gameHistory={myHistory}/>
      <Border name="B팀" color="blue" gameHistory={otherHistory} />
     </div>
    </div>
  )
}

export default App;