import React, {ChangeEvent} from "react";

import classes from "./Controls.module.scss";
import { Region } from "../../../model/IApp";

type ControlsProps = {
        onFilterTextChange: (text: string) => void;
        onFilterRegionChange: (text: Region) => void;
        filterText: string
        filterRegion: Region
}

const Controls = (props: ControlsProps) => (
    <div className={classes.Controls}>
        <input
            className={classes.filterText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onFilterTextChange(e.target.value)}
            type="text"
            value={props.filterText}
            id="filterText"
            placeholder="&#x1F50D;     Search for a country..."
        />
        <select
            className={classes.filterRegion}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    console.log("Selected region: " + e.target.value);
                    return props.onFilterRegionChange(e.target.value as Region)
            }}
            value={props.filterRegion}
            id="filterRegion"
        >
                <option hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

        </select>
    </div>
);

export default Controls;