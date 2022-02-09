import React from "react";

const Titulo = () => {
  return (
    <div className="cancelamento-plano-titulo">
      <h1>Cancelamento de plano</h1>

      <div className="cancelamento-plano-title-message">
        <p>
          É necessário validar algumas informações antes de iniciar a
          solicitação de cancelamento, pois o plano contratado é <b>XXXXX</b>.
        </p>
      </div>
    </div>
  );
};

export default Titulo;
