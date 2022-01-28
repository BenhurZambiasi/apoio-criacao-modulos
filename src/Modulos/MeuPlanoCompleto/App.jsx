import React, { useEffect, useState } from "react";
import "./style.css";

let dados = {
  nome: "Larissa dos Santos",
  cpf: "001.123.444-96",
  dtnascimento: "14/12/1990",
  cns: 12345678910,
  razaoSocial: "JC EMPREENDIMENTOS",
  fantisaNome: "JC EMPREENDIMENTOS",
  matricula: 8651234000000001,
  razaoOperadora: "Unimed Grande Florianópolis Cooperativa de Trabalho Médico",
  fantasiaNomeOperadora: "Unimed Grande Florianópolis",
  registro: 123456789,
  adminstradora: "Não há",
  plano: "UNIFLEX NACIONAL COOP 20%",
  numeroRegistro: 999999999,
  segmentacao: "AMBULATORIAL + HOSPITALAR COM OBSTETRÍCIA",
  abrangencia: "Nacional",
  padraoAcomodacao: "Individual",
  tipoContratacao: "Coletivo Empresarial",
  contratante: "Plano Familiar",
  regulamentacaoPlano:
    "Plano Regulamentado (celebrado após 1º de Janeiro de 1999)",
  numeroContrato: 999999999,
  dataTermino: "Não há",
  dataContratacaoPlano: "14/12/2019",
  dataInicioCoberturaContratualBeneficiario: "14/12/2019",
};

const App = () => {
  const [user, setUser] = useState({
    nome: "",
    cpf: "",
    dtnascimento: "",
    cns: 0,
    razaoSocial: "",
    fantisaNome: "",
    matricula: 0,
    razaoOperadora: "",
    fantasiaNomeOperadora: "",
    registro: 0,
    adminstradora: "",
    plano: "",
    numeroRegistro: 0,
    segmentacao: "",
    abrangencia: "",
    padraoAcomodacao: "",
    tipoContratacao: "",
    contratante: "",
    regulamentacaoPlano: "",
    numeroContrato: 0,
    dataTermino: "",
    dataContratacaoPlano: "",
    dataInicioCoberturaContratualBeneficiario: "",
  });

  useEffect(() => {
    const getInfoUserPlan = () => {
      setUser(dados);
    };
    getInfoUserPlan();
  }, []);
  return (
    <React.Fragment>
      <div className="master-container-info-plano">
        <div className="text-title-info-plano">
          <h1>Informações do Plano</h1>
          <p>
            Veja as informações do seu plano contratado e as carências por tipo
            de atendimento
          </p>
        </div>
        <div className="info-plano">
          <div className="title-info-plano">
            <p>Informações do plano contratado</p>
          </div>
        </div>
        <div className="container-info-plano">
          <div className="title-info-beneficiario">
            <p>Informações sobre o beneficiário</p>
          </div>
          <div className="content-info-beneficiario">
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Nome</span>
                <span>{user.nome}</span>
              </div>
              <div className="content-column">
                <span className="title-column">
                  Cartão Nacional de Saúde - CNS
                </span>
                <span>{user.cns}</span>
              </div>
            </div>
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">CPF</span>
                <span>{user.cpf}</span>
              </div>
              <div className="content-column">
                <span className="title-column">
                  Razão social da pessoa jurídica contratante do plano
                </span>
                <span>{user.razaoSocial}</span>
              </div>
            </div>
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Data de nascimento</span>
                <span>{user.dtnascimento}</span>
              </div>
              <div className="content-column">
                <span className="title-column">
                  Nome fantasia da pessoa jurídica contratante do plano
                </span>
                <span>{user.fantisaNome}</span>
              </div>
            </div>

            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Matrícula do plano</span>
                <span>{user.matricula}</span>
              </div>
            </div>
          </div>
          <div className="info-plano-divider"></div>
        </div>
        <div className="container-info-plano">
          <div className="title-info-beneficiario">
            <p>Informações sobre a operadora</p>
          </div>
          <div className="content-info-beneficiario secondary-info-plano">
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Razão Social</span>
                <span>{user.razaoOperadora}</span>
              </div>
            </div>
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Nome fantasia</span>
                <span>{user.fantasiaNomeOperadora}</span>
              </div>
            </div>
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Registro</span>
                <span>{user.registro}</span>
              </div>
            </div>

            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Administradora</span>
                <span>{user.adminstradora}</span>
              </div>
            </div>
          </div>
          <div className="info-plano-divider"></div>
        </div>
        <div className="container-info-plano">
          <div className="title-info-beneficiario">
            <p>Informações sobre o plano</p>
          </div>
          <div className="content-info-beneficiario">
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Plano</span>
                <span>{user.plano}</span>
              </div>
              <div className="content-column">
                <span className="title-column">Padrão de acomodação</span>
                <span>{user.padraoAcomodacao}</span>
              </div>
              <div className="content-column">
                <span className="title-column">Nº do Contrato / Apólice</span>
                <span>{user.numeroContrato}</span>
              </div>
            </div>
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">
                  Nº registro do plano privado de assistência à saúde
                </span>
                <span>{user.numeroRegistro}</span>
              </div>
              <div className="content-column">
                <span className="title-column">Tipo de contratação</span>
                <span>{user.tipoContratacao}</span>
              </div>
              <div className="content-column">
                <span className="title-column">
                  Data de término da Cobertura Parcial Temporária - CPT
                </span>
                <span>{user.dataTermino}</span>
              </div>
            </div>
            <div className="container-column">
              <div className="content-column">
                <span className="title-column">
                  Segmentação assistencial do plano
                </span>
                <span>{user.segmentacao}</span>
              </div>
              <div className="content-column">
                <span className="title-column">Contratante</span>
                <span>{user.contratante}</span>
              </div>
              <div className="content-column">
                <span className="title-column">
                  Data de contratação do plano
                </span>
                <span>{user.dataContratacaoPlano}</span>
              </div>
            </div>

            <div className="container-column">
              <div className="content-column">
                <span className="title-column">Abrangência geográfica</span>
                <span>{user.abrangencia}</span>
              </div>
              <div className="content-column">
                <span className="title-column">Regulamentação do plano</span>
                <span>{user.regulamentacaoPlano}</span>
              </div>
              <div className="content-column">
                <span className="title-column">
                  Data do início da cobertura contratual do beneficiário
                </span>
                <span>{user.dataInicioCoberturaContratualBeneficiario}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="info-plano">
          <div className="title-info-plano">
            <p>Carências</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
