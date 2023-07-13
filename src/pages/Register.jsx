import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../redux/slices/auth";

import logo from "/logo.svg";

function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "Bohdan",
      email: "bohdan@email.com",
      password: "Pa$$Word123",
    },
    mode: "onChange",
  });

  const onSubmitForm = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("User already exists");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  return (
    <div className='form'>
      <img className='form__logo' src={logo} alt='' />
      <h1 className='form__title'>
        Welcome to <span>FILENO</span>
      </h1>
      <form className='form__content' onSubmit={handleSubmit(onSubmitForm)}>
        <label className='label'>Enter a username</label>
        <input
          className='ui-input'
          {...register("fullName", { required: "Enter full name" })}
          type='text'
          placeholder={errors.fullName?.message}
        />
        <label className='label'>Enter your email</label>
        <input
          className='ui-input'
          {...register("email", { required: "Enter email" })}
          type='email'
          placeholder={errors.email?.message}
        />
        <label className='label'>Create a password</label>
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
        Already have an account? <Link to={"/login"}>Sign in</Link>
      </p>
    </div>
  );
}

export default Register;
