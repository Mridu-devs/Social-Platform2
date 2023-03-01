import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import ProfilePage from "./Components/ProfilePage";
import Signup from "./Components/Signup";
import UsersList from "./Components/UsersList";
import UserContext from "./Context/UserContext";

function App() {
  const [login, setLogIn] = useState(localStorage.getItem("loginid"));
  console.log("apps loginstatus:", login);

  console.log("From App:", "Hi");
  return (
    <UserContext.Provider value={{ login, setLogIn }}>
      <>
        "Coming Soon"
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userslist" element={<UsersList />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
