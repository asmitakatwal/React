import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

const App=()=> {
  const [name,setName]=useState(['prafulla','sauhardha'])
  const [inputFieldName,setInputFieldName]=useState('')
  const addUsers=()=>{
    const tempName=[...name]
    tempName.push(inputFieldName)
    setName(tempName)
  }

  return (
    <div className="App">

<input 
onInput={(event)=>setInputFieldName(event.target.value)}
 placeholder="name"/>
<button onClick={()=>addUsers()}>Add</button>
{name.map((item,id)=>{
return <li>{item}</li>
})}
    </div>
  );
}

export default App;
