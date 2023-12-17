import logo from './logo.svg';
import Nav from './Components/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;