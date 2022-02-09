import React from "react";
import "../../../../style.css";

const Beneficiario = (props) => {
  const { beneficiario, handleCheck, beneficiariosSelecionados, errorSelecao } =
    props;
  const disableTitular = beneficiariosSelecionados.some(
    (item) => item.relacao === "Titular"
  )
    ? true
    : false;

  const checkedCartoa = beneficiariosSelecionados.some(
    (item) => item.cartao === beneficiario.cartao
  )
    ? true
    : false;
  return (
    <tr
      className={`${
        beneficiariosSelecionados.some(
          (item) => item.cartao === beneficiario.cartao
        ) && "selected"
      }`}>
      <td className={`col-md-1`}>
        <div
          className={`container-check ${
            beneficiario.relacao !== "Titular" &&
            disableTitular &&
            "check-error-disabled"
          }`}>
          <label htmlFor={beneficiario.cartao}>
            {beneficiario.relacao !== "Titular" ? (
              <input
                type="checkbox"
                disabled={disableTitular}
                id={beneficiario.cartao}
                onChange={() => handleCheck(beneficiario)}
                checked={checkedCartoa}
              />
            ) : (
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
            )}

            <div
              className={`content-check ${errorSelecao && "error"} ${
                disableTitular && "check-error-disabled"
              } `}>
              <div
                className={`${
                  beneficiario.relacao !== "Titular" &&
                  disableTitular &&
                  "check-error-disabled"
                }`}></div>
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
