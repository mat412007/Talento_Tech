import './App.css'

function App() {
  
  function AddTask(){
    let tarea = document.createElement("li")
    tarea.setAttribute("class", "task")
    tarea.innerHTML = document.querySelector('#new-task').value
    let boton = document.createElement("button")
    boton.setAttribute("class", "boton-eliminar")
    boton.innerHTML = "Delete"
    tarea.appendChild(boton)
    document.querySelector('#task-list').appendChild(tarea)
    document.querySelector('#new-task').value = ""
  }

  

  return (
    <>
      <h1>TO-DO-NOW</h1>
      <div class="separador"></div>
      <input type="text" id="new-task"/><button onClick={AddTask}>Add task</button>
      <div class="separador"></div>
      <ul id="task-list"></ul>
    </>
  );
}

export default App
