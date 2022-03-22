import React, { useEffect, useState } from "react";

const useValidacion = (stateInicial, validar, fn) => {
  const [valores, setValores] = useState(stateInicial);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if(submitForm){
        const noErrores = Object.keys(errores).length === 0;

        if(noErrores){
            fn(); // Fn = Funcion que se ejecuta en el componente
        }
        setSubmitForm(false);
    }
  }, [])
  
  // TODO: Funcion que se ejecuta conforme el usuario escribe algo

  const handleChange = e => {
      setValores({
          ...valores,
          [e.target.name]: e.target.value
      })
  }

  // TODO: Funcion que se ejecuta cuando el usuario hace submit

  const handleSubmit = e => {
      e.preventDefault();
      const erroresValidacion = validar(valores);
      setErrores(erroresValidacion);
      setSubmitForm(true);
  }
  return {
      valores, errores, submitForm, handleSubmit, handleChange
  };
};

export default useValidacion;
