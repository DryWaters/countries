import React, {useEffect, useState} from "react";
import {DashboardState, Region} from "../../model/IApp";

import Country from "../../components/Country/Country";

import Spinner from "../../components/UI/Spinner";
import Controls from "../../components/UI/Controls/Controls";
import Header from "../../components/UI/Header/Header";

import classes from './Dashboard.module.scss';

const jsonURL = process.env.REACT_APP_API_URL;

const Dashboard = () => {

    const [countryState, setCountries] = useState<DashboardState>({
        countries: [],
        filteredCountries: [],
        filterRegion: Region.ALL,
        filterText: ""
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
            }
        }

        fetchCountries().catch(console.error);

    }, []);

    const handleFilterRegionChange = (filterRegion: Region) => {
        filterCountryRegions(filterRegion);
    }

    const handleFilterTextChange = (filterText: string) => {
        filterCountryText(filterText);
    }

    const filterCountryRegions = (filterRegion: Region) => {

        if (filterRegion === Region.ALL) {
            return setCountries({
                countries: countryState.countries,
                filterText: countryState.filterText,
                filterRegion,
                filteredCountries: countryState.countries}
            );
        }

        const newCountries = [...countryState.countries].filter(country =>
            country["region"] === filterRegion
        );
        setCountries({
            countries: countryState.countries,
            filterText: countryState.filterText,
            filterRegion,
            filteredCountries: newCountries}
        );
    }

    const filterCountryText = (filterText: string) => {
        const filter = filterText.toLowerCase();
        const newCountries = [...countryState.countries].filter(country =>
            country["name"].toLowerCase().includes(filter)
        );

        setCountries({
            countries: countryState.countries,
            filterRegion: countryState.filterRegion,
            filterText,
            filteredCountries: newCountries}
        );
    }

    const handleThemeChange = () => {
        console.log("Not implemented yet!");
    }

    // if no countries available show spinner
    let countries: (JSX.Element | JSX.Element[]) = (
        <div className={classes.spinnerContainer}>
            <p>No countries found. Check filter options.</p>
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