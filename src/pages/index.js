import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
    Icon,
} from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { NavLink } from '../components/ctas/NavLink';
import { RedeemButton } from '../components/ctas/RedeemButton';
import Image from 'next/image';
import { ProductCard } from '../components/cards/ProductCard';
import { WalkthroughCard } from '../components/cards/WalkthroughCard';

const Index = () => (
    <Container height="100vh">
        {/* <Hero /> */}
        <Main>
            <NavLink
                label="Github"
                icon={
                    <Image
                        src="/assets/icons/github-default.svg"
                        layout="responsive"
                        width={0}
                        height={0}
                    />
                }
                iconHovered={
                    <Image
                        src="/assets/icons/github-active.svg"
                        layout="responsive"
                        width={0}
                        height={0}
                    />
                }
                href={'https://github.com/SSalaberria'}
                isExternal
            />
            <ProductCard />
            <WalkthroughCard />
        </Main>

        <DarkModeSwitch />
        <Footer></Footer>
    </Container>
);

export default Index;
