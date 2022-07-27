import React, {useState} from "react";

function PlantCard({plant}) {
  const {name, image, price} = plant
  const [stock, setStock] = useState(true)
  function changeStock(){
    setStock((stock) => !stock)
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
    </li>
  );
}

export default PlantCard;
