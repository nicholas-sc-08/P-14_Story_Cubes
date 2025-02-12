import React, { useEffect, useState } from 'react';
import './Dados.css';
import Nove_dados from './Nove_dados';
import Cinco_dados from './Cinco_dados';

function Dados() {
  
    const [quantidade_de_dados, set_quantidade_de_dados] = useState(`9`);
    const [palavra_botao, set_palavra_botao] = useState(`Sortear`);
    const [indice_sorteado, set_indice_sorteado] = useState(``);
    const [numero_a_ser_verificado, set_numero_a_ser_verificado] = useState(null);
    const [aparecer_nove_dados, set_aparecer_nove_dados] = useState(true);
    const array_de_imagens = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`];
    
    const sortear_dados = e => {

        e.preventDefault();                

        set_palavra_botao(`Girar Novamente`)

        if(quantidade_de_dados == `9`){

            for(let i = 0; i < 9 ; i++){

                set_indice_sorteado(Math.floor(Math.random() * 9));

                if(indice_sorteado != numero_a_ser_verificado){

                set_numero_a_ser_verificado(indice_sorteado);
                console.log(`não repetiu`);       
            } else {


            };
        };
        };
    };

    useEffect(() => {

        if(quantidade_de_dados == `9`){

            set_aparecer_nove_dados(true);
        } else {

            set_aparecer_nove_dados(false);
        }; 

    }, [quantidade_de_dados]);

    return (
    <div className='container_dados'>

        <div className="container_quantia_de_dados">

            <h1>Quantidade de Dados:</h1>
            <button onClick={() => quantidade_de_dados == `9` ? set_quantidade_de_dados(`5`) : set_quantidade_de_dados(`9`)} >{quantidade_de_dados}</button>

        </div>

        <form onSubmit={sortear_dados}>
            <div className="container_imagens_do_dado">

            {aparecer_nove_dados && <Nove_dados indice_sorteado={indice_sorteado} array_de_imagens={array_de_imagens}/>}
            {!aparecer_nove_dados && <Cinco_dados indice_sorteado={indice_sorteado} array_de_imagens={array_de_imagens}/>}
            </div>

            <button type='submit'>{palavra_botao}</button>
        </form>


    </div>
  )
}

export default Dados
