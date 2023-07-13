import React from "react";
import "./Form.scss";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
function Form() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default Form;
