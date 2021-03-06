import React, { useState } from "react";
import AtencaoIcon from "../../assets/icons/icone_atencao_orange.svg";
import Formulario from "./Formulario";
import SelecaoBeneficiarios from "./SelecaoBeneficiarios";
import HistoricoSolicitacoes from "../HistoricoSolicitacoes";

const Solicitacao = ({
  openModal,
  beneficiariosSelecionados,
  setBeneficiariosSelecionados,
  beneficiarios,
}) => {
  const [errorSelecao, setErrorSelecao] = useState();
  const hasTitular = beneficiariosSelecionados.some(
    (item) => item.relacao === "Titular"
  )
    ? true
    : false;

  return (
    <div>
      <div className="cancelamento-plano-container-titulo">
        <p className="cancelamento-plano-titulo-green mb-0">
          Informações sobre o beneficiário
        </p>
      </div>
      <div className="cancelamento-plano-container-page">
        <p className="cancelamento-plano-titulo-green pt-3">
          Selecione o(s) beneficiários que deseja remover do plano
        </p>
        {hasTitular && (
          <div className="cancelamento-plano-alerta">
            <img src={AtencaoIcon} alt="Ícone de atenção" />
            <p>
              Será solicitado o cancelamento do plano para os beneficiários
              selecionados. Caso os dependentes tenham interesse em permanecer
              no plano, devem entrar em contato com a operadora.
            </p>
          </div>
        )}

        <div>
          <SelecaoBeneficiarios
            beneficiariosSelecionados={beneficiariosSelecionados}
            setBeneficiariosSelecionados={setBeneficiariosSelecionados}
            beneficiarios={beneficiarios}
            errorSelecao={errorSelecao}
          />
        </div>

        <Formulario
          openModal={openModal}
          beneficiarios={beneficiarios}
          beneficiariosSelecionados={beneficiariosSelecionados}
          setErrorSelecao={setErrorSelecao}
          errorSelecao={errorSelecao}
        />
      </div>
    </div>
  );
};

export default Solicitacao;
