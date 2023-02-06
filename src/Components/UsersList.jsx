import React, { useEffect, useState } from "react";

export default function UsersList() {

  const [user, setUser] = useState([]);
  console.log(user);

    useEffect(() => {
      const fetchingcustomers = async () => {
        const promise = await fetch("http://localhost:5002/users", {
          method: "GET",
        });
        const users = await promise.json();
        setUser(users);
        console.log(users[1]);
      };
      fetchingcustomers();
    }, []);

    return (
      <div className="userList-mainContainer">
        {user.map((us) => {
          return (
            <div key={us.id} className="container-1">
              <div className="details-container">
          <div>
         <img className="home-profilepic" src={us.photo} alt="" />{" "}
          </div>
          <div>{us.name}</div>
          <div>{us.phone}</div>
          <div>{us.email}</div>
          <div>{us.address}</div>
        </div>
              
            </div>
          );
        })}
      </div>
    );
}
