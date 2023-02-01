import { useRef, useState } from "react";

function Signup() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [nameError, setNameError] = useState("*mandatory fields");
  const [phoneError, setPhoneError] = useState("*mandatory fields");
  const [addressError, setAddressError] = useState("*mandatory fields");
  const [emailError, setEmailError] = useState("*mandatory fields");
  const [passwordError, setPasswordError] = useState("*mandatory fields");
  const [confirmPasswordError, setConfirmPasswordError] = useState("*mandatory fields");

  function confirmPassword() {
    setConfirmPasswordError("");
    const currentConfirmPassword = confirmPasswordRef.current.value;
    const currentPassword = passwordRef.current.value;
    if (currentConfirmPassword === "") {
        setConfirmPasswordError("Confirm Password field cannot be blank");
    } else if (currentConfirmPassword !== currentPassword) {
        setConfirmPasswordError("Password and confirm password must be same");
    }
  }

  function passwordValidating() {
    setPasswordError("");
    const currentPassword = passwordRef.current.value;
    if (currentPassword === "") {
      setPasswordError("Password field cannot be blank");
    } else if (!currentPassword.match(/[A-Z]/)) {
      setPasswordError("Password should contain atleast one Uppercase");
    } else if (!currentPassword.match(/[a-z]/)) {
      setPasswordError("Password should contain atleast one smallcase");
    } else if (!currentPassword.match(/[0-9]/)) {
      setPasswordError("Password should contain atleast one Number");
    } else if (!currentPassword.match(/[!@#%&]/)) {
      setPasswordError(
        "Password should contain atleast one of this special characters: ! @ # % & ) "
      );
    } else if (currentPassword.length > 10) {
      setPasswordError("Password cannot have more than 10 characters");
    }
  }

  //--------------------Email validation--------------------///////////////

  function emailValidating() {
    setEmailError("");
    const currentEmail = emailRef.current.value;
    if (currentEmail === "") {
      setEmailError("*Email cannot be blank");
    } else if (currentEmail.match(/\\s/)) {
      setEmailError("*It cannot have whitespace");
    }
    // else if(!currentEmail.match(/^[A-Za-z]/)){
    //   setEmailError("It should start with a letter")

    // }
    // else if (email.startsWith(" ")) {
    //   setEmailError({ emailError: "*First character cannot be blank" });
    // }
    // else if (!currentEmail.match(/@/)) {
    //   setEmailError("*Please include an @ in email address");
    //  }
    // else if (currentEmail.startsWith(`@`)) {
    //   setEmailError("*Please enter any character before @, eg: abc@");
    // }
    // else if(currentEmail.match(/\S/)){
    //   setEmailError("*No whitespace allowed");
    // }
    //  else if (
    //   !currentEmail.match(
    //     /([A-Za-z0-9\\_\\-\\.]+)@([a-zA-Z0-9]+)\.+([a-zA-Z]+)/
    //   )
    // )
    // {
    //   setEmailError("*Invalid Email");
    // }

    // else if (email.endsWith(" ")) {
    //   setEmailError({ emailError: "*Email address cannot end with blank space" });
    // }

    if (currentEmail.length > 50) {
      setEmailError("*Email is too long,shouldn't exceed 50 characters");
    }
  }

  ////-------Validating---Address---------------///

  function addressValidating() {
    setAddressError("");
    const currentAddress = addressRef.current.value;
    if (currentAddress === "") {
      setAddressError("*Address cannot be blank");
    } else if (currentAddress.length < 10) {
      setAddressError("*Address should be atleast of 10 characters");
    }
    if (currentAddress.length > 100) {
      setAddressError("*Address is too long, shouldn't exceed 100 characters");
    }
  }

  ////-------Validating Phone number---------------///
  function phoneValidating() {
    setPhoneError("");
    const currentPhone = phoneRef.current.value;
    if (currentPhone === "") {
      setPhoneError("*Cannot be blank");
    } else if (currentPhone.match(/\D/)) {
      setPhoneError("*It cannot be other than number");
    } else if (currentPhone.length < 10) {
      setPhoneError("*Phone Number cannot be less than 10 digits");
    } else if (currentPhone.length > 10) {
      setPhoneError("*Phone Number cannot be more than 10 digits");
    }
  }

  ////-------Validating  Name---------------///

  function nameValidating() {
    setNameError("");
    const currentName = nameRef.current.value;
    if (currentName === "") {
      setNameError("*Cannot be blank");
    } else if (!currentName.match(/^[A-Z]/)) {
      setNameError("*First character should be a Capital Letter");
    }
    if (currentName.length > 35) {
      setNameError("*Name is too long,shouldn't be more than 35 characters");
    }
    if (currentName.startsWith(" ")) {
      setNameError("*First character cannot be blank");
    } else if (currentName.endsWith(" ")) {
      setNameError("*Last character cannot be blank");
    }
  }

  function validating() {
    passwordValidating();
    emailValidating();
    addressValidating();
    phoneValidating();
    nameValidating();
  }

  const onSubmit = async () => {
    // event.preventDefault()
    var customer = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      photo: "picsum",
    };
    if (
      nameError === "" &&
      phoneError === "" &&
      addressError === "" &&
      emailError === "" &&
      passwordError === ""
    ) {
      var response = await fetch("http://localhost:5000/customers/", {
        method: "POST",
        body: JSON.stringify(customer),
        headers: { "Content-type": "application/json" },
      });
      var body = await response.json();
      console.log("body", body);
      //   if (body===true) {
      //   return navigation("/");
      //   }
    }
    validating();
  };

  return (
    <>
      <div className="login-main-container">
        <div className="loginbox">
          <input
            type="text"
            placeholder="Name"
            className="login-inputs"
            ref={nameRef}
            onChange={nameValidating}
          />
          <div className="error-message">{nameError}</div>

          <input
            type="text"
            placeholder="Phone-Number"
            className="login-inputs"
            ref={phoneRef}
            onChange={phoneValidating}
          />
          <div className="error-message">{phoneError}</div>

          <input
            type="text"
            placeholder="Email-ID"
            className="login-inputs"
            ref={emailRef}
            onChange={emailValidating}
          />
          <div className="error-message">{emailError}</div>

          <input
            type="text"
            placeholder="Address"
            className="login-inputs"
            ref={addressRef}
            onChange={addressValidating}
          />
          <div className="error-message">{addressError}</div>

          <input
            type="text"
            placeholder="Create a Password"
            className="login-inputs"
            ref={passwordRef}
            onChange={passwordValidating}
          />
          <div className="error-message">{passwordError}</div>

          <input
            type="password"
            placeholder="Confirm the Password"
            className="login-inputs"
            ref={confirmPasswordRef}
            onChange={confirmPassword}
          />
          <div className="error-message">{confirmPasswordError}</div>

          <button className="create-btn" onClick={onSubmit}>
            Create a new account
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
