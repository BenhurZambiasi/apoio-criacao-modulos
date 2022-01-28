import React from "react";
import Beneficiario from "./Beneficiario";

const SelecaoBeneficiarios = (props) => {
  return (
    <table>
      <thead>
        <td>Remover</td>
        <td>Número do cartão</td>
        <td>Nome</td>
        <td>Data de nascimento</td>
      </thead>
      <tbody>
        {props.beneficiarios.map((beneficiario, index) => (
          <Beneficiario key={index + 1} beneficiario={beneficiario} />
        ))}
      </tbody>
    </table>
  );
};

export default SelecaoBeneficiarios;
