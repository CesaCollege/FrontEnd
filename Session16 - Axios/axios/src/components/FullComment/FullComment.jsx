import { useEffect, useState } from 'react';
import './FullComment.css'
import axios from 'axios';


const FullComment = ({selectedId,deleteHandler}) => {
    const [comment,setComment] = useState(null);
    console.log(selectedId);
    useEffect(()=>{
        axios.get(`http://localhost:3001/comments/${selectedId}`)
        .then((response) => setComment(response.data))
        .catch((error) =>console.log(error))
    },[selectedId])

    

    
    let commentDetail = <p>please select a comment</p>
    if (selectedId) {
        <p>loading...</p>
    }
    if (comment && selectedId) {
        commentDetail = (
            <div className="fullComment">
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
                <button onClick={deleteHandler} className='delete'>Delete</button>
            </div>
        )
    }


    return (
        commentDetail 
    );
}
 
export default FullComment;