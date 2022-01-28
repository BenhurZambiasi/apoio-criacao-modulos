import api from './api';

export const getBeneficiarioInfo = async (cartao) => {
  try {
    let route = `beneficiarios/${cartao}/info`;
    return await api.get(route);
  } catch (error) {
    debugger
    return Promise.reject(error.response);
  }
};