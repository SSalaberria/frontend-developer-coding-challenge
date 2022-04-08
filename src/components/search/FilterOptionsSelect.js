import { TriangleDownIcon } from '@chakra-ui/icons';
import { Flex, Select, Text, useColorModeValue } from '@chakra-ui/react';

export const FilterOptionsSelect = ({
    options,
    selectedFilterOption,
    onSelect,
    ...props
}) => {
    return (
        <Flex
            alignItems="center"
            gap={4}
            width={['100%', '30%', null, '25%', '20%']}>
            <Text
                textStyle="text.l1"
                color="gray.600"
                whiteSpace="nowrap"
                display={['none', null, null, null, 'flex']}>
                Filter by:
            </Text>
            <Select
                onChange={e => onSelect(e.target.value)}
                value={selectedFilterOption}
                icon={<TriangleDownIcon boxSize={1} />}
                size="lg"
                iconSize={10}
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                textTransform="capitalize"
                {...props}
                sx={{
                    option: {
                        textTransform: 'capitalize',
                    },
                }}>
                {options.map((filt, index) => (
                    <option key={index} value={filt.value}>
                        {filt.label}
                    </option>
                ))}
            </Select>
        </Flex>
    );
};
