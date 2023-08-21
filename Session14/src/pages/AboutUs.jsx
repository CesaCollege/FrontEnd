import {Link} from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            This is AboutUs page
            {/* <a href="/">Go to HomePage</a> */}
            <Link to="/">Go to HomePage</Link>
        </div>
    );
}
 
export default AboutUs;