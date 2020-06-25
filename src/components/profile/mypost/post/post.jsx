import React from "react";
import c from "./post.module.css";


const Post = (props) => {
    return(
      <div className = {c.postBlog}>
    
        <div>
          <div className = {c.item}>
            <img src = "https://img2.freepng.ru/20180511/htq/kisspng-the-law-office-of-steve-slough-business-medicine-m-5af52751a56ac3.3981210115260158256776.jpg"></img>
            {props.message}
            <div>
              <span>like</span>{props.likesCount}
            </div>
          </div>
        
        
        </div>
      </div>

    )
}

export default Post;