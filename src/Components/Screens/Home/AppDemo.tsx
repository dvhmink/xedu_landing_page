import { Box, Flex, Heading, Image, Link, Text, Wrap } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MobileAppURL } from '../../../Constants';

export default function AppDemo() {
  return (
    <Flex
      bg={'bgLight'}
      h={'94rem'}
      align={'center'}
      flexDir={{ base: 'column', md: 'row' }}
      pos={'relative'}
    >
      <Heading
        as={'h1'}
        fontSize={{ base: '3xl', sm: '4xl' }}
        pos={'absolute'}
        left={'5%'}
        top={{ base: '2rem', md: '4rem' }}
      >
        Ứng dụng trên nền web, hỗ trợ trên mọi loại thiết bị
      </Heading>
      <motion.img
        src={'/home/demo/xedu_mock_type3_1.webp'}
        style={{
          height: '29rem',
          objectFit: 'contain',
          position: 'absolute',
          top: '12rem',
          left: '5%'
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        viewport={{ once: true }}
      />
      <motion.img
        src={'/home/demo/xedu_mock_type4.webp'}
        style={{
          height: '29rem',
          objectFit: 'cover',
          objectPosition: 'left',
          position: 'absolute',
          top: '12rem',
          left: 'calc(5% + 10rem)',
          width: 'calc(95% - 10rem)',
          maxWidth: '14rem'
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        viewport={{ once: true }}
      />
      <motion.img
        src={'/home/demo/xedu_mock_type5.webp'}
        style={{
          height: '36rem',
          objectFit: 'cover',
          objectPosition: 'left',
          position: 'absolute',
          top: '12rem',
          left: 'calc(5% + 25rem)',
          width: 'calc(95% - 25rem)',
          maxWidth: '64rem'
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.75,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        viewport={{ once: true }}
      />

      <motion.img
        src={'/home/demo/IMG_5961.PNG'}
        style={{
          height: '40rem',
          maxWidth: '75%',
          objectFit: 'contain',
          position: 'absolute',
          top: '54rem',
          right: 0
        }}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        viewport={{ once: true }}
      />
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        pos={'absolute'}
        top={{ base: '44rem', sm: '50rem', md: '60rem' }}
        left={'3%'}
        w={{ base: '90%', sm: '80%', md: '60%', xl: '42%' }}
        gap={'2rem'}
        align={'center'}
      >
        <Image
          src={'/home/demo/logo_xedu_client.png'}
          w={'8rem'}
          h={'8rem'}
          rounded={'2rem'}
          display={{
            base: 'none',
            md: 'block'
          }}
        />

        <Heading as={'h1'} fontSize={{ base: '2xl', sm: '4xl' }}>
          Ứng dụng di động Xe dù
        </Heading>
      </Flex>
      <Box
        pos={'absolute'}
        top={{ base: '54rem', sm: '60rem', md: '72rem' }}
        left={'3%'}
        w={{ base: '90%', sm: '80%', md: '60%', xl: '42%' }}
        pb={'2rem'}
        backdropFilter={'blur(5px)'}
      >
        <Text textAlign={'justify'} fontSize={{ base: 'md', sm: 'lg' }}>
          Ứng dụng hỗ trợ trên cả hai hệ điều hành iOS và Android.
        </Text>
        <Wrap mt={'2rem'} spacing={'1rem'}>
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
      </Box>
    </Flex>
  );
}
