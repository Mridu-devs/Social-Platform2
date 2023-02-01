import { useRef } from "react";

function Signup() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  return (
    <>
      <div className="login-main-container">
        <div className="loginbox">
          <input
            type="text"
            placeholder="Name"
            className="login-inputs"
            ref={nameRef}
            //   value={this.state.name}
            //   onChange={(event) => {
            //     this.setState({ name: event.target.value });
            //   // console.log(this.state.name)
            // }
            // }
          />
          <input
            type="text"
            placeholder="Phone-Number"
            className="login-inputs"
            ref={phoneRef}
            //   value={this.state.phonenumber}
            //   onChange={(event) => {
            //     {
            //       this.setState({ phonenumber: event.target.value });
            //     }
            //     console.log(this.state.phonenumber)}}
          />
          <input
            type="text"
            placeholder="Email-ID"
            className="login-inputs"
            ref={emailRef}
            //   value={this.state.emailid}
            //   onChange={(event) => {
            //     this.setState({ emailid: event.target.value });
            //     console.log(this.state.emailid)}}
          />
          <input
            type="text"
            placeholder="Address"
            className="login-inputs"
            ref={addressRef}
            //   value={this.state.address}
            //   onChange={(event) => {
            //     this.setState({ address: event.target.value });
            //     console.log(this.state.address)}}
          />
          <input
            type="text"
            placeholder="Create a Password"
            className="login-inputs"
            ref={passwordRef}
            //   value={this.state.password}
            //   onChange={(event) => {
            //     this.setState({ password: event.target.value });
            //     console.log(this.state.password)}}
          />
          <input
              type="password"
              placeholder="Confirm the Password"
              className="login-inputs"
              ref={confirmPasswordRef}
            />
          <button className="create-btn">Create a new account</button>
        </div>
      </div>
    </>
  );
}

export default Signup;
