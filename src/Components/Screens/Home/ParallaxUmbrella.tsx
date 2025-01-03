import { useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  useBreakpointValue,
  LinkBox,
  LinkOverlay,
  Container,
  Image,
  VStack,
  Link,
  Stack,
  Wrap
} from '@chakra-ui/react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { IoArrowDownCircleSharp } from 'react-icons/io5';
import { colors } from '../../../Theme/color';
import { MobileAppURL } from '../../../Constants';

function useParallax(value: MotionValue<number>, distance: number, offset = 0) {
  return useTransform(value, [0, 1], [-distance + offset, distance + offset]);
}

function ParallaxUmbrella() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const umbrellaImage = [
    {
      src: '/home/u1.png',
      y: useParallax(scrollYProgress, isMobile ? -300 : -200, isMobile ? 50 : 140),
      zIndex: 4
    },
    {
      src: '/home/u2.png',
      y: useParallax(scrollYProgress, isMobile ? -350 : -250, isMobile ? 100 : 200),
      zIndex: 3
    },
    {
      src: '/home/u3.png',
      y: useParallax(scrollYProgress, isMobile ? -400 : -300, isMobile ? 150 : 225),
      zIndex: 2
    },
    {
      src: '/home/u4.png',
      y: useParallax(scrollYProgress, isMobile ? -400 : -350, isMobile ? 150 : 250),
      zIndex: 1
    }
  ];
  const textY = useParallax(scrollYProgress, isMobile ? 40 : -120, isMobile ? 20 : 200);
  return (
    <Box
      w={'100%'}
      minH={['70rem', '60rem', '50rem', '70rem']}
      bg={'bgLight'}
      _dark={{ bg: 'bgDark' }}
    >
      {umbrellaImage.map((img, index) => (
        <motion.div
          animate={{ x: -(40 - (4 - img.zIndex) * 8) }}
          transition={{
            repeat: Infinity,
            delay: img.zIndex,
            repeatType: 'reverse',
            duration: 2,
            ease: 'easeInOut'
          }}
          style={{
            y: isMobile ? 0 : img.y,
            position: 'absolute',
            top: '12rem',
            right: '0',
            zIndex: 4 - index,
            width: !isMobile ? '50%' : '80%',
            height: '100vh'
          }}
          key={index}
        >
          <Box
            h={'50%'}
            bgImage={`url(${img.src})`}
            bgSize={'contain'}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
          />
        </motion.div>
      ))}
      <Box
        w={['90%', '80%', '80%', '50%']}
        position={'absolute'}
        top={'14rem'}
        left={['3%', '10%', '10%', '3%']}
        // left="3%"
        zIndex={5}
      >
        <motion.div
          style={{
            y: isMobile ? 0 : textY,

            backdropFilter: 'blur(2px)'
          }}
        >
          <Heading as={'h1'} fontSize={!isMobile ? '6xl' : '4xl'} mixBlendMode={'difference'}>
            Phương án giao hàng TPHCM cho doanh nghiệp và người bán
          </Heading>
          <Text
            fontSize={'xl'}
            fontWeight={'100'}
            color={'primary.100'}
            mt={'2rem'}
            _dark={{ color: 'primary.150' }}
          >
            Umbrella Delivery System là hệ thống Logistics công nghệ được nghiên cứu và hoàn thiện
            nhằm đảm bảo đơn hàng của quý khách hàng luôn được đến tay người nhận với thời gian
            không quá 24 tiếng. Đối với chúng tôi, chăm sóc người nhận và cải thiện dịch vụ của đối
            tác chính là chìa khóa của sự hoàn thiện dịch vụ của chúng ta.
          </Text>
          {isMobile ? <MobileLayoutDownLoadButton /> : <DesktopLayoutDownLoadButton />}
        </motion.div>
      </Box>
      <Flex ref={ref} position={'absolute'} top={'90vh'} left={'calc(50% - 1.5rem)'} zIndex={11}>
        <motion.div
          animate={{ y: 30 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1,
            ease: 'easeInOut'
          }}
        >
          <IoArrowDownCircleSharp size={'3rem'} color={colors.primary[100]} />
        </motion.div>
      </Flex>
    </Box>
  );
}

export default ParallaxUmbrella;

