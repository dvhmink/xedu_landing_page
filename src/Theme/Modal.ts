import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  modalAnatomy.keys
);

const xedu = definePartsStyle({
  dialog: defineStyle({
    rounded: 'xl',
    bg: 'bgLight',
    _dark: {
      bg: 'bgDark',
      shadow: 'rgba(220, 159, 255, 0.3) 5px 5px 15px'
    }
  }),
  overlay: defineStyle({
    _dark: {
      bg: 'rgba(0, 0, 0, 0.8)'
    }
  })
});

export const ModalStyle = defineMultiStyleConfig({ variants: { xedu } });
