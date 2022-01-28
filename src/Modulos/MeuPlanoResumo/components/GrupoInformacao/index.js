import React from "react";

export default function GrupoInformacao({ titulo, dado }) {
  return (
    <React.Fragment>
      {dado && (
        <div className="meu-plano-resumo-grupo">
          <p className="meu-plano-resumo-grupo-title">{titulo}</p>
          <p className="meu-plano-resumo-grupo-dado">{dado}</p>
        </div>
      )}
    </React.Fragment>
  );
}
