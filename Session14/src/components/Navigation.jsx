import { Routes, Route ,BrowserRouter, Link,useParams} from 'react-router-dom';


const Navigation = () => {
    return (
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about-us">AboutUs</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
    );
}
 
export default Navigation;