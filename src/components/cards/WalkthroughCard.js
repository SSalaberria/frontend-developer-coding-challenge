import { Box, Img, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const WalkthroughCard = ({}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={532}
            height={676}
            borderWidth="1px"
            borderStyle="solid"
            borderColor="gray.300"
            borderRadius={32}
            boxShadow="0px 2px 40px rgba(0, 0, 0, 0.05)">
            <Box
                width="96%"
                height="97%"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="gray.300"
                borderRadius={32}
                background="gray.0"
                boxShadow="0px 2px 8px rgba(0, 0, 0, 0.05)">
                <Box
                    bgGradient="linear(to-l, specials.illustrationBG.secondary, specials.illustrationBG.primary)"
                    borderTopRadius={32}>
                    <Image
                        src="/assets/illustrations/walkthroug-3-desktop.png"
                        layout="responsive"
                        width={0}
                        height={0}
                        objectFit="scale-down"
                    />
                </Box>

                <Box py={4} pl={6} pr={20}>
                    <Box display="flex" alignItems="center" mb={1}>
                        <Img
                            src="/assets/icons/walkthrough-1.svg"
                            background="brand.light.primary"
                            width={12}
                            height={12}
                            borderRadius={8}
                            mr={4}
                        />
                        <Text
                            textStyle="title.l3"
                            bgGradient={
                                'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
                            }
                            bgClip={'text'}>
                            Title
                        </Text>
                    </Box>

                    <Text textStyle="text.l1" color="gray.600">
                        Short two liner sentence. Walkthrough card.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};
