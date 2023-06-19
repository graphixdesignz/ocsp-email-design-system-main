import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import PreviewContext from "../components/PreviewContext";
import "../styles/globals.css";
import "../styles/prism.css";
import "../styles/prism-vsc-dark-plus.css";

function MyApp({ Component, pageProps }) {
    const [features, setFeatures] = useState({});
    const [colors, _setColors] = useState([]);
    const [colorFamily, setColorFamily] = useState("neutral");
    const previewContext = {
        features,
        colors,
        colorFamily,
        setFeatures,
        setColors: (colors = [], colorFamily = "") => {
            setColorFamily(colorFamily);
            _setColors(colors);
        },
    };
    // useEffect(() => {
    //     if (window?.Prism) {
    //         // window?.Prism.highlightAll();
    //     }
    // }, [features, colors]);
    return (
        <PreviewContext.Provider value={previewContext}>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps} />
            <Script src="/prism.js" />
        </PreviewContext.Provider>
    );
}

export default MyApp;
