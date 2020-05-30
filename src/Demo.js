import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'
const Demo = (props) =>{
        return <div className="style">
                <h1>Hello {props.name} </h1>
                <p> Triyng a component using JSX</p>
                </div>
    }
 

export default Demo;