import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const Pizzaimage = (props) => (
    <div className={classes.Pizzaimage}>
        <img src={PizzaImage}  className={classes.Pizzaimg} />
    </div>
)

export default Pizzaimage;