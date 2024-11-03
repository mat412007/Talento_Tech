import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Logos(props, {linkVite}){ // Dos metodos similares de extraer propiedades de otro elemento
    return(
        <>
        <a href={linkVite} target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={props.linkReact} target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </>
    );
}

export default 

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