import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys
);

const xedu = definePartsStyle({
  container: {
    rounded: 'xl',
    shadow: 'rgba(96, 4, 113, 0.25) 2px 2px 13px',
    boxShadow: 'lg',
    bg: 'white',
    _dark: {
      bg: 'primary.20'
    }
  }
});

const xeduSecondary = definePartsStyle({
  container: {
    rounded: 'xl',
    boxShadow: 'rgba(175, 0, 206, 0.452) 2px 2px 13px',
    bg: 'white',
    _dark: {
      shadow: 'rgba(202, 146, 25, 1) 2px 2px 13px',
      bg: 'primary.25'
    }
  }
});

export const CardStyle = defineMultiStyleConfig({
  variants: {
    xedu,
    xeduSecondary
  }
});
