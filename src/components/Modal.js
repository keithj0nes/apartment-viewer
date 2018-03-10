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

    return (

      <div className="modal-bg" onClick={handleClose}>
        <div className="modal-content">
          <div className="content-left">
            <h1>HAHAHAHAAHHA WORLD</h1>
            <h1>HAHAHAHAAHHAasdgas fdssgasd</h1>

          </div>
          <div className="content-right">
          
          </div>


        </div>
      </div>
    )
}

export default Modal;
