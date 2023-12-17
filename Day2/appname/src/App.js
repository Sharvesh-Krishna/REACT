import Login from './Components/Login';
import Nav from './Components/Nav';
import './Assets/css/Nav.css'

function App()
{
    return(
        <body>
        <div>
            
            <Nav/>
            {/* <Login/> */}
           <form class="container">
        <h2>Registration form</h2>
        <input type="text" name="" id="name" className="name" placeholder="Name" required/>

        <input type="tel" name="" id="phone" className="name"  placeholder="Phone No" required/>

        <input type="number" name="" id="age" className="name"  placeholder="Age" required/>

        <input type="email" name="" id="email" className="name"  placeholder="Email" required/>

        <input type="password" name="" id="pass1" className="name"  placeholder="Password" required/>
        <input type="password" name="" id="pass2" className="name"  placeholder="Confirm Password" required/>

        <input type="date" name="" id="dob" className="name"  placeholder="Date of Birth" required/>

        <input type="text" name="" id="Address" className="name"  placeholder="Address" required/>

        <button class="btn" onclick="show()">Register</button>
    </form>
        
    
        </div>
        </body>
    )
}
export default App