import React, { useState } from "react";
import Responsive from "./responsive";
import Responsives from "./desktop";
import "./styles.css";

const ModalConfirmacao = ({ beneficiarios, handleClose }) => {
  const [terms, setTerms] = useState();

  const [errTerms, setErrorTerms] = useState(false);

  const handleTerms = ({ target }) => {
    setErrorTerms(false);
    setTerms(target.checked);
  };

  const handleEnviar = () => {
    if (!terms) {
      setErrorTerms(true);
    }
  };

  window.addEventListener("click", function (e) {
    if (e.target.className === "modal-container") {
      handleClose();
    }
  });

  return (
    <div className="modal-container">
      <Responsive
        beneficiarios={beneficiarios}
        handleClose={handleClose}
        handleTerms={handleTerms}
        handleEnviar={handleEnviar}
        errTerms={errTerms}
      />
      <Responsives
        beneficiarios={beneficiarios}
        handleClose={handleClose}
        handleTerms={handleTerms}
        handleEnviar={handleEnviar}
        errTerms={errTerms}
      />
    </div>
  );
};

export default ModalConfirmacao;
