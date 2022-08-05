import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]); //inicialmente Tareas va a ser un arreglo vacio.

  const agregarTarea = tarea =>{
    console.log(tarea);
    if(tarea.texto.trim()){ //si la cadena no esta vacia
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas );
    }
  };

  const eliminarTarea = id =>{ //usamos el id para identificar que tarea queremos eliminar.
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map (tarea =>{
     if(tarea.id === id){
      tarea.completada = !tarea.completada;
     }  
     return tarea;
    });
    setTareas(tareasActualizadas);
  };

  
  return(
    <>
      <TareaFormulario onSubmit= {agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
           tareas.map((tarea)=>
            <Tarea
              key={tarea.id}
              id= {tarea.id} 
              texto={tarea.texto}
              completada= {tarea.completada}
              eliminarTarea = {eliminarTarea}
              completarTarea = {completarTarea}
            />
           )
        }
      </div>
    </>
  )
}

export default ListaDeTareas;