import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { ImgIcon } from '../ImgIcon';

export const AeropayCard = ({}) => {
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
                backgroundSize="100% 12%"
                _before={
                    {
                        // content: '""',
                        // position: 'absolute',
                        // width: '200%',
                        // height: '200%',
                        // top: '-50%',
                        // left: '-50%',
                        // zIndex: -1,
                        // backgroundImage:
                        //     "url('/assets/illustrations/single-wave-pattern.svg')",
                        // backgroundRepeat: 'repeat-y',
                        // transform: 'rotate(-6deg)',
                        // backgroundSize: '100% 10%',
                    }
                }>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    px={4}
                    pb={4}>
                    <Text textStyle="text.l2">John Kite</Text>
                    <Text textStyle="text.l2">07/23</Text>
                </Box>
            </Box>
        </Box>
    );
};
