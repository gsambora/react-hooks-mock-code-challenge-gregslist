import React, {useState} from "react";

function ListingCard({id, description="description", 
                    image="https://via.placeholder.com/300x300", location,
                    handleDelete}) {

  const [isFave, setFave] = useState(false);

  function changeFave(){
    setFave(!isFave);
  }

  function onDelete(event){
    //console.log(event.target.id)
    //console.log("button end ", event.target.id.substring(6,))
    handleDelete(event.target.id.substring(6,))
  }

  return (
    <li id={"card"+id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFave ? (
          <button onClick={changeFave} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={changeFave} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={"delbtn"+id} onClick={onDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
