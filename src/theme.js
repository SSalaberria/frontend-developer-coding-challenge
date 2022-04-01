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
    fontWeight: 'black',
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
            l1: { fontSize: ['16px', null, '18px'] },
            l2: { fontSize: ['12px', null, '14px'] },
        },
    },
    components: {
        Text: {
            baseStyle: {
                fontWeight: 'semibold',
                lineHeight: '150%',
            },
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
    icons: {
        logo: {
            path: (
                <svg
                    width="3000"
                    height="3163"
                    viewBox="0 0 3000 3163"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="3000" height="3162.95" fill="none" />
                    <path
                        d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
                        fill="currentColor"
                    />
                </svg>
            ),
            viewBox: '0 0 3000 3163',
        },
    },
});

export default theme;
