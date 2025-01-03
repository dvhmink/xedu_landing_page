import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  HStack,
  Box,
  Avatar,
  Tooltip,
  MenuButton,
  Menu,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { LoginURL, ShopConsoleURL } from '../../../Utilities/FrontendURLs';
import { HeaderButtons } from './HeaderButtons';
import useHeader from './useHeader';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Header() {
  const { style, drawerOpen, setDrawerOpen, isMobile, user } = useHeader();
  return (
    <>
      {isMobile && (
        <Drawer
          isOpen={drawerOpen}
          placement={'left'}
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader as={'h1'} fontSize={'4xl'} fontWeight={'900'} color={'primary.100'}>
              Xe dù
            </DrawerHeader>

            <DrawerBody>
              <Box>
                {HeaderButtons.map((btn, index) =>
                  btn.type === 'route' ? (
                    <a href={btn.link} key={index + 'section'}>
                      <Button
                        rounded={'full'}
                        variant={'unstyled'}
                        px={'1rem'}
                        mr={'1rem'}
                        w={'100%'}
                        color={'primary.100'}
                        _hover={{ bg: 'primary.150', color: 'white' }}
                        mb={'1rem'}
                      >
                        <Text fontWeight={'600'} fontSize={'xl'} textAlign={'start'}>
                          {btn.title}
                        </Text>
                      </Button>
                    </a>
                  ) : (
                    btn.routes && (
                      <Menu key={index}>
                        <MenuButton
                          as={Button}
                          rounded={'full'}
                          px={'1rem'}
                          rightIcon={<ChevronDownIcon />}
                          variant={'unstyled'}
                          mr={'1rem'}
                          color={'primary.100'}
                          mb={'1rem'}
                          fontWeight={'600'}
                          fontSize={'xl'}
                          textAlign={'start'}
                        >
                          {btn.title}
                        </MenuButton>
                        <MenuList>
                          {btn.routes.map((route, i) => (
                            <MenuItem
                              key={i + 'menu_item'}
                              as={'a'}
                              color={'primary.50'}
                              href={route.link}
                              _hover={{ bg: 'primary.150', color: 'white' }}
                              _dark={{
                                bg: 'primary.100',
                                color: 'white',
                                _hover: { bg: 'primary.150', color: 'white' }
                              }}
                            >
                              {route.title}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Menu>
                    )
                  )
                )}
                {user.token ? (
                  <>
                    <a href={ShopConsoleURL}>
                      <Button
                        variant={'solid'}
                        bg={'primary.100'}
                        color={'white'}
                        rounded={'full'}
                        mr={4}
                        _hover={{ bg: 'primary.150' }}
                      >
                        Bảng điều khiển
                      </Button>
                    </a>
                    <Tooltip label={user.name} aria-label="user name">
                      <Avatar
                        transitionDuration="0.2s"
                        _hover={{
                          transform: 'scale(1.1, 1.1)'
                        }}
                        size={'md'}
                        src={user.avatar ? user.avatar.url : undefined}
                        name={user.name}
                        outline={'solid 4px white'}
                        shadow={'rgba(0,0,0,0.6) 3px 3px 15px'}
                      />
                    </Tooltip>
                  </>
                ) : (
                  <a href={LoginURL} target="_blank" rel="noreferrer">
                    <Button rounded={'full'} bg={'primary.100'} variant={'unstyled'} px={'1rem'}>
                      <Text color={'white'}>Đăng nhập</Text>
                    </Button>
                  </a>
                )}
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
      <Flex
        h={'4rem'}
        w={'100%'}
        transitionDuration={'0.5s'}
        transform={!isMobile && style == 'home' ? 'scale(1, 2.75)' : undefined}
        shadow={isMobile || style !== 'home' ? 'md' : undefined}
        position={'fixed'}
        zIndex={100}
        bg={'bgLight'}
        _dark={{ bg: 'bgDark', shadow: '0px 0px 7px #C670EF' }}
      />

      <Flex w={'100%'} justifyContent={'space-between'} position={'fixed'} zIndex={101}>
        <a href="/">
          <Flex
            h={'100%'}
            w={'fit-content'}
            alignItems={'center'}
            transform={
              !isMobile && style == 'home' ? 'scale(1.67, 1.67) translate(2rem, 1rem)' : undefined
            }
            transitionDuration={'0.5s'}
          >
            <Image src={'/UDSlogo.png'} h={'3rem'} w={'3rem'} m={'0.5rem'} />
            <Heading
              as={'h1'}
              size={'lg'}
              ml={'2'}
              color={'primary.100'}
              fontWeight={'900'}
              _dark={{ color: 'primary.150' }}
            >
              Xe dù
            </Heading>
          </Flex>
        </a>
        <Flex h={'4rem'} w={'fit-content'} alignItems={'center'} mr={'2rem'}>
          {!isMobile ? (
            <HStack
              gap={{ base: 0, lg: 0, xl: 4 }}
              transitionDuration={'0.5s'}
              transform={!isMobile && style == 'home' ? 'translate(0, 2rem)' : undefined}
            >
              {HeaderButtons.map((btn, index) =>
                btn.type == 'route' ? (
                  <a href={btn.link} key={index + 'header-button'}>
                    <Button
                      rounded={'full'}
                      variant={'unstyled'}
                      px={'1rem'}
                      color={'primary.100'}
                      _hover={{ bg: 'primary.150', color: 'white' }}
                      _dark={{
                        color: 'primary.150',
                        _hover: { bg: 'primary.100', color: 'white' }
                      }}
                    >
                      <Text fontWeight={'600'}>{btn.title}</Text>
                    </Button>
                  </a>
                ) : (
                  btn.routes && (
                    <Menu key={index + 'header-button'}>
                      <MenuButton
                        as={Button}
                        rounded={'full'}
                        px={'1rem'}
                        rightIcon={<ChevronDownIcon />}
                        variant={'unstyled'}
                        color={'primary.100'}
                        _hover={{ bg: 'primary.150', color: 'white' }}
                        _dark={{
                          color: 'primary.150',
                          _hover: { bg: 'primary.100', color: 'white' }
                        }}
                      >
                        {btn.title}
                      </MenuButton>
                      <MenuList>
                        {btn.routes.map((route, i) => (
                          <MenuItem
                            key={i}
                            as={'a'}
                            color={'primary.50'}
                            href={route.link}
                            _hover={{ bg: 'primary.150', color: 'white' }}
                            _dark={{
                              bg: 'primary.100',
                              color: 'white',
                              _hover: { bg: 'primary.150', color: 'white' }
                            }}
                          >
                            {route.title}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  )
                )
              )}

              {user.token ? (
                <>
                  <a href={ShopConsoleURL}>
                    <Button
                      variant={'solid'}
                      bg={'primary.100'}
                      color={'white'}
                      rounded={'full'}
                      mr={4}
                      _hover={{ bg: 'primary.150' }}
                    >
                      Bảng điều khiển
                    </Button>
                  </a>
                  <Tooltip label={user.name} aria-label="user name">
                    <Avatar
                      transitionDuration="0.2s"
                      _hover={{
                        transform: 'scale(1.1, 1.1)'
                      }}
                      size={'md'}
                      src={user.avatar && user.avatar.url}
                      name={user.name}
                      outline={'solid 4px white'}
                      shadow={'rgba(0,0,0,0.6) 3px 3px 15px'}
                    />
                  </Tooltip>
                </>
              ) : (
                <a href={LoginURL} target="_blank" rel="noreferrer">
                  <Button rounded={'full'} bg={'primary.100'} variant={'unstyled'} px={'1rem'}>
                    <Text color={'white'}>Đăng nhập</Text>
                  </Button>
                </a>
              )}
            </HStack>
          ) : (
            <Button
              bg={'primary.100'}
              variant={'unstyled'}
              px={'0.8rem'}
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
