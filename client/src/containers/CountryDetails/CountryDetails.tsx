import React, { useState, useEffect } from 'react';

import classes from "./CountryDetails.module.scss";
import {Link, useParams} from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import {DetailsState} from "../../model/IApp";
import Spinner from "../../components/UI/Spinner";

const jsonURL = process.env.REACT_APP_EXPRESS_URL;

const CountryDetails = () => {
    const { name } = useParams();
    // [1] [
    //     [1]   {
    //     [1]     name: 'Albania',
    //         [1]     topLevelDomain: [ '.al' ],
    //         [1]     alpha2Code: 'AL',
    //         [1]     alpha3Code: 'ALB',
    //         [1]     callingCodes: [ '355' ],
    //         [1]     capital: 'Tirana',
    //         [1]     altSpellings: [ 'AL', 'Shqipëri', 'Shqipëria', 'Shqipnia' ],
    //         [1]     region: 'Europe'
    //         [1]   }
    // [1] ]


    const [details, setDetails] = useState<DetailsState>({
        name: "",
        topLevelDomain: [],
        alpha2Code: "",
        alpha3Code: "",
        callingCodes: [],
        capital: "",
        altSpellings: [],
        region: ""
    });

    const [error, setError] = useState<{ message: string | null }>( {
        message: null
    })

    useEffect(() => {

        const fetchDetails = async () => {

            if (typeof name === "string") {

                const res: Response = await fetch(`${jsonURL}/countries/${decodeURIComponent(name)}`);
                if (res.status === 200 || res.status === 304) {

                    const details = await res.json();
                    if (!details.isEmpty) {

                        setDetails({...details[0]});
                        setError({ message: null })

                    }

                } else {

                    setError({ message: res.statusText })

                }

            } else {

                setError({ message: "Missing country name" })

            }
        }

        fetchDetails().catch((err) => {
            setError({ message: err })

        });

    }, [name])

    // if no country details available show spinner
    let country: (JSX.Element) = (
        <div className={classes.spinnerContainer}>
            <div>No country found. Check Country name.</div>
            { error.message && <div className={classes.error}>Error fetching country details with message: {error.message}</div> }
            <Spinner />
        </div>
    );

    if (!error.message) {
        country = (
            <div className={classes.CountryDetails}>
                <div>
                    <Link className={classes.Link} to="/"><button className={classes.backButton}><i className="fas fa-arrow-left"></i> Back</button></Link>
                    <img className={classes.flagImage} alt="Country Flag" src="https://via.placeholder.com/500x400"/>
                </div>
                <div className={classes.statContainer}>
                    <div className={classes.name}>{details.name}</div>
                    <div className={classes.stats}>
                        <div><span className={classes.category}>Population:</span> {Math.floor(Math.random() * (10000000 - 500000 + 1)) + 500000}</div>
                        <div><span className={classes.category}>Region: </span> {details.region}</div>
                        <div><span className={classes.category}>Capital: </span> {details.capital}</div>
                        <div><span className={classes.category}>Top Level Domain: </span> {details.topLevelDomain}</div>
                    </div>
                    <div><span className={classes.category}>Border Countries: </span><button className={classes.borderButton}>Somewhere</button><button className={classes.borderButton}>Somewhere Else</button></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header />
            { country }
        </div>
    );

}

export default CountryDetails;