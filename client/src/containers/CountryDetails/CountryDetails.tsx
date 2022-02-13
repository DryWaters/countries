import React, { useState, useEffect } from 'react';

import classes from "./CountryDetails.module.scss";
import {Link, useParams} from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import {DetailsState} from "../../model/IApp";

const jsonURL = process.env.REACT_APP_API_URL;

const CountryDetails = () => {
    const { name } = useParams();
    const [details, setDetails] = useState<DetailsState>({
        id: "",
        topLevelDomain: [],
        alpha2Code: "",
        alpha3Code: "",
        callingCodes: [],
        capital: "",
        altSpellings: [],
        region: ""
    });

    useEffect(() => {

        const fetchDetails = async () => {
            const res: Response = await fetch(`${jsonURL}/name/${name}`);
            if (res.status === 200 || res.status === 304) {
                const details = await res.json();
                setDetails({...details});
            }
        }

        fetchDetails().catch(console.error);

    }, [])

    return (
        <div>
            <Header />
            <div className={classes.CountryDetails}>
                <Link to="/"><button>Back</button></Link>
                <img alt="Country Flag" src="https://via.placeholder.com/300"/>
                <div className={classes.name}>{details.id}</div>
                <div
                    className={classes.details}>Population: {Math.floor(Math.random() * (10000000 - 500000 + 1)) + 500000}</div>
                <div className={classes.details}>Region: {details.region}</div>
                <div className={classes.details}>Capital: {details.capital}</div>
            </div>
        </div>
    );

}

export default CountryDetails;