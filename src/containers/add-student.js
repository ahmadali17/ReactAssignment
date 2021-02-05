
import { connect } from 'react-redux';
import { Component } from 'react';
import { Table,Button } from 'reactstrap';
import Header from './header';
import {addStudent} from '../actions/index';
import  { Redirect } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react';
import { event } from 'jquery';
class AddStudent extends Component{
    constructor(props) {
        super(props);
        this.state={
            id:0,
            name:"",
            age:0,
            phone:""
        }
      }
    
      handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
      }

    render(){
        const {id,name,age,phone} = this.state
        return(
            <div>
                <Header></Header>
                <h1 className ="text-center">Add Student</h1>
                <input onChange={this.handleChange} name="id" value={id} className="form-control" type="number" placeholder="Enter Id"/><br></br>
                <input onChange={this.handleChange} name="name" value={name} className="form-control" type="text" placeholder="Enter Name"/><br></br>
                <input onChange={this.handleChange} name="age" value={age} className="form-control" type="number" placeholder="Enter Age"/><br></br>
                <input onChange={this.handleChange} name="phone" value={phone} className="form-control" type="text" placeholder="Enter Email"/><br></br>
                <button type="submit" className="btn btn-primary mb-2" 
                onClick={
                   () => addStudent({
                    
                        "id": parseInt(this.state.id),
                        "name": this.state.name,
                        "age": parseInt(this.state.age),
                        "phone": this.state.phone
                        
                   })
                }
                >Add Student</button>
            </div>
        )
    }

}

export default AddStudent