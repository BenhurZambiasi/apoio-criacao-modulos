import React from "react";
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

const Formulario = () => {
  return (
    <Formik
      validationSchema={formPessoFisica}
      initialValues={{
        email: "",
        telefone: "",
      }}
      onSubmit={(values, action) => {
        debugger;
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
          <p>Informe o telefone do títular</p>
          <div className="row">
            <div className="form-group col-md-5 col-sm-12 col-xl-4">
              <label htmlFor="telefone">Telefone*</label>
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
              <label htmlFor="email">E-mail*</label>
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
        </form>
      )}
    </Formik>
  );
};

export default Formulario;
