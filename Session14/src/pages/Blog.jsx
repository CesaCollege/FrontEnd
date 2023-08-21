import { useParams ,Link , useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
    const params = useParams();
    const location = useLocation();
    

    return (
        <div>
            This is BlogPage - {params.id}
        </div>
    );
}
 
export default Blog;