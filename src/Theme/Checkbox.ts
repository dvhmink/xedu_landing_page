import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys
);

const circular = definePartsStyle({
  control: defineStyle({
    rounded: 'full',
    w: '1.2em',
    h: '1.2em'
  })
});

const xedu = definePartsStyle({
  control: defineStyle({
    w: '1.4em',
    h: '1.4em',
    // bg: "primary.100",
    borderColor: 'primary.100',
    _checked: {
      bg: 'primary.100',
      borderColor: 'primary.100'
    },
    _dark: {
      borderColor: 'primary.200',
      bg: 'primary.20',
      color: 'primary.20',
      _checked: {
        bg: 'primary.200',
        borderColor: 'primary.200'
      }
    }
  }),
  icon: defineStyle({
    bg: 'primary.100',
    _dark: {
      bg: 'primary.200'
    }
  })
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { circular, xedu }
});
