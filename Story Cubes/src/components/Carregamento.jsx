import React, { useEffect, useState } from 'react';
import './Carregamento.css';

function Carregamento() {

  const [ponto_um, set_ponto_um] = useState(``);
  const [ponto_dois, set_ponto_dois] = useState(``);
  const [ponto_tres, set_ponto_tres] = useState(``);

  useEffect(() => {

    setTimeout(() => {
      
      set_ponto_um(`.`);
    }, 500);

    setTimeout(() => {
      
      set_ponto_dois(`.`);
    }, 1000);

    setTimeout(() => {
      
      set_ponto_tres(`.`);
    }, 1500);

    
  }, [ponto_um, ponto_dois, ponto_tres]);

  return (
    <div className='container_carregamento'>

      <img src='dado_carregando.gif' alt='gif'/>

      <h1>Carregando{ponto_um}{ponto_dois}{ponto_tres}</h1>
    </div>
  )
}

export default Carregamento
