import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){ //donde va la tarea

  const [input,setInput] = useState('')

  const manejarCambio = e =>{
    setInput(e.target.value); //esto permite extraer el valor de campo de texto que ingreso el usuario
    console.log(e.target.value)
  };
  
  const manejarEnvio= e =>{ //se va a llamar cuando se haga click sobre el boton agregar tarea.
    e.preventDefault(); //evita que no se vuelva a cargar toda la aplicacion cuando se envia el formulario.
    console.log('enviando formulario')
    const tareaNueva= {
      id: uuidv4(),
      texto: input, // input del useState
      completada:false
    };
    props.onSubmit(tareaNueva)

  };

  return (
    <form 
    className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input 
      className='tarea-input'
      type='text'
      placeholder='Escribe una Tarea'
      name='texto'
      onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario;