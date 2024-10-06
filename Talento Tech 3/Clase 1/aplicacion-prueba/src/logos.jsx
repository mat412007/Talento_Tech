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

export default Logos