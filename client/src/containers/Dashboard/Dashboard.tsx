import React, { Component } from "react";
import { AppProps, AppState, Region } from "../../model/IApp";

import Country from "../../components/Country/Country";

import Spinner from "../../components/UI/Spinner";
import Controls from "../../components/UI/Controls/Controls";
import Header from "../../components/UI/Header/Header";

import classes from './Dashboard.module.scss';

const jsonURL = process.env.REACT_APP_API_URL;

class Dashboard extends Component<AppProps, AppState> {

    state: AppState = {
        countries: [],
        filteredCountries: [],
        filterRegion: Region.ALL,
        filterText: "",
        selectedCountryName: "",
    }

    componentDidMount = () => {
        fetch(jsonURL + "/countries")
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject("Error!");
                }
            })
            .then(data => {
                this.setState({ filteredCountries: data })
            })
            .catch(err => console.log(err));
    }

    handleFilterRegion = () => {

    }

    handleFilterText = () => {

    }

    changeTheme = () => {
        console.log("Not implemented yet!");
    }


    render = () => {
        // if no countries available show spinner
        let countries: (JSX.Element | JSX.Element[]) = (
            <div className={classes.spinnerContainer}>
                <p>No countries found. Check filter options.</p>
                <Spinner />
            </div>
        );

        // create countries to display by mapping over retrieved countries
        // from backend.
        if (this.state.filteredCountries && this.state.filteredCountries.length > 0) {
            countries = this.state.filteredCountries.map(country => (
                <Country
                    key={country.name}
                    {...country}
                />
            ));
        }

        return (
            <div className={classes.Dashboard}>
                <Header handleThemeChange={() => this.changeTheme()} />
                <Controls
                    onFilterRegionChange={this.handleFilterRegion}
                    onFilterTextChange={this.handleFilterText}
                    filterText={this.state.filterText}
                    filterRegion={this.state.filterRegion}
                />
                <main className={classes.countries}>{countries}</main>
            </div>
        );
    }



}

export default Dashboard;