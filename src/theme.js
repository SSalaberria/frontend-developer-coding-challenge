import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { body: `Montserrat, 'Menlo', monospace` };

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const titleSharedStyles = {
    lineHeight: '80%',
    textTransform: 'uppercase',
    fontWeight: 900,
};

const theme = extendTheme({
    textStyles: {
        title: {
            l1: {
                fontSize: ['96px', null, '200px'],
                ...titleSharedStyles,
            },
            l2: { fontSize: ['32px', null, '48px'], ...titleSharedStyles },
            l3: {
                fontSize: ['24px', null, '32px'],
                ...titleSharedStyles,
                lineHeight: '100%',
            },
        },
        text: {
            l1: {
                fontSize: ['16px', null, '18px'],
                fontWeight: 'semibold',
                lineHeight: '150%',
            },
            l2: {
                fontSize: ['12px', null, '14px'],
                fontWeight: 'semibold',
                lineHeight: '150%',
            },
        },
    },
    components: {
        Text: {
            variants: {
                uppercase_primary: {
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                },
                uppercase_secondary: {
                    letterSpacing: ['0%', null, '0.05em'],
                    textTransform: 'uppercase',
                },
                lightweight: {
                    fontWeight: 'normal',
                },
            },
        },
        Button: {
            variants: {
                base: ({ colorMode }) => ({
                    background:
                        'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)',
                    borderRadius: 16,
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                    color: 'gray.0',
                    '&:hover': {
                        background:
                            'linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)',
                        textDecoration: 'none',
                    },
                    '&:disabled': {
                        background: 'gray.200',
                        color: colorMode === 'dark' ? 'gray.900' : 'gray.600',
                        '&:hover': {
                            background: 'gray.300',
                        },
                    },
                }),
            },
            defaultProps: {
                variant: 'base',
            },
        },
    },
    colors: {
        black: '#252F3D',
        gray: {
            0: '#FFFFFF',
            100: '#F5F9FF',
            200: '#E6EDF7',
            300: '#DAE4F2',
            500: '#8FA3BF',
            600: '#7C899C',
            900: '#252F3D',
        },
        brand: {
            default: {
                primary: '#176FEB',
                secondary: '#FF80FF',
            },
            hover: {
                primary: '#1667D9',
                secondary: '#F279F2',
            },
            light: {
                primary: '#E5F0FF',
                secondary: '#CCE1FF',
            },
        },
        green: {
            default: '#29CC74',
            light: '#CCFFE3',
        },
        red: {
            default: '#E07F4F',
        },
        specials: {
            illustrationBG: {
                primary: '#7296EB',
                secondary: '#EAC0E9',
            },
            sectionBG: {
                primary: '#176FEB80',
                secondary: '#FF80FF80',
            },
            aerolab: {
                primary: '#FF8800',
                secondary: '#FF6600',
            },
        },
    },
    fonts,
    breakpoints,
});

export default theme;
