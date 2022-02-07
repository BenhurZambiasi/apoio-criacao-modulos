import IMask from "imask";

const TELEFONE_CELULAR_MASK = "(00) 00000-0000";
const TELEFONE_RESIDENCIAL_MASK = "(00) 0000-0000";

const createMaskTelefone = IMask.createMask({
  mask: TELEFONE_CELULAR_MASK,
});

const createMaskTelefoneResindencial = IMask.createMask({
  mask: TELEFONE_RESIDENCIAL_MASK,
});

function telefoneMask(value) {
  if (value.length < 15) return createMaskTelefoneResindencial.resolve(value);

  return createMaskTelefone.resolve(value);
}

const includeMaskDate = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "$1/$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1");
};

export const removeMaskCPF = (ObjCPF) => {
  return ObjCPF.replace(/\D/g, "");
};

export { telefoneMask, includeMaskDate };
