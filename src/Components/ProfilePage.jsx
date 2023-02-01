import { Link } from "react-router-dom";

function ProfilePage() {
    return ( 
        <>
        <div className="container-1">
          <div className="details-container">
            <div>
              <img
                className="home-profilepic"
                // src={this.state.user.photo}
                alt=""
              />{" "}
            </div>
            {/* <div>{this.state.user.name}</div>
            <div>{this.state.user.phonenumber}</div>
            <div>{this.state.user.emailid}</div>
            <div>{this.state.user.address}</div> */}
          </div>
          <textarea
            className="txtarea"
            placeholder="Let the world know your thoughts"
            cols="40"
            rows="7"
            maxLength="300"
            // onChange={(event) => {
            //   this.setState({ post: event.target.value });
            // }}
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
              <button className="btn-post" >
                POST
              </button>
            </Link>
          </div>
        </div>
        <div></div>
        </>
     );
}

export default ProfilePage;