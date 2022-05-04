import Image from "next/image";
import React, { FC } from "react";
import { RiSearchLine } from "react-icons/ri";

import Logo from "images/logo.svg";

import Button from "../Button";
import styles from "./Header.module.css";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src={Logo.src}
                    width="129px"
                    height="41px"
                    className={styles.logo}
                    alt="logo"
                />
            </div>

            <div className={styles.searchBox}>
                <label htmlFor="header-search">
                    <RiSearchLine
                        style={{ color: "#4D4D4D", fontSize: "20px" }}
                    />
                </label>
                <input
                    className={styles.input}
                    id="header-search"
                    placeholder="Search by campaign name or address"
                    type="text"
                />
            </div>

            <div className={styles.buttons}>
                <Button className={styles.allCampaigns} type="tertiary">
                    All campaigns
                </Button>
                <Button style={{ marginLeft: "20px" }} size="M" type="primary">
                    Create campaign
                </Button>
            </div>
        </header>
    );
};

export default Header;
