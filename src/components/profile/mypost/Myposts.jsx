import React from "react";
import d from "./Myposts.module.css"
import Post from "./post/post";


const Myposts = (props) => {

  let PostElements = props.postdata.map(p => {
    return (<Post message={p.message} likesCount={p.likesCount} />)
  })

   let newPostElement = React.createRef();


  let addPost = ()=>{
    props.addPost();
  
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewText(text);
  }
  return (
    <div className={d.wrapper}>
      <div>
        <h1>  my posts</h1>
    

        <div>
          <textarea ref = {newPostElement} value = {props.newText} onChange = {onPostChange}/>
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