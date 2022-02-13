import React from "react";

import classes from "./Country.module.scss";

const Country = (props: any) => {

    return (
        <button className={classes.Country} onClick={props.onClickCountry}>
            <img src="https://via.placeholder.com/150" />
            <div className={classes.name}>{props.name}</div>
            <div className={classes.details}>Population: {Math.floor(Math.random() * (10000000 - 500000 + 1)) + 500000}</div>
            <div className={classes.details}>Region: {props.region}</div>
            <div className={classes.details}>Capital: {props.capital}</div>
        </button>
    );
};

export default Country;