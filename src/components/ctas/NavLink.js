import { LinkIcon } from '@chakra-ui/icons';
import { Box, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const NavLink = ({ icon, iconHovered, label, ...props }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            {...props}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: 'none' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <Box width={[6, null, 8]} mr={2}>
                {hovered ? iconHovered : icon}
            </Box>
            <Text
                textStyle="text.l1"
                bgGradient={
                    hovered &&
                    'linear-gradient(102.47deg, brand.default.primary -5.34%, brand.default.secondary 106.58%)'
                }
                bgClip={hovered && 'text'}>
                {label}
            </Text>
        </Link>
    );
};
