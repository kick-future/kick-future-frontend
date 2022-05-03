import React, { FC } from "react";

import MenuNavigationItem from "../MenuNavigationItem";
import styles from "./MenuNavigation.module.css";

const MenuNavigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <MenuNavigationItem type="Home" isActive />
                <MenuNavigationItem type="Campaigns" />
                <MenuNavigationItem type="Transactions" />
            </ul>
            <div className={styles.switcherLang}>Switcher lang</div>
        </nav>
    );
};

export default MenuNavigation;
