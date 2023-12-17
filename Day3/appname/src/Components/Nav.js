import '../Assets/Css/Nav.css';
import './shine';
const Nav=()=>{
    return(
        <header>
            
            <h1> <a href="#" className="logo">Decor Delight</a></h1>
            <div class="navigation">
                <a href="../Components/Home.js" class="info-btn">Home</a>
                <a href="#" className="info-btn">About</a>
                <a href="#" className="info-btn">Info</a>
                <a href="#" className="info-btn">Service</a>
                <a href="#" className="info-btn">Contact</a>
            </div>
        </header>
    )
}

export default Nav;