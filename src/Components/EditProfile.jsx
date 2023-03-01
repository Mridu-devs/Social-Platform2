import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import hidden from "../images/hidden.png";
import show from "../images/show.png";

function EditProfile() {
  console.log("EditProfile component loaded");

  const navigation = useNavigate();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [nameError, setNameError] = useState("  ");
  const [phoneError, setPhoneError] = useState("  ");
  const [addressError, setAddressError] = useState(" ");
  const [emailError, setEmailError] = useState("  ");
  const [passwordError, setPasswordError] = useState("  ");
  const [confirmPasswordError, setConfirmPasswordError] = useState("  ");
  const [buttonError, setButtonError] = useState("");

  useEffect(() => {
    console.log("I am rendering");
  });

  function confirmPassword() {
    setConfirmPasswordError("");
    const currentConfirmPassword = confirmPasswordRef.current.value;
    const currentPassword = passwordRef.current.value;
    if (currentConfirmPassword === "") {
      setConfirmPasswordError("*Confirm Password cannot be blank");
    } else if (currentConfirmPassword !== currentPassword) {
      setConfirmPasswordError("Password and confirm password must be same");
    }
  }

  function passwordValidating() {
    setPasswordError("");
    const currentPassword = passwordRef.current.value;
    confirmPassword();
    if (currentPassword === "") {
      setPasswordError("*Password field cannot be blank");
    } else if (currentPassword.match(/\s/)) {
      setPasswordError("*No whitespace allowed");
    } else if (!currentPassword.match(/[A-Z]/)) {
      setPasswordError("*Password should contain atleast one Uppercase");
    } else if (!currentPassword.match(/[a-z]/)) {
      setPasswordError("*Password should contain atleast one smallcase");
    } else if (!currentPassword.match(/[0-9]/)) {
      setPasswordError("*Password should contain atleast one Number");
    } else if (!currentPassword.match(/[!@#%&]/)) {
      setPasswordError(
        "Password should contain atleast one of this special characters: ! @ # % & ) "
      );
    }

    if (currentPassword.length > 10) {
      setPasswordError("*Password cannot have more than 10 characters");
    }
  }
  ///---Password hide unhide function------/////
  function change() {
    let passo = document.getElementById("pass");
    // passo.type="password"

    if (passo.type === "password") {
      passo.type = "text";
      document.getElementById("passwordIconShow").style.display = "block";
      document.getElementById("passwordIconHidden").style.display = "none";
    } else if (passo.type === "text") {
      passo.type = "password";
      document.getElementById("passwordIconHidden").style.display = "block";
      document.getElementById("passwordIconShow").style.display = "none";
    }
  }

  //--------------------Email validation--------------------///////////////

  function emailValidating() {
    setEmailError("");
    const currentEmail = emailRef.current.value;
    if (currentEmail === "") {
      setEmailError("*Email cannot be blank");
    }
    else if (currentEmail.startsWith(" ")) {
      setEmailError("*First character cannot be blank");
    } else if (!currentEmail.match(/@/)) {
      setEmailError("*Please include an @ in email address");
    } else if (!currentEmail.match(/^[A-Za-z0-9]/)) {
      setEmailError("*Please include a prefix before @, eg: abc@");
    }

    else if (currentEmail.match(/\s/)) {
      setEmailError("*No whitespace allowed");
    } else if (!currentEmail.match(/@([a-zA-Z0-9]+)\.{1}([a-zA-Z]){2,4}$/)) {
      setEmailError("*Please provide a valid domain");
    }

    if (currentEmail.length > 40) {
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

  const onSubmit = async () => {
    let customer = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      photo: "picsum",
    };

    setButtonError("");
    if (
      nameError === "  " ||
      phoneError === "  " ||
      addressError === "  " ||
      emailError === "  " ||
      passwordError === "  " ||
      confirmPasswordError === "  "
    ) {
      setButtonError("Please fill all the above fields");
    } else if (
      nameError !== "" ||
      phoneError !== "" ||
      addressError !== "" ||
      emailError !== "" ||
      passwordError !== "" ||
      confirmPasswordError !== ""
    ) {
      setButtonError("Please meet up the above highlighted conditions");
    } else if (
      nameError === "" &&
      phoneError === "" &&
      addressError === "" &&
      emailError === "" &&
      passwordError === "" &&
      confirmPasswordError === "" &&
      buttonError === ""
    ) {
      const checkingPhoneNumber = async () => {
        const response = await fetch(
          `http://localhost:5002/users?phone=${customer.phone}`,
          {
            method: "GET",
          }
        );
        let body = await response.json();
        console.log(body);
        if (body.length > 0) {
          console.log("user already exists");
          setButtonError(
            "An user already exists with the same phone number. Please try to login or use a different phone number to create an account"
          );
        } else if (body.length === 0) {
          let registeringUser = await fetch("http://localhost:5002/users/", {
            method: "POST",
            body: JSON.stringify(customer),
            headers: { "Content-type": "application/json" },
          });
          let body2 = await registeringUser.json();
          console.log("sending data to backend:", body2);
          return navigation("/");
        }
      };
      checkingPhoneNumber();
    }
  };
  return (
    <>
      <div className="">
        <div className="loginbox">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="login-inputs"
              ref={nameRef}
              onChange={nameValidating}
            />
            <div className="error-message">{nameError}</div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone-Number"
              className="login-inputs"
              ref={phoneRef}
              onChange={phoneValidating}
            />
            <div className="error-message">{phoneError}</div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Email-ID"
              className="login-inputs"
              ref={emailRef}
              onChange={emailValidating}
            />
            <div className="error-message">{emailError}</div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Address"
              className="login-inputs"
              ref={addressRef}
              onChange={addressValidating}
            />
            <div className="error-message">{addressError}</div>
          </div>
          <div>
            <div className="passwordFields">
              <input
                type="password"
                id="pass"
                placeholder="Create a Password"
                //   className="login-inputs"
                ref={passwordRef}
                onChange={passwordValidating}
              />

              <button id="passwordButton" onClick={change}>
                <img id="passwordIconHidden" src={hidden} alt="" />
                <img id="passwordIconShow" src={show} alt="" />
              </button>
            </div>
            <div className="error-message">{passwordError}</div>
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm the Password"
              className="login-inputs"
              ref={confirmPasswordRef}
              onChange={confirmPassword}
            />
            <div className="error-message">{confirmPasswordError}</div>
          </div>

          <button className="create-btn" onClick={onSubmit}>
            Create a new account
          </button>
          <div className="error-message">{buttonError}</div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
