import { Box, HStack, Img, Text, VStack } from '@chakra-ui/react';
import { NavLink } from '../../ctas/NavLink';
import Image from 'next/image';

export const Footer = props => (
    <VStack as="footer" py="6rem" mt={60} gap={5} {...props}>
        <HStack gap={5}>
            <Img w={10} src="/assets/icons/react.svg" />
            <Img w={10} src="/assets/icons/next-js.svg" />
            <Img w={10} src="/assets/icons/chakra-ui.svg" />
        </HStack>

        <NavLink
            label="View the repository"
            icon={
                <Image
                    src="/assets/icons/github-default.svg"
                    layout="responsive"
                    width={0}
                    height={0}
                />
            }
            iconHovered={
                <Image
                    src="/assets/icons/github-active.svg"
                    layout="responsive"
                    width={0}
                    height={0}
                />
            }
            href={
                'https://github.com/SSalaberria/frontend-developer-coding-challenge'
            }
            isExternal
        />
        <Box textAlign="center">
            <Text textStyle="text.l2" fontWeight="normal" pt={5}>
                Made with ❤️ by Sebastián Salaberría
            </Text>
            <Text textStyle="text.l2" fontWeight="normal">
                Design by Aerolab
            </Text>
        </Box>
    </VStack>
);
