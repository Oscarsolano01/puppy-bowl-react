import React from 'react';
import "./PuppyCard.css";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function PuppyCard({player, parent}) {


const navigate = useNavigate();
const cardStyles = { 
  width: parent === "details" ? "90%" : "27%", 
  margin: parent === "details" ? " 0 auto": null,
};

const removePlayer =(id) => {
  axios
  .delete(`${import.meta.env.VITE_BASE_URL}/players${id}`)
  .then((response) => {
    console.log(response);
    if(response.data.success){
      alert("Player succesfully removed from roster");
      navigate("/");
    }
  })
};  

  return ( 
  <div className='player-card' style={cardStyles}>
   <p>NAME: {player?.name}</p>
   <img src={player?.imageUrl} alt={player?.name}/>
   <p>Breed: {player?.breed}</p>
   {parent === "details" && <p>STATUS: {player?.status}</p>}
   {parent === "deatils" && <p>ID: {player?.id}</p>}

   {parent === "details"? (
    <button onClick={() => removePlayer(player?.id)}>Remove Player from Roster</button>
   ):(
  
   <button onClick={()=>navigate(`/details/${player?.id}`)}>See Deatils
   </button>
   )}
  </div>
   );
}

export default PuppyCard