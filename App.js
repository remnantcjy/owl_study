import React from 'react';

function App() {
  const movies = [
    {title : 'Kossie coder1', year : 2001},
    {title : 'Kossie coder2', year : 2002},
    {title : 'Kossie coder3', year : 2003},
    {title : 'Kossie coder4', year : 2004}
  ];
  const renderMovies =movies.map(movie => {
    return (
      <div className='movie' key={movie.title}>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-year'>{movie.year}</div>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
