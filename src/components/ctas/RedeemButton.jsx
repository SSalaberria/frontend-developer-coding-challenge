import PropTypes from 'prop-types';
import { Box, Button, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { formatNumber } from '../../resources/utils';
import ImgIcon from '../ImgIcon';

const RedeemButton = ({ value, balance, ...props }) => {
    const disabled = useMemo(() => value > balance, [balance, value]);

    return (
        <Button
            {...props}
            disabled={disabled}
            loadingText="Processing..."
            gap={2}
            display="flex"
            px={14}
            py={7}
            _loading={{
                animation: 'gradient 8s ease infinite',
                backgroundSize: '400% 400%',
                '@keyframes gradient': {
                    '0%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                    '100%': {
                        backgroundPosition: '0% 50%',
                    },
                },
            }}>
            <Text textStyle="text.l1" fontWeight="medium">
                {disabled ? 'You need' : 'Redeem for'}
            </Text>
            <Box>
                {disabled ? (
                    <ImgIcon src="assets/icons/aeropay-2.svg" />
                ) : (
                    <ImgIcon src="assets/icons/aeropay-3.svg" />
                )}
            </Box>
            <Text textStyle="text.l1" fontWeight="medium">
                {formatNumber(disabled ? value - balance : value)}
            </Text>
        </Button>
    );
};

RedeemButton.propTypes = {
    value: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
};

export default RedeemButton;
