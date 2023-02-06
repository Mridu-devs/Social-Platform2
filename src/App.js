import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import ProfilePage from "./Components/ProfilePage";
import Signup from "./Components/Signup";
import Simply from "./Components/Simply";
import UsersList from "./Components/UsersList";
import MoviePage from "./Context/MoviePage";

function App() {

//  const loginId=localStorage.getItem("loginid")
//  console.log(loginId)

  console.log("From App:","Hi")
  return (
    <>
    "Coming Soon"
    <NavBar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/userslist" element={<UsersList/>} />
      <Route path="/simply" element={<Simply/>} />
      <Route path="/context" element={<MoviePage/>} />
    </Routes>
    

    </>
  );
}

export default App;