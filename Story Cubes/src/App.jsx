import { useEffect, useState } from 'react'
import './App.css';
import Pop_up_inicar from './components/Pop_up_iniciar.jsx';
import Carregamento from './components/Carregamento.jsx';
import Dados from './components/Dados.jsx';

function App() {

  const [pop_up_inicar, set_pop_up_iniciar] = useState(true);
  const [carregando, set_carregando ] = useState(false);
  const [ir_para_o_jogo, set_ir_para_o_jogo ] = useState(false);

  useEffect(() => {

    if(!pop_up_inicar){
      
      set_carregando(true);

      setTimeout(() => {

        set_carregando(false);
        set_ir_para_o_jogo(true);
      }, 3000);
    };

  }, [pop_up_inicar]);


  return (
    
      <div className='container_body'>

      <img src='Logo Horizontal.png' className='logo_pagina'/>

      { pop_up_inicar && <Pop_up_inicar fechar_pop_up={set_pop_up_iniciar}/>}

      { carregando && <Carregamento terminar_de_carregar={set_carregando}/>}

      { ir_para_o_jogo && <Dados/>}      
      </div>
  )
}

export default App
