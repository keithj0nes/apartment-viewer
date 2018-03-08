import React from 'react';
import data from '../listings.json';

class AptListings extends React.Component {

  constructor(){
    super();

    this.state = {
      listings: data
    }
  }
  render(){
    return (
      <div className="apt-listings">
        <ul>

        {data.map((listing, key) => {
          console.log(listing);
          return <li key={key} >listing</li>
        })}
        </ul>
      </div>
    )
  }
}

export default AptListings;
