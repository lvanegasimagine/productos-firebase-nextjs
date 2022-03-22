import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout/Layout";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

// Hooks
import useValidacion from "../hooks/useValidacion";

const CrearCuenta = () => {

  
  return (
    <div className="">
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Crear Cuenta
          </h1>
          <Formulario>
            <Campo className="">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Tu Nombre" name="nombre" />
            </Campo>
            <Campo className="">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Tu Email" name="email" />
            </Campo>
            <Campo className="">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Tu Password" name="password" />
            </Campo>
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};

export default CrearCuenta;
