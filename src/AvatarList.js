import React from 'react';

const Avatarlist = (props) => {
    return (
            <div className="avatarStyle ma4 bg-light-purple dib pa4 tc">
                    <img src={`https://joeschmoe.io/api/v1/${props.work}`} alt="avatar"></img>
                    <h1 className="tc" > {props.name} </h1>
                    <p className="tc"> {props.work} </p>
                </div> 
    )
}

export default Avatarlist;