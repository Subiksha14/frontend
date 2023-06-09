import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const IceCreamHomepage = () => {
  return (
    <div className="homepage-container">
      <header>
        <h1>Welcome to the Ice Cream Shop</h1>
      </header>
      <section className="flavors-section">
        <h2>Our Delicious Flavors</h2>
        <div className="flavors-container">
          <FlavorCard flavor="Vanilla" image="" />
          <FlavorCard flavor="Chocolate" image="chocolate.jpg" />
          <FlavorCard flavor="Strawberry" image="strawberry.jpg" />
        </div>
      </section>
      <section className="specials-section">
        <h2>Today's Specials</h2>
        <div className="specials-container">
          <SpecialCard special="Special 1" image="https://media.istockphoto.com/id/155419469/photo/vanilla-ice-cream.jpg?s=170667a&w=0&k=20&c=KN1zQhsD1CY6UVqdgsdt5ylBCZsUX6l9BsSJ9sMEtA4=" />
          <SpecialCard special="Special 2" image="https://www.carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg" />
          <SpecialCard special="Special 3" image="https://www.milkmaid.in/sites/default/files/2022-03/Strawberry-IceCream-590x436.jpg" />
          
          <Link to="/Booking">
        <input type="submit" value="Book Now" />
        </Link>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Ice Cream Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FlavorCard = ({ flavor, image }) => {
  return (
    <div className="flavor">
      <img src={image} alt={`${flavor} Ice Cream`} />
      <h3>{flavor}</h3>
    </div>
  );
};

const SpecialCard = ({ special, image }) => {
  return (
    <div className="special">
      <img src={image} alt={`${special}`} />
      <h3>{special}</h3>
    </div>
  );
};

export default IceCreamHomepage;
