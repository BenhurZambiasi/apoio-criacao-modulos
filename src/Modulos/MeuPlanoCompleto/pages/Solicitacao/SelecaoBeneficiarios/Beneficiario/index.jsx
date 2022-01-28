import React from "react";

const Beneficiario = (props) => {
  const { beneficiario } = props;
  return (
    <tr>
      <td>X</td>
      <td>{beneficiario.cartao}</td>
      <td>{beneficiario.nome}</td>
      <td>{beneficiario.dataNascimento}</td>
    </tr>
  );
};

export default Beneficiario;
