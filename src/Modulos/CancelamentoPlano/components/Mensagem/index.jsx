import React from "react";
import AtencaoIcon from "../../assets/icons/icone_atencao.svg";
import ErroIcon from "../../assets/icons/icone_erro.svg";

const Mensagem = (props) => {
  const { text, type } = props.message;
  return (
    <div className="cancelamento-plano-mensagem">
      {type === "warning" && (
        <>
          <img src={AtencaoIcon} alt="Ícone de atenção" />
          <p className="cancelamento-plano-mensagem-warning">{text}</p>
        </>
      )}
      {type === "error" && (
        <>
          <img src={ErroIcon} alt="Ícone de erro" />
          <p className="cancelamento-plano-mensagem-erro">{text}</p>
        </>
      )}
    </div>
  );
};

export default Mensagem;
