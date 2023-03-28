import axios from 'axios';
import React, { useState,useEffect} from 'react';
import {useLocation } from 'react-router-dom';
import './card.css'

const Card = () => {
    const [user, setuser] = useState()
    
    const location = useLocation();
    const userId = parseInt( location.pathname.split("/")[2]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://panorbit.in/api/users.json');
            const users=response.data.users;
            const filter = users.filter(user => user.id === userId);
            setuser(filter[0]);
            // console.log(filter[0]);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [userId]);

  return (
    <div className="userDetailsContainer">
    {user && (
      <>
        <div className="userDetailsHeader">
          <img src={user.profilepicture} alt={user.name} />
          <h2>{user.name}</h2>
        </div>
        <div className="userDetailsBody">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address.street}</p>
          <p> {user.address.suite}, {user.address.city} {user.address.zipcode}</p>
          <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
          <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
        </div>
      </>
    )}
  </div>
  
  )
}

export default Card