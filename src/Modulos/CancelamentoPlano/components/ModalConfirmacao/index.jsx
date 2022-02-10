import React, { useState } from "react";
import ConteudoModal from "./conteudoModal";
import "../../style.css";

const ModalConfirmacao = ({
  beneficiarios,
  beneficiariosSelecionados,
  setBeneficiariosSelecionados,
  handleClose,
  openModalMensagem,
  setBenefiarios,
  historico,
  setHistorico,
}) => {
  const [terms, setTerms] = useState(false);

  const [errTerms, setErrorTerms] = useState(false);

  const handleTerms = ({ target }) => {
    setErrorTerms(false);
    setTerms(!terms);
  };

  const handleEnviar = () => {
    if (!terms) {
      setErrorTerms(true);
    } else {
      valida();
      handleClose();
      openModalMensagem();
    }
  };

  const valida = () => {
    let auxList = [...historico];

    let list = [...beneficiarios];
    beneficiariosSelecionados.map((element) => {
      let auxhistorico = {
        cartao: element.cartao,
        nome: element.nome,
        data: new Date().toLocaleDateString("pt-br"),
        protocolo: "321654",
      };
      auxList.push(auxhistorico);
      let index = list.findIndex((item) => item.cartao === element.cartao);
      list.splice(index, 1);
    });

    setHistorico(auxList);
    setBenefiarios(list);
    setBeneficiariosSelecionados([]);
  };

  return (
    <div className="modal-container-teste">
      <ConteudoModal
        beneficiarios={beneficiariosSelecionados}
        handleClose={handleClose}
        handleTerms={handleTerms}
        handleEnviar={handleEnviar}
        errTerms={errTerms}
        terms={terms}
      />
    </div>
  );
};

export default ModalConfirmacao;
