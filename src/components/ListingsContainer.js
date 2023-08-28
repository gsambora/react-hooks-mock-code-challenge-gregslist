import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeleteListing}) {

  function manageDeleteListing(delId){
    fetch(`http://localhost:6001/listings/${delId}`, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listings[delId])
    })

    //console.log("delId ",delId)
    handleDeleteListing(delId)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>{
          //console.log(listing)
          return(<ListingCard key={listing.id}
                              id={listing.id} 
                              description={listing.description}
                              image={listing.image}
                              location={listing.location} 
                              handleDelete={manageDeleteListing}/>)
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
