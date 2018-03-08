import React from 'react';
import "../styles/modal.css";



const Modal = ({show, details, close}) => {
  console.log(details);

  if(!show){
    return null;
  }

  function handleClose(e){
    if(e.currentTarget == e.target){
      return close();
    }
  }

    return (

      <div className="modal-bg" onClick={handleClose}>
        <div className="modal-content">
        {this.state.childresn}
          <p>content</p>
          <p onClick={handleClose}>CLOSE MEEEE</p>
        </div>
      </div>
    )
}

export default Modal;
