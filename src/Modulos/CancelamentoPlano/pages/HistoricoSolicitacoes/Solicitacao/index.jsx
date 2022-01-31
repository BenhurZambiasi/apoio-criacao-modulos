import React from "react";

const Solicitacao = (props) => {
  const { solicitacao } = props;
  return (
    <tr>
      <td className="col-md-2">{solicitacao.cartao}</td>
      <td className="col-md-3">{solicitacao.nome}</td>
      <td className="col-md-3">{solicitacao.data}</td>
      <td className="col-md-3">{solicitacao.protocolo}</td>
    </tr>
  );
};

export default Solicitacao;
