import React, {  useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GetInformation.css';
export default function ViewUserDetails()
 {
  const [booking, setBooking] = useState(null);
  const {iceid}=useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/fetchIcecreamshops/${iceid}`) // Replace with your backend API endpoint
      .then(response => {
        setBooking(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [iceid]);



  if (!booking) {
    return <div className="container"><div className="loading">No Icecreams Booked.</div></div>;
  }

  return (
    <div className="container">
      <h1>Icecream Booking</h1>
      <div className="booking">
        <h2>Icecream Booking</h2>
        <p>Iceid :{booking.iceid}</p>
        <p>ShopName :{booking.shopname}</p>
        <p>ShopAddress :{booking.shopaddress}</p>
        <p>IcecreamFlavor :{booking.icecreamflavor}</p>
        <p>IcecreamToppins :{booking.icecreamtoppins}</p>
        <p>Ingredients :{booking.ingredients}</p>
        <p>Dailysale :{booking.dailysale}</p>
        <p>Cost :{booking.cost}</p>
        {/* Display other booking  as needed */}
      </div>
    </div>
  );
}