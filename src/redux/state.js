import { rerenderEntiredTree } from "../rerender";


  let state = {
    profilePage:{
      PostData:[
        { id: 1, message: "What your are name?", likesCount: 547 },
        { id: 2, message: "What you doing?", likesCount: 788 },
      ]
      
    },
    dialogPage:{
      messages: [
        {id:1, message:"What your are name?"},
        {id:2, message:"What you doing?"},
        {id:3, message:"What is time?"},
        {id:4, message:"What your sister's name?"},
        {id:5, message:"What color is your car?"},
        {id:6, message:"What your are nation?"}
      ],
      dialogs:[
        {id:1, name:"Zhannur"},
        {id:2, name:"Zhuldyz"},
        {id:3, name:"Zhanna"},
        {id:4, name:"Zhanar"},
        {id:5, name:"Zhanerke"},
        {id:6, name:"Zhanybek"},
        {id:7, name:"Zhanuzak"},
        {id:8, name:"Zhannur"},
        {id:9, name:"Zhangaly"},
        {id:10, name:"Zhannurym"}
      ]
    }
    }

export let addPost = (postMessage)=>{
  let newPost = {
    id:3,
    message:postMessage,
    likesCount:101211
  }
  state.profilePage.PostData.push(newPost);
  rerenderEntiredTree(state);
}


  export default state;