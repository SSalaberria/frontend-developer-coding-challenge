import { Stack } from '@chakra-ui/react';

export const Main = props => (
    <Stack
        spacing="1.5rem"
        width="100%"
        maxWidth="101.5rem"
        pt="1rem"
        px={['1.25rem', null, null, '5rem']}
        {...props}
    />
);
