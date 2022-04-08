import { Box, Button, Text } from '@chakra-ui/react';
import { formatNumber } from '../../utils';
import { ImgIcon } from '../ImgIcon';

export const RedeemButton = ({ value, disabled, ...props }) => (
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
            {formatNumber(value)}
        </Text>
    </Button>
);
