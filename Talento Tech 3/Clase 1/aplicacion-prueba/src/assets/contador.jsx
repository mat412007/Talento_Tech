import './../App.css'
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

{/* 
import './App.css'
import Logos from './assets/logos'; // Importo los logos
import Contador from './assets/contador'; // Importo el contador

function App() {
  let link_vite = "https://vitejs.dev";
  let link_react = "https://react.dev";

  return (
    <>
      <div>
        <Logos linkVite={link_vite} linkReact={link_react} /> {/* Extraigo las propiedades y el componente las recibe }
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Contador />
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
  
  export default App
  */}