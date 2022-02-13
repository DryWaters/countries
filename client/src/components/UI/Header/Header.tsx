import React from "react";

import classes from "./Header.module.scss";
import moonImg from "../../../assets/moon-icon.png";

const Header = (props: any) => (
    <header className={classes.Header}>
        <div className={classes.logoText}>Where in the world?</div>
        <button onClick={props.handleThemeChange}>
            <img src={moonImg} className={classes.moonImage} alt="Dark Mode" />
            Dark Mode
        </button>
    </header>
);
export default Header;