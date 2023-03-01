import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([{name:"",photo:"",post:"",postedon:"",id:""}]);
  console.log(module)
  useEffect(() => {
    const fetchingData = async () => {
      let response = await fetch("http://localhost:5002/postes", {
        method: "GET",
      });
      let body = await response.json();
      setData(body.reverse());
      console.log("body",body)
    };
    fetchingData()
  }, []);


  return(
  <>{data.map((dat)=>{
    return(
        <div key={dat.id} className="timeline-main-container">
            <div className="timeline-box">
              <div className="pic-name-container">
                <img className="profilepic" src={dat.photo} alt="No Images" />
                <span className="name">{dat.name}</span>
              </div>

              <p className="post">{dat.post}</p>
              {/* <div className="postedby">Posted by {dat.name}</div> */}
              <div className="postedon">{dat.postedon}</div>
            </div>
          </div>


    )
  })}
   
  </>)
}

export default Home;
