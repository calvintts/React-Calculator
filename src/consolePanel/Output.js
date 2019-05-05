import React, { Component } from 'react';

const Output = (props)=> {
    const input={
        "backgroundColor":'#222',
        "border":"1px solid black",
        "textAlign":"right",
        "fontSize":"3em",
        "color":"white",
        "padding":"10px",
        "margin":"0px",
    }

    return (
        <h1 style={input} type="number">{props.showVal}</h1>
    );
}

export default Output;

