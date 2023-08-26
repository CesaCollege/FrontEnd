import axios from "axios";

axios.defaults.baseURL =  "http://localhost:3001" ;

axios.interceptors.response.use((response) =>{
    console.log(response);
    // Edit response...
    return response
},(err) =>{
    console.log(err);
}
)

const http = {
    get: axios.get,
    post:axios.post,
    delete:axios.delete,
    put : axios.put
}

export default http;