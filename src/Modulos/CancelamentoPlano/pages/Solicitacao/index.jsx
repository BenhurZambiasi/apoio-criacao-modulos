import React from "react";
import AtencaoIcon from "../../assets/icons/icone_atencao_orange.svg";
import Formulario from "./Formulario";
import SelecaoBeneficiarios from "./SelecaoBeneficiarios";

const Solicitacao = ({ openModal }) => {
  return (
    <>
      <div className="cancelamento-plano-container-titulo">
        <p className="cancelamento-plano-titulo-green mb-0">
          Informações sobre o beneficiário
        </p>
      </div>
      <div className="cancelamento-plano-container-page">
        <p className="cancelamento-plano-titulo-green pt-3">
          Selecione o(s) beneficiários que deseja remover do plano
        </p>
        <div className="cancelamento-plano-alerta">
          <img src={AtencaoIcon} alt="Ícone de atenção" />
          <p>
            Será solicitado o cancelamento do plano para os beneficiários
            selecionados. Caso os dependentes tenham interesse em permanecer no
            plano, devem entrar em contato com a operadora.
          </p>
        </div>
        <SelecaoBeneficiarios
          beneficiarios={[
            {
              cartao: "000654531054",
              nome: "Paulo R B Ventura",
              dataNascimento: "14/01/2019",
            },
            {
              cartao: "000654531014",
              nome: "Paulo 2",
              dataNascimento: "14/01/2019",
            },
            {
              cartao: "000654531024",
              nome: "Paulo 3",
              dataNascimento: "14/01/2019",
            },
            {
              cartao: "000654531034",
              nome: "Paulo 4",
              dataNascimento: "14/01/2019",
            },
          ]}
        />

        <Formulario openModal={openModal} />
      </div>
    </>
  );
};

export default Solicitacao;
