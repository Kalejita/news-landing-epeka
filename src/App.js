import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from './Components/Welcome';
import Topusa from './Components/Topusa';
import Listanews from './Components/Listanews';
import logo from './logo_news.png'
import Journal from './Components/Journal';


function App () {

  return (

    <Router>
      <div className='d-flex justify-content-between align-items-center px-5 py-2'>
        <img alt="news" src={logo} width="10%" className=""/>
        <div>
        <Link to="/" className='btn btn-dark ms-2'>
          Home
        </Link>
        <Link to="/top-usa" className='btn btn-dark ms-2'>
          Top USA
        </Link>
        <Link to="/journal" className='btn btn-dark ms-2'>
        Wall Street Journal
        </Link>
        <Link to="/tabla" className='btn btn-dark ms-2'>
          TABLE
        </Link>
        </div>
      </div>
        <Routes>
          <Route path="/tabla" element={<Listanews/>}/>
        </Routes>
        <Routes>
          <Route path="/top-usa" element={<Topusa/>}/>
        </Routes>
        <Routes>
          <Route path="/journal" element={<Journal/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
        </Routes>
    </Router>
      
    );
  }

export default App;
