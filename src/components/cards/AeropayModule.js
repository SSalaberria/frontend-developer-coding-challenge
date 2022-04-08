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
    Text,
    useColorModeValue,
    useTheme,
} from '@chakra-ui/react';
import { useState } from 'react';
import { formatNumber } from '../../utils';
import { SelectableTag } from '../ctas/SelectableTag';
import { ImgIcon } from '../ImgIcon';
import { AeropayCard } from './AeropayCard';

const chargingValues = [1000, 5000, 7500];

export const AeropayModule = ({}) => {
    const theme = useTheme();
    const [selectedValue, setSelectedValue] = useState(1000);

    return (
        <Popover placement="bottom">
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button
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
                            <Text
                                textStyle="text.l1"
                                mr={2}
                                bgGradient={
                                    'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
                                }
                                bgClip={'text'}>
                                {formatNumber(10000)}
                            </Text>
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
                                    <AeropayCard />
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
                                <Button w="100%">
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
