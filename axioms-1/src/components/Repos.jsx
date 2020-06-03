import React from 'react';
import styles from './styles.module.css'


const Repos = (props)=>{
    var {data,name} = props
    //console.log(data)
    var nam = [];
    nam.push(data.map(ele=>(
        <tr>
            <td>{ele.name}</td>
            <td>{ele.created_at}</td>
        </tr>
    )));
    return(
        <div style={{marginLeft:"25px"}}>
            <h1>{name}</h1>
            <h1>Number of repos ----{data.length}</h1>
            <table style={{textAlign:"left"}}>
                <tr>
                    <td><h3>Repo Name</h3></td>
                    <td><h3>Date of creation</h3></td>
                    </tr>
                {nam}
            </table>
        </div>
    )
}


export default Repos