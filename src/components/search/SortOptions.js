import { Box, Flex, Text } from '@chakra-ui/react';
import { SelectableTag } from '../ctas/SelectableTag';

const sortOptions = [
    { label: 'Most recent', value: 'newest' },
    { label: 'Lowest price', value: 'lowest' },
    { label: 'Highest price', value: 'highest' },
];

export const SortOptions = ({ selectedSortOption, onSelect }) => (
    <Flex alignItems="center" gap={4}>
        <Text
            textStyle="text.l1"
            color="gray.600"
            whiteSpace="nowrap"
            display={['none', null, null, null, 'flex']}>
            Sort by:
        </Text>
        <Flex gap={3}>
            {sortOptions.map((option, index) => (
                <Box key={index} onClick={() => onSelect(option.value)}>
                    <SelectableTag
                        label={option.label}
                        isSelected={selectedSortOption === option.value}
                    />
                </Box>
            ))}
        </Flex>
    </Flex>
);
