import React from "react";

import classes from "./Header.module.scss";

const Header = (props: any) => (
    <header className={classes.Header}>
        <div className={classes.logoText}>Where in the world?</div>
        <button className={classes.themeToggle} onClick={props.handleThemeChange}>
            <i className="fa-regular fa-moon"></i> Dark Mode
        </button>
    </header>
);
export default Header;