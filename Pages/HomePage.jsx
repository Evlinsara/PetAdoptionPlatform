import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <img className="logo" src="https://media.istockphoto.com/id/1148570769/vector/veterinary-clinic-vector-logo.jpg?s=612x612&w=0&k=20&c=soi94tMr2NiMQ9b9X48p4OMW3V2i7JlGORDfCNBEUSs=" alt="College Logo" />
        <h1>Pawfect Match</h1>
        <nav className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/SignUp"><button>Login</button></Link>
        </nav>
      </header>

      <img className="campus-img" src="https://149648348.v2.pressablecdn.com/wp-content/uploads/2024/07/Challenges-That-Helped-Me-Become-a-Better-Pet-Owner-1024x682.webp" alt="College Campus" />

      <section className="vision-section">
        <h2>Transforming🐾Lives Pawfectly</h2>
        <p><i>
           Welcome to Pawfect Match – Where Every Paw Finds Its Perfect Home! 
At Pawfect Match, we believe every animal deserves a chance at love and a forever home. Whether you're dreaming of a playful pup, a gentle senior dog, a curious kitten, or a cuddly cat — we’re here to help you find your pawfect companion.

<p>We work hand-in-paw with trusted shelters, rescue groups, and foster families to bring rescued pets one step closer to their happy ending — with you!</p>

🐾 Why Choose Pawfect Match?
 Save a life and gain a loyal best friend

🐾 Browse real stories and photos of pets waiting to be loved

🩺 All pets are vet-checked, vaccinated, and adoption-ready
        </i></p>
      </section>

      <div className='why'>
        <h2>Why Choose Pawfect Match?</h2>
        <p>
          Save a life and gain a loyal best friend
 Browse real stories and photos of pets waiting to be loved

 All pets are vet-checked, vaccinated, and adoption-ready
        </p>
        <h3> What You'll Find Here</h3>
        <p> Easy-to-navigate listings by pet type, age, and location

Helpful resources to prepare your home and heart

 A community that supports ethical, responsible adoption</p>

      </div>

      <section className="offerings">
        <h2>Need a Companion?</h2>
        <Link to="/Cat"><button>CATS</button></Link>
        <Link to="/Dog"><button>DOGS</button></Link>
        {/* <Link to="/civil"><button>CIVIL</button></Link> */}
      </section>

      <footer className="footer">
        <span>&copy;Pawfect match</span>
        <a href="https://www.instagram.com/amtmindia/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9V4NGi4jiLPvEtqcMH5AkQRSsyJ77UaJjDQ&s" alt="Instagram" /></a>
        <a href="https://www.facebook.com/amtmindia"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" /></a>
        <a href="https://x.com/amtmindia"><img src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png" alt="Twitter" /></a>
      </footer>
    </div>
  );
}

export default HomePage;
