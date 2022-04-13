import PropTypes from 'prop-types';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import ImgIcon from '../ImgIcon';

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    ...props
}) => (
    <Flex
        alignItems="center"
        justifyContent="center"
        whiteSpace="nowrap"
        py={3}
        px={4}
        borderWidth={1}
        borderColor={useColorModeValue('gray.300', 'gray.600')}
        borderRadius={16}
        gap={2}
        minWidth={220}
        sx={{
            '& .icon': {
                background: 'brand.light.primary',
                borderRadius: 8,
                w: 7,
                h: 7,
                px: 1.5,
                py: 0.5,
                userSelect: 'none',
                '&:hover': {
                    cursor: 'pointer',
                    background: 'gray.300',
                },
                '&.disabled': {
                    cursor: 'not-allowed',
                    background: 'gray.200',
                    opacity: 0.5,
                },
            },
        }}
        {...props}>
        <Box
            className={`icon ${currentPage === 1 && 'disabled'}`}
            onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}>
            <ImgIcon
                src={
                    currentPage !== 1
                        ? 'assets/icons/chevron-active.svg'
                        : 'assets/icons/chevron-default.svg'
                }
                transform="rotate(180deg)"
            />
        </Box>
        <Flex gap={2}>
            <Text textStyle="text.l1" color="gray.600">
                Page
            </Text>
            <Text
                textStyle="text.l1"
                bgGradient="linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)"
                bgClip="text">
                {currentPage} of {totalPages}
            </Text>
        </Flex>
        <Box
            className={`icon ${currentPage === totalPages && 'disabled'}`}
            onClick={() =>
                currentPage !== totalPages && onPageChange(currentPage + 1)
            }>
            <ImgIcon
                src={
                    currentPage !== totalPages
                        ? 'assets/icons/chevron-active.svg'
                        : 'assets/icons/chevron-default.svg'
                }
            />
        </Box>
    </Flex>
);

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
