import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            this is profile page
            <Link to="/profile/dashboard">Dashboard</Link>
            <Link to="/profile/downloads">Downloads</Link>
        </div>
    );
}
 
export default Profile;