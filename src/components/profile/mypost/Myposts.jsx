import React from "react";
import d from "./Myposts.module.css"
import Post from "./post/post";


const Myposts = (props) => {

  let PostElements = props.postdata.map(p => {
    return (<Post message={p.message} likesCount={p.likesCount} />)
  })

   let newPostElement = React.createRef();


  let addPost = ()=>{
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = " ";
  }
  return (
    <div className={d.wrapper}>
      <div>
        <h1>  my posts</h1>

        <div>
          <textarea ref = {newPostElement}>
            post
        </textarea>
        </div>

        <button onClick = {addPost} >
          add post
        </button>
        <div>
          {PostElements}
        </div>
      </div>
      {/* https://mail.almatv.kz/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.almatv.kz%2fowa */}

    </div>

  )
}

export default Myposts;