import React, { useState } from "react";

//usar somente quando não estiver no liferay
import "./style.css";

const App = () => {
  const [serviceFiltereds, setServiceFiltereds] = useState([
    { name: "2° via de boleto", id: 1 },
    { name: "Extratos de utilização", id: 2 },
    { name: "Agendamentos", id: 3 },
  ]);

  return (
    <>
      <div className="mais-buscados-container">
        <div className="mais-buscados-title">Serviços mais buscados:</div>
        {serviceFiltereds.map((item) => {
          return (
            <div className="mais-buscados-item" key={item.id}>
              <i class="fal fa-file-invoice-dollar"></i>
              <p>{item.name}</p>
              <i class="fal fa-chevron-circle-right"></i>
            </div>
          );
        })}
        <div className="mais-buscados-button-services">
          <p>Ver todos os serviços</p>
        </div>
        <div className="mais-buscados-item">></div>
      </div>
    </>
  );
};

export default App;
