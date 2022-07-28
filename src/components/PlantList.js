import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {handleDeletePlant, plants} ) {
  return (
    <ul className="cards">{plants.map((plant) => 
      <PlantCard 
      plant={plant}
      handleDeletePlant={handleDeletePlant}
      />)}</ul>
  );
}

export default PlantList;
