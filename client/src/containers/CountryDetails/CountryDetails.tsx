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
            if (typeof name === "string") {
                const res: Response = await fetch(`${jsonURL}/name/${decodeURIComponent(name)}`);
                if (res.status === 200 || res.status === 304) {
                    const details = await res.json();
                    setDetails({...details});
                }
            }
        }

        fetchDetails().catch(console.error);

    }, [])

    return (
        <div>
            <Header />
            <div className={classes.CountryDetails}>
                <div>
                    <Link className={classes.Link} to="/"><button className={classes.backButton}><i className="fas fa-arrow-left"></i> Back</button></Link>
                    <img className={classes.flagImage} alt="Country Flag" src="https://via.placeholder.com/500x400"/>
                </div>
                <div className={classes.statContainer}>
                    <div className={classes.name}>{details.id}</div>
                    <div className={classes.stats}>
                        <div><span className={classes.category}>Population:</span> {Math.floor(Math.random() * (10000000 - 500000 + 1)) + 500000}</div>
                        <div><span className={classes.category}>Region: </span> {details.region}</div>
                        <div><span className={classes.category}>Capital: </span> {details.capital}</div>
                        <div><span className={classes.category}>Top Level Domain: </span> {details.topLevelDomain}</div>
                    </div>
                    <div><span className={classes.category}>Border Countries: </span><button className={classes.borderButton}>Somewhere</button><button className={classes.borderButton}>Somewhere Else</button></div>
                </div>
            </div>
        </div>
    );

}

export default CountryDetails;