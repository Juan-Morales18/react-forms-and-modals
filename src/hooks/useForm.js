import { useState } from "react";
import { helpHttp } from "../helpers/helptHtpp";

function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormState = { ...form, [name]: value };

    setForm(newFormState);
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form)); //La funcion actualizara la variable errors con lo que retorne validateForm
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form)); //La funcion actualizara la variable errors con lo que retorne validateForm

    if (Object.keys(errors).length === 0) {
      //Procesa formulario
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/your@email.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 2000);
        });
    } else return;
  };

  //El hook personalizado puede retornar cualquier tipo de dato
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}

export { useForm };
