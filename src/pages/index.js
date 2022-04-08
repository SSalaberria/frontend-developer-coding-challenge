import { AppLayout } from '../components/layouts/AppLayout';
import { Hero, MemoizedHero } from '../components/Hero';
import { Flex, Text } from '@chakra-ui/react';
import { SearchModule } from '../components/search/SearchModule';

const Index = () => (
    <AppLayout hero={<Hero />}>
        <Flex pt={20} flexDirection="column">
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
