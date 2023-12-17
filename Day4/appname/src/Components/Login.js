import './Css/Login.css'
// import './Css/Nav.css'

function Login()
{
    return(
       
        <div>

            <form className="container">
                <h2>Login</h2>
                <input type="text" name="" id="name" className="name" placeholder="Name" required />

                <input type="password" name="" id="pass1" className="name" placeholder="Password" required />

                <button className="btn">Login</button>
            </form>
        </div>
    );
}

export default Login