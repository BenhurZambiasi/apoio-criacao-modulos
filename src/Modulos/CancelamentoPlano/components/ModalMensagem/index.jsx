import React, { useState } from "react";
import Checkbox from "../Checkbox";
import "./styles.css";

const ModalMensagem = ({ beneficiarios, handleClose }) => {
  const [terms, setTerms] = useState();
  const [errTerms, setErrorTerms] = useState(false);

  const handleTerms = ({ target }) => {
    setErrorTerms(false);
    setTerms(target.checked);
  };
  const handleEnviar = () => {
    if (!terms) {
      setErrorTerms(true);
    }
  };
  return (
    <div className="modal-container">
      <div className="modal-content-cancelamento">
        <div className="content-cancelamento">
          <div className="title">
            <div>
              <h1>
                Ao confirmar a solicitação será enviado para a sua Unimed o
                pedido de cancelamento do plano de saúde para o(s) seguinte(s)
                beneficiário(s):
              </h1>
            </div>
          </div>
          <div className="info-cartao">
            <table className="table-bene-cancelamento">
              <thead className="thead-bene-cancelamento">
                <tr>
                  <th>Numero do Cartão</th>
                  <th>Nome</th>
                  <th>Relação</th>
                </tr>
              </thead>

              <tbody className="tbody-bene-cancelamento">
                {beneficiarios &&
                  beneficiarios.map((beneficiario, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{beneficiario.numeroCartao}</td>
                        <td>{beneficiario.nome}</td>
                        <td>{beneficiario.relacao}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="doc-cancelamento">
            <div className="label-doc-cancelamento">
              <p>
                Antes de enviar, é preciso que esteja ciente das seguinte
                informações:
              </p>
            </div>
            <div className="content-doc-cancelamento">
              <p>
                <span className="title-doc-cancelamento">
                  Do Fornecimento de Informações aos Beneficiários sobre as
                  Consequências do Cancelamento ou Exclusão do Contrato de Plano
                  de Saúde
                </span>
              </p>
              <p>
                <span className="title-doc-cancelamento">Art. 15.</span>
                <p>
                  Recebida pela operadora ou administradora de benefícios, a
                  solicitação do cancelamento do contrato de plano de saúde
                  individual ou familiar ou de exclusão de beneficiários em
                  plano coletivo empresarial ou coletivo por adesão, a operadora
                  ou administradora de benefícios, destinatária do pedido,
                  deverá prestar de forma clara e precisa, no mínimo, as
                  seguintes informações:
                </p>
              </p>
              <p>
                I – eventual ingresso em novo plano de saúde poderá importar:
              </p>
              <p>
                a) no cumprimento de novos períodos de carência, observado o
                disposto no inciso V do artigo 12, da Lei nº 9.656, de 3 de
                junho de 1998;
              </p>

              <p>
                b) na perda do direito à portabilidade de carências, caso não
                tenha sido este o motivo do pedido, nos termos previstos na RN
                nº 186, de 14 de janeiro de 2009, que dispõe, em especial, sobre
                a regulamentação da portabilidade das carências previstas no
                inciso V do art. 12 da Lei nº 9.656, de 3 de junho de 1998;
              </p>
              <p>
                c) no preenchimento de nova declaração de saúde, e, caso haja
                doença ou lesão preexistente – DLP, no cumprimento de Cobertura
                Parcial Temporária – CPT, que determina, por um período
                ininterrupto de até 24 meses, a partir da data da contratação ou
                adesão ao novo plano, a suspensão da cobertura de Procedimentos
                de Alta Complexidade (PAC), leitos de alta tecnologia e
                procedimentos cirúrgicos;
              </p>
              <p>
                d) na perda imediata do direito de remissão, quando houver,
                devendo o beneficiário arcar com o pagamento de um novo contrato
                de plano de saúde que venha a contratar;
              </p>
              <p>
                II - efeito imediato e caráter irrevogável da solicitação de
                cancelamento do contrato ou exclusão de beneficiário, a partir
                da ciência da operadora ou administradora de benefícios;
              </p>
              <p>
                III – as contraprestações pecuniárias vencidas e/ou eventuais
                coparticipações devidas, nos planos em pré-pagamento ou em
                pós-pagamento, pela utilização de serviços realizados antes da
                solicitação de cancelamento ou exclusão do plano de saúde são de
                responsabilidade do beneficiário;
              </p>
              <p>
                IV - as despesas decorrentes de eventuais utilizações dos
                serviços pelos beneficiários após a data de solicitação de
                cancelamento ou exclusão do plano de saúde, inclusive nos casos
                de urgência ou emergência, correrão por sua conta;
              </p>
              <p>
                V – a exclusão do beneficiário titular do contrato individual ou
                familiar não extingue o contrato, sendo assegurado aos
                dependentes já inscritos o direito à manutenção das mesmas
                condições contratuais, com a assunção das obrigações
                decorrentes;
              </p>
              <p>
                VI – a exclusão do beneficiário titular do contrato coletivo
                empresarial ou por adesão observará as disposições contratuais
                quanto à exclusão ou não dos dependentes, conforme o disposto no
                inciso II do parágrafo único do artigo 18, da RN nº 195, de 14
                de julho de 2009, que dispõe sobre a classificação e
                características dos planos privados de assistência à saúde,
                regulamenta a sua contratação, institui a orientação para
                contratação de planos privados de assistência à saúde e dá
                outras providências.
              </p>
            </div>
            <Checkbox
              onChange={handleTerms}
              error={errTerms}
              label="Li e estou ciente das consequências do envio da solicitação de
                cancelamento (Art. 15º)."
            />
          </div>
          <div className="actions-cancelamento">
            <button className="btn-cancelar" onClick={handleClose}></button>
            <button className="btn-enviar" onClick={handleEnviar}>
              Enviar
            </button>
          </div>
        </div>

        <div className="exit">
          <div onClick={handleClose}></div>
        </div>
      </div>
    </div>
  );
};

export default ModalMensagem;
