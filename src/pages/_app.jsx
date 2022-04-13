/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import globals from '../styles/globals.css';
import theme from '../configs/theme';

function MyApp({ Component, pageProps }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <RecoilRoot>
                    <ChakraProvider resetCSS theme={theme}>
                        <ColorModeProvider
                            options={{
                                useSystemColorMode: false,
                            }}>
                            <Component {...pageProps} />
                        </ColorModeProvider>
                    </ChakraProvider>
                </RecoilRoot>
            </Hydrate>
        </QueryClientProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        .isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
