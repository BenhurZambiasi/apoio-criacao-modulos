import React from "react";

import icon_check from "../../assets/icons/icone_check.svg";

import "../../style.css";
const ModalMensagem = ({ handleClose, protocolo }) => {
  return (
    <div className="modal-container">
      <div className="modal-content-mensagem">
        <div className="close-message">
          <span onClick={() => handleClose()}></span>
        </div>
        <div className="icon_check">
          <img src={icon_check} alt="check" />
        </div>
        <div className="mensagem">
          <p>Solicitação de cancelamento de plano enviada com sucesso!</p>
        </div>
        <div className="protocolo">
          <p>
            Protocolo: <span>{protocolo}</span>
          </p>
        </div>
        <div className="informacao">
          <p>
            Daremos prosseguimento coforme os prazos legais previstos pela ANS
            (Agência Nacional de Saúde Suplementar). Aguarde novas interações de
            nossa equipe de atendimento por este canal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMensagem;
