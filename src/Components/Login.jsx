import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

function Login() {

  const phoneRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const isLogin=useContext(UserContext)
  console.log("checking status of context",isLogin)

  let navigate = useNavigate();

  const login = async () => {
    setError("");
    let phone = phoneRef.current.value;
    let password = passwordRef.current.value;
    console.log("phone:", phone);
    console.log("password:", password);

    let response = await fetch(
      `http://localhost:5002/users?phone=${phone}&password=${password}`,
      { method: "GET" }
    );

    let body = await response.json();

    if (body.length > 0) {
      let userid = body[0].id;
      console.log(userid)
      localStorage.setItem("loginid",`${userid}`)
      isLogin.setLogIn(localStorage.getItem("loginid"));
      return navigate(`/profile`);
      
    }
    if (body.length === 0) {
      setError("Invalid user");
    }
  };

  return (
    <>
      <div className="login-main-container">
        <div className="loginbox">
          <input
            type="text"
            // placeholder="Email or phone number"
            placeholder="Phone number"
            className="login-inputs"
            ref={phoneRef}
          />
          <input
            type="text"
            placeholder="Password"
            className="login-inputs"
            ref={passwordRef}
          />

          <button onClick={login} className="login-btn">
            Log In
          </button>
          <div className="error-message">{error}</div>
          <div className="frgt-paswrd"> Forgot password?</div>
          <Link to="/signup">
            <button className="create-btn">Create a new account</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
