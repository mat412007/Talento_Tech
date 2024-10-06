import './App.css'
import { useState } from 'react'


function Contador(){
  const [contador, setCount] = useState(0)

  return(
    <button onClick={() => setCount(contador + 1)}>
        count is {contador}
    </button>
  );  
}

export default Contador