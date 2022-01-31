import React from "react";

const RN_MSG_CONFIRMAR_COMUNICOU_EMPRESA = `Você já entrou em contato com a sua empresa
  para solicitar o cancelamento do plano?`;

const ConfirmacaoContatoEmpresa = (props) => {
  const { setTipoFormulario } = props;

  return (
    <>
      <div className="cancelamento-plano-mensagem">
        <p className="cancelamento-plano-mensagem-info">
          {RN_MSG_CONFIRMAR_COMUNICOU_EMPRESA}
        </p>
      </div>
      <div className="cancelamento-plano-footer-botoes">
        <button
          className="btn-unimed btn-unimed--green"
          onClick={() => window.history.back()}
        >
          NÃO
        </button>
        <button
          className="btn-unimed btn-unimed--green"
          onClick={() => setTipoFormulario("ConfirmacaoDataContatoEmpresa")}
        >
          SIM
        </button>
      </div>
    </>
  );
};

export default ConfirmacaoContatoEmpresa;
