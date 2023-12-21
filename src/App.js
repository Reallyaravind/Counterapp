import './App.css';
import React from 'react';
import {Button, Card, Typography} from '@mui/material';
import {useRecoilValue, useSetRecoilState, RecoilRoot, atom} from 'recoil';
function App() {
  return (
    <RecoilRoot>
      <div style={{display: "flex", justifyContent:"center"}}>
        <Card style={{padding: 20,width: 500}}>
          <Typography variant="h5">
            Welcome to the counter Game
          </Typography>
          <br/>
          <Buttons/>
          <CountComponent/>
        </Card>
      </div>
    </RecoilRoot>
  );
}
function Buttons(){
  return <div style={{display: "flex", justifyContent:"space-between"}}>
    <Decrease/>
    <Increase/>
  </div>
}
function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount(existingCount => existingCount + 1)
      }}>increase counter</Button>
    </div>
  );
}


function Decrease(){
  const setCount=useSetRecoilState(countState);
  return <div>
    <Button variant={"contained"} onClick={()=>{
      setCount(existingCount=>existingCount-1)
    }}>decrease counter</Button>
  </div>
}

function CountComponent(){
  const count=useRecoilValue(countState)
  return <div>
    <Typography variant="h5" textAlign={"center"}>
      {count}
    </Typography>
  </div>
}
export default App;

const countState=atom({
key:'countState',
default:0,
});