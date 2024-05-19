import React from 'react';
import MoviesCard from './MoviesCard';
 
function MoviesRow({ title, shows, id}) {
  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={{ color: 'white' }}>{title}</h2>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {shows.map((show, index)=> (
          <MoviesCard id={index} key={index} shows={shows}  />
        ))}
      </div>
    </div>
  );
}
 
export default MoviesRow;