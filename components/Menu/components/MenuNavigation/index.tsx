import React, { FC, useState } from "react";

import MenuNavigationItem from "../MenuNavigationItem";
import SwitcherLang from "components/SwitcherLang"
import styles from "./MenuNavigation.module.css";

const MenuNavigation: FC = () => {

    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <MenuNavigationItem key={333} type="Home" isActive />
                <MenuNavigationItem key={444} type="Campaigns" />
                <MenuNavigationItem key={555} type="Transactions" />
            </ul>
            <SwitcherLang />
        </nav>
    );
};

export default MenuNavigation;
