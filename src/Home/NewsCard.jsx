import React from "react";
import { NavLink } from "react-router-dom";

const NewsCard = ({ data }) => {
  const { title,thumbnail_url,image_url,id } = data;
  return (
    <div  className="mb-6">
      <div className="card glass">
        <figure>
          <img
            src={image_url}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>How to park your car at your garage?</p>
          <NavLink to={`/newsdails/${id}`}>read more</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
