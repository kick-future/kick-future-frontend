import React, { FC } from "react";
import { MdDone, MdPeopleOutline, MdMoving } from "react-icons/md";

import styles from "./DashboardCards.module.css";
import { ICard } from "./DashboardCards.typings";

const Card: FC<ICard> = ({ color, bg, description, amount, Icon }) => {
    return (
        <li style={{ color, backgroundColor: bg }} className={styles.card}>
            <span>{amount}</span>

            <div>
                <Icon fontSize={30} />
                <p>{description}</p>
            </div>
        </li>
    );
};

const DashboardCards: FC = () => {
    return (
        <ul className={styles.dashboardCards}>
            <Card key={123} color="#fff" bg="#000" amount="42" description="Created campaigns" Icon={MdDone} />
            <Card key={321} color="#000" bg="#D9DAD3" amount="741" description="Participating donaters" Icon={MdPeopleOutline} />
            <Card key={231} color="#000" bg="#57FFAD" amount="13" description="Active campaigns" Icon={MdMoving} />
        </ul>
    );
};

export default DashboardCards;
