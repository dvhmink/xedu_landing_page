import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  accordionAnatomy.keys
);

const xedu = definePartsStyle({
  button: defineStyle({
    _expanded: {
      bg: 'secondary.100'
    },
    _dark: {
      bg: 'bgDark',
      _expanded: {
        bg: 'primary.50'
      }
    }
  }),
  panel: defineStyle({
    bg: 'primary.300',
    _hover: {
      bg: 'primary.250'
    },
    _dark: {
      bg: 'primary.25'
    }
  })
});

export const AccordionStyle = defineMultiStyleConfig({ variants: { xedu } });
