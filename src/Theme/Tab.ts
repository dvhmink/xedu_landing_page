import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  tabsAnatomy.keys
);

const xedu = definePartsStyle({
  root: defineStyle({
    bg: 'bgLight',
    shadow: 'md',
    rounded: 'lg',
    _dark: {
      bg: 'primary.20',
      boxShadow: 'rgba(175, 0, 206, 0.452) 2px 2px 13px'
    }
  }),
  tablist: defineStyle({
    bg: 'primary.50',
    roundedTop: 'lg',
    _dark: {
      bg: 'primary.25'
    }
  }),
  tab: defineStyle({
    color: 'white',
    _selected: {
      color: 'secondary.200',
      fontWeight: 'bold',
      borderBottom: '4px solid',
      _dark: {
        color: 'secondary.200',
        bg: 'primary.25'
      }
    }
  })
});

export const TabStyle = defineMultiStyleConfig({ variants: { xedu } });
