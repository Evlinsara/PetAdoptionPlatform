import React from 'react';
import './Cat.css';
import { Link } from 'react-router-dom'; 

const pets = [
  {
    name: 'bubu',
    gender: 'Male',
    city: 'Kochi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Bdj0QQwLB7naqzD0PAGez4fS2ATgk9JJtA&s',
    description: 'Smart, Hard-working, Energetic',
    num: "987656893",
    age:"6 months"
  },
  {
    name: 'chewa',
    gender: 'Male',
    city: 'Kochi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR52yGlZGREZW73R4KOqAB815sgNGNbxYpbg&s',
    description: 'Smart, Hard-working, Energetic',
    num: "8384942043",
    age:"7 months"
  },
  {
    name: 'Snow',
    gender: 'Male',
    city: 'Kochi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvEwBFsSFhQOB7odbu7vvDwd04yyfPLCYj_aegwALbPp0NoJylZUzp0tGZTbupmNw__o&usqp=CAU',
    description: 'Intelligent, Friendly, Energetic, loyal',
    num: "784973287",
    age:"8 months"
  },
];

function Cat() {
  return (
    <div> {/* ✅ One root div */}
      <header className="header">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1148570769/vector/veterinary-clinic-vector-logo.jpg?s=612x612&w=0&k=20&c=soi94tMr2NiMQ9b9X48p4OMW3V2i7JlGORDfCNBEUSs="
          alt="Pawfect Match Logo"
        />
        <h1>Pawfect Match</h1>
        <nav className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/rank"><button>Rank</button></Link>
        </nav>
      </header>

      <div className="card-container">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>
            <div className="pet-img">
              <img src={pet.image} alt={pet.name} />
              <span className="badge">Pet Quality</span>
            </div>
            <div className="pet-info">
              <p>Hi! My name is: <span className="pet-name">{pet.name}</span></p>
              <p>Breed: <span role="img" aria-label="paw">🐾</span></p>
              <p>Gender: {pet.gender}</p>
              <p>Age:<span className="pet-name">{pet.age}</span></p>
              <p>City: {pet.city}</p>
              <div className="traits">{pet.description}</div>
              <button className="contact-btn">📞 {pet.num}</button>
              <button className="adopt-btn">Inquire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cat;
