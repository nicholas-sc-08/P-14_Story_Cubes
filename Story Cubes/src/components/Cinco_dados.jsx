import React, { useEffect } from 'react'

function Cinco_dados({array_de_imagens, set_sortear_cinco_dados, sortear_cinco_dados}) {

    const [v_primerio_dado, set_v_primeiro_dado] = useState(``);
    const [v_segundo_dado, set_v_segundo_dado] = useState(``);
    const [v_terceiro_dado, set_v_terceiro_dado] = useState(``);
    const [v_quarto_dado, set_v_quarto_dado] = useState(``);
    const [v_quinto_dado, set_v_quinto_dado] = useState(``);

    useEffect(() => {

        if(sortear_cinco_dados){

          set_v_primeiro_dado(Math.floor(Math.random() * 9));
          set_v_segundo_dado(Math.floor(Math.random() * 9));
          set_v_terceiro_dado(Math.floor(Math.random() * 9));
          set_v_quarto_dado(Math.floor(Math.random() * 9));
          set_v_quinto_dado(Math.floor(Math.random() * 9));
          set_sortear_cinco_dados(false);
        };

    }, [sortear_cinco_dados]);

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
                    
        </div>   
    </div>
  )
}

export default Cinco_dados
