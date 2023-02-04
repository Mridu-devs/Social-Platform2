import React, { useEffect, useState } from "react";

export default function UsersList() {
  // const [user, setUser] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     photo: "",
  //     address: "",
  //     // id: "",
  //   });
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

//   return (
//     <>
//       <div>
//         {user.map((pagol) => {
//           return (
//             <div key={pagol.id}>
//               <p>{pagol.id}</p>
//               <p>{pagol.name}</p>
//               <p>{pagol.phone}</p>
//               <p>{pagol.email}</p>
//               <p>{pagol.password}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
    return (
      <div className="userList-mainContainer">
        {user.map((us) => {
          return (
            <div key={us.id} className="container-1">
              {/* <div className="details-container">
                <div>
                   <img className="sListtablepics" src={us.photo} alt="" />{" "}
                </div>
                <div>{us.name}</div>
                <div>{us.phone}</div>
                <div>{us.email}</div>
                <div>{us.address}</div>
              </div> */}
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
