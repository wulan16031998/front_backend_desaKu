import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "./../components/Button";
import { Link } from "react-router-dom";




export const Login = () => {

  
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="grid grid-cols-2 ">
        <div className="bg-loginpic h-auto">
          <Link to="/" className="p-4 text-white text-3xl bg-[#29b2ff] ">
            ←
          </Link>
        </div>
        <div className="m-auto">
          <h1 className="text-4xl pb-5 font-bold text-[#29b2ff] text-center">Masuk</h1>
          <form className="grid grid-rows-3 gap-4 w-80 h-70">
            <input type="text" name="name" className="border-solid border-2 radius p-2 rounded-md" placeholder="Username" />
            <input type="password" name="name" className="border-solid border-2 p-2 rounded-md" placeholder="Password" />
            <a href="https://www.google.com" className="text-right text-sm">
              Lupa Password?
            </a>
            <Button text="Masuk" />
            <Link to='/register' >
              <Button text='Pendaftaran akun' className='buttonRegister' />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
