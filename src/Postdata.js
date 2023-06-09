import axios from 'axios';
import React, { useState } from 'react'

function PostValues()
{
    const[cid,setCid]=useState('');
    const[cname,setCname]=useState('');

     const handleSubmit=(e)=>
     {
        e.preventDefault();
        const data={cid,cname};

        axios.post('http://localhost:8080/saveData',data)
        .then(response=>{console.log(response.data)})
        .catch(err=>{console.log(err)})
        setCid('');
        setCname('');
     }
     return(
        <>
        <h1>Posting the values</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <label>iceid:</label>
        <input
          type="number"
          value={cid}
          onChange={(e) => setCid(e.target.value)}
        />
      </div>
      <div>
        <label>shopname:</label>
        <input
          type="text"
          value={cname}
          onChange={(e) => setCname(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
        </form>
        </>
     )
}

export default PostValues;