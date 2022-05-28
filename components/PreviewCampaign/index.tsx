import React, { FC } from "react";

import Gallery from "../Gallery";
import styles from "./PreviewCampaign.module.css";

interface IPreviewCampaign {
    name: string;
    description: string;
    photos: string[];
    countDonaters?: number;
    donatedMoney?: number;
}

const Campaign: FC<IPreviewCampaign> = ({
    name,
    description,
    photos,
    countDonaters = 0,
    donatedMoney = 0,
}) => {
    return (
        <div className={styles.campaign}>
            <Gallery photos={photos} />
            <div className={styles.info}>
                <h4 className={styles.previewHeadline}>{name}</h4>
                <p className={styles.previewDescription}>{description}</p>
                <div className={styles.donate}>
                    <div className={styles.donateRow}>
                        <span className={styles.donateRowKey}>Donaters:</span>
                        <span className={styles.donateRowValue}>
                            {countDonaters}
                        </span>
                    </div>
                    <div className={styles.donateRow}>
                        <span className={styles.donateRowKey}>
                            Donated money:
                        </span>
                        <span className={styles.donateRowValue}>
                            {donatedMoney}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
