import React from 'react';
import './App.css';
import User from './components/User';
import Table from './components/Table';
import axios from 'axios';
import {Link,Route} from 'react-dom'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data:[],
      user:"",
      value:"",
      table:false,
      repoState:false,
      repo:[]
    }
  }

  handleClick = ()=>{
      const requestParam = {
      method: 'get',
      url: 'https://api.github.com/search/users?q=',
      params : {
        q :this.state.value         
        }
      }
      //console.log(requestParam);
      axios(requestParam)
          .then(response => {
            this.setState({
              data:response.data,
              value:"",
              table:true      
              })
            console.log(response)
          })
          .catch(err => console.log(err));      
 }

 handleChange = (e)=>{
    this.setState({
      value:e.target.value,
      table:false
    })
 }



  render(){
          var {table} = this.state
    return (
      <div className="App">
        <div style={{background:"grey",margin:"0",padding:"25px",marginBottom:"30px"}}>
        <h1 style={{textAlign:"center"}}>Enter Username to get Github Details</h1>
        </div>
        
       <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="user"/>
        <button onClick={this.handleClick}>Search</button>
        <br></br>
        
        <br></br>
        <div style={{display:"flex"}}>
        {table && <Table data = {this.state.data}  />}
        </div>
       
       
      </div>
    );
  }
}

export default App;
