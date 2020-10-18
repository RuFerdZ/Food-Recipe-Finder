import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(' ');
  const [query, setQuery] = useState('beef')

  const APP_ID = "42b1927b";
  const APP_KEY = "c113031bba71325400e48a8f81172a40";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //const [counter, setCounter] = useState(0);
  // variable, setVariable = default value

  useEffect(() => {
    getRecipes();
  }, [query]);
  // useEffect Runs everytime an state is changed within the webpage
  // passing second parameter as empty array only runs it everytime the page loads anew
  // if we pass a value inside array, useEffect will run each time the value inside the array changes
  // useEffect(() => {
  //   console.log("Effect has been run");
  // }, [counter]);


  const getRecipes = async() => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  // can access target from e (event) mostly in onChange and onClick
  const updateSearch = e => {
    setSearch(e.target.value); // this prevents page from reloading
    console.log(search);
  }

  return (
    <div className="App">
      <h1 className="title">Food Recipe Search</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(r => (
          <Recipe title={r.recipe.label} calories={r.recipe.calories} image={r.recipe.image} ingredients={r.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App;
