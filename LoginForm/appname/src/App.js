import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<Register/>}/>      
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      {/* </BrowserRouter> */}
      </>
    </div>
  );
}

export default App;
