import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import React from 'react';
import globals from '../styles/globals.css';
import theme from '../theme';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <RecoilRoot>
                    <ChakraProvider resetCSS theme={theme}>
                        <ColorModeProvider
                            options={{
                                useSystemColorMode: true,
                            }}>
                            <Component {...pageProps} />
                        </ColorModeProvider>
                    </ChakraProvider>
                </RecoilRoot>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
