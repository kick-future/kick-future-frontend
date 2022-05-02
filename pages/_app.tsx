import type { AppProps } from "next/app";
import React, { FC } from "react";
import "../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
