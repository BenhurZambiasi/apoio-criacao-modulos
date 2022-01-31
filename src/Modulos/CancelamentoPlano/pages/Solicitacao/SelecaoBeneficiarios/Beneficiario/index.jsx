import React from "react";

const Beneficiario = (props) => {
  const { beneficiario } = props;
  return (
    <tr>
      <td className="col-md-1">X</td>
      <td className="col-md-3">{beneficiario.cartao}</td>
      <td className="col-md-3">{beneficiario.nome}</td>
      <td className="col-md-4">{beneficiario.dataNascimento}</td>
    </tr>
  );
};

export default Beneficiario;
