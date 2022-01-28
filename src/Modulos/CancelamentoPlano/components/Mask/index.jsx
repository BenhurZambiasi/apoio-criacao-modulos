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

export { telefoneMask };
