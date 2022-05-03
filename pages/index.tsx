import cn from "classnames";
import type { NextPage } from "next";
import React from "react";

import styles from "styles/Home.module.css";

import DashboardCards from "../components/DashboardCards";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <div>
                <div className={styles.homeTop}>
                    <div className={styles.about}>
                        <h5 className={styles.homeHeadline5}>About platform</h5>
                        <p
                            className={cn(
                                styles.homeText,
                                styles.homeTextBigMargin
                            )}
                        >
                            The future of crowdfunding platforms. A reliable
                            alternative to kickstarter, running on the ether
                            blockchain. To use the platform, you need a Netmask
                            and an account in the Rinkeby test network.
                        </p>
                    </div>
                    <div className={styles.allInvestments}>
                        <h5 className={styles.homeHeadline5}>
                            All investments
                        </h5>
                    </div>
                </div>
                <div className={styles.homeBottom}>
                    <div className={styles.dashboardBlock}>
                        <h5 className={styles.homeHeadline5}>Dashboard</h5>
                        <p className={styles.homeText}>
                            Statistics about all created companies for the
                            entire time of the service
                        </p>
                        <DashboardCards />
                    </div>
                    <div className={styles.lastInvestments}>
                        <h5 className={styles.homeHeadline5}>
                            Last investments
                        </h5>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
