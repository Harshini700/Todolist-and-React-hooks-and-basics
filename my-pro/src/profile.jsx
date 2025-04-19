import React from 'react'

const Profile = () => {
    const imageurl='./src/assets/harprof1.jpg';
    //const handleclick=()=>console.log("OUCH")
    const handleclick=(e)=>e.target.style.display="none" //if we touch the img it will disappear
  return (
    <div>
        {/*{imageuul-for rendering js in jsx file}*/}
        {/*{imageuul-if we touch the img in console it wil dis ouch}*/}
      <img src={imageurl} style={{width:150,height:200}} onClick={(e)=>handleclick(e)}></img>
    </div>
  )
}

export default Profile