const MobileLayoutDownLoadButton = () => {
  return (
    <Box>
      <Flex mt={'4rem'} wrap={'wrap'} gap={2}>
        <LinkBox>
          <LinkOverlay href={'https://shop.xedu.com.vn'}>
            <Button
              rounded={'2xl'}
              bg={'secondary.200'}
              variant={'unstyled'}
              px={'2rem'}
              py={'1.5rem'}
              alignItems={'center'}
              display={'flex'}
              _hover={{ bg: 'primary.100' }}
            >
              <Text color={'white'}>Đăng nhập</Text>
            </Button>
          </LinkOverlay>
        </LinkBox>
        <LinkBox>
          <LinkOverlay href={'https://shop.xedu.com.vn/register'}>
            <Button
              rounded={'2xl'}
              variant={'unstyled'}
              border={'4px'}
              borderColor={'primary.100'}
              px={'2rem'}
              py={'calc(1.5rem - 4px)'}
              alignItems={'center'}
              display={'flex'}
              color={'primary.100'}
              _hover={{ bg: 'primary.100', color: 'white' }}
              _dark={{
                color: 'primary.150',
                borderColor: 'primary.150',
                _hover: { bg: 'primary.150', color: 'white' }
              }}
            >
              Đăng ký ngay
            </Button>
          </LinkOverlay>
        </LinkBox>
        <Button
          rounded={'2xl'}
          variant={'unstyled'}
          border={'4px'}
          borderColor={'secondary.200'}
          px={'2rem'}
          py={'calc(1.5rem - 4px)'}
          alignItems={'center'}
          display={'flex'}
          color={'secondary.200'}
          _hover={{ bg: 'secondary.200', color: 'white' }}
          _dark={{
            color: 'primary.150',
            borderColor: 'primary.150',
            _hover: { bg: 'primary.150', color: 'white' }
          }}
          onClick={() => {
            document.getElementById('price-generator')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Tra cứu phí giao hàng
        </Button>
      </Flex>
      <Container mt={'2rem'}>
        <VStack>
          <Text fontSize="2xl" as="b">
            Tải ứng dụng Xedu
          </Text>
          <Stack direction={['column', 'row']}>
            {/* App Store Button */}
            <Link
              href="https://apps.apple.com/vn/app/xe-d%C3%B9/id6478738477?l=vi"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="black"
                color="white"
                borderRadius="md"
                px={4}
                py={2}
                gap={2}
                boxShadow="md"
                minWidth="200px" /* Set a fixed width */
              >
                <Image src="\appstore.png" alt="Apple Icon" boxSize="24px" />
                <Box>
                  <Text fontSize="xs">Tải về trên</Text>
                  <Text fontWeight="bold" fontSize="lg">
                    App Store
                  </Text>
                </Box>
              </Box>
            </Link>

            {/* Google Play Button */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.xedu_client_app"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="black"
                color="white"
                borderRadius="md"
                px={4}
                py={2}
                gap={2}
                boxShadow="md"
                minWidth="200px" /* Set the same fixed width */
              >
                <Image src="\playstore.png" alt="Google Play Icon" boxSize="24px" />
                <Box>
                  <Text fontSize="xs">Tải trên</Text>
                  <Text fontWeight="bold" fontSize="lg">
                    Google Play
                  </Text>
                </Box>
              </Box>
            </Link>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

const DesktopLayoutDownLoadButton = () => {
  return (
    <Flex w={{ base: '100%', lg: '180%' }}>
      <Flex mt={'4rem'} wrap={'wrap'} gap={2}>
        <LinkBox>
          <LinkOverlay href={'https://shop.xedu.com.vn'}>
            <Button
              rounded={'2xl'}
              bg={'secondary.200'}
              variant={'unstyled'}
              px={'2rem'}
              py={'1.5rem'}
              alignItems={'center'}
              display={'flex'}
              _hover={{ bg: 'primary.100' }}
            >
              <Text color={'white'}>Đăng nhập</Text>
            </Button>
          </LinkOverlay>
        </LinkBox>
        <LinkBox>
          <LinkOverlay href={'https://shop.xedu.com.vn/register'}>
            <Button
              rounded={'2xl'}
              variant={'unstyled'}
              border={'4px'}
              borderColor={'primary.100'}
              px={'2rem'}
              py={'calc(1.5rem - 4px)'}
              alignItems={'center'}
              display={'flex'}
              color={'primary.100'}
              _hover={{ bg: 'primary.100', color: 'white' }}
              _dark={{
                color: 'primary.150',
                borderColor: 'primary.150',
                _hover: { bg: 'primary.150', color: 'white' }
              }}
            >
              Đăng ký ngay
            </Button>
          </LinkOverlay>
        </LinkBox>
        <Button
          rounded={'2xl'}
          variant={'unstyled'}
          border={'4px'}
          borderColor={'secondary.200'}
          px={'2rem'}
          py={'calc(1.5rem - 4px)'}
          alignItems={'center'}
          display={'flex'}
          color={'secondary.200'}
          _hover={{ bg: 'secondary.200', color: 'white' }}
          _dark={{
            color: 'primary.150',
            borderColor: 'primary.150',
            _hover: { bg: 'primary.150', color: 'white' }
          }}
          onClick={() => {
            document.getElementById('price-generator')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Tra cứu phí giao hàng
        </Button>
      </Flex>
      <Container mt={'2rem'}>
        <VStack>
          <Text fontSize="2xl" as="b">
            Tải ứng dụng Xe dù
          </Text>
          <Wrap spacing={'1rem'}>
            <Link href={MobileAppURL.APP_STORE} target="_blank" rel="noreferrer">
              <Image
                src={'/home/demo/Download_on_the_App_Store_Badge_VN_RGB_blk_100217.svg'}
                h={{ base: '3rem', md: '4rem' }}
                alt="Download on the App Store"
              />
            </Link>
            <Link href={MobileAppURL.GOOGLE_PLAY} target="_blank" rel="noreferrer">
              <Image
                src={'/home/demo/google-play-badge.png'}
                h={{ base: '3rem', md: '4rem' }}
                alt="Get it on Google Play"
              />
            </Link>
          </Wrap>
        </VStack>
      </Container>
    </Flex>
  );
};
