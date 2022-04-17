import PropTypes from 'prop-types';
import { HStack, Img, Show } from '@chakra-ui/react';
import Head from 'next/head';
import { DarkModeSwitch } from './layouts-components/DarkModeSwitch';
import Container from './layouts-components/Container';
import Footer from './layouts-components/Footer';
import Main from './layouts-components/Main';
import AeropayModule from '../cards/AeropayModule';

export const AppLayout = ({ title, hero, children }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Container>
            <HStack
                my={3}
                width="100%"
                maxWidth="101.5rem"
                px={['1.25rem', null]}>
                <Show above="lg">
                    <Img src="/assets/icons/aerolab-logo-1.svg" />
                </Show>
                <Show below="lg">
                    <Img src="/assets/icons/aerolab-logo-2.svg" />
                </Show>
            </HStack>

            {hero}

            <Main>{children}</Main>
            <Footer />
            <DarkModeSwitch />
            <AeropayModule />
        </Container>
    </>
);

AppLayout.propTypes = {
    title: PropTypes.string.isRequired,
    hero: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
};

export default AppLayout;
