import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Img,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Spinner,
    Text,
    useColorModeValue,
    useTheme,
    useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { formatNumber } from '../../utils';
import { SelectableTag } from '../ctas/SelectableTag';
import { ImgIcon } from '../ImgIcon';
import { AeropayCard } from './AeropayCard';
import { balanceState } from '../../store/atoms';
import useUser from '../../hooks/useUser';
import axios from '../../configs/axios';
import { Toast } from '../feedback/Toast';

const chargingValues = [1000, 5000, 7500];

export const AeropayModule = ({}) => {
    const theme = useTheme();
    const user = useUser();
    const toast = useToast();
    const [selectedValue, setSelectedValue] = useState(1000);
    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useRecoilState(balanceState);

    useEffect(() => {
        if (user.data) setBalance(user.data.points);
    }, [user.data]);

    const handleAddBalance = () => {
        setIsLoading(true);
        axios
            .post('/user/points', { amount: selectedValue })
            .then(({ data }) => {
                toast({
                    render: props => (
                        <Toast
                            {...props}
                            title="Points added"
                            description="Succesfully added points."
                        />
                    ),
                    duration: 9000,
                });
                setBalance(data['New Points']);
            })
            .catch(e => {
                toast({
                    render: props => (
                        <Toast
                            {...props}
                            error={true}
                            description="There was a problem with the transaction."
                        />
                    ),
                    duration: 9000,
                });
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <Popover placement="bottom">
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button
                            disabled={user.isLoading}
                            zIndex={theme.zIndices.sticky}
                            position="fixed"
                            top="3rem"
                            right="1rem"
                            background={useColorModeValue('gray.0', 'gray.700')}
                            borderWidth="1px"
                            borderColor={useColorModeValue(
                                'gray.300',
                                'gray.900',
                            )}
                            sx={{
                                '&:hover': {},
                            }}>
                            <ImgIcon src="/assets/icons/aeropay-1.svg" mr={2} />
                            {user.isLoading ? (
                                <Spinner
                                    color="brand.default.secondary"
                                    size="sm"
                                    mx={5}
                                />
                            ) : (
                                <Text
                                    minWidth={50}
                                    textStyle="text.l1"
                                    mr={2}
                                    bgGradient={
                                        'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
                                    }
                                    bgClip={'text'}>
                                    {formatNumber(balance)}
                                </Text>
                            )}

                            <ChevronDownIcon
                                w={6}
                                h={6}
                                color={useColorModeValue('gray.500', 'gray.0')}
                                sx={{
                                    transform: isOpen
                                        ? 'rotate(180deg)'
                                        : 'none',
                                    transition: 'transform .2s linear',
                                }}
                            />
                        </Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent
                            width={300}
                            right="1rem"
                            color={useColorModeValue('gray.900', 'gray.0')}
                            boxShadow="0px 2px 12px rgba(0, 0, 0, 0.08)"
                            borderColor={useColorModeValue(
                                'gray.300',
                                'gray.900',
                            )}
                            _focus={{
                                borderColor: 'none',
                            }}
                            borderRadius={16}>
                            <PopoverHeader
                                pl={5}
                                my={1}
                                borderColor={useColorModeValue(
                                    'gray.300',
                                    'gray.600',
                                )}>
                                <Text textStyle="text.l1">Add Balance</Text>
                            </PopoverHeader>
                            <PopoverBody
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center">
                                <Box mt={2}>
                                    {user.isFetched && (
                                        <AeropayCard {...user.data} />
                                    )}
                                </Box>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-around"
                                    my={5}
                                    width="100%">
                                    {chargingValues.map((value, index) => (
                                        <Box
                                            key={index}
                                            onClick={() =>
                                                setSelectedValue(value)
                                            }>
                                            <SelectableTag
                                                label={value}
                                                isSelected={
                                                    selectedValue === value
                                                }
                                            />
                                        </Box>
                                    ))}
                                </Box>
                                <Button
                                    w="100%"
                                    onClick={handleAddBalance}
                                    isLoading={isLoading}
                                    loadingText="Processing...">
                                    <ImgIcon
                                        src="/assets/icons/aeropay-3.svg"
                                        mr={2}
                                    />
                                    <Text textStyle="text.l1">Add Points</Text>
                                </Button>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </>
            )}
        </Popover>
    );
};
