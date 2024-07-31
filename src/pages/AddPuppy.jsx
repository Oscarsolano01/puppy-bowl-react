import React, {useState} from "react";
import "./pageStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPuppy() {
 const navigate = useNavigate ();
  const [formData, setFormData] = useState({ status: "bench" });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
   e.preventDefault();
   if(!formData.imageUrl) {
    formData.imageUrl = 
    //insert url here 
    "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png";
   
   }
   axios
   .post(`${import.meta.env.VITE_BASE_URL}/players`, formData)
   .then((response) => {
    console.log(response)
   if(response.data.success) {
    alert("successfully Added Player!");
    navigate("/");
   }
   })
  .catch((err) => console.log(err));
  console.log (formData);
  };
  return (
    <>
      <form className="add-puppy-form">
        <label>
          Player's Name:
          <input type="text" name="name" onChange={handleInput} />
        </label>
        <label>
          Player's Breen:
          <input type="text" name="breed" onChange={handleInput} />
        </label>
        <label>
          Status:
          <select name="status" defaultValue="bench" onChange={handleInput}>
            <option value="bench"> Bench</option>
            <option value="field"> </option>
            <option value="field">Field</option>
          </select>
        </label>
        <label>
          Image URL:
          <input type="text" name="imageUrl" onChange={handleInput} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default AddPuppy;
