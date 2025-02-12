import React from 'react';

function Nove_dados({indice_sorteado, array_de_imagens}) {
    
    return (

    <div>
      
                <div className="coluna_a_dados">

                    <button>{array_de_imagens[indice_sorteado]}</button>
                    <button>{array_de_imagens[indice_sorteado + 1]}</button>
                    <button>{array_de_imagens[indice_sorteado]}</button>
                    
                </div>

                <div className="coluna_b_dados">

                    <button>{array_de_imagens[indice_sorteado]}</button>
                    <button>{array_de_imagens[indice_sorteado]}</button>
                    <button>{array_de_imagens[indice_sorteado]}</button>
                    
                </div>

                <div className="coluna_c_dados">

                    <button>{array_de_imagens[indice_sorteado]}</button>
                    <button>{array_de_imagens[indice_sorteado]}</button>
                    <button>{array_de_imagens[indice_sorteado]}</button>
                    
                </div>

    </div>
  )
}

export default Nove_dados
