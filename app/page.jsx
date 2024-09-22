"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${apiKey}`;
  

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setRecipes(data);
    } catch (error) {
      
    }
  }
  

  return (
    <div className="container">
      <h3 className="title">Tell us what ingredients you have and you will see some tasty recipes below!</h3>
      <div className="container-search">
        <form onSubmit={handleSubmit} className="search">
          <input type="text" value={query} placeholder="Ingredients" id="search" onChange={handleInputChange}></input>
          <button type="submit" value="submit" id="btn-search">Search</button>
        </form>
      </div>
      <div className="results">
        {recipes.length > 0 && recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <div className="cardContent">
              {recipe.image ? (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                />
                ) : (
                  <div className="no-image">Sin imagen</div>
                )}
              <h3 className="margin-text">{recipe.title}</h3>
              <p className="margin-text">
                {recipe.usedIngredients.map(ingredient => ingredient.original).join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
