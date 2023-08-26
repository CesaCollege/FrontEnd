import { useEffect } from "react";
import './comment.css'

const Comment = ({name,email,clickHandler}) => {

    
    
    return (
        <div className="comment" onClick={clickHandler} >
            <p>name : {name} </p>
            <p>email :{email}</p>
        </div>
    );
}
 
export default Comment;