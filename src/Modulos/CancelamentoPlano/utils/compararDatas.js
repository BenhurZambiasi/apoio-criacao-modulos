export const comparador = (data) => {
  
  const addDaysWRONG = () => {
    var result = new Date();
    result.setDate(new Date().getDate() - 30);
    return result;
  };

  if (data <= addDaysWRONG()) {
    return true;
  } else {
    return false;
  }
};
