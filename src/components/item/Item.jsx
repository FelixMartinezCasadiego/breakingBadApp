import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({character}) => {
  return (
    <>
      <div>

      
        <div className="card m-5 widthByCard">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={character.img} className="img-fluid rounded-start" alt={character.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> {character.name} </h5>
                <h6 className='mt-5 mb-0 p-0'>Occupation:</h6>
                <p className="card-text"> 
                  <br /> {character.occupation[0]}
                  <br /> {character.occupation[1]} </p> 
                <p className="card-text mt-5"><small className="text-muted"> Status: {character.status} </small></p>
              </div>
            </div>
          </div>
        </div>

        <div className='btnBack ms-5'>
            <Link to={`/`}>
              <i className="fa-solid fa-arrow-left me-3"></i>
              <p className='d-inline'>Back</p>
            </Link>
        </div>

      </div>
    
    </>
  )
}
