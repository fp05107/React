import React from 'react'

const Profile = (props) => {

    const{src,name} = props;
    const styles = {
        border : "10px solid red",
        width : "250px"
    }

  return (
    <div>
        <img style={styles} src={src} alt="" />
        <h1>{ name }</h1>
    </div>
  )
}

export default Profile