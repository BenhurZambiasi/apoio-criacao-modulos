import React from "react";
import Beneficiario from "./Beneficiario";

const SelecaoBeneficiarios = (props) => {
  return (
    <table className="cancelamento-plano-tabela">
      <thead>
        <td>Remover</td>
        <td>Número do cartão</td>
        <td>Nome</td>
        <td>Data de nascimento</td>
      </thead>
      {props.beneficiarios.map((beneficiario) => (
        <Beneficiario key={beneficiario.cartao} beneficiario={beneficiario} />
      ))}
    </table>
  );
};

export default SelecaoBeneficiarios;
