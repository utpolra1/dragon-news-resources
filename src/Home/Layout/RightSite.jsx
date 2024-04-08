import React, { useContext } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import image1 from "../../assets/qZone1.png";
import image3 from "../../assets/qZone2.png";
import image2 from "../../assets/qZone3.png";
import { authContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSite = () => {
  const {googleLogin}=useContext(authContext);

  const googleLogins = () => {
    googleLogin()
  };
  
  return (
    <div>
      <div className="p-4">
        <h1 className="font-bold text-2xl">Login With</h1>
        <div className="flex flex-col gap-2">
          <button onClick={googleLogins} className="btn">
            <FaGoogle></FaGoogle>
            Login With Google
          </button>
          <button className="btn">
            <FaGithub></FaGithub>
            Login With GitHub
          </button>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-2xl">Find Us On</h1>
        <a
          className="flex items-center gap-3 border rounded-t-lg p-3 justify-center"
          href=""
        >
          <FaFacebook></FaFacebook>
          Facebook
        </a>
        <a
          className="flex items-center gap-3 border p-3 justify-center"
          href=""
        >
          <FaTwitter></FaTwitter>
          Twitter
        </a>
        <a
          className="flex items-center gap-3 border rounded-b-lg p-3 justify-center"
          href=""
        >
          <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>
      <div>
        <h1 className="font-bold text-2xl ">Q-Zone</h1>
        <div className="flex flex-col justify-center items-center">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSite;
