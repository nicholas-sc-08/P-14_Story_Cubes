import React from 'react';
import './Pop_up_iniciar.css'

function Pop_up_iniciar({fechar_pop_up}) {

  return (
    <div className='container_pop_up'>
      
      <h1>Clique em Iniciar Para Começar</h1>

      <button onClick={() => fechar_pop_up(false)}>Iniciar</button>

    </div>
  )
}

export default Pop_up_iniciar
