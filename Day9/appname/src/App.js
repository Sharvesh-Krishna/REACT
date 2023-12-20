import { Routes, Route } from "react-router-dom"; 
import Users from "./Components/Users";
import Addusers from "./Components/Addusers";
import Editusers from "./Components/Editusers";
import "./Assets/Core.css";

function App() {
  return (
    <div className="App">

      <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/add" element={<Addusers/>}/>
          <Route path="/edit/:id" element={<Editusers/>}/>

      </Routes>

    </div>
  );
}

export default App;
