import {
    Box,
    Button,
    Heading,
    Show,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ImgIcon } from './ImgIcon';
import { WalkthroughCard } from './cards/WalkthroughCard';
import { memo } from 'react';

export const Hero = ({}) => (
    <Box position="relative" width="100%" mt={[50, null]}>
        <Box
            position="absolute"
            bottom={['5%', '15%']}
            height={['95%', null, '85%']}
            width="100%"
            zIndex={0}
            backgroundRepeat="repeat-y"
            sx={{
                maskImage:
                    'url(/assets/illustrations/single-wave-pattern-background.svg)',
                backgroundColor: [useColorModeValue('#E5F0FF', '#E5F0FF10')],
                maskSize: ['56%', '18%'], //E5F0FF80
            }}
        />
        <Box
            display="flex"
            flexDirection={['column', null, 'row']}
            alignItems="flex-start"
            margin="auto"
            width="100%"
            maxWidth="101.5rem"
            pt="1rem"
            px={[null, '1.25rem', '5rem', '2rem']}>
            <Box
                display="flex"
                flexDirection="column"
                textAlign={['center', null, 'left']}
                alignItems={[null, null, 'flex-start']}
                px={['1.25rem', null]}
                width={['100%', null, '50%']}
                zIndex={1}>
                <Text
                    textStyle="text.l1"
                    variant="uppercase_primary"
                    color="gray.600">
                    Explore the
                </Text>
                <Text
                    textStyle="title.l1"
                    bgGradient={
                        'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
                    }
                    bgClip={'text'}>
                    TECH
                </Text>
                <Text textStyle="title.l1" pb={5}>
                    ZONE
                </Text>
                <Text
                    textStyle="text.l1"
                    color={useColorModeValue('gray.600', 'gray.200')}
                    width={['100%', null, '80%']}
                    pb={16}>
                    Here you'll be able to exchange all of your hard-earned
                    Aeropoints and exchange them for cool tech.
                </Text>
                <Button
                    p={[8, null, 10]}
                    borderRadius={24}
                    onClick={() =>
                        document
                            .getElementById('products-section')
                            .scrollIntoView()
                    }>
                    <Text
                        textStyle="text.l1"
                        variant="uppercase_secondary"
                        mr={3}>
                        View all products
                    </Text>

                    <ImgIcon src="/assets/icons/Icons.svg" />
                </Button>
            </Box>
            <Box
                position="relative"
                width={['100%', null, '50%']}
                mb={[-28, null]}
                overflowX="hidden">
                <Box
                    position="absolute"
                    width="100%"
                    height="70%"
                    bottom={0}
                    borderRadius={104}
                    bgGradient={[
                        null,
                        'linear-gradient(102.47deg, specials.sectionBG.primary -5.34%, specials.sectionBG.secondary 106.58%)',
                    ]}
                />
                <Show above="sm">
                    <Box mt={[null, null, -28]}>
                        <Image
                            src="/assets/illustrations/hero-desktop.png"
                            layout="responsive"
                            width={0}
                            height={0}
                            objectFit="scale-down"
                            priority
                        />
                    </Box>
                </Show>
                <Show below="sm" position="relative" overflowX="visible">
                    <Box
                        display="flex"
                        zIndex={3}
                        position="relative"
                        justifyContent="center"
                        alignItems="center"
                        overflow="hidden">
                        <Image
                            src="/assets/illustrations/hero-desktop.png"
                            layout="fixed"
                            objectFit="cover"
                            width={600}
                            height={600}
                            overflow="hidden"
                            priority
                        />
                    </Box>
                </Show>
            </Box>
        </Box>
        <Box
            display="flex"
            position="relative"
            justifyContent="center"
            mt={[null, 20]}>
            <Box
                position="absolute"
                zIndex={0}
                top={['-25%', '15%']}
                height={['126%', '35%', null, '55%', null, '65%']}
                width="100%"
                bgGradient={
                    'linear-gradient(102.47deg, specials.sectionBG.primary -5.34%, specials.sectionBG.secondary 106.58%)'
                }
            />

            <Box
                position="relative"
                display="flex"
                flexDirection={['column', null, 'row']}
                gap={[6, null, 0]}
                justifyContent="center"
                alignItems="center"
                maxWidth="91rem"
                overflowY="visible"
                px={['1.25rem', null, '5rem', '2rem']}
                mt={[24, null]}>
                <Box transform={['none', null, 'rotate(-3deg)']}>
                    <WalkthroughCard
                        title="1—BROWSE"
                        description="Browse our tech catalog with more than 20 top tech products"
                        imgUrl="/assets/illustrations/walkthroug-1-desktop.png"
                    />
                </Box>
                <Box zIndex={1} mx={[0, null, -16]} mt={[0, null, -10]}>
                    <WalkthroughCard
                        title="2—CHOOSE"
                        description="Exchange your hard earned AeroPoints for the item you want"
                        imgUrl="/assets/illustrations/walkthroug-2-desktop.png"
                    />
                </Box>
                <Box transform={['none', null, 'rotate(3deg)']} zIndex={2}>
                    <WalkthroughCard
                        title="3—ENJOY!"
                        description="All done, you can relax! We’ll take care of delivery of your tech item!"
                        imgUrl="/assets/illustrations/walkthroug-3-desktop.png"
                    />
                </Box>
            </Box>
        </Box>
    </Box>
);

export const MemoizedHero = memo(Hero);
