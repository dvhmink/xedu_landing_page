import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

const pill = definePartsStyle({
  field: defineStyle({
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.50',
    borderRadius: 'full',

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: 'gray.600',
      background: 'gray.800'
    }
  }),
  addon: defineStyle({
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.200',
    borderRadius: 'full',
    color: 'gray.500',

    _dark: {
      borderColor: 'gray.600',
      background: 'gray.600',
      color: 'gray.400'
    }
  })
});

const xedu = definePartsStyle({
  field: defineStyle({
    border: '1px solid',
    borderColor: 'primary.200',
    background: 'white',
    borderRadius: 'md',
    _focus: {
      shadow: 'rgba(96, 4, 113, 0.25) 2px 2px 9px',
      borderColor: 'primary.100',
      borderWidth: '2px'
    },

    _placeholder: {
      color: 'primary.200',
      fontSize: 'sm',
      opacity: 0.6
    },
    _invalid: {
      borderColor: 'red.300',
      borderWidth: '2px'
    },
    _dark: {
      bg: 'bgDark',
      _focus: {
        shadow: 'rgba(213, 111, 231, 0.45) 2px 2px 9px',
        borderColor: 'primary.150',
        borderWidth: '2px'
      }
    }
  }),
  addon: defineStyle({
    border: '1px solid',
    borderColor: 'primary.100',
    bg: 'primary.100',
    borderRadius: '0.375rem 0 0 0.375rem',
    color: 'white',
    _dark: {
      borderColor: 'primary.200',
      bg: 'primary.200',
      color: 'primary.20'
    }
  }),
  icon: defineStyle({
    bg: 'primary.100',
    // borderRadius: "0 1rem 1rem 0",
    _dark: {
      bgSize: 'primary.200'
    }
  })
});

const xeduFlushed = definePartsStyle({
  field: defineStyle({
    border: 'none',
    borderBottom: '1px solid',
    borderColor: 'primary.200',
    background: 'transparent',
    borderRadius: 'none',
    _focus: {
      borderColor: 'primary.100',
      borderWidth: '2px'
    },
    _placeholder: {
      color: 'primary.200',
      fontSize: 'sm',
      opacity: 0.6
    },
    _invalid: {
      borderColor: 'red.300',
      borderWidth: '2px'
    },
    _dark: {
      bg: 'bgDark',
      _focus: {
        borderColor: 'primary.150',
        borderWidth: '2px'
      }
    }
  }),
  addon: defineStyle({
    border: 'none',
    borderBottom: '1px solid',
    borderColor: 'primary.100',
    bg: 'primary.100',
    borderRadius: 'none',
    color: 'white',
    _dark: {
      borderColor: 'primary.200',
      bg: 'primary.200',
      color: 'primary.20'
    }
  }),
  icon: defineStyle({
    bg: 'primary.100',
    // borderRadius: "0 1rem 1rem 0",
    _dark: {
      bgSize: 'primary.200'
    }
  })
});

export const inputTheme = defineMultiStyleConfig({
  variants: { pill, xedu, xeduFlushed }
});
