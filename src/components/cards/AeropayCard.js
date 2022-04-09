import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { ImgIcon } from '../ImgIcon';

export const AeropayCard = ({ name, createDate }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            pt={4}
            width={260}
            height={150}
            filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05))"
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.05)"
            borderRadius={8}
            background={useColorModeValue('gray.900', 'gray.600')}
            color="gray.100">
            <Box display="flex" justifyContent="space-between" px={4} pb={4}>
                <Text textStyle="text.l1">Aerocard</Text>
                <ImgIcon src="/assets/icons/aeropay-2.svg" />
            </Box>
            <Box
                position="relative"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
                backgroundImage="url('/assets/illustrations/single-wave-pattern.svg')"
                backgroundRepeat="repeat-y"
                backgroundSize="100% 12%">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    px={4}
                    pb={4}>
                    <Text textStyle="text.l2">{name}</Text>
                    <Text textStyle="text.l2">
                        {new Intl.DateTimeFormat('en-US', {
                            month: '2-digit',
                            year: '2-digit',
                        }).format(new Date(createDate))}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};
