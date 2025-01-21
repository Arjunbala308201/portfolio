import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct usage of BrowserRouter
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './components/Main';
import { Home } from './components/Home';
import { Education } from './components/Education';
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';     // Import AOS JavaScript
import { Skills } from './components/Skills';
import { Project } from './components/Project';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route path='/' element = {<Home/>}/>
            <Route path='/education' element = {<Education/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Project/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
