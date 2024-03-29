import React, {useEffect, useState} from "react";
import {DashboardState, Region} from "../../model/IApp";

import Country from "../../components/Country/Country";

import Spinner from "../../components/UI/Spinner";
import Controls from "../../components/UI/Controls/Controls";
import Header from "../../components/UI/Header/Header";

import classes from './Dashboard.module.scss';

const jsonURL = process.env.REACT_APP_EXPRESS_URL;

const Dashboard = () => {

    const [countryState, setCountries] = useState<DashboardState>({
        countries: [],
        filteredCountries: [],
        filterRegion: Region.ALL,
        filterText: ""
    })

    const [error, setError] = useState<{ message: string | null }>( {
        message: null
    })

    useEffect( () => {

        const fetchCountries = async () => {

            const res: Response = await fetch(jsonURL + "/countries")
            if (res.status === 200 || res.status === 304) {

                const countries = await res.json();
                setCountries({
                    countries: countries,
                    filteredCountries: countries,
                    filterRegion: Region.ALL,
                    filterText: "",
                });
                setError({
                    message: null
                })

            } else {

                setError({ message: res.statusText })

            }
        }

        fetchCountries().catch((err) => {

            setError({ message: err })

        });

    }, []);

    const handleFilterRegionChange = (filterRegion: Region) => {
        filterCountries(countryState.filterText, filterRegion);
    }

    const handleFilterTextChange = (filterText: string) => {
        filterCountries(filterText, countryState.filterRegion);
    }

    const filterCountries = (filterText: string, filterRegion: Region) => {

        const newCountries = [...countryState.countries].filter(country => {
            return (filterRegion === Region.ALL || country["region"] === filterRegion)
                && (filterText.trim().length === 0 || country["name"].toLowerCase().includes(filterText.toLowerCase()))
        });

        setCountries({
                countries: countryState.countries,
                filteredCountries: newCountries,
                filterText,
                filterRegion
            }
        );
    }

    const handleThemeChange = () => {
        console.log("Not implemented yet!");
    }

    // if no countries available show spinner
    let countries: (JSX.Element | JSX.Element[]) = (
        <div className={classes.spinnerContainer}>
            <div>No countries found. Check filter options.</div>
            { !!error.message && <div className={classes.error}>Error fetching countries with message: {error.message}</div> }
            <Spinner />
        </div>
    );

    // create countries to display by mapping over retrieved countries
    // from backend.
    if (countryState.filteredCountries && countryState.filteredCountries.length > 0) {
        countries = countryState.filteredCountries.map(country => (
            <Country
                key={country.name}
                {...country}
            />
        ));
    }

    return (

        <div className={classes.Dashboard}>
            <Header onThemeChange={() => handleThemeChange()} />
            <Controls
                onFilterRegionChange={handleFilterRegionChange}
                onFilterTextChange={handleFilterTextChange}
                filterText={countryState.filterText}
                filterRegion={countryState.filterRegion}
            />
            <main className={classes.countries}>{countries}</main>
        </div>
    );

}

export default Dashboard;