import React from 'react';

export function CardPreview(props) {
  const [isFront, setisFront] = React.useState(true) // state methode
  function handleCardFlip(){
    setisFront(!isFront)
  }
    return (
        <div className={`tile ${isFront ? "" : 'back'}`}>
        <h4 className="cardTerm">{isFront ? props.term: props.definition}</h4>
        <div className="cardButtons">
          <button type="button" className="tertiary" onClick={handleCardFlip}>
            {isFront ? 'Show Back' : 'Show Front'}
            </button>
          <div><button type="button" className="secondary">
            Edit
            </button>
          <button type="button" className="secondary danger">
            Delete
            </button></div>

        </div>
      </div>
    );
}

export default CardPreview;