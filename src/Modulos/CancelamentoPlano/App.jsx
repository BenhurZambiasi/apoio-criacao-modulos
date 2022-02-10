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

const App = () => {
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalMensagem, setShowModalMensagem] = useState(false);
  const [benefiarios, setBenefiarios] = useState([]);
  const [beneficiariosSelecionados, setBeneficiariosSelecionados] = useState(
    []
  );
  const [hideHistorico, setHideHistorico] = useState(false);
  const [historico, setHistorico] = useState([]);

  const [tipoFormulario, setTipoFormulario] = useState(
    "ConfirmacaoContatoEmpresa"
  );

  useEffect(() => {
    (() => {
      let aux = [
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
      ];

      let auxHistorico = [
        {
          cartao: "0006545310",
          nome: "Paulo 5",
          data: "04/02/2022",
          protocolo: "123456",
        },
        {
          cartao: "0006545311",
          nome: "Paulo 6",
          data: "04/02/2022",
          protocolo: "123456",
        },
      ];
      setHistorico(auxHistorico);
      setBenefiarios(aux);
    })();
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
    <div className="container-cancelamento">
      {showModalMensagem && (
        <ModalMensagem
          protocolo="12345789"
          handleClose={handleCloseModalMensagem}
        />
      )}
      {showModal && (
        <ModalConfirmacao
          beneficiariosSelecionados={beneficiariosSelecionados}
          setBeneficiariosSelecionados={setBeneficiariosSelecionados}
          beneficiarios={benefiarios}
          handleClose={handleClose}
          setBenefiarios={setBenefiarios}
          openModalMensagem={openModalMensagem}
          historico={historico}
          setHistorico={setHistorico}
        />
      )}
      <Titulo />
      {message && <Mensagem message={message} />}

      {!message && tipoFormulario === "Solicitacao" && (
        <Solicitacao
          setTipoFormulario={setTipoFormulario}
          setMessage={setMessage}
          openModal={openModal}
          beneficiariosSelecionados={beneficiariosSelecionados}
          setBeneficiariosSelecionados={setBeneficiariosSelecionados}
          beneficiarios={benefiarios}
        />
      )}

      {!message && tipoFormulario === "ConfirmacaoContatoEmpresa" && (
        <ConfirmacaoContatoEmpresa
          setTipoFormulario={setTipoFormulario}
          setMessage={setMessage}
          setHideHistorico={setHideHistorico}
        />
      )}
      {!message && tipoFormulario === "ConfirmacaoDataContatoEmpresa" && (
        <ConfirmacaoDataContatoEmpresa
          setTipoFormulario={setTipoFormulario}
          setMessage={setMessage}
          setHideHistorico={setHideHistorico}
        />
      )}
      <HistoricoSolicitacoes solicitacoes={historico} />
      {tipoFormulario !== "ConfirmacaoDataContatoEmpresa" ? (
        <div className="cancelamento-plano-footer-botoes">
          <button
            className="btn-unimed btn-unimed--green"
            onClick={() => {
              setHideHistorico(false);
              setMessage(null);
            }}>
            VOLTAR
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
