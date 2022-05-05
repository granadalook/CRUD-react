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
      <input
        className="form-control"
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
        type="text"
        name="username"
        {...register("username", {
          required: { value: true, message: "USUARIO REQUERIDO" },
        })}
      />
      <div>{errors?.username?.message}</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-warning m-3 btn-lg ">
          Editar Ususario
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
