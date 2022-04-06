import { Tag, Text } from '@chakra-ui/react';

export const SelectableTag = ({ label, isSelected }) => {
    return (
        <Tag
            py={1}
            px={4}
            borderRadius={8}
            background={!isSelected && 'brand.light.primary'}
            _hover={{ background: !isSelected && 'brand.light.secondary' }}
            bgGradient={
                isSelected &&
                'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
            }
            cursor="pointer">
            <Text
                textStyle="text.l1"
                color={isSelected && 'gray.100'}
                bgGradient={
                    !isSelected &&
                    'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
                }
                bgClip={!isSelected && 'text'}>
                {label}
            </Text>
        </Tag>
    );
};
