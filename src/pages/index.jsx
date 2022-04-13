import { Flex, Text } from '@chakra-ui/react';
import { AppLayout } from '../components/layouts/AppLayout';
import { MemoizedHero as Hero } from '../components/Hero';
import SearchModule from '../components/search/SearchModule';

const Index = () => (
    <AppLayout hero={<Hero />} title="Aerolab Challenge">
        <Flex pt={20} flexDirection="column" id="products-section">
            <Flex gap={5} mb={10}>
                <Text textStyle="title.l2" color="brand.default.primary">
                    TECH
                </Text>
                <Text textStyle="title.l2">PRODUCTS</Text>
            </Flex>
            <SearchModule />
        </Flex>
    </AppLayout>
);

export default Index;
