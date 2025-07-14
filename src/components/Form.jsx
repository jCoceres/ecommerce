import React, { useState } from 'react'

export default function Form () {

    const[nombre, setNombre] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        alert(`Formulario enviado por: ${nombre}`);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input  
        type="text" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        />
        <button type="submit">Enviar</button>
    </form>
  )
}

