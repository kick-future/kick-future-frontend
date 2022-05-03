import Head from "next/head";
import React, { FC } from "react";

import Header from "../Header";
import Menu from "../Menu";
import styles from "./Layout.module.css";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <title>Kick Future</title>
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.main}>
                    <Menu />
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </>
    );
};

export default Layout;
