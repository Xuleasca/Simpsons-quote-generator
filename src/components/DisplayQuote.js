import React from 'react';



function DisplayQuote({ quote }) {
  return (
    <div>
      <h4>{quote.quote}</h4>
  <em><p>{quote.character}</p></em>
      <img 
        src={quote.image}
        alt={quote.character}
      />
     
    </div>
  );
};

export default DisplayQuote;