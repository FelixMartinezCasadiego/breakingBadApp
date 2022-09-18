import React from 'react';
import '../../scss/main.scss';

export const ItemList = ({character}) => {
  return (
    <>
    
      <article className="blog-card my-5 mx-3">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <img src={character.img} alt={character.name} className="img-fluid" />
            <div className="card__background--main">
              <div className="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div className="blog-card__head">
          <span className="date__box">
            <span className="date__day"> Birthday: {character.birthday} </span>
          </span>
        </div>
        <div className="blog-card__info">
          <h5> {character.name} </h5>
          <p>
            <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i> {character.nickname} </a>
          </p>
          <p> Lorem !</p>
          <a href="#" className="btn btn--with-icon read-more"><i className="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
        </div>
      </article>

    
    </>
  )
}
