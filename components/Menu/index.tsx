import Image from "next/image";
import React, { FC } from "react";
import { CgCopyright } from "react-icons/cg";

import MenuImage from "images/menuImage.png";

import Button from "../Button";
import styles from "./Menu.module.css";
import MenuNavigation from "./components/MenuNavigation";

const Menu: FC = () => {
    return (
        <div className={styles.menu}>
            <MenuNavigation />
            <div className={styles.menuBottomBlock}>
                <Image src={MenuImage} width="204" height="204" />
                <h4 className={styles.menuHeadline}>
                    Create campaign and attract funds
                </h4>

                <Button className={styles.menuButton} size="M" type="primary">
                    Create campaign
                </Button>

                <a className={styles.copyright}>
                    <CgCopyright />
                    Ushakov Sergey 2022
                </a>
            </div>
        </div>
    );
};

export default Menu;
