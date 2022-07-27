import React, {useState} from "react";
import {useEffect} from 'react';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  function handleAddNewPlant(newPlantObject){
    setPlants([...plants, newPlantObject])
  }

  const plantsToDisplay = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plantData) => setPlants(plantData))
  }, [])

  return (
    <main>
      <NewPlantForm handleAddNewPlant={handleAddNewPlant} />
      <Search search={search} setSearch={setSearch} handleSearch={plantsToDisplay}/>
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
