import React from "react";
import "../../../../style.css";

const Beneficiario = (props) => {
  const { beneficiario, handleCheck, beneficiariosSelecionados } = props;

  return (
    <tr
      className={`${
        beneficiariosSelecionados.some(
          (item) => item.cartao === beneficiario.cartao
        ) && "selected"
      }`}>
      <td className={`col-md-1`}>
        <div className={`container-check`}>
          <label htmlFor={beneficiario.cartao}>
            <input
              type="checkbox"
              id={beneficiario.cartao}
              onChange={() => handleCheck(beneficiario)}
              checked={
                beneficiariosSelecionados.some(
                  (item) => item.cartao === beneficiario.cartao
                )
                  ? true
                  : false
              }
            />
            <div className={`content-check`}>
              <div></div>
            </div>
          </label>
        </div>
      </td>
      <td className="col-md-3">{beneficiario.cartao}</td>
      <td className="col-md-3">{beneficiario.nome}</td>
      <td className="col-md-3">{beneficiario.dataNascimento}</td>
      <td className="col-md-3">{beneficiario.relacao}</td>
    </tr>
  );
};

export default Beneficiario;
