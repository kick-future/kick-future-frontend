import React, { FC } from "react";
import { BsChevronRight } from "react-icons/bs";

import Button from "../Button";
import styles from "./InvestmentItems.module.css";
import { InvestmentItemProps } from "./InvestmentItems.typings";

const items: { date: string; name: string; value: string }[] = [
    { date: "Apr 03", name: "On food", value: "0.001 ether" },
    { date: "Apr 01", name: "On iphone", value: "0.1 ether" },
    { date: "Mar 23", name: "Computer s...", value: "2 ether" },
    { date: "Mar 20", name: "On food", value: "0.031 ether" },
];

const Item: FC<InvestmentItemProps> = ({ date, name, value }) => {
    return (
        <div className={styles.item}>
            <div>
                <span className={styles.itemDate}>{date}</span>
                <span className={styles.itemName}>{name}</span>
            </div>
            <span className={styles.itemValue}>{value}</span>
        </div>
    );
};

const InvestmentItems: FC = () => {
    return (
        <>
            <ul className={styles.investmentItems}>
                {items.map(({ date, name, value }) => (
                    <Item key={`${name}_${date}_${value}`} date={date} name={name} value={value} />
                ))}
            </ul>
            <Button className={styles.button} type="tertiary">
                View all
                <BsChevronRight className={styles.buttonIcon} fontSize="16" />
            </Button>
        </>
    );
};

export default InvestmentItems;
