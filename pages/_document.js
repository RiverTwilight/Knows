import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content=""
                    />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

                    <title>test</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
                    <meta name="renderer" content="webkit" />
                    <meta name="force-rendering" content="webkit" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}