import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Download from './pages/Doanload';

function App() {
    return (
      <div>
        <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route  path='/blogs' element={<Blogs/>} />
            <Route path='/blogs/:id' element={<Blog/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/dashboard' element={<Dashboard />} />
            <Route path='/profile/downloads' element={<Download />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
