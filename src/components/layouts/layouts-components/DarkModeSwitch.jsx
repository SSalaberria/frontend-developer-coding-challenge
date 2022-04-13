import { useColorMode, Switch, useTheme } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const theme = useTheme();

    return (
        <Switch
            position="fixed"
            top="1rem"
            right="1rem"
            zIndex={theme.zIndices.sticky}
            isChecked={isDark}
            onChange={toggleColorMode}
        />
    );
};

export default DarkModeSwitch;
