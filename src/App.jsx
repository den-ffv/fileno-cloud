import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import MyDrive from "./pages/MyDrive";
import Starred from "./pages/Starred";

import "./App.scss";

function App() {
  const isAuth = useSelector(selectIsAuth);
  const isToken = window.localStorage.getItem("token");
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe())
      .then(() => setIsloading(false))
      .catch(() => setIsloading(false));
  }, []);

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth]);

  if (isLoading) {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  }
  
  return (
    <>
      {isAuth && isToken ? (
        <div className='wrapper'>
          <SideBar />
          <div className='content'>
            <Header />
            <Routes>
              <Route path='/' exact element={<MyDrive />} />
              <Route path='/star' element={<Starred />} />
            </Routes>
          </div>
        </div>
      ) : (
        <>
          <Form />
        </>
      )}
    </>
  );
}

export default App;
