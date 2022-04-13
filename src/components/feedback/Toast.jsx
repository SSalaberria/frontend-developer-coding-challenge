import PropTypes from 'prop-types';
import { CloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import ImgIcon from '../ImgIcon';

const Toast = ({ onClose, title, error, description, ...props }) => (
    <Flex
        alignItems="center"
        background={useColorModeValue('gray.0', 'gray.900')}
        py={6}
        px={6}
        borderRadius={12}
        borderWidth={2}
        borderColor={error ? 'red.default' : 'green.default'}
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.05)"
        textStyle="text.l1"
        {...props}>
        {error ? (
            <ImgIcon src="/assets/icons/system-error.svg" mr={2} />
        ) : (
            <ImgIcon src="/assets/icons/system-success.svg" mr={2} />
        )}
        <Flex flexDir={['column', null, 'row']} mr={8}>
            <Text
                color={useColorModeValue('gray.900', 'gray.0')}
                mr={1}
                display={error ? 'none' : 'block'}>
                {title}
            </Text>
            <Text color="gray.600">{description}</Text>
        </Flex>

        <IconButton
            onClick={onClose}
            icon={<CloseIcon />}
            variant="unstyled"
            color="gray.500"
            borderRadius={50}
            transition="all 0.5s"
            _hover={{ background: useColorModeValue('gray.300', 'gray.700') }}
        />
    </Flex>
);

Toast.defaultProps = {
    error: false,
    description: '',
};

Toast.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    error: PropTypes.bool,
    description: PropTypes.string,
};

export default Toast;
