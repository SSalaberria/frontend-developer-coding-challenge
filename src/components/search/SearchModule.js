import { Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useProducts from '../../hooks/useProducts';
import { MemoizedCard as ProductCard } from '../cards/ProductCard';
import { Pagination } from '../ctas/Pagination';
import { FilterOptionsSelect } from './FilterOptionsSelect';
import { SortOptions } from './SortOptions';
import { balanceState } from '../../store/atoms';
import useHistory from '../../hooks/useHistory';

const productsPerPage = 12;

export const SearchModule = ({}) => {
    const products = useProducts();
    const [filter, setFilter] = useState('All products');
    const [sort, setSort] = useState('newest');
    const [page, setPage] = useState(1);
    const balance = useRecoilValue(balanceState);

    const handlePageChange = nextPage => {
        setPage(nextPage);
    };

    const parsedCategories = useMemo(() => {
        const categories = new Set(
            products?.data?.map(product => product.category),
        );
        return ['All products', ...categories];
        /*
        return [
            { label: 'All products', value: 'ALL' },
            ...[...categories].map(category => ({
                label: category.toLowerCase(),
                value: category,
            })),
        ];*/
    }, [products.data]);

    useEffect(() => setPage(1), [filter, sort]);

    const filteredProducts = useMemo(() => {
        let prods = products?.data;
        if (!prods) return [];
        if (filter !== 'All products') {
            prods = prods.filter(product => product.category === filter);
        }
        switch (sort) {
            case 'newest': {
                //prods = prods.sort((a, b) => b.timestamp - a.timestamp);
                break;
            }
            case 'lowest': {
                prods = prods.sort((a, b) => a.cost - b.cost);
                break;
            }
            case 'highest': {
                prods = prods.sort((a, b) => b.cost - a.cost);
                break;
            }
        }

        return prods;
    }, [products.data, filter, sort]);

    const totalPages = useMemo(() => {
        if (!filteredProducts || filteredProducts.length === 0) return 0;
        return Math.ceil(filteredProducts.length / productsPerPage);
    }, [filteredProducts]);

    return (
        <Flex flexDirection="column">
            <Flex flexDir="column" mb={16}>
                <Flex width="100%" alignItems="center" gap={10} height={12}>
                    <FilterOptionsSelect
                        options={parsedCategories}
                        selectedFilterOption={filter}
                        onSelect={value => setFilter(value)}
                    />
                    <Divider
                        orientation="vertical"
                        color="gray.600"
                        borderLeftWidth={2}
                        display={['none', null, null, null, 'flex']}
                    />
                    <Flex display={['none', null, null, null, 'flex']}>
                        <SortOptions
                            selectedSortOption={sort}
                            onSelect={value => setSort(value)}
                        />
                    </Flex>

                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        display={['none', null, 'flex']}
                        marginLeft={[null, null, 'auto']}
                    />
                </Flex>
                <Flex
                    display={['flex', null, null, null, 'none']}
                    mt={6}
                    overflowX="scroll"
                    sx={{
                        '::-webkit-scrollbar': {
                            height: 0,
                            width: 0,
                        },
                        scrollbarWidth: '60px !important',
                    }}>
                    <SortOptions
                        selectedSortOption={sort}
                        onSelect={value => setSort(value)}
                    />
                </Flex>
            </Flex>

            <SimpleGrid minChildWidth="320px" spacing={5} spacingY={20}>
                {filteredProducts
                    .slice((page - 1) * productsPerPage, page * productsPerPage)
                    .map((product, index) => (
                        <ProductCard
                            {...product}
                            key={index}
                            balance={balance}
                            loading={products.isLoading}
                        />
                    ))}
            </SimpleGrid>

            <Flex
                flexDir={['column', null, null, null, 'row-reverse']}
                mt={16}
                alignSelf={['center', null, null, null, 'flex-end']}
                width={['auto', null, null, null, '56%']}
                justifyContent={['center', null, null, null, 'space-between']}>
                {products.isLoading ? (
                    <></>
                ) : (
                    <>
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                        <Flex
                            justifyContent="center"
                            textStyle="text.l1"
                            mt={6}>
                            <Text
                                bgGradient="linear-gradient(102.47deg, brand.default.primary 0.34%, brand.default.secondary 131.58%)"
                                bgClip="text">
                                {page !== totalPages
                                    ? productsPerPage * page
                                    : filteredProducts.length}
                                &nbsp;of {filteredProducts.length}&nbsp;
                            </Text>
                            <Text>products</Text>
                        </Flex>
                    </>
                )}
            </Flex>
        </Flex>
    );
};
