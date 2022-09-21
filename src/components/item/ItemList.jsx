import React from 'react';
import { Link } from 'react-router-dom';
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
          <p className="icon-link mr-3">
            <Link to={`/character/${character.char_id}`} className="icon-link mr-3">
              <i className="fa fa-pencil-square-o"></i>
              {character.nickname}
            </Link>
          </p>
          <Link to={`/character/${character.char_id}`} className="btn btn--with-icon read-more">
            <i className="btn-icon fa fa-long-arrow-right"></i>
            READ MORE
          </Link>
        </div>
      </article>

    
    </>
  )
}
