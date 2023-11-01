"use client"

import React, { useState, useEffect  } from 'react';

export default function MealIdeas({ ingredient }){
    const [meals, setMeals] = useState([]);

    

    function loadMealIdeas() {
        fetchMealIdeas(ingredient).then((mealData) => {
          if (mealData && mealData.meals) {
            setMeals(mealData.meals);
          }
        });
      }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);
     
    
    return (
        <div>
          <h2>Meals including {ingredient}</h2>
          <ul>
            {meals.length > 0 ? (
              meals.map((meal) => (
                <li key={meal.idMeal}>
                  {meal.strMeal}
                </li>
              ))
            ) : (
              <p>No meals found.</p>
            )}
          </ul>
        </div>
      );
   
}


async function fetchMealIdeas (ingredient) {
   

    
    
    const response = await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    const mealData = await response.json();
    console.log(mealData);
    return mealData;

}





