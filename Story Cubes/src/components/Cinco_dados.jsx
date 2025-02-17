import React, { useEffect, useState } from 'react'
import "./Nove_dados.css";

function Cinco_dados({array_de_imagens, sortear_cinco_dados, set_sortear_cinco_dados}) {

  const [indice_um, set_indice_um] = useState(``);
  const [indice_dois, set_indice_dois] = useState(``);
  const [indice_tres, set_indice_tres] = useState(``);
  const [indice_quatro, set_indice_quatro] = useState(``);
  const [indice_cinco, set_indice_cinco] = useState(``);

  useEffect(() => {

    if(sortear_cinco_dados){

      set_indice_um(Math.floor(Math.random() * array_de_imagens.length));
      set_indice_dois(Math.floor(Math.random() * array_de_imagens.length));
      set_indice_tres(Math.floor(Math.random() * array_de_imagens.length));
      set_indice_quatro(Math.floor(Math.random() * array_de_imagens.length));
      set_indice_cinco(Math.floor(Math.random() * array_de_imagens.length));
      set_sortear_cinco_dados(false);
    };

  }, [sortear_cinco_dados]);

  return (
    <div>
        <div className="coluna_a_dados">

            <button>{array_de_imagens[indice_um] || `.`}</button>
            <button>{array_de_imagens[indice_dois] || `.`}</button>
            <button>{array_de_imagens[indice_tres] || `.`}</button>
                    
        </div>

        <div className="coluna_b_dados">

                <button>{array_de_imagens[indice_quatro] || `.`}</button>
                <button>{array_de_imagens[indice_cinco] || `.`}</button>
                    
        </div>   
    </div>
  )
}

export default Cinco_dados
