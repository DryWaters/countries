import React from "react";

import classes from "./Controls.module.scss";
import { Region } from "../../../model/IApp";

const Controls = (props : any) => (
    <div className={classes.Controls}>
        <label htmlFor="filterText">
            <span className={classes.screenReader}>Filter Text</span>
        </label>
        <input
            className={classes.filterText}
            onChange={props.onFilterTextChange}
            type="text"
            value={props.filterText}
            placeholder="Search for a country..."
            id="filterText"
        />
        <label htmlFor="filterType">
            <span className={classes.screenReader}>Filter Type</span>
        </label>
        <select
            className={classes.filterRegion}
            onChange={props.onFilterRegionChange}
            value={props.filterRegion}
            id="filterRegion"
        >
            { Object.keys(Region).map(value => {
                return <option key={value} value={value}>{value}</option>
            }) }
            {/*<option value="isbn">ISBN</option>*/}
            {/*<option value="title">Title</option>*/}
            {/*<option value="author">Author</option>*/}
            {/*<option value="description">Description</option>*/}
        </select>
    </div>
);

export default Controls;