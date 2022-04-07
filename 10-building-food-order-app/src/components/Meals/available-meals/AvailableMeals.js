import React from "react";
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from "../data/DUMMY_MEALS";
import Card from "../../UI/card/Card";
import MealItem from "../meal-item/MealItem";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )

    return (
        <section className={classes.meals}>
            <Card>
                {mealsList}
            </Card>
        </section>
    )
}

export default AvailableMeals