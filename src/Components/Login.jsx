import { useRef } from "react";
import { Link } from "react-router-dom";

function Login() {
    const phoneRef=useRef();
    const passwordRef=useRef();


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
            //   onChange={(event) => {
            //     this.setState({ phone: event.target.value });
            //   }}
            />
            <input
              type="text"
              placeholder="Password"
              className="login-inputs"
              ref={passwordRef}
            />

            <button className="login-btn" >
              Log In
            </button>
            {/* <div>{this.state.message}</div> */}
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