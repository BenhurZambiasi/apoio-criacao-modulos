import React, { useState } from "react";
import ConteudoModal from "./conteudoModal";
import "./styles.css";

const ModalConfirmacao = ({
  beneficiarios,
  beneficiariosSelecionados,
  setBeneficiariosSelecionados,
  handleClose,
  openModalMensagem,
  setBenefiarios,
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
    let list = [...beneficiarios];
    beneficiariosSelecionados.map((element) => {
      let index = list.findIndex((item) => item.cartao === element.cartao);
      list.splice(index, 1);
    });
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
