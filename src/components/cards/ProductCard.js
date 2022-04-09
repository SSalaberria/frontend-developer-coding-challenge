import { Box, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { RedeemButton } from '../ctas/RedeemButton';
import { memo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { balanceState } from '../../store/atoms';
import { Toast } from '../feedback/Toast';

export const ProductCard = ({
    id,
    productName,
    productImage,
    productPrice,
    category,
}) => {
    const [isRedeeming, setIsRedeeming] = useState(false);
    const [balance, setBalance] = useRecoilState(balanceState);
    const toast = useToast();

    const handleRedeem = ({}) => {
        if (isRedeeming) return;

        setIsRedeeming(true);
        setTimeout(() => {
            setIsRedeeming(false);
            setBalance(prevBalance => {
                const validTransaction = prevBalance >= productPrice;
                toast({
                    title: productName,
                    render: props => (
                        <Toast
                            {...props}
                            productName={productName}
                            error={!validTransaction}
                        />
                    ),
                    duration: 9000,
                    isClosable: true,
                });
                return validTransaction
                    ? prevBalance - productPrice
                    : prevBalance;
            });
        }, 700);
    };

    return (
        <Box width={80} height={506} m="auto">
            <Box
                height={430}
                mb={4}
                borderWidth="1px"
                borderStyle="solid"
                borderColor="gray.300"
                borderRadius={16}
                background="gray.0"
                boxShadow="0px 2px 8px rgba(0, 0, 0, 0.05)">
                <Box
                    height={340}
                    backgroundImage="url('/assets/icons/aerolab-gray-logo.svg')"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    borderBottomWidth="1px"
                    borderBottomStyle="solid"
                    borderBottomColor="gray.300">
                    <Image
                        src={productImage}
                        layout="responsive"
                        width={0}
                        height={0}
                        objectFit="scale-down"
                    />
                </Box>
                <Box height={90} py={4} px={6}>
                    <Text
                        textStyle="text.l1"
                        //color={useColorModeValue('gray.900', 'gray.900')}
                        mb={1}
                        color="gray.900">
                        {productName}
                    </Text>
                    <Text
                        textStyle="text.l2"
                        variant="uppercase_secondary"
                        //color={useColorModeValue('gray.600', 'gray.600')}
                        color="gray.600">
                        {category}
                    </Text>
                </Box>
            </Box>
            <RedeemButton
                value={productPrice}
                balance={balance}
                onClick={handleRedeem}
                isLoading={isRedeeming}
                width="100%"
            />
        </Box>
    );
};

export const MemoizedCard = memo(ProductCard);
