import React from 'react';
import {Link} from 'react-dom';
import axios from 'axios';
import Repos from './Repos'

// const handle = (e)=>{
//     handle(e.target.value)
// }
class Table extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            repo:[],
            data:props.data,
            repoState:false,
            sort:"",
            name:""
        }
    }
    
    handleRepo = (e)=>{
        console.log(e.target.value);
        const requestParam = {
            method: 'get',
            url: e.target.value,
            // params : {
            //   q :this.state.value         
            //   }
            }
            console.log(requestParam);
            axios(requestParam)
                .then(response => {
                  this.setState({
                    repo:response.data,     
                    })
                  console.log(response)
                })
                .catch(err => console.log(err));

                this.setState({
                    repoState:true,
                    name:e.target.name
                })
        }

        handleSort = (e)=>{
            console.log(e.target.value);
            this.setState({
              sort:e.target.value
            })
          
          }


        render(){
            var {data,repoState,sort} = this.state
                //console.log(data.items[0].login)
                //console.log(sort)
                var rows = []
                rows.push(data.items.sort((a,b)=>{
                    //console.log(a,b)
                    if(sort===""){
                        return 0;
                    }
                    if(sort==="Asc"){
                        if(a.score===b.score){
                            return a.login>b.login
                        }
                     else{
                            return a.score-b.score
                     }   
                        
                    }
                    if(sort==="Desc"){
                        if(a.score===b.score){
                            return a.login<b.login
                        }
                     else{
                            return a.score-b.score
                     }   

                            // return a.login<b.login
                       
                    }
                }).map(ele=>(
                    <tr style={{padding:"25px"}}>
                        <td style={{paddingBottom:"15px",textAlign:"center",border:"2px solid black"}}>{ele.login}</td>
                        <td><img style={{width:"100px",height:"100px",border:"2px solid black"}}src={ele.avatar_url}alt="..."/></td>
                        <td style = {{border:"2px solid black"}}><button value={ele.repos_url} name={ele.login} onClick={this.handleRepo}>Repos</button></td>

                    </tr>    
                )))

                return (
                    <React.Fragment>
                        <div style={{margin:"100px"}}>
                        {["Asc","Desc"].map(ele=>(
                            <button style={{border:"2px solid black",padding:"10px",height:"50px"}} value = {ele} onClick={this.handleSort}>{ele}</button>
                            ))}
                        </div>
                        
                        <table style={{margin:"auto",width:"400px",border:"2px solid grey"}}>
                            <thead>
                                <tr>
                                    <th><h2>Name</h2></th>
                                    <th><h2>Image</h2></th>
                                    <th><h2>Repo Link</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                        {repoState && <Repos data={this.state.repo} name={this.state.name}/>}
                    </React.Fragment>
                )  

        }
    
     
}

export default Table