import React from "react";
import c from "./Profile.module.css";
import Myposts from "./mypost/Myposts";
import Profileinfo from "./profileinfo/Profileinfo";


const Profile = (props) => {
 
    return(
      <div>
     <Profileinfo/>
      <Myposts postdata = {props.state.PostData} addPost={props.addPost}/>
  
      
    </div>
    )
}

export default Profile;