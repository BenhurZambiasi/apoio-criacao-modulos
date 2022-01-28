import React from "react";
import ReactDOM from "react-dom";
import UploadImagemPerfil from "./Modulos/UploadImagemPerfil/App";
import ServicosMaisBuscados from "./Modulos/ServicosMaisBuscados/App";
import MeuPlanoResumo from "./Modulos/MeuPlanoResumo/App";
import CancelamentoPlano from "./Modulos/CancelamentoPlano/App";
import MeuPlanoCompleto from "./Modulos/MeuPlanoCompleto/App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <CancelamentoPlano />
  </React.StrictMode>,
  document.getElementById("root")
);
