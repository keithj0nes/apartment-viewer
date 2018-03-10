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
    else {
      console.log('HAHAHAHAHAAHAHAH');
    }
  }

  const a = details.amenities;
    let amenities = {};
    Object.keys(a).map((item, index)=>{
      // console.log(a[item], 'itemsss');
      if(Object.keys(amenities).length < 4){
        if(a[item] === amenities[item]){
          // console.log("getting herrrrree");
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
          <div className="content-left">
            <div className="logo">Logo</div>
            <p className="shortdesc">{details.shortdesc}</p>
            <p className="address">{details.address.street} {details.address.city}, {details.address.state}, {details.address.zipcode}</p>
            <div className="amenities">
              {Object.keys(amenities).map((a, k)=>{
                return <div key={k}>{a} {amenities[a] === true ? "x" : amenities[a]}</div>
              })}
            </div>
          </div>
          <div className="content-right">
            <img src={details.apartment} alt={details.apartment}/>
            <div className="rent">
              <p>Monthly Rent</p>
              <p>{details.rent.cost}</p>
            </div>
            <div className="availability">
              <p>Availability</p>
              <p>{details.available.now === true ? "Right Now": details.available.wait}</p>
            </div>
          </div>


        </div>
      </div>
    )
}

export default Modal;
