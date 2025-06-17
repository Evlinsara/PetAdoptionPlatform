import React from 'react';
import './Cat.css';
import { Link } from 'react-router-dom'; 

const dogpet= [
  {
    name: 'Marshmellow',
    gender: 'Male',
    city: 'Kochi',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75648042/1/?bust=1742270009&width=450',
    description: 'Smart, Hard-working, Energetic',
    num: "987656893",
    age:"4 weeks"
  },
  {
    name: 'Chocolate',
    gender: 'Male',
    city: 'Trivandrum',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75648043/1/?bust=1742270012&width=450',
    description: 'Smart, Hard-working, Energetic',
    num: "8384942043",
    age:"2 weeks"
  },
  {
    name: 'Panchow',
    gender: 'Male',
    city: 'Kollam',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75636315/1/?bust=1742183650&width=450',
    description: 'Intelligent, Friendly, Energetic, loyal',
    num: "784973287",
    age: "5 weeks"
  },
];

function Dog() {
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
        {dogpet.map((dog, index) => (
          <div className="pet-card" key={index}>
            <div className="pet-img">
              <img src={dog.image} alt={dog.name} />
              <span className="badge">Pet Quality</span>
            </div>
            <div className="pet-info">
              <p>Hi! My name is: <span className="pet-name">{dog.name}</span></p>
              <p>Breed: <span role="img" aria-label="paw">🐾</span></p>
              <p>Gender: {dog.gender}</p>
              <p>Age:<span className="pet-name">{dog.age}</span></p>
              <p>City: {dog.city}</p>
              <div className="traits">{dog.description}</div>
              <button className="contact-btn">📞 {dog.num}</button>
              <button className="adopt-btn">Inquire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dog;
