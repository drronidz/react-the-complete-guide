import React from "react";
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from "../data/DUMMY_MEALS";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)

    return (
        <section className={classes.meals}>
            {mealsList}
        </section>
    )
}

export default AvailableMeals