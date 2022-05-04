import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  console.log(props.currentUser);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    data.id = null;
    data.id = props.currentUser.id;
    props.updataUser(props.currentUser.id, data);
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
      <button type="submit">Editar Ususario</button>
    </form>
  );
};

export default EditUserForm;
