import React, { useEffect, useState } from "react";
import Mensagem from "./components/Mensagem";
import Titulo from "./components/Titulo";
import HistoricoSolicitacoes from "./pages/HistoricoSolicitacoes";
import Solicitacao from "./pages/Solicitacao";
import ConfirmacaoContatoEmpresa from "./pages/ConfirmacaoContatoEmpresa";
import ConfirmacaoDataContatoEmpresa from "./pages/ConfirmacaoDataContatoEmpresa";
import ModalConfirmacao from "./components/ModalConfirmacao";
import ModalMensagem from "./components/ModalMensagem";

import {
  RN_MSG_DEVE_COMUNICAR_SUA_EMPRESA,
  RN_MSG_OCORREU_ERRO,
  RN_MSG_PLANO_NAO_REGULAMENTADO,
  RN_MSG_SOLICITACAO_DEVE_AGUARDAR_30_DIAS,
  RN_MSG_SOMENTE_TITULAR_CANCALAMENTO,
} from "./utils/constantes";

import "./style.css";

// const RN_MSG_SOMENTE_TITULAR_CANCALAMENTO = {
//   type: "warning",
//   text: `Somente o titular pode solicitar o
//    cancelamento do plano de saúde.`,
// };
// const RN_MSG_PLANO_NAO_REGULAMENTADO = {
//   type: "warning",
//   text: `Somente planos regulamentados possuem
//    a opção de cancelamento pelo sistema.
//    Para mais informações entre em contato
//    com a sua Unimed.`,
// };
// const RN_MSG_SOLICITACAO_DEVE_AGUARDAR_30_DIAS = {
//   type: "warning",
//   text: `A solicitação pela internet somente poderá ser realizada
//   30 dias após a solicitação para a sua empresa.`,
// };
// const RN_MSG_DEVE_COMUNICAR_SUA_EMPRESA = {
//   type: "warning",
//   text: `Inicialmente você deve comunicar sua empresa
//   para solicitar o cancelamento do plano.`,
// };
// const RN_MSG_OCORREU_ERRO = {
//   type: "error",
//   text: `Ocorreu um erro durante o processamento`,
// };

const App = () => {
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalMensagem, setShowModalMensagem] = useState(false);
  const [beneficiariosSelecionados, setBeneficiariosSelecionados] = useState(
    []
  );

  const [tipoFormulario, setTipoFormulario] = useState(
    "ConfirmacaoContatoEmpresa"
  );

  useEffect(() => {
    const fetchRegrasNegocio = () => {
      /*Criar abaixo a validação das regras, basta dar um setMessage com a regra para tela bloquear*/
      //RN_MSG_SOMENTE_TITULAR_CANCELAMENTO
      //RN_MSG_PLANO_NAO_REGULAMENTADO
      //RN_MSG_SOLICITACAO_DEVE_AGUARDAR_30_DIAS
      //RN_MSG_DEVE_COMUNICAR_SUA_EMPRESA
      //RN_MSG_OCORREU_ERRO
      //setMessage(RN_SOMENTE_TITULAR_CANCALAMENTO);
      setMessage(null);
    };

    fetchRegrasNegocio();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCloseModalMensagem = () => {
    setShowModalMensagem(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  const openModalMensagem = () => {
    setShowModalMensagem(true);
  };

  return (
    <>
      {showModalMensagem && (
        <ModalMensagem
          protocolo="12345789"
          handleClose={handleCloseModalMensagem}
        />
      )}
      {showModal && (
        <ModalConfirmacao
          beneficiarios={beneficiariosSelecionados}
          handleClose={handleClose}
        />
      )}
      <Titulo />
      {message && <Mensagem message={message} />}

      {!message && tipoFormulario === "Solicitacao" && (
        <Solicitacao
          setTipoFormulario={setTipoFormulario}
          openModal={openModal}
          beneficiariosSelecionados={beneficiariosSelecionados}
          setBeneficiariosSelecionados={setBeneficiariosSelecionados}
          beneficiarios={[
            {
              cartao: "000654531054",
              nome: "Paulo R B Ventura",
              dataNascimento: "14/01/2019",
              relacao: "Titular",
            },
            {
              cartao: "000654531014",
              nome: "Paulo 2",
              dataNascimento: "14/01/2019",
              relacao: "Dependente",
            },
            {
              cartao: "000654531024",
              nome: "Paulo 3",
              dataNascimento: "14/01/2019",
              relacao: "Dependente",
            },
            {
              cartao: "000654531034",
              nome: "Paulo 4",
              dataNascimento: "14/01/2019",
              relacao: "Dependente",
            },
          ]}
        />
      )}
      {!message && tipoFormulario === "ConfirmacaoContatoEmpresa" && (
        <ConfirmacaoContatoEmpresa setTipoFormulario={setTipoFormulario} />
      )}
      {!message && tipoFormulario === "ConfirmacaoDataContatoEmpresa" && (
        <ConfirmacaoDataContatoEmpresa setTipoFormulario={setTipoFormulario} />
      )}

      <HistoricoSolicitacoes
        solicitacoes={[
          {
            cartao: "000654531054",
            nome: "Paulo R B Ventura",
            data: "14/01/2019",
            protocolo: "054350254441",
          },
          {
            cartao: "000654531054",
            nome: "Paulo 2",
            data: "14/01/2019",
            protocolo: "054350254442",
          },
          {
            cartao: "000654531054",
            nome: "Paulo 3",
            data: "14/01/2019",
            protocolo: "054350254443",
          },
          {
            cartao: "000654531054",
            nome: "Paulo 4",
            data: "14/01/2019",
            protocolo: "054350254444",
          },
        ]}
      />
      <div className="cancelamento-plano-footer-botoes">
        <button className="btn-unimed btn-unimed--green">VOLTAR</button>
      </div>
    </>
  );
};

export default App;
