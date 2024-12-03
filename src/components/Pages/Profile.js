import React, { useState } from "react";
import Footer from "../Layout/Footer";
import TopHeader from "../Layout/Header/Topheader";
import SearchPanel from "../Layout/Header/SearchPanel";
import Sidebar from "../Common/Sidebar";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: " Shagun Sharma",
    username: "shagun3144",
    email: "shagunfortec@gmail.com",
    phone: "123-456-7890",
    location: " India",
    bio: " This is my profile section.",
    imageUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  });
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    setIsEditing(false);
  }
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setUserData((prevData)=>({
      ...prevData,
      [name]:value,
        }));
       };
  return (
    <div>
      <TopHeader />
      <SearchPanel isDashboardPage={true} />
      <div style={{ display: " ", float: "center" }}>
        <Sidebar />
        <div
          style={{
            display: "table-cell",
            float: "center",
            marginLeft: "100px",
            fontSize: "10px",
          }}
        >
          <div>
            <div>
              <img
                src={userData.imageUrl}
                alt="Profile"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  marginLeft: "100px",
                }}
              />
              <h3>User Information :</h3>
              {isEditing ? (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    border: "2px solid black",
                    fontSize: "12px",
                    display: "flex",
                    marginTop: "10px",
                    marginBottom: "10px",
                    marginLeft: "50px",
                  }}
                >
                  <label>
                    Name:
                    <br />
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleChange}
                      style={{ marginBottom: "5px" }}
                    />
                  </label>
                  <br />
                  <label>
                    Username:
                    <br />
                    <input
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                      style={{ marginBottom: "5px" }}
                    />
                  </label>
                  <br />
                  <label>
                    Email:
                    <br />
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      style={{ marginBottom: "5px" }}
                    />
                  </label>
                  <br />
                  <label>
                    Phone:
                    <br />
                    <input
                      type="tel"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      style={{ marginBottom: "5px" }}
                    />
                  </label>
                  <br />
                  <label>
                    Location:
                    <br />
                    <input
                      type="text"
                      name="location"
                      value={userData.location}
                      onChange={handleChange}
                      style={{ marginBottom: "5px" }}
                    />
                  </label>
                  <br />
                  <label>
                    Bio:
                    <br />
                    <input
                      type="text"
                      name="bio"
                      value={userData.bio}
                      onChange={handleChange}
                      style={{ marginBottom: "5px" }}
                    />
                  </label>
                  <br></br>
                  <button
                    style={{
                      padding: "8px 8px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "0px",
                      cursor: "pointer",
                    }}
                    type="submit"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <table
                  style={{
                    border: "1px solid black",
                    width: "600px",
                    marginTop: "10px",
                    marginBottom: "5px",
                    fontSize: "14px",
                    marginLeft: "100px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <strong>Name:</strong>
                      </td>
                      <td>{userData.name}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Username:</strong>
                      </td>
                      <td>{userData.username}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Email:</strong>
                      </td>
                      <td>{userData.email}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Phone:</strong>
                      </td>
                      <td>{userData.phone}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Location:</strong>
                      </td>
                      <td>{userData.location}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Bio:</strong>
                      </td>
                      <td>{userData.bio}</td>
                    </tr>
                  </tbody>
                </table>
              )}

              <button
                onClick={handleEdit}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  outline: "none",
                  fontSize: "12px",
                  width: "100px",
                              marginLeft: "100px",

                }}
              >
                {isEditing ? "Done" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
