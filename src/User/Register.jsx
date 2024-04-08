import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {registerUser}=useContext(authContext);

    // const [email, setemail]=useState([]);
    // const [password,setPassword]=useState([]);
    // console.log(email,password)


    const hanleRegister=(e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;
        registerUser(email,password)
        .then((result) => {
            console.log(result)
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now !</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hanleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register Now</button>
              </div>
              <div>
                Allready Have account <NavLink to="/login"><span className="text-sky-500">Login Now</span></NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
