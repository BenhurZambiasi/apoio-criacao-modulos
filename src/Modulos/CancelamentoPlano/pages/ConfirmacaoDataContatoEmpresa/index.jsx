import React, { useState } from "react";
import { comparador } from "../../utils/compararDatas";
import { RN_MSG_SOLICITACAO_DEVE_AGUARDAR_30_DIAS } from "../../utils/constantes";
import { isExists } from "date-fns";
import Mensagem from "../../components/Mensagem";
import InputData from "../../components/InputData";
import "../../style.css";

const RN_MSG_CONFIRMAR_DATA = `Informe a data do cancelamento do plano
solicitado na empresa.`;

const ConfirmacaoDataContatoEmpresa = (props) => {
  const { setTipoFormulario } = props;
  const [data, setData] = useState("");
  const [errorDate, setErrorDate] = useState("");

  const handleValidateDate = () => {
    let flagErrors = 0;
    let day = data.split("/")[0];
    let month = data.split("/")[1];
    let year = data.split("/")[2];
    let fullYear;
    fullYear = year + "/" + month + "/" + day;

    if (!isExists(Number(year), Number(month), Number(day))) {
      flagErrors += 1;
      return setErrorDate("Data inválida");
    }
    if (!data) {
      setErrorDate("Insira uma data");
      return (flagErrors += 1);
    }
    if (new Date(fullYear) === "Invalid Date") {
      flagErrors += 1;
      return setErrorDate("Data inválida");
    }
    if (!comparador(new Date(fullYear))) {
      flagErrors += 1;
      return setErrorDate("message");
    }
    if (flagErrors <= 0) {
      setTipoFormulario("Solicitacao");
    }
  };

  const handleReturn = () => {
    if (errorDate === "message") {
      setErrorDate("");
    } else {
      window.history.back();
    }
  };

  return (
    <>
      {errorDate === "message" ? (
        <Mensagem message={RN_MSG_SOLICITACAO_DEVE_AGUARDAR_30_DIAS} />
      ) : (
        <div>
          <div className="cancelamento-plano-mensagem">
            <p className="cancelamento-plano-mensagem-info">
              {RN_MSG_CONFIRMAR_DATA}
            </p>
          </div>
          <div className="cancelamento-plano-data-container">
            <div className="cancelamento-plano-data">
              <span>Data:</span>
              <InputData
                setData={setData}
                setErrorDate={setErrorDate}
                errorDate={errorDate}
              />
            </div>
            <span className="error_data_cancelamento">{errorDate}</span>
          </div>
        </div>
      )}

      <div className="cancelamento-plano-footer-botoes">
        <button className="btn-unimed btn-unimed--green" onClick={handleReturn}>
          VOLTAR
        </button>
        {errorDate === "message" ? null : (
          <button
            className="btn-unimed btn-unimed--green"
            onClick={handleValidateDate}>
            CONFIRMAR
          </button>
        )}
      </div>
    </>
  );
};

export default ConfirmacaoDataContatoEmpresa;
