// regenerate by running
// npx @chakra-ui/cli tokens path/to/your/theme.(js|ts)
import { BaseThemeTypings } from '@chakra-ui/react';
export interface ThemeTypings extends BaseThemeTypings {
  blur: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | (string & object);
  borders: 'none' | '1px' | '2px' | '4px' | '8px' | (string & object);
  borderStyles: string & object;
  borderWidths: string & object;
  breakpoints: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & object);
  colors:
    | 'transparent'
    | 'current'
    | 'black'
    | 'white'
    | 'whiteAlpha.50'
    | 'whiteAlpha.100'
    | 'whiteAlpha.200'
    | 'whiteAlpha.300'
    | 'whiteAlpha.400'
    | 'whiteAlpha.500'
    | 'whiteAlpha.600'
    | 'whiteAlpha.700'
    | 'whiteAlpha.800'
    | 'whiteAlpha.900'
    | 'blackAlpha.50'
    | 'blackAlpha.100'
    | 'blackAlpha.200'
    | 'blackAlpha.300'
    | 'blackAlpha.400'
    | 'blackAlpha.500'
    | 'blackAlpha.600'
    | 'blackAlpha.700'
    | 'blackAlpha.800'
    | 'blackAlpha.900'
    | 'gray.50'
    | 'gray.100'
    | 'gray.200'
    | 'gray.300'
    | 'gray.400'
    | 'gray.500'
    | 'gray.600'
    | 'gray.700'
    | 'gray.800'
    | 'gray.900'
    | 'red.50'
    | 'red.100'
    | 'red.200'
    | 'red.300'
    | 'red.400'
    | 'red.500'
    | 'red.600'
    | 'red.700'
    | 'red.800'
    | 'red.900'
    | 'orange.50'
    | 'orange.100'
    | 'orange.200'
    | 'orange.300'
    | 'orange.400'
    | 'orange.500'
    | 'orange.600'
    | 'orange.700'
    | 'orange.800'
    | 'orange.900'
    | 'yellow.50'
    | 'yellow.100'
    | 'yellow.200'
    | 'yellow.300'
    | 'yellow.400'
    | 'yellow.500'
    | 'yellow.600'
    | 'yellow.700'
    | 'yellow.800'
    | 'yellow.900'
    | 'green.50'
    | 'green.100'
    | 'green.200'
    | 'green.300'
    | 'green.400'
    | 'green.500'
    | 'green.600'
    | 'green.700'
    | 'green.800'
    | 'green.900'
    | 'teal.50'
    | 'teal.100'
    | 'teal.200'
    | 'teal.300'
    | 'teal.400'
    | 'teal.500'
    | 'teal.600'
    | 'teal.700'
    | 'teal.800'
    | 'teal.900'
    | 'blue.50'
    | 'blue.100'
    | 'blue.200'
    | 'blue.300'
    | 'blue.400'
    | 'blue.500'
    | 'blue.600'
    | 'blue.700'
    | 'blue.800'
    | 'blue.900'
    | 'cyan.50'
    | 'cyan.100'
    | 'cyan.200'
    | 'cyan.300'
    | 'cyan.400'
    | 'cyan.500'
    | 'cyan.600'
    | 'cyan.700'
    | 'cyan.800'
    | 'cyan.900'
    | 'purple.50'
    | 'purple.100'
    | 'purple.200'
    | 'purple.300'
    | 'purple.400'
    | 'purple.500'
    | 'purple.600'
    | 'purple.700'
    | 'purple.800'
    | 'purple.900'
    | 'pink.50'
    | 'pink.100'
    | 'pink.200'
    | 'pink.300'
    | 'pink.400'
    | 'pink.500'
    | 'pink.600'
    | 'pink.700'
    | 'pink.800'
    | 'pink.900'
    | 'linkedin.50'
    | 'linkedin.100'
    | 'linkedin.200'
    | 'linkedin.300'
    | 'linkedin.400'
    | 'linkedin.500'
    | 'linkedin.600'
    | 'linkedin.700'
    | 'linkedin.800'
    | 'linkedin.900'
    | 'facebook.50'
    | 'facebook.100'
    | 'facebook.200'
    | 'facebook.300'
    | 'facebook.400'
    | 'facebook.500'
    | 'facebook.600'
    | 'facebook.700'
    | 'facebook.800'
    | 'facebook.900'
    | 'messenger.50'
    | 'messenger.100'
    | 'messenger.200'
    | 'messenger.300'
    | 'messenger.400'
    | 'messenger.500'
    | 'messenger.600'
    | 'messenger.700'
    | 'messenger.800'
    | 'messenger.900'
    | 'whatsapp.50'
    | 'whatsapp.100'
    | 'whatsapp.200'
    | 'whatsapp.300'
    | 'whatsapp.400'
    | 'whatsapp.500'
    | 'whatsapp.600'
    | 'whatsapp.700'
    | 'whatsapp.800'
    | 'whatsapp.900'
    | 'twitter.50'
    | 'twitter.100'
    | 'twitter.200'
    | 'twitter.300'
    | 'twitter.400'
    | 'twitter.500'
    | 'twitter.600'
    | 'twitter.700'
    | 'twitter.800'
    | 'twitter.900'
    | 'telegram.50'
    | 'telegram.100'
    | 'telegram.200'
    | 'telegram.300'
    | 'telegram.400'
    | 'telegram.500'
    | 'telegram.600'
    | 'telegram.700'
    | 'telegram.800'
    | 'telegram.900'
    | 'primary.25'
    | 'primary.50'
    | 'primary.100'
    | 'primary.150'
    | 'primary.200'
    | 'primary.250'
    | 'primary.300'
    | 'secondary.50'
    | 'secondary.100'
    | 'secondary.200'
    | 'secondary.300'
    | 'primaryDark.100'
    | 'primaryDark.200'
    | 'secondaryDark.100'
    | 'secondaryDark.200'
    | 'accent'
    | 'bgLight'
    | 'bgDark'
    | 'chakra-body-text._light'
    | 'chakra-body-text._dark'
    | 'chakra-body-bg._light'
    | 'chakra-body-bg._dark'
    | 'chakra-border-color._light'
    | 'chakra-border-color._dark'
    | 'chakra-inverse-text._light'
    | 'chakra-inverse-text._dark'
    | 'chakra-subtle-bg._light'
    | 'chakra-subtle-bg._dark'
    | 'chakra-subtle-text._light'
    | 'chakra-subtle-text._dark'
    | 'chakra-placeholder-color._light'
    | 'chakra-placeholder-color._dark'
    | (string & object);
  colorSchemes:
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram'
    | (string & object);
  fonts: 'heading' | 'body' | 'mono' | (string & object);
  fontSizes:
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | (string & object);
  fontWeights:
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
    | (string & object);
  layerStyles: string & object;
  letterSpacings: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | (string & object);
  lineHeights:
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'normal'
    | 'none'
    | 'shorter'
    | 'short'
    | 'base'
    | 'tall'
    | 'taller'
    | (string & object);
  radii: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | (string & object);
  shadows:
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'outline'
    | 'inner'
    | 'none'
    | 'dark-lg'
    | (string & object);
  sizes:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '12'
    | '14'
    | '16'
    | '20'
    | '24'
    | '28'
    | '32'
    | '36'
    | '40'
    | '44'
    | '48'
    | '52'
    | '56'
    | '60'
    | '64'
    | '72'
    | '80'
    | '96'
    | 'px'
    | '0.5'
    | '1.5'
    | '2.5'
    | '3.5'
    | 'max'
    | 'min'
    | 'full'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | 'prose'
    | 'container.sm'
    | 'container.md'
    | 'container.lg'
    | 'container.xl'
    | 'sizes.1'
    | 'sizes.2'
    | 'sizes.3'
    | 'sizes.4'
    | 'sizes.5'
    | 'sizes.6'
    | 'sizes.7'
    | 'sizes.8'
    | 'sizes.9'
    | 'sizes.10'
    | 'sizes.12'
    | 'sizes.14'
    | 'sizes.16'
    | 'sizes.20'
    | 'sizes.24'
    | 'sizes.28'
    | 'sizes.32'
    | 'sizes.36'
    | 'sizes.40'
    | 'sizes.44'
    | 'sizes.48'
    | 'sizes.52'
    | 'sizes.56'
    | 'sizes.60'
    | 'sizes.64'
    | 'sizes.72'
    | 'sizes.80'
    | 'sizes.96'
    | 'sizes.px'
    | 'sizes.0.5'
    | 'sizes.1.5'
    | 'sizes.2.5'
    | 'sizes.3.5'
    | 'sizes.max'
    | 'sizes.min'
    | 'sizes.full'
    | 'sizes.3xs'
    | 'sizes.2xs'
    | 'sizes.xs'
    | 'sizes.sm'
    | 'sizes.md'
    | 'sizes.lg'
    | 'sizes.xl'
    | 'sizes.2xl'
    | 'sizes.3xl'
    | 'sizes.4xl'
    | 'sizes.5xl'
    | 'sizes.6xl'
    | 'sizes.7xl'
    | 'sizes.8xl'
    | (string & object);
  space:
    | '1'
    | '-1'
    | '2'
    | '-2'
    | '3'
    | '-3'
    | '4'
    | '-4'
    | '5'
    | '-5'
    | '6'
    | '-6'
    | '7'
    | '-7'
    | '8'
    | '-8'
    | '9'
    | '-9'
    | '10'
    | '-10'
    | '12'
    | '-12'
    | '14'
    | '-14'
    | '16'
    | '-16'
    | '20'
    | '-20'
    | '24'
    | '-24'
    | '28'
    | '-28'
    | '32'
    | '-32'
    | '36'
    | '-36'
    | '40'
    | '-40'
    | '44'
    | '-44'
    | '48'
    | '-48'
    | '52'
    | '-52'
    | '56'
    | '-56'
    | '60'
    | '-60'
    | '64'
    | '-64'
    | '72'
    | '-72'
    | '80'
    | '-80'
    | '96'
    | '-96'
    | 'px'
    | '-px'
    | '0.5'
    | '-0.5'
    | '1.5'
    | '-1.5'
    | '2.5'
    | '-2.5'
    | '3.5'
    | '-3.5'
    | (string & object);
  textStyles: string & object;
  transition:
    | 'property.common'
    | 'property.colors'
    | 'property.dimensions'
    | 'property.position'
    | 'property.background'
    | 'easing.ease-in'
    | 'easing.ease-out'
    | 'easing.ease-in-out'
    | 'duration.ultra-fast'
    | 'duration.faster'
    | 'duration.fast'
    | 'duration.normal'
    | 'duration.slow'
    | 'duration.slower'
    | 'duration.ultra-slow'
    | (string & object);
  zIndices:
    | 'hide'
    | 'auto'
    | 'base'
    | 'docked'
    | 'dropdown'
    | 'sticky'
    | 'banner'
    | 'overlay'
    | 'modal'
    | 'popover'
    | 'skipLink'
    | 'toast'
    | 'tooltip'
    | (string & object);
  components: {
    Accordion: {
      sizes: string & object;
      variants: string & object;
    };
    Alert: {
      sizes: string & object;
      variants: 'subtle' | 'left-accent' | 'top-accent' | 'solid' | (string & object);
    };
    Avatar: {
      sizes: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | (string & object);
      variants: string & object;
    };
    Badge: {
      sizes: string & object;
      variants: 'solid' | 'subtle' | 'outline' | 'xedu' | (string & object);
    };
    Breadcrumb: {
      sizes: string & object;
      variants: string & object;
    };
    Button: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | (string & object);
      variants: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled' | 'xedu' | (string & object);
    };
    Checkbox: {
      sizes: 'sm' | 'md' | 'lg' | (string & object);
      variants: string & object;
    };
    CloseButton: {
      sizes: 'lg' | 'md' | 'sm' | (string & object);
      variants: string & object;
    };
    Code: {
      sizes: string & object;
      variants: 'solid' | 'subtle' | 'outline' | (string & object);
    };
    Container: {
      sizes: string & object;
      variants: string & object;
    };
    Divider: {
      sizes: string & object;
      variants: 'solid' | 'dashed' | (string & object);
    };
    Drawer: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | (string & object);
      variants: string & object;
    };
    Editable: {
      sizes: string & object;
      variants: string & object;
    };
    Form: {
      sizes: string & object;
      variants: 'floating' | 'xedu' | (string & object);
    };
    FormError: {
      sizes: string & object;
      variants: string & object;
    };
    FormLabel: {
      sizes: string & object;
      variants: string & object;
    };
    Heading: {
      sizes: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | (string & object);
      variants: string & object;
    };
    Input: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | (string & object);
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & object);
    };
    Kbd: {
      sizes: string & object;
      variants: string & object;
    };
    Link: {
      sizes: string & object;
      variants: string & object;
    };
    List: {
      sizes: string & object;
      variants: string & object;
    };
    Menu: {
      sizes: string & object;
      variants: string & object;
    };
    Modal: {
      sizes:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | 'full'
        | (string & object);
      variants: string & object;
    };
    NumberInput: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & object);
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | (string & object);
    };
    PinInput: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | (string & object);
      variants: 'outline' | 'flushed' | 'filled' | 'unstyled' | (string & object);
    };
    Popover: {
      sizes: string & object;
      variants: string & object;
    };
    Progress: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & object);
      variants: string & object;
    };
    Radio: {
      sizes: 'md' | 'lg' | 'sm' | (string & object);
      variants: string & object;
    };
    Select: {
      sizes: 'lg' | 'md' | 'sm' | 'xs' | (string & object);
      variants: 'outline' | 'filled' | 'flushed' | 'unstyled' | 'xedu' | (string & object);
    };
    Skeleton: {
      sizes: string & object;
      variants: string & object;
    };
    SkipLink: {
      sizes: string & object;
      variants: string & object;
    };
    Slider: {
      sizes: 'lg' | 'md' | 'sm' | (string & object);
      variants: string & object;
    };
    Spinner: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & object);
      variants: string & object;
    };
    Stat: {
      sizes: 'md' | (string & object);
      variants: string & object;
    };
    Switch: {
      sizes: 'sm' | 'md' | 'lg' | (string & object);
      variants: string & object;
    };
    Table: {
      sizes: 'sm' | 'md' | 'lg' | (string & object);
      variants: 'simple' | 'striped' | 'unstyled' | (string & object);
    };
    Tabs: {
      sizes: 'sm' | 'md' | 'lg' | (string & object);
      variants:
        | 'line'
        | 'enclosed'
        | 'enclosed-colored'
        | 'soft-rounded'
        | 'solid-rounded'
        | 'unstyled'
        | (string & object);
    };
    Tag: {
      sizes: 'sm' | 'md' | 'lg' | (string & object);
      variants: 'subtle' | 'solid' | 'outline' | (string & object);
    };
    Textarea: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & object);
      variants: 'outline' | 'flushed' | 'filled' | 'unstyled' | (string & object);
    };
    Tooltip: {
      sizes: string & object;
      variants: string & object;
    };
    Card: {
      sizes: 'sm' | 'md' | 'lg' | (string & object);
      variants: 'elevated' | 'outline' | 'filled' | 'unstyled' | 'xedu' | (string & object);
    };
    Stepper: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | (string & object);
      variants: string & object;
    };
  };
}
