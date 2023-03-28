import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import List from '../components/list/List';
import './home.css'

function Home() {
    const [UserData, setUserData] = useState();
   
    const navigate = useNavigate();
 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://panorbit.in/api/users.json');
            setUserData(response.data.users);
            // console.log(response.data.users);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
      
    

    return (
      <div className='userContainer' >
        <div className='lebel'><h2>SELECT USER</h2> </div>
        <div className='container'>
         {UserData && (
        <ul >
          {UserData.map(user => (
            <li key={user.id} onClick={() => navigate(`/card/${user.id}`)}>   
              <List data={user}> </List>
            </li>
          ))}
        </ul>
      )}
      </div>
     </div>
    );
  }
  


export default Home