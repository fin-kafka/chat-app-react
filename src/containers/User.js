import React from "react";

const User = ({ user,onclick }) => {
     const { name, profile_pic, status, user_id } = user;
     return (
       <div className="User" onClick={() => onclick(user_id)}>
         <img src={profile_pic} alt={name} className="User__pic" />
         <div className="User__details">
           <p className="User__details-name">{name}</p>
           <p className="User__details-status">{status}</p>
         </div>
</div> );
};

export default User;