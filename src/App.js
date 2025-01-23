import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct usage of BrowserRouter
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './components/Main';
import { Home } from './components/Home';
import { Resume } from './components/Resume';
// import 'aos/dist/aos.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route path='/' element = {<Home/>}/>
            <Route path='/resume' element = {<Resume/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
