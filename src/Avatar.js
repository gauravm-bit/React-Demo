import React from 'react';
import './Avatar.css';
import AvatarList from './AvatarList';
import 'tachyons';
import Avatarlist from './AvatarList';
import { Component } from 'react';

const Avatar = (props) => {
    const avatarlistarray =[
        {
            id:"1",
            name:"Kunal",
            work:"VueJs,Frontend"
        },
        {
            id:"2",
            name:"Pravin",
            work:"MEAN,FullStack"
        },
        {
            id:"3",
            name:"Akshay",
            work:"VueJs,Frontend"
        },
        {
            id:"4",
            name:"Rishi",
            work:"Java,Testing"
        },
        {
            id:"5",
            name:"Gaurav", 
            work:"ReactJs,Frontend"
        }
    ]
   const cards = avatarlistarray.map((card,i) => {
        return <Avatarlist id={avatarlistarray[i].name}
                            name={avatarlistarray[i].name}
                            work={avatarlistarray[i ].work}/>
    })
    return ( <div className="main">
            <h1 className="tc">BrideLabz  </h1>
                {cards}  
            </div>
            
            )

}

export default Avatar;
  