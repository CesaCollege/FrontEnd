import { useEffect, useState } from "react";
import Comment from "../components/Comment/Comment";
import FullComment from "../components/FullComment/FullComment";
import NewComment from "../components/NewComment/NewComment";
import './Discussion.css'
import axios from 'axios'
import { toast } from "react-toastify";
import http from "../services/httpServices";

const Discussion = () => {
    const [comments,setComments] = useState(null);
    const [selectedId,setSelectedId] = useState(null);

    useEffect(() =>{
        getComments()
    },[])

    const getComments = async () =>{
        await http.get("/comments")
        .then((response) =>{
            setComments(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const clickCommentHandler = (id) =>{
        setSelectedId(id)
        console.log(selectedId);
    }

    const submitHanlder = (comment) =>{
        const token  = "eysk;djakdjsj;lkdasda"
        http.post("/comments",comment,{
            headers : {
                Authorization : `Bearer ${token}`,
                'Content-Type' : 'application/json',
            }
        })
        .then((response) => http.get("/comments") )
        .then((res) => {
            setComments(res.data)
            toast.success("comment added successfully ")
        })
        .catch((error) => console.log(error))
    }

    const deleteHandler = () =>{
        console.log(selectedId);
        http.delete(`/comments/${selectedId}`)
        .then((response) => http.get("/comments") )
        .then((res) =>{
            setComments(res.data)
            toast.error("comment removed successfully")
            setSelectedId(null)
        })
        .catch((error) => console.log(error))
    }
    
    return (
        <main className="">
            <div className="commentSection">
                {comments ? comments.map((comment) =>{
                    return(
                        <Comment 
                            name = {comment.name}
                            email={comment.email}
                            clickHandler = {() => clickCommentHandler(comment.id)}
                        />
                    )
                }) : <p>loading...</p> }
            </div>
            <section>
                <FullComment
                    selectedId = {selectedId}
                    deleteHandler = {deleteHandler}
                />
            </section>
            <section>
                <NewComment 
                    onAddPost = {submitHanlder}
                />
            </section>
        </main>
    );
}
 
export default Discussion;