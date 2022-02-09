import React from "react";
import Beneficiario from "./Beneficiario";
import "../../../style.css";

const SelecaoBeneficiarios = ({
  beneficiarios,
  beneficiariosSelecionados = [],
  setBeneficiariosSelecionados,
  errorSelecao,
}) => {
  const handleCheck = (beneficiarioItem) => {
    let list = [...beneficiariosSelecionados];
    const beneficiarioSelecionado = list.find(
      (item) => item.cartao === beneficiarioItem.cartao
    );
    if (beneficiarioItem.relacao === "Titular") {
      if (beneficiarioSelecionado) {
        let index = list.indexOf(beneficiarioSelecionado);
        list.splice(index, 1);
        setBeneficiariosSelecionados(list);
      } else {
        setBeneficiariosSelecionados(beneficiarios);
      }
    } else {
      if (beneficiarioSelecionado) {
        let index = list.indexOf(beneficiarioSelecionado);
        list.splice(index, 1);
      } else {
        list.push(beneficiarioItem);
      }
      setBeneficiariosSelecionados(list);
    }
  };

  const selected = (cartao) => {
    return (
      beneficiariosSelecionados.some((item) => item.cartao === cartao.cartao) &&
      "selected"
    );
  };

  return (
    <>
      <div className="responsive-table-cancelamento">
        <div className="responsive-table-cancelamento-header">
          <span>Remover</span> <span>Número Cartão</span>
        </div>
        <div className="divider-table-cancelamento"></div>

        <div className="responsive-table-cancelamento-body">
          {beneficiarios.map((beneficiario) => {
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
              <>
                <section
                  className={`responsive-table-cancelamento-body-content ${selected(
                    beneficiario
                  )}`}>
                  <div
                    className={`container-check responsive-check ${
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

                  <div className="responsive-table-cancelamento-body-content-infos">
                    <span>{beneficiario.cartao}</span>
                    <span>{beneficiario.nome}</span>
                    <span>Data de Nascimento</span>
                    <span>{beneficiario.dataNascimento}</span>
                  </div>
                </section>
                <div className="divider-table-cancelamento"></div>
              </>
            );
          })}
        </div>
      </div>
      <table className="cancelamento-plano-tabela">
        <thead>
          <td>Remover</td>
          <td>Número do cartão</td>
          <td>Nome</td>
          <td>Data de nascimento</td>
          <td>Relação</td>
        </thead>
        {beneficiarios.map((beneficiario) => (
          <Beneficiario
            key={beneficiario.cartao}
            beneficiario={beneficiario}
            handleCheck={handleCheck}
            beneficiariosSelecionados={beneficiariosSelecionados}
            errorSelecao={errorSelecao}
          />
        ))}
      </table>
    </>
  );
};

export default SelecaoBeneficiarios;
