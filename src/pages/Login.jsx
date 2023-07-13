import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../redux/slices/auth";

import logo from "/logo.svg";

function Login() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "test1@email.com",
      password: "12345Pa$$Word",
    },
    mode: "onChange",
  });

  const onSubmitForm = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Incorrect username or password.");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  return (
    <div className='form'>
      <img className='form__logo' src={logo} alt='' />
      <h1 className='form__title'>
        Sign in to <span>FILENO</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmitForm)} className='form__content'>
        <label className='label'>Email address</label>
        <input
          className='ui-input'
          {...register("email", { required: "Enter email" })}
          type='email'
          placeholder={errors.email?.message}
        />
        <label className='label'>Password</label>
        <input
          className='ui-input'
          {...register("password", { required: "Enter password" })}
          type='password'
          placeholder={errors.password?.message}
        />
        <button type='submit' className='form__button'>
          Sign in
        </button>
      </form>
      <p className='form__callout'>
        New to FILENO? <Link to={"/register"}>Create an account.</Link>
      </p>
    </div>
  );
}

export default Login;
