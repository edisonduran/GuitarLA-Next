import { Html,Head, Main, NextScript } from "next/document";

export default function document() { 

    return (
        <Html>
            <Head>
                <meta name="description" content="GuitarLA - Venta de guitarras y blog de música" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bungee+Spice&family=Croissant+One&family=Epilogue:wght@500&family=Lato:wght@100;400;700;900&family=Merriweather:ital@0;1&family=Outfit:wght@400;700;900&family=Roboto&family=Roboto+Condensed:wght@700&family=Space+Mono&family=Work+Sans:wght@400;500;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )

}