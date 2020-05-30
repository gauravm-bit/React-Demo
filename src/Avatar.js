import React from 'react';
import './Avatar.css';
import 'tachyons';

const Avatar = (props) => {
    return ( <div className="avatarStyle ma4 bg-light-purple dib pa4">
                <img src="https://joeschmoe.io/api/v1/jana" alt="avatar"></img>
                <h1 className="tc" > {props.name} </h1>
                <p className="tc"> {props.work} </p>
            </div> 
            )

}

export default Avatar;
  