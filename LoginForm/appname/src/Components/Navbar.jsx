import React from "react";
import "../Assets/App.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

    const notify1 = () => {
      navigate("/");
    };
    const notify2 = () => {
      navigate("/login");
  };

  return (
    <>
      <div className="nav">
        <button type="submit" className="switch-button" onClick={notify1}>
          Register
        </button>
        <button type="submit" className="switch-button" onClick={notify2}>
          Login
        </button>
      </div>
    </>
  );
}

export default Navbar;