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
      <input
        className="form-control"
        placeholder="Ingrese nombre"
        type="text"
        name="name"
        {...register("name", {
          required: { value: true, message: "NOMBRE REQUERIDO" },
        })}
      />
      <hr />
      <div>{errors?.name?.message}</div>

      <input
        className="form-control"
        placeholder="Ingrese su usuario"
        type="text"
        name="username"
        {...register("username", {
          required: { value: true, message: "USUARIO REQUERIDO" },
        })}
      />
      <div>{errors?.username?.message}</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        {" "}
        <button type="submit" className="btn btn-success m-3 btn-lg ">
          Agregar Usuario
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
