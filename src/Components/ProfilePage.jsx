import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProfilePage() {
//   const { id } = useParams();
const id=localStorage.getItem("loginid")
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

  const postRef = useRef(null);

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

  return (
    <>
      <div className="container-1">
        <div className="details-container">
          <div>
            <img className="home-profilepic" src={`${user.photo}`} alt="" />{" "}
          </div>
          <div>{user.name}</div>
          <div>{user.phone}</div>
          <div>{user.email}</div>
          <div>{user.address}</div>
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
      </div>
    </>
  );
}

export default ProfilePage;
