import React from 'react';
import  PropTypes from 'prop-types';
const Profile = ({fullname,bio,profession,image, handleName}) => {
   

    return (
        <div >
            <h1 style={{color:'black'}}>{fullname} </h1> 
            <h1>{bio}</h1>
            <p style={{fontSize:'30px', fontFamily:'inherit', textDecoration:'underline'}}>{profession}</p>
           <img src={image} alt='msg' style={{width: '300px', height: '300px',borderRadius: '50%',}}/>
           <br></br>
           <button style={{color: 'blue',cursor: 'pointer',fontSize :'30px' , borderRadius :'10px ', marginTop :'20px'}} onClick={()=> handleName(fullname)} >click</button>
           
        </div>
    );
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
}




export default Profile
