import React from "react";
import Solicitacao from "./Solicitacao";

const HistoricoSolicitacoes = (props) => {
  return (
    <>
      <div className="cancelamento-plano-container-titulo">
        <p className="cancelamento-plano-titulo-green mb-0">
          Histórico de solicitações
        </p>
      </div>
      <div className="cancelamento-plano-container-page">
        {props.solicitacoes.length === 0 && (
          <p className="cancelamento-plano-historico-vazio">
            Beneficiário não possui solicitação de cancelamento
          </p>
        )}
        {props.solicitacoes.length > 0 && (
          <table className="cancelamento-plano-tabela">
            <thead>
              <td>Número do cartão</td>
              <td>Nome</td>
              <td>Data da solicitação</td>
              <td>Protocolo</td>
            </thead>
            {props.solicitacoes.map((solicitacao) => (
              <Solicitacao
                key={solicitacao.protocolo}
                solicitacao={solicitacao}
              />
            ))}
          </table>
        )}
      </div>
    </>
  );
};

export default HistoricoSolicitacoes;
