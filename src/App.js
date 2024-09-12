import React, { useRef } from 'react';
import './App.css';



function App() {

  const title = <h1 className='titleApp'>Conversor Euros-Dólares</h1>
  const eurosRef = useRef();
  const showValueRef = useRef();

  const convertirEuros=()=>{
 
    const eurosVal = eurosRef.current.value ;
    const dollars = eurosVal * 1.08;
    showValueRef.current.innerHTML= dollars.toFixed(2) + " $";
 
}

  return (
    <div className="App-header">
      <div>{title}</div>
      <input type="text" ref={eurosRef} placeholder="Cantidad en Euros" />
      <div>
        <div className='App'>
          <button onClick={convertirEuros}>Convert!!</button>
        </div>
        <div ref={showValueRef} > 
          </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default App;
