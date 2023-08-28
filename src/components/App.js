import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((r)=>r.json())
    .then((startListings)=> {setListings(startListings)})
  },[])

  function handleDeleteListing(delId){
    //console.log("*"+delId+"*")
    const updatedListings = listings.filter((listing)=>{return( parseInt(listing.id)!==parseInt(delId) )})
    setListings(updatedListings)
  }

  function handleFilterListing(searchText){
    console.log("look for: "+searchText)
    const filteredListings = listings.filter((listing)=>{
        return(listing.description.toLowerCase().includes(searchText.toLowerCase()))})
    setListings(filteredListings)
  }

  function handlePeaceClick(){
    fetch("http://localhost:6001/listings")
    .then((r)=>r.json())
    .then((startListings)=> {setListings(startListings)})
  }

  return (
    <div className="app">
      <Header handlePeaceClick={handlePeaceClick} handleFilterListing={handleFilterListing}/>
      <ListingsContainer listings={listings} setListings={setListings} handleDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
