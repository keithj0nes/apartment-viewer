import React from 'react';
import "../styles/modal.css";

const Modal = ({show, details, close}) => {
  console.log(details);

  if(!show){
    return null;
  }

  function handleClose(e){
    if(e.currentTarget === e.target){
      return close();
    }
  }

  const a = details.amenities;
  let amenities = {};
  Object.keys(a).forEach((item, index)=>{
    if(Object.keys(amenities).length < 4){
      if(a[item] === amenities[item]){
      } else if(a[item] === true){
        amenities[item] = a[item]
      } else if(typeof a[item] === "string"){
        amenities[item] = a[item]
      }
    }
  })

  return (

    <div className="modal-bg" onClick={handleClose}>
      <div className="modal-content">
        <div className="close" onClick={handleClose}>
          <div></div>
          <div></div>
        </div>
        <div className="content-left">
          <div className="logo">Logo</div>
          <h2 className="shortdesc">{details.shortdesc}</h2>
          <p className="address">i {details.apartment} | {details.address.street} {details.address.city}, {details.address.state}, {details.address.zipcode}</p>
          <div className="amenities">
            {Object.keys(amenities).map((a, k)=>{
              return (
                <div className="amenity-item" key={k}>

                  <div>i</div>
                  <div>{a}</div>
                  <div className="amenity-check">{amenities[a] === true ? <div className="checkmark"></div> : amenities[a]}</div>
                </div>
                  )
            })}
          </div>
        </div>
        <div className="content-right">
          <img src={details.images[0]} alt={details.apartment}/>

          <div className="rent-availability-container">
            <div className="rent">
              <p className="title-dark">Monthly Rent</p>
              <p className="sub-dark">${(details.rent.cost / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            </div>
            <div className="availability">
              <p className="title-dark">Availability</p>
              <p className="sub-dark">{details.available.now === true ? "Right Now": details.available.wait}</p>
            </div>
          </div>

          <div className="buttons-container">
            <div className="share-favorite">
              <button className="secondary button-green">Share Property</button>
              <button className="secondary button-red">Add Favorite</button>
            </div>
            <div>
              <button className="primary">Arrange Viewing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
