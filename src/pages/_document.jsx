import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                </Head>
                <body>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
