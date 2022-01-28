import React, { useState, useEffect } from "react";

export default function PrimeiroNome(props) {
  const [nomeFormatado, setNomeFormatado] = useState("");

  useEffect(() => {
    const formatarNome = (nome) => {
      setNomeFormatado(nome.split(" ").slice(0, 1).join(" "));
    };

    if (props.nome) formatarNome(props.nome);
  }, [props.nome]);

  return (
    <React.Fragment>{props.nome && <p>Olá, {nomeFormatado}!</p>}</React.Fragment>
  );
}
