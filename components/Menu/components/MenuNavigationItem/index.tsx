import React, { FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";

import styles from "./MenuNavigationItem.module.css";
import {
    IMenuNavigationItem,
} from "./MenuNavigationItem.typings";

const MenuNavigationItem: FC<IMenuNavigationItem> = ({ isActive, type }) => {
    let Icon = GoHome;
    if (type === "Campaigns") {
      Icon = IoCardOutline;
    } else if (type === "Transactions") {
      Icon = FaEthereum;
    }


    return (
        <li key={type.toString()} className={styles.item}>
            <Icon style={{ fontSize: "20px", marginRight: "15px" }} />
            <span>{type}</span>
            {isActive && <BsArrowRight className={styles.iconArrow} />}
        </li>
    );
};

export default MenuNavigationItem;
