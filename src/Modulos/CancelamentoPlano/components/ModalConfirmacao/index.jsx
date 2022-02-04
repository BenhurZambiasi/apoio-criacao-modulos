import React, { useState } from "react";
import ConteudoModal from "./conteudoModal";
import "./styles.css";

const ModalConfirmacao = ({ beneficiarios, handleClose }) => {
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
      handleClose();
    }
  };

  window.addEventListener("click", function (e) {
    if (e.target.className === "modal-container") {
      handleClose();
    }
  });

  return (
    <div className="modal-container-teste">
      <ConteudoModal
        beneficiarios={beneficiarios}
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
