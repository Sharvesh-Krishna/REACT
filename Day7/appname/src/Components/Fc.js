import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Fc() {
  //   const notify = () => toast("Wow so easy!");
  const notify = () => {
    toast.warn("Error!", {
      theme: "dark",
    });
  };
  const no = () => {
    toast.success("Successful", {
      theme: "colored",
    });
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <button onClick={no}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default Fc;