import { defineStyleConfig } from '@chakra-ui/react';

const ButtonStyle = defineStyleConfig({
  variants: {
    xedu: {
      bg: 'primary.100',
      color: 'white',
      _hover: {
        bg: 'primary.150'
      },
      _dark: {
        bg: 'primary.200',
        color: 'primary.20',
        _hover: {
          bg: 'primary.150'
        }
      }
    },
    xeduSecondary: {
      bg: 'secondary.200',
      color: 'white',
      _hover: {
        bg: 'secondary.300'
      },
      _dark: {
        bg: 'secondary.300',
        _hover: {
          bg: 'secondary.200'
        }
      }
    }
  }
});

export { ButtonStyle };
