import React from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
const IceCreamBooking = () => {
  return (
    <div className="booking-container">
      <h1>Ice Cream Booking</h1>
      <form>
      <label htmlFor="iceid">Iceid:</label>
        <input type="number" id="iceid" name="iceid" />
        <label htmlFor="shopname">ShopName:</label>
        <input type="text" id="shopname" name="shopname" />

        <label htmlFor="shopaddress">ShopAddress:</label>
        <input type="text" id="shopaddress" name="shopaddress" />

        <label htmlFor="icecreamflavor">Select IcecreamFlavor:</label>
        <select id="icecreamflavor" name="icecreamflavor">
        <option value="None">None</option>
          <option value="venilla">venilla</option>
          <option value="butterscotch">butterscotch</option>
          <option value="strawberry">strawberry</option>
          <option value="blackcurrent">blackcurrent</option>
          <option value="mango">mango</option>
        </select>

        <label htmlFor="icecreamtoppins">Select IcecreamToppins:</label>
        <select id="icecreamtoppins" name="icecreamtoppins">
        <option value="None">None</option>
          <option value="chocochips">chocochips</option>
          <option value="chocos">chocos</option>
          <option value="walnuts">walnuts</option>
        </select>

        <label htmlFor="ingredients">Select Ingredients:</label>
        <select id="ingredients" name="ingredients">
        <option value="None">None</option>
          <option value="vennila extract">venilla extract</option>
          <option value="butter extract">butter extract</option>
          <option value="strawberry extract">strawberry extract</option>
          <option value="blackcurrent extract">blackcurrent extract</option>
          <option value="mango extract">mango extract</option>
        </select>

        <label htmlFor="dailysale">Dailysale:</label>
        <input type="number" id="dailysale" name="dailysale" />

        <label htmlFor="cost">cost:</label>
        <input type="number" id="cost" name="cost" />
        <Link to="/Result">
        <input type="submit" value="Book Now" />
        </Link>
      </form>
    </div>
  );
};

export default IceCreamBooking;
