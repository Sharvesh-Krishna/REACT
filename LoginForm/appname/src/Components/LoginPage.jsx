import { useRef, useState } from "react";
import "../Assets/App.css";

export default function LoginPage() {
  const userInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username: userInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(formData);

    if (formData.username.length === 0) {
      setErrors({ ...errors, username: "Fill the username" });
    } else if (formData.username.length < 6) {
      setErrors({
        ...errors,
        username: "Username must be minimum 6 characters",
      });
    } else if (formData.password !== "" && formData.cpassword !== "") {
      let a = document.getElementById("password").value;
      let b = document.getElementById("cpassword").value;

      if (a === b) {
        alert("Password matched ! Register Successful");
      } else {
        alert("Password not matched !");
      }
    } else if (formData.password === "") {
      setErrors({ ...errors, password: "Fill the password" });
    }  else {
      setErrors({ ...errors, username: "", password: "" });
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="">
          <form className="auth-container" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              ref={userInputRef}
              placeholder="Username"
            />
            {errors.username === "" ? (
              ""
            ) : (
              <span className="error-comp">{errors.username}</span>
            )}
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              placeholder="Password"
            />
            {errors.password === "" ? (
              ""
            ) : (
              <span className="error-comp">{errors.password}</span>
            )}
            
            <span className="btn-container">
              <input type="submit" value="Register" className="auth-btn w-50" />
            </span>
          </form>
        </div>
      </div>
    </>
  );
}