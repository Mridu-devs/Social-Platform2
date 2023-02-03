import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import ProfilePage from "./Components/ProfilePage";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
    "Coming Soon"
    <NavBar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile/:id" element={<ProfilePage/>} />

    </Routes>
    

    </>
  );
}

export default App;