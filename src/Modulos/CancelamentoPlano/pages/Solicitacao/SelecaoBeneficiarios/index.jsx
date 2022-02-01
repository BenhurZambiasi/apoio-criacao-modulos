import React from "react";
import Beneficiario from "./Beneficiario";

const SelecaoBeneficiarios = ({
  beneficiarios,
  beneficiariosSelecionados = [],
  setBeneficiariosSelecionados,
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

  return (
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
        />
      ))}
    </table>
  );
};

export default SelecaoBeneficiarios;
