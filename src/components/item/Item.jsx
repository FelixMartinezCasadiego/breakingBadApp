import React from 'react';

export const Item = ({character}) => {
  return (
    <>
      
      <div className="card m-5 widthByCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={character.img} className="img-fluid rounded-start" alt={character.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {character.name} </h5>
              <h6 className='mt-3'>Occupation:</h6>
              <p className="card-text"> 
                <br /> {character.occupation[0]}
                <br /> {character.occupation[1]} </p> 
              <p className="card-text"><small className="text-muted"> Status: {character.status} </small></p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
