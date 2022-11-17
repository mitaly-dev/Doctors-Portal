import React from 'react';

const Info = ({info}) => {
    const {name,description,icon,bgColor} = info
   
    return (
        <div className={`card card-side ${bgColor} shadow-xl px-5 text-white`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default Info;