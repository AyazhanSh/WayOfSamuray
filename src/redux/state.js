let rerenderEntiredTree = ()=>{
  console.log("state change")
}
  let state = {
    profilePage:{
      PostData:[
        { id: 1, message: "What your are name?", likesCount: 547 },
        { id: 2, message: "What you doing?", likesCount: 788 },
      ],
      newText:"It-kamasutra"
      
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

export const addPost = ()=>{
  let newPost = {
    id:3,
    message:state.profilePage.newText,
    likesCount:101211
  }
  state.profilePage.PostData.push(newPost);
  state.profilePage.newText = ""; 
  rerenderEntiredTree(state);
}

export const updateNewText = (txt)=>{

  state.profilePage.newText = txt;
  rerenderEntiredTree(state);
}
export const subcriber = (observer) =>{
  rerenderEntiredTree = observer;
}




  export default state;