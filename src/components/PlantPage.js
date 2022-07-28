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

  function handleDeletePlant(id){
    const newPlants = plants.filter((plants) => plants.id != id)
    setPlants(newPlants)
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
      <PlantList handleDeletePlant={handleDeletePlant} plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
