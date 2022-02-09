import React from "react";
import HistoricoSolicitacoes from "../HistoricoSolicitacoes";
import { RN_MSG_DEVE_COMUNICAR_SUA_EMPRESA } from "../../utils/constantes";

const RN_MSG_CONFIRMAR_COMUNICOU_EMPRESA = `Você já entrou em contato com a sua empresa
  para solicitar o cancelamento do plano?`;

const ConfirmacaoContatoEmpresa = (props) => {
  const { setTipoFormulario, setMessage, setHideHistorico } = props;

  return (
    <>
      <div className="cancelamento-plano-mensagem">
        <div className="cancelamento-plano-mensagem-contente">
          <p className="cancelamento-plano-mensagem-info">
            {RN_MSG_CONFIRMAR_COMUNICOU_EMPRESA}
          </p>
        </div>
      </div>
      <div className="cancelamento-plano-footer-botoes">
        <button
          className="btn-unimed btn-unimed--green"
          onClick={() => {
            setMessage(RN_MSG_DEVE_COMUNICAR_SUA_EMPRESA);
            setHideHistorico(true);
          }}>
          NÃO
        </button>
        <button
          className="btn-unimed btn-unimed--green"
          onClick={() => setTipoFormulario("ConfirmacaoDataContatoEmpresa")}>
          SIM
        </button>
      </div>
      <HistoricoSolicitacoes solicitacoes={[]} />
    </>
  );
};

export default ConfirmacaoContatoEmpresa;
