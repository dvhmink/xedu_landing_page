import { extendTheme, defineStyleConfig, type ThemeConfig } from '@chakra-ui/react';
import { colors } from './color';
import { sizes } from './size';
import { checkboxTheme } from './Checkbox';
import { inputTheme } from './Input.ts';
import { ButtonStyle } from './Button.ts';
import { CardStyle } from './Card.ts';
import { RadioStyle } from './Radio.ts';
import { AccordionStyle } from './Accordion.ts';
import { ModalStyle } from './Modal.ts';
import { TabStyle } from './Tab.ts';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)'
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

export default extendTheme({
  config,
  sizes,
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`
  },
  colors,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
              _dark: {
                bg: 'bgDark'
              }
            }
          }
        }
      }
    },
    Button: ButtonStyle,
    Select: defineStyleConfig({
      variants: {
        xedu: {
          field: {
            rounded: 'lg',
            borderColor: 'primary.100',
            borderWidth: '1px',
            _focus: {
              borderColor: 'primary.150'
            },
            _dark: {
              bg: 'bgDark'
            }
          }
        },
        xeduFlushed: {
          field: {
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
          }
        }
      }
    }),
    Card: CardStyle,
    Badge: defineStyleConfig({
      variants: {
        xedu: {
          borderRadius: 'xl',
          bg: 'primary.150',
          color: 'white',
          px: 3,
          py: 1
        }
      }
    }),
    Input: inputTheme,
    Checkbox: checkboxTheme,
    Radio: RadioStyle,
    Accordion: AccordionStyle,
    Modal: ModalStyle,
    Tabs: TabStyle
  }
});
