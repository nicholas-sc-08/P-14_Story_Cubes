import React, { useEffect, useState } from 'react';
import "./Nove_dados.css";

function Nove_dados({array_de_imagens, set_sortear_nove_dados, sortear_nove_dados}) {

    const [indice_um, set_indice_um] = useState(``);
    const [indice_dois, set_indice_dois] = useState(``);
    const [indice_tres, set_indice_tres] = useState(``);
    const [indice_quatro, set_indice_quatro] = useState(``);
    const [indice_cinco, set_indice_cinco] = useState(``);
    const [indice_seis, set_indice_seis] = useState(``);
    const [indice_sete, set_indice_sete] = useState(``);
    const [indice_oito, set_indice_oito] = useState(``);
    const [indice_nove, set_indice_nove] = useState(``);

    useEffect(() => {

        if(sortear_nove_dados){

            set_indice_um(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_dois(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_tres(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_quatro(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_cinco(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_seis(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_sete(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_oito(Math.floor(Math.random() * array_de_imagens.length));
            set_indice_nove(Math.floor(Math.random() * array_de_imagens.length));
            set_sortear_nove_dados(false);
        };

    }, [sortear_nove_dados]);
    
    return (

    <div className='container_nove_dados'>
                <div className="coluna_a_dados">

                    <button>{array_de_imagens[indice_um] || `.`}</button>
                    <button>{array_de_imagens[indice_dois] || `.`}</button>
                    <button>{array_de_imagens[indice_tres] || `.`}</button>
                    
                </div>

                <div className="coluna_b_dados">

                    <button>{array_de_imagens[indice_quatro] || `.`}</button>
                    <button>{array_de_imagens[indice_cinco] || `.`}</button>
                    <button>{array_de_imagens[indice_seis] || `.`}</button>
                    
                </div>

                <div className="coluna_c_dados">

                    <button>{array_de_imagens[indice_sete] || `.`}</button>
                    <button>{array_de_imagens[indice_oito] || `.`}</button>
                    <button>{array_de_imagens[indice_nove] || `.`}</button>
                    
                </div>
    </div>
  )
}

export default Nove_dados
