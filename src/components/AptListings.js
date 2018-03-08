import React from 'react';
import Modal from './Modal';
import data from '../listings.json';
import "../styles/aptlistings.css";

class AptListings extends React.Component {

  constructor(){
    super();
    this.state = {
      listings: data,
      viewerModal: false,
      listingDetails: {}
    }
  }

  handleClick(listing){
    this.setState({viewerModal: true, listingDetails: listing})
  }

  handleCloseModal(){
    this.setState({viewerModal: false, listingDetails: {}})
  }

  render(){
    return (
      <div className="apt-listings">
        <ul>
          {
            this.state.listings.map((listing, key) => {
              return <li key={key} onClick={()=>{this.handleClick(listing)}}>{listing.address.street} {listing.address.city}, {listing.address.state}, {listing.address.zipcode}</li>
            })
          }
        </ul>

        <Modal
          show={this.state.viewerModal}
          details={this.state.listingDetails}
          close={this.handleCloseModal.bind(this)}
        />
      </div>
    )
  }
}

export default AptListings;
