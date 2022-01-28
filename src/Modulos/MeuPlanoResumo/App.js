import React, { useEffect, useState } from "react";
import { getBeneficiarioInfo } from "./api/beneficiarioService";
import GrupoInformacao from "./components/GrupoInformacao";
import PrimeiroNome from "./components/PrimeiroNome";

//usar somente quando não estiver no liferay
import "./style.css";

//não esquecer, esse cara precisa da dependência "axios"

const App = () => {
  const [beneficiario, setBeneficiario] = useState({});

  useEffect(() => {
    const buscarBeneficiario = () => {
      getBeneficiarioInfo("00252305553780000")
        .then((response) => {
          setBeneficiario(response.data.beneficiario);
        })
        .catch((error) => {
          console.log("Ocorreu um erro ao buscar informações do beneficiário!");
        });
    };

    buscarBeneficiario();
  }, []);

  return (
    <div className="meu-plano-resumo-container">
      <div className="meu-plano-resumo-info-pessoal">
        <div className="meu-plano-resumo-info-pessoal-header">
          <div className="meu-plano-resumo-info-pessoal-header-foto">img</div>
          <div>
            <p className="meu-plano-resumo-title">
              <PrimeiroNome nome={beneficiario.nome} />
            </p>
            <div className="meu-plano-resumo-grupo">
              <p className="meu-plano-resumo-grupo-dado">0654135054</p>
            </div>
          </div>
        </div>
        <div className="meu-plano-resumo-info-pessoal-body">
          <p className="meu-plano-resumo-info-pessoal-body-title">
            Informações pessoais
          </p>
          <div className="meu-plano-resumo-grupo">
            <p>Nome completo</p>
            <p className="meu-plano-resumo-grupo-dado">{beneficiario.nome}</p>
          </div>
          <div className="meu-plano-resumo-grupo">
            <p>Data de nascimento</p>
            <p className="meu-plano-resumo-grupo-dado">
              {beneficiario.dataDeNascimento}
            </p>
          </div>
        </div>
      </div>
      <div className="meu-plano-resumo-info-plano">
        <p className="meu-plano-resumo-title">Informações sobre o plano</p>
        <p className="meu-plano-resumo-title-borda">Dados do Plano</p>
        <div className="meu-plano-resumo-info-plano-dados">
          <div className="col-md-4">
            <GrupoInformacao titulo={"Plano"} dado={beneficiario.plano} />
            <GrupoInformacao
              titulo={"Padrão de acomodação"}
              dado={beneficiario.tipoAcomodacao}
            />
          </div>
          <div className="col-md-4">
            <GrupoInformacao
              titulo={"Segmentação assistencial do plano"}
              dado={beneficiario.segmentacaoProduto}
            />
            <GrupoInformacao
              titulo={"Tipo de contratação"}
              dado={beneficiario.naturezaJuridicaContratacao}
            />
          </div>
          <div className="col-md-4">
            <GrupoInformacao
              titulo={"Área de abrangência geográfica"}
              dado={beneficiario.abrangenciaPlano}
            />
          </div>
        </div>
        <div className="meu-plano-resumo-info-plano-footer">
          <a>Ver mais +</a>
        </div>
      </div>
    </div>
  );
};

export default App;
