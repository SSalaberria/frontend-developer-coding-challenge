import PropTypes from 'prop-types';
import { Tag, Text } from '@chakra-ui/react';

export const SelectableTag = ({ label, isSelected }) => (
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
            whiteSpace="nowrap"
            bgGradient={
                !isSelected &&
                'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
            }
            bgClip={!isSelected && 'text'}
            transition="all .6s linear">
            {label}
        </Text>
    </Tag>
);

SelectableTag.propTypes = {
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default SelectableTag;
