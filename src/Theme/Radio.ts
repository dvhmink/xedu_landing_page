import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys
);

const xedu = definePartsStyle({
  control: defineStyle({
    w: '1.4em',
    h: '1.4em',
    my: 1,
    borderColor: 'primary.100',
    _checked: {
      bg: 'primary.100',
      borderColor: 'primary.100',
      color: 'white'
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
  })
});

export const RadioStyle = defineMultiStyleConfig({
  variants: { xedu }
});
