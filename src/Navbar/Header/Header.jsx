import React from "react";
import logo from "../../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="items-center justify-center">
        <img src={logo} alt="" />
        <h1>Journalism Without Fear or Favour</h1>
        <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
      </div>
    </div>
  );
};

export default Header;
