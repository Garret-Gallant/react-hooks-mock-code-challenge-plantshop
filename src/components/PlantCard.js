import React, {useEffect, useState} from "react";

function PlantCard( {handleDeletePlant, plant} ) {
  const {id, name, image, price} = plant
  const [stock, setStock] = useState(true)
  
  function changeStock(){
    setStock((stock) => !stock)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    });
    handleDeletePlant(id)
  }
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={changeStock} className="primary">In Stock</button>
      ) : (
        <button onClick={changeStock}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
