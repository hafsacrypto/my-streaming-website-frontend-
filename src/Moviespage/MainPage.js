import React from 'react';
import MoviesRow from './MoviesRow'; 

function MainPage() {
  const categories = [
    { title: 'Movie', shows: [{ id: 0, title: 'The Boy Who Became the best at the magic academy', url: 'https://www.youtube.com/embed/sXWFr5Nk-g8' }, { id: 1, title: 'He Was Born As A Weak Goblin But Soon Became The Strongest Being In This World ', url: 'https://www.youtube.com/embed/cHsYClnlZEM?si' }, { id: 2, title: '', url: 'https://www.youtube.com/embed/ABG0BthfTOQ?si'}, { id: 3, title: '', url: ''}] },  
    { title: 'Movie', shows: [{ id: 0, title: 'New Anime Movie Eng Dub 2023', url: 'https://www.youtube.com/embed/zkYN0MI9nZI?si=rRFKJIkYOLZoq6X1' }, { id: 1, title: 'Fairy Tail The Movie: Phoenix Priestess', url: 'https://www.youtube.com/embed/HVjQp54UboA?si=KapIbxwLJEaA4sQo' }, { id: 2, title: 'School With The Revival Of A Legend Episode 1-24', url: 'https://www.youtube.com/embed/GIhh-HitJTk?si=tnxVCTdnN5LQ78dQ' }  ] },
    { title: 'Movie', shows: [{ id: 0, title: 'Demon Slayer: Kimetsu no Yaiba The Hinokami Chronicles', url: 'https://www.youtube.com/embed/GCJnG6DYEeg?si=FJ0eZj2r81j1Y4Ww' }, { id: 1, title: 'The Aritocrats Otherwordly Adenture: Serving Gods Who Go To Far Full Series Episodes 1-12', url: 'https://www.youtube.com/embed/ZrKCfj3u2cs?si'}, { id: 2, title: 'Chainsaw Man', url: 'https://www.youtube.com/embed/Bzq8piNiZpE?si' } ] }, 
    { title: 'Movie', shows: [{ id: 0, title: 'Black Fox Movie', url: 'https://www.youtube.com/embed/AiESdN5SC8s?si=Bdc7UF_0siSfA3ee' }, { id: 1, title: 'Hello World Scifi Movie', url: 'https://www.youtube.com/embed/EgrehrOCpcA?si' }, { id: 2, title: 'Dororo Episodes 1-24', url: 'https://www.youtube.com/embed/NF7xiEKZqO0?si'}]}, 
    { title: 'Movie', shows: [{ id: 0, title: 'Top 1 Ninja Smash Demons Episodes 1-12', url: 'https://www.youtube.com/embed/5h0L68KEdxc?si=pMzXt_FZJdyngpa3' }, { id: 1, title: 'Black Brothers Full Movie', url: 'https://www.youtube.com/embed/oxhDB2GYlY4?si'}, { id: 2, title: '', url: 'https://www.youtube.com/embed/CEuDea3hzvc?si'}]}
    // Add more categories as needed
  ];
 
  return (
    <div style={{ backgroundColor: 'black', color: 'white'}}>
      {categories.map((category , index) => (
        <MoviesRow id={index} key={index} title={category.title} shows={category.shows} />
      ))}
    </div>
  );
}
 
export default MainPage;