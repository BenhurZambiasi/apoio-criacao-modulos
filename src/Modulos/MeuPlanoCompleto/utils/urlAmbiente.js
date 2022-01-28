function urlAmbiente() {

    const ambiente = process.env.NODE_ENV;
    let urlAtual = "";
    
    switch (ambiente) {
      case "producao":
        urlAtual = "https://api.unimed.coop.br";
        break;
      case "pre-producao":
        urlAtual = "https://api-preproducao.portalunimed.com.br";
        break;
      case "teste":
        urlAtual = "https://api-teste.portalunimed.com.br";
        break;
      case "desenvolvimento":
        urlAtual = "https://api-desenv.portalunimed.com.br";
        break;
      default:
        urlAtual = "https://api.unimed.coop.br";
        break;
    }
    return urlAtual;
  }
  
  export default urlAmbiente;