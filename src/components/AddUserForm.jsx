import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); /// usar esto para que funcione los mensajes de error

  const onSubmit = (data, e) => {
    data.id = null;
    console.log(data);
    props.addUser(data); // enviar nuevo usuario
    e.target.reset(); //  limpiar campos
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: { value: true, message: "nombre Requerido" },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Usuario</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: { value: true, message: "nombre de usuario Requerido" },
        })}
      />
      <div>{errors?.username?.message}</div>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

export default AddUserForm;