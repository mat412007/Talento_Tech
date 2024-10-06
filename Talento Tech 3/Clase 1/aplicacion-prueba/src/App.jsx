import './App.css'
import Logos from './logos'; // Importo los logos
import Contador from './contador'; // Importo el contador

function App() {
  let link_vite = "https://vitejs.dev";
  let link_react = "https://react.dev";

  return (
    <>
      <div>
        <Logos linkVite={link_vite} linkReact={link_react} />
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
