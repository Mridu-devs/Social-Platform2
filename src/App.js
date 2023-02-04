import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import ProfilePage from "./Components/ProfilePage";
import Signup from "./Components/Signup";
import UsersList from "./Components/UsersList";
function App() {
  return (
    <>
    "Coming Soon"
    <NavBar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile/:id" element={<ProfilePage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/userslist" element={<UsersList/>} />

    </Routes>
    

    </>
  );
}

export default App;