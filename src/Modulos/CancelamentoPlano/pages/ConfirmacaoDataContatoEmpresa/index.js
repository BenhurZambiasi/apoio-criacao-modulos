import React from "react";

const RN_MSG_CONFIRMAR_DATA = `Informe a data do cancelamento do plano
solicitado na empresa.`;

const ConfirmacaoDataContatoEmpresa = (props) => {
  const { setTipoFormulario } = props;

  return (
    <>
      <div className="cancelamento-plano-mensagem">
        <p className="cancelamento-plano-mensagem-info">
          {RN_MSG_CONFIRMAR_DATA}
        </p>
      </div>
      <div className="cancelamento-plano-footer-botoes">
        <button
          className="btn-unimed btn-unimed--green"
          onClick={() => window.history.back()}
        >
          VOLTAR
        </button>
        <button
          className="btn-unimed btn-unimed--green"
          onClick={() => setTipoFormulario("Solicitacao")}
        >
          CONFIRMAR
        </button>
      </div>
    </>
  );
};

export default ConfirmacaoDataContatoEmpresa;
