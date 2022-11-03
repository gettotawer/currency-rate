import React from 'react';

function Row(props) {

    return (
      <div className="row">
        <p className='row__currency'>{props.currency}</p>
        <p className='row__rate'>{props.rate}</p>
      </div>
    );
  }
  
  export default Row;