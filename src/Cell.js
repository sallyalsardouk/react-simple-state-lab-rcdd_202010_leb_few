import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props)
    this.state={
      color:props.value
    }
  }
  render(){
    return <div style={{backgroundColor:this.state}}
  }