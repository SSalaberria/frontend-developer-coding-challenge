import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { RedeemButton } from '../ctas/RedeemButton';

export const ProductCard = ({}) => {
    return (
        <Box width={80} height={506}>
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
                        src="/assets/illustrations/product-image-example.png"
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
                        Product name
                    </Text>
                    <Text
                        textStyle="text.l2"
                        variant="uppercase_secondary"
                        //color={useColorModeValue('gray.600', 'gray.600')}
                        color="gray.600">
                        Product type
                    </Text>
                </Box>
            </Box>
            <RedeemButton value={1250} width="100%" />
        </Box>
    );
};
