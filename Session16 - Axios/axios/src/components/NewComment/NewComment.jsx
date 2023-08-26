import { useState } from 'react'
import './NewComment.css'
import axios from 'axios';
const NewComment = ({onAddPost}) => {
    const [comment,setComment] = useState({
        name : "",
        email : "",
        body : ""
    });

    const changeHandler = (e) =>{
        setComment({...comment,[e.target.name]:e.target.value})
        console.log(comment);
    }

    
    
    
    return (
        <div className='fullComment'>
            <div>
                <label>name</label>
                <input type='text' onChange={changeHandler} name='name' /> 
            </div>
            <div>
                <label>email</label>
                <input type='email' onChange={changeHandler} name='email' /> 
            </div>
            <div>
                <label>body</label>
                <input type='textarea' onChange={changeHandler} name='body' /> 
            </div>
            <button onClick={() => onAddPost(comment)}>Submit</button>
        </div>
    );
}
 
export default NewComment;