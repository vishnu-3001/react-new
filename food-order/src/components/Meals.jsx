import { useState,useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals(){
    const [meals,setMeals]=useState([]);
    //this will execute after component is exectued
    useEffect(()=>{
        async function fetchMeals(){
            const response=await fetch('http://localhost:3000/meals');
            if(!response.ok){
    
            }
            const meals=await response.json();
            setMeals(meals);
        }
        fetchMeals();
    },[]);
    
return <ul id="meals">
    {meals.map(meal => <MealItem meal={meal} key={meal.id} id={meal.id} image={meal.image} name={meal.name} description={meal.description} price={meal.price}></MealItem>)}
</ul>

}