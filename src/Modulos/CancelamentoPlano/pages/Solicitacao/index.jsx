import React, { useState } from "react";
import Titulo from "../../components/Titulo";
import SelecaoBeneficiarios from "./SelecaoBeneficiarios";
import HistoricoSolicitacoes from "./HistoricoSolicitacoes";
import Formulario from "./Formulario";
import Modal from "../../components/ModalMensagem";

const Solicitacao = () => {
  const [showModal, setShowModal] = useState(false);

  const beneficiarios = [
    {
      numeroCartao: "08651234000000001",
      nome: "LARISSA DOS SANTOS LEAL",
      relacao: "Titular",
    },
    {
      numeroCartao: "08651234000000002",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "08651234000000003",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "08651234000000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "08651234000000005",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "086534000000006",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "08651000000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "0865123400000",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "086512340000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "08654000000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "0851234000000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "086512340000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "081234000000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "08651234000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "086512340000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
    {
      numeroCartao: "0865123400000004",
      nome: "LUIZ FELIPE DOS SANTOS",
      relacao: "Dependente",
    },
  ];

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Titulo />
      {showModal && (
        <Modal beneficiarios={beneficiarios} handleClose={handleClose} />
      )}

      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      <div className="cancelamento-plano-container-titulo">
        <p className="cancelamento-plano-titulo-green mb-0">
          Informações sobre o beneficiário
        </p>
      </div>
      <div className="cancelamento-plano-container-page">
        <p className="cancelamento-plano-titulo-green pt-3">
          Selecione o(s) beneficiários que deseja remover do plano
        </p>

        <SelecaoBeneficiarios
          beneficiarios={[
            {
              cartao: "000654531054",
              nome: "Paulo R B Ventura",
              dataNascimento: "14/01/2019",
            },
          ]}
        />

        <Formulario />
      </div>
      <HistoricoSolicitacoes />
    </>
  );
};

export default Solicitacao;
