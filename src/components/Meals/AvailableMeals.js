import React, { useState, useEffect } from 'react';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'



const AvailableMeals = () => {
const [meals, setMeals] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [httpError, setHttpError] = useState();

useEffect(() => {
  const fetchMeals = async() => {
    const response = await fetch('https://react-http-bd201-default-rtdb.firebaseio.com/meals.json');

    if(!response.ok) {
        throw new Error('Something went wrong!!!')
    };

    const responseData = await response.json();
    console.log(responseData);

    const loadedMeals = [];

    for(const key in responseData) {
        loadedMeals.push({
            id:key,
            image:responseData[key].image,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
        })
    };

    setMeals(loadedMeals);
    setIsLoading(false);
  };

  fetchMeals().catch((error) => {
    setIsLoading(false);
    setHttpError(error.message);
  })
}, [])

    if(isLoading) {
        return (<section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>)
    };

    if(httpError) {
        return(
            <section className={classes.errorMsg}>
            <p>{httpError}</p>
        </section>
        )
    };

    const mealList = meals.map((meal) => (
    <MealItem
    key ={meal.id}
    id = {meal.id}
    image = {meal.image}
    name = {meal.name}
    description={meal.description}
    price = {meal.price}/>
    ));
    return (
       
    <section className={classes.meals}>
      
            <ul className={classes.mealContainer}>
                {mealList}
            </ul>

    
    </section>
      
    )
}

export default AvailableMeals;