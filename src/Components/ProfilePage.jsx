import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import pencil from "../images/pencil.png";
import EditProfile from "./EditProfile";

function ProfilePage() {
  const id = localStorage.getItem("loginid");
  console.log(id);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
    address: "",
    id: "",
  });
  const modalboxContainer = document.getElementById("modalboxContainer");
  const postRef = useRef(null);
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      let userdetails = await fetch(`http://localhost:5002/users?id=${id}`, {
        method: "GET",
      });
      let body = await userdetails.json();
      //   console.log("body", body);
      // let body2=body[0]
      // console.log("body2",body2.name)
      setUser(body[0]);
    };
    fetchingData();
  }, []);
  //   console.log(user.name);
  //   console.log("photo", user.photo);

  const onPost = async () => {
    const d = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[d.getMonth()];
    console.log(month);
    const date = d.getDate();
    const year = d.getFullYear();
    console.log("date:", date, "year:", year);

    const postDetails = {
      name: user.name,
      photo: user.photo,
      post: postRef.current.value,
      postedon: `${month} ${date} ${year}`,
    };

    const posting2 = await fetch(`http://localhost:5002/postes`, {
      method: "POST",
      body: JSON.stringify(postDetails),
      headers: { "Content-type": "application/json" },
    });
  };


  window.onclick = function (event) {
    if (event.target === modalboxContainer) {
      console.log("targeting modalboxContainer");
      modalboxContainer.style.display = "none";
      // setEditProfile(false);
    }
  };

  console.log("editProfile status", editProfile);

  return (
    <div className="profilePageMainContainer">
      <div className="container-1">
        <div className="details-container">
          <div>
            <img className="home-profilepic" src={`${user.photo}`} alt="" />{" "}
          </div>
          <div>{user.name}</div>
          <div>{user.phone}</div>
          <div>{user.email} </div>
          <div>{user.address}</div>
          <div>
            <button
              className="EditButton"
              onClick={() => {
                modalboxContainer.style.display='flex';
              }}
            >
              Edit Profile___ <img className="editIcon" src={pencil} alt="" />
            </button>
          </div>
          {/* <img className="editIcon" src={editicon} alt="" /> */}
        </div>
        <textarea
          className="txtarea"
          placeholder="Let the world know your thoughts"
          cols="40"
          rows="7"
          maxLength="300"
          ref={postRef}
        />
        {/* <div>
          Posted By
          <input
            type="text"
            className="home-input"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
        </div> */}

        <div>
          {/* <Link to={`/timeline/${this.state.userid}`}> */}
          <Link to="/home">
            <button onClick={onPost} className="btn-post">
              POST
            </button>
          </Link>
        </div>

          <div
            id="modalboxContainer"
            style={{
              position: "absolute",
              backgroundColor: "green",
              height: "100vh",
              width: "100vw",
              display: "none",
              justifyContent:'center',
              background: 'rgba(81, 80, 80, 0.62)'


              // -webkit-filter: blur(5px) grayscale(90%);
            }}
          >
            <EditProfile />
            {/* <button onClick={()=>setEditProfile(false)}>Click</button> */}
          </div>

      </div>
    </div>
  );
}

export default ProfilePage;
