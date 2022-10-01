import React from 'react';
import { useState } from 'react';
import "./App.css";

const App =() =>{
    const[fullName, setFullName] = useState({
        fName : '',
        lName : '',
    });
    const inputEvent = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        const name = event.target.name;
        setFullName((preValue) => {
            if(name === "fName"){
                return{
                    fName:value,
                    lName:preValue.lName,
                };
            }else  if(name === "lName"){
                return{
                    fName:preValue.fName,
                    lName:value,
                };
            }
        })
    }
    const submit = (event) =>{
        event.preventDefault();
        alert('form submitted');
    }
    
    return(
    <>
    
    <div className='main'>
    <form onSubmit={submit}>
        <div>
        <h1> Hello {fullName.fName} {fullName.lName} </h1>
        <input type="text" placeholder='Enter Your Name' name='fName' onChange={inputEvent} value={fullName.fName} />
        <br />
        <input type="text" placeholder='Enter Your Last Name' name='lName' onChange={inputEvent} value={fullName.lName} />
        <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
    
    </>
    );
}

export default App;