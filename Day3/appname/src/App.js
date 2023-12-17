import './Assets/Css/App.css';
import Nav from './Components/Nav';
// import Home from './Components/Home';
import Shine from './Components/shine';
const App=()=>
{
  return(
    <section>
        <Shine/>
        <Nav/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
       <div class="content">
                <div class="card">
              <img class="card-img-top"/>
              
          </div>
            <div class="info">
                <h1 class="c">Be <br></br>Creative</h1>
                <br></br>
                <h3><p>We make interior staging easy and convenient.We are streamlining home staging with end-to-end services, including planning, designing, and professional marketing photography all in one place. We deliver what you want, when you want it.</p></h3>  
                
                <h2><p>Streamlined staging services that inspire and sell.</p></h2> 


            </div> 
          
        </div> 
    
        <div class="media-icons">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div> 
    </section>
  )
}

export default App;