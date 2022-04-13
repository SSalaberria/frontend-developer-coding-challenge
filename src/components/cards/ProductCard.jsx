import PropTypes from 'prop-types';
import { Box, Skeleton, SkeletonText, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { memo, useState } from 'react';
import { useRecoilState } from 'recoil';
import RedeemButton from '../ctas/RedeemButton';
import { balanceState } from '../../store/atoms';
import Toast from '../feedback/Toast';
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

    const handleRedeem = () => {
        if (isRedeeming) return;

        setIsRedeeming(true);

        axios
            .post('/redeem', { productId: _id })
            .then(() => {
                setBalance(prevBalance => prevBalance - cost);
                toast({
                    render: props => (
                        <Toast
                            title={name}
                            description="redeemed successfully"
                            {...props}
                        />
                    ),
                    duration: 9000,
                });
            })
            .catch(() => {
                toast({
                    render: props => (
                        <Toast
                            error
                            description="There was a problem with the transaction"
                            {...props}
                        />
                    ),
                    duration: 9000,
                });
            })
            .finally(() => {
                setIsRedeeming(false);
            });
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
                            <Text textStyle="text.l1" mb={1} color="gray.900">
                                {name}
                            </Text>
                            <Text
                                textStyle="text.l2"
                                variant="uppercase_secondary"
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

ProductCard.defaultProps = {
    loading: false,
};

ProductCard.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    cost: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export const MemoizedCard = memo(ProductCard);
