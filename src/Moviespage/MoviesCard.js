import React from 'react';
 
function MoviesCard({ id, shows }) {
  console.log(shows[id].url)  
  return (
    <div style={{ position: 'relative', paddingBottom: '15%', height: 0, paddingRight: "15px" }}>
      <iframe width="300rem" height="200rem" src={shows[id].url} title={shows[id].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
  );
}
 
export default MoviesCard;
