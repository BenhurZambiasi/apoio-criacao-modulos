import React, { useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { telefoneMask } from "../../../components/Mask";

const MSG_OBRIGATORIO = "Campo Obrigatório";
const MSG_EMAIL_INVALIDO = "E-mail inválido";
const MSG_TELEFONE_INVALIDO = "Telefone inválido";

const formPessoFisica = Yup.object({
  email: Yup.string().email(MSG_EMAIL_INVALIDO).required(MSG_OBRIGATORIO),
  telefone: Yup.string()
    .required(MSG_OBRIGATORIO)
    .min(14, MSG_TELEFONE_INVALIDO),
});

const Formulario = ({
  openModal,
  beneficiarios,
  beneficiariosSelecionados,
  errorSelecao,
  setErrorSelecao,
}) => {
  useEffect(() => {
    if (beneficiariosSelecionados.length > 0) {
      setErrorSelecao("");
    }
  }, [beneficiariosSelecionados]);
  return (
    <Formik
      validationSchema={formPessoFisica}
      initialValues={{
        email: "",
        telefone: "",
      }}
      onSubmit={(values, action) => {
        if (beneficiariosSelecionados.length > 0) {
          openModal();
          setErrorSelecao("");
        } else {
          setErrorSelecao("Selecione pelo menos um cartão");
        }
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
        resetForm,
        validateForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <h4>Informe o telefone do títular</h4>
          <div className="row">
            <div className="form-group col-md-5 col-sm-12 col-xl-4">
              <label for="telefone">Telefone*</label>
              <input
                id="telefone"
                className={`form-control ${
                  errors.telefone && touched.telefone
                    ? "is-invalid campo__invalido"
                    : ""
                }`}
                name="telefone"
                placeholder="Telefone com DDD"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={telefoneMask(values.telefone)}
              />
              {errors.telefone && touched.telefone && (
                <div className="invalid-feedback">{errors.telefone}</div>
              )}
            </div>
            <div className="form-group col-md-5 col-sm-12 col-xl-4">
              <label for="email">E-mail*</label>
              <input
                id="email"
                className={`form-control ${
                  errors.email && touched.email
                    ? "is-invalid campo__invalido"
                    : ""
                }`}
                name="email"
                placeholder="Digite seu e-mail"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>
          <p>Observações</p>
          <p>
            Solicitações encaminhadas estarão disponíveis para acompanhamento
            após anaálise da Unimed.
          </p>
          <div className="errorSelecao">{errorSelecao}</div>
          <div className="cancelamento-plano-footer-botoes">
            <button className="btn-unimed btn-unimed--green" type="submit">
              SOLICITAR
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Formulario;
