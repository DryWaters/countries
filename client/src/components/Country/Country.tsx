import React from "react";

import classes from "./Country.module.scss";
import { Link } from "react-router-dom";

const Country = (props: any) => {

    return (
        <Link to={`/${encodeURIComponent(props.name)}`}>
            <button className={classes.Country}>
                <img alt="Country Flag" src="https://via.placeholder.com/275x175" />
                <div className={classes.statContainer}>
                    <div className={classes.name}>{props.name}</div>
                    <div><span className={classes.category}>Population:</span> {Math.floor(Math.random() * (10000000 - 500000 + 1)) + 500000}</div>
                    <div><span className={classes.category}>Region: </span> {props.region}</div>
                    <div><span className={classes.category}>Capital: </span> {props.capital}</div>
                </div>
            </button>
        </Link>
    );
};

export default Country;