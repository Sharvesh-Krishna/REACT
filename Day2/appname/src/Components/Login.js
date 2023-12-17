import '../Assets/Login.css'
function Login()
{
    return(
       <body>
        <div>
            <nav>
                <div className="right-side">
                    <a href="Login.js">Login</a>
                    <a href="app.js">Register</a>
                </div>
            </nav>

            <form className="container">
                <h2>Login</h2>
                <input type="text" name="" id="name" className="name" placeholder="Name" required />

                <input type="password" name="" id="pass1" className="name" placeholder="Password" required />

                <button className="btn">Login</button>
            </form>
        </div>
        </body>
    );
}

export default Login