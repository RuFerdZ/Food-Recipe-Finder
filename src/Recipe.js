import React from 'react';
import style from './recipe.module.css'

function Recipe({title, calories, image, ingredients}){
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(i => (
                    <li>{i.text}</li>
                ))}
            </ol>
            <p>Calories: {calories} cals</p>
            <img src={image} alt="" className={style.image} />
        </div>
    );
}

export default Recipe;