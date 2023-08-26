import './App.css';
import Discussion from './container/Discussion';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Discussion/>
      <ToastContainer />
    </div>
  );
}

export default App;
