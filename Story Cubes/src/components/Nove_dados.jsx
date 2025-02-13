import React, { useEffect } from 'react';
import { useState } from 'react';

function Nove_dados({array_de_imagens, sortear_nove_dados, set_sortear_nove_dados}) {
    
    const [v_primerio_dado, set_v_primeiro_dado] = useState(``);
    const [v_segundo_dado, set_v_segundo_dado] = useState(``);
    const [v_terceiro_dado, set_v_terceiro_dado] = useState(``);
    const [v_quarto_dado, set_v_quarto_dado] = useState(``);
    const [v_quinto_dado, set_v_quinto_dado] = useState(``);
    const [v_sexto_dado, set_v_sexto_dado] = useState(``);
    const [v_setimo_dado, set_v_setimo_dado] = useState(``);
    const [v_oitavo_dado, set_v_oitavo_dado] = useState(``);
    const [v_nono_dado, set_v_nono_dado] = useState(``);

    useEffect(() => {

        if(sortear_nove_dados){

            set_v_primeiro_dado(Math.floor(Math.random() * 9));
            set_v_segundo_dado(Math.floor(Math.random() * 9));
            set_v_terceiro_dado(Math.floor(Math.random() * 9));
            set_v_quarto_dado(Math.floor(Math.random() * 9));
            set_v_quinto_dado(Math.floor(Math.random() * 9));
            set_v_sexto_dado(Math.floor(Math.random() * 9));
            set_v_setimo_dado(Math.floor(Math.random() * 9));
            set_v_oitavo_dado(Math.floor(Math.random() * 9));
            set_v_nono_dado(Math.floor(Math.random() * 9));
            set_sortear_nove_dados(false);
        };

    }, [sortear_nove_dados]);

    return (

    <div>
      
                <div className="coluna_a_dados">

                    <button>{array_de_imagens[v_primerio_dado] || `.`}</button>
                    <button>{array_de_imagens[v_segundo_dado] || `.`}</button>
                    <button>{array_de_imagens[v_terceiro_dado] || `.`}</button>
                    
                </div>

                <div className="coluna_b_dados">

                    <button>{array_de_imagens[v_quarto_dado] || `.`}</button>
                    <button>{array_de_imagens[v_quinto_dado] || `.`}</button>
                    <button>{array_de_imagens[v_sexto_dado] || `.`}</button>
                    
                </div>

                <div className="coluna_c_dados">

                    <button>{array_de_imagens[v_setimo_dado] || `.`}</button>
                    <button>{array_de_imagens[v_oitavo_dado] || `.`}</button>
                    <button>{array_de_imagens[v_nono_dado] || `.`}</button>
                    
                </div>

    </div>
  )
}

export default Nove_dados
