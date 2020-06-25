import React from "react";
import c from "./Profileinfo.module.css";


const Profileinfo = () => {
    return(
      <div className = {c.content}>
      <div>
      <img src = "https://avatars.mds.yandex.net/get-pdb/1368870/24416c67-bc83-491e-a8dd-d455b752dff5/s1200?webp=false"></img>
      </div>
      <div className = {c.description}>
        ava + description
      </div>
    </div>
    )
}

export default Profileinfo;