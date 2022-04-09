import { Box, Skeleton, SkeletonText, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { RedeemButton } from '../ctas/RedeemButton';
import { memo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { balanceState } from '../../store/atoms';
import { Toast } from '../feedback/Toast';
import axios from '../../configs/axios';

export const ProductCard = ({
    _id,
    name,
    img,
    cost,
    category,
    loading = false,
}) => {
    const [isRedeeming, setIsRedeeming] = useState(false);
    const [balance, setBalance] = useRecoilState(balanceState);
    const toast = useToast();

    const handleRedeem = ({}) => {
        if (isRedeeming) return;

        setIsRedeeming(true);

        axios
            .post('/redeem', { productId: _id })
            .then(({ data }) => {
                console.log(data);
                setBalance(prevBalance => prevBalance - cost);
                toast({
                    render: props => (
                        <Toast
                            {...props}
                            title={name}
                            description="redeemed successfully"
                        />
                    ),
                    duration: 9000,
                });
            })
            .catch(e => {
                toast({
                    render: props => (
                        <Toast
                            {...props}
                            error={true}
                            description="There was a problem with the transaction"
                        />
                    ),
                    duration: 9000,
                });
            })
            .finally(() => {
                setIsRedeeming(false);
            });
        /*
        setTimeout(() => {
            setIsRedeeming(false);
            setBalance(prevBalance => {
                const validTransaction = prevBalance >= cost;
                toast({
                    render: props => (
                        <Toast
                            {...props}
                            title={name}
                            error={!validTransaction}
                        />
                    ),
                    duration: 9000,
                });
                return validTransaction ? prevBalance - cost : prevBalance;
            });
        }, 700);*/
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
                    {loading ? (
                        'loading img'
                    ) : (
                        <Image
                            src={img.url}
                            layout="responsive"
                            width={0}
                            height={0}
                            objectFit="scale-down"
                        />
                    )}
                </Box>
                <Box height={90} py={4} px={6}>
                    {loading ? (
                        <SkeletonText
                            noOfLines={2}
                            spacing={3}
                            pt={2}
                            pr={16}
                            borderRadius={12}
                            startColor="gray.200"
                            endColor="gray.300"
                            size={22}
                        />
                    ) : (
                        <>
                            <Text
                                textStyle="text.l1"
                                //color={useColorModeValue('gray.900', 'gray.900')}
                                mb={1}
                                color="gray.900">
                                {name}
                            </Text>
                            <Text
                                textStyle="text.l2"
                                variant="uppercase_secondary"
                                //color={useColorModeValue('gray.600', 'gray.600')}
                                color="gray.600">
                                {category}
                            </Text>
                        </>
                    )}
                </Box>
            </Box>
            {loading ? (
                <Skeleton
                    background="gray.300"
                    px={14}
                    py={7}
                    width="100%"
                    borderRadius={16}
                    startColor="gray.200"
                    endColor="gray.300"
                />
            ) : (
                <RedeemButton
                    value={cost}
                    balance={balance}
                    onClick={handleRedeem}
                    isLoading={isRedeeming}
                    width="100%"
                />
            )}
        </Box>
    );
};

export const MemoizedCard = memo(ProductCard);
