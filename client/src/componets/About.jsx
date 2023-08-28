import React, { useEffect, useState } from "react";
import Profile from "../img/profile.png";
import "../style/about.css";
import axios from 'axios';

const About = () => {
  const [userData , setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:400/getdata");
      setUserData(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="about">
      <div className="img">
        <img src={Profile} alt="" />
        <div className="name">
          <h1 className="active">{userData && userData[0] ? userData[0].name:"Unknow"}</h1>
          <p className="active">{userData && userData[0] ? userData[0].email:"Unknow"}/</p>
          <span className="active">
            Ranking: <p>1/10</p>
          </span>
          <div className="link">
            <h1>About</h1>
            <a href="https://github.com/Kamleshwar-sahani">Github</a>
          </div>
        </div>
        <button>Edit Profile</button>
      </div>
      <div className="main">
        <div className="skil">
          <h1>React js</h1>
          <h1>node js</h1>
          <h1>MongoDB</h1>
          <h1>express js</h1>
          <h1>Chakra UI</h1>
        </div>
        <div className="user">
          <div>
            <h1>user id</h1>
            <h1>Name </h1>
            <h1>Email</h1>
            <h1>Phone</h1>
            <h1>Profession</h1>
          </div>
       
          <div className="value">
            <h1>{userData && userData[0] ? userData[0]._id :"Unknow"}</h1>
            <h1>{userData && userData[0] ? userData[0].name:"Unknow"}</h1>
            <h1>{userData && userData[0] ? userData[0].email:"Unknow"}</h1>
            <h1>{userData && userData[0] ? userData[0].phone:"Unknow"}</h1>
            <h1>{userData && userData[0] ? userData[0].work:"Unknow"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
