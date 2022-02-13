import React, {ChangeEvent} from "react";

import classes from "./Controls.module.scss";

const Controls = (props : any) => (
    <div className={classes.Controls}>
        <input
            className={classes.filterText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onFilterTextChange(e.target.value)}
            type="text"
            value={props.filterText}
            placeholder="Search for a country..."
            id="filterText"
        />
        <select
            className={classes.filterRegion}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => props.onFilterRegionChange(e.target.value)}
            value={props.filterRegion}
            id="filterRegion"
            required
        >
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

        </select>
    </div>
);

export default Controls;