import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export const WalkthroughCard = ({ title, description, imgUrl }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            maxWidth={[335, null, null, 432, null, 532]}
            height={[408, null, null, 548, null, 676]}
            borderWidth="1px"
            borderStyle="solid"
            borderColor="gray.300"
            borderRadius={32}
            boxShadow="0px 2px 40px rgba(0, 0, 0, 0.05)"
            background={['rgba(255, 255, 255, 0.3)', 'gray.0']}
            zIndex={0}>
            <Box
                display="flex"
                flexDirection="column"
                width="96%"
                height="97%"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="gray.300"
                borderRadius={32}
                background="gray.0"
                boxShadow="0px 2px 8px rgba(0, 0, 0, 0.05)"
                zIndex={3}>
                <Box
                    position="relative"
                    height="80%"
                    bgGradient="linear(to-l, specials.illustrationBG.secondary, specials.illustrationBG.primary)"
                    borderTopRadius={32}>
                    <Image
                        src={imgUrl}
                        layout="fill"
                        width={0}
                        height={0}
                        objectFit="scale-down"
                    />
                </Box>

                <Box py={4} pl={6} pr={[null, null, '20%']}>
                    <Box display="flex" alignItems="center" mb={1}>
                        <Img
                            src="/assets/icons/walkthrough-1.svg"
                            background="brand.light.primary"
                            width={[8, null, 12]}
                            height={[8, null, 12]}
                            borderRadius={8}
                            mr={4}
                        />
                        <Text
                            textStyle="title.l3"
                            bgGradient={
                                'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
                            }
                            bgClip={'text'}>
                            {title}
                        </Text>
                    </Box>

                    <Text textStyle="text.l1" color="gray.600">
                        {description}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};
