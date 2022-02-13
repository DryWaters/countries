import React, { useState, useEffect } from 'react';

import classes from "./CountryDetails.module.scss";
import {Link, useParams} from "react-router-dom";
import { AppProps, DetailsState } from "../../model/IApp";
import Header from "../UI/Header/Header";

const jsonURL = process.env.REACT_APP_API_URL;

const CountryDetails = () => {
    const { countryName } = useParams();
    const [details, setDetails] = useState({
        name: "",
        topLevelDomain: [],
        alpha2Code: "",
        alpha3Code: "",
        callingCodes: [],
        capital: "",
        altSpellings: [],
        region: ""
    });

    useEffect(() => {
        fetch(`${jsonURL}/name/${countryName}`)
            .then(res => {
                if (res.status === 200 || res.status === 304) {
                    return res.json();
                } else {
                    return Promise.reject("Error!");
                }
            })
            .then(data => {
                setDetails({ ...data })
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            <Header />
            <div className={classes.CountryDetails}>
                <Link to="/"><button>Back</button></Link>
                <img src="https://via.placeholder.com/300"/>
                <div className={classes.name}>{details.name}</div>
                <div
                    className={classes.details}>Population: {Math.floor(Math.random() * (10000000 - 500000 + 1)) + 500000}</div>
                <div className={classes.details}>Region: {details.region}</div>
                <div className={classes.details}>Capital: {details.capital}</div>
            </div>
        </div>
    );

}

export default CountryDetails;