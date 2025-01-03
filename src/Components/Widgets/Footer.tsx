import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Link,
  Text,
  Wrap
} from '@chakra-ui/react';
import { IoLogoFacebook } from 'react-icons/io5';
import { SiZalo } from 'react-icons/si';
import { Contact } from '../../Constants/contact.constant';

export default function Footer() {
  return (
    <Box w={'100%'} pos={'relative'} zIndex={90}>
      <Box w={'100%'} h={'1rem'} bg={'primary.200'} />
      <Box
        w={'100%'}
        minH={'30rem'}
        bg={'primary.25'}
        p={{ base: '1rem', md: '4rem' }}
        color={'white'}
      >
        <Wrap w={'100%'} justify={'space-evenly'}>
          <Box maxW={'30rem'} mx={4} my={'2rem'}>
            <Image src={'/XEdubyUDS.svg'} />
            <Text fontWeight={'600'} mt={'2rem'} lineHeight={'7'}>
              Umbrella Delivery System là hệ thống Logistics công nghệ được nghiên cứu và hoàn thiện
              nhằm đảm bảo đơn hàng của quý khách hàng luôn được đến tay người nhận với thời gian
              không quá 24 tiếng. Đối với chúng tôi, chăm sóc người nhận và cải thiện dịch vụ của
              đối tác chính là chìa khóa của sự hoàn thiện dịch vụ của chúng ta.
            </Text>
            <FormControl mt={'2rem'}>
              <FormLabel>Nhận thông tin qua email</FormLabel>
              <HStack spacing={0} w={'100%'}>
                <Input
                  type={'email'}
                  placeholder={'Email của bạn'}
                  variant={'filled'}
                  borderRadius={'0.5rem 0 0 0.5rem'}
                  bg={'primary.50'}
                  _hover={{ bg: 'primary.100' }}
                  _placeholder={{ color: 'primary.200' }}
                  focusBorderColor={'primary.200'}
                />
                <Button
                  borderRadius={'0 0.5rem 0.5rem 0'}
                  bg={'primary.150'}
                  color={'white'}
                  _hover={{ bg: 'primary.200' }}
                >
                  Gửi
                </Button>
              </HStack>
            </FormControl>
            <HStack mt={'2rem'} spacing={'2rem'}>
              <a href="https://www.facebook.com/xedu.delivery" target="_blank" rel="noreferrer">
                <IconButton
                  color={'facebook.600'}
                  icon={<IoLogoFacebook size={'3rem'} />}
                  aria-label="Xedu Facebook page"
                  h={'4rem'}
                  w={'4rem'}
                  _hover={{ transform: 'scale(1.1)' }}
                />
              </a>
              <a href="https://zalo.me/3655418066215852343" target="_blank" rel="noreferrer">
                <IconButton
                  color={'cyan.600'}
                  icon={<SiZalo size={'3rem'} />}
                  aria-label="Xedu Facebook page"
                  h={'4rem'}
                  w={'4rem'}
                  // bg={'primary.300'}
                  _hover={{ transform: 'scale(1.1)' }}
                />
              </a>
            </HStack>
          </Box>
          <Box maxW={'30rem'} mx={4} my={'2rem'}>
            <Flex flexDir={'column'} w={'100%'} justify={'flex-start'}>
              <Heading fontSize={'2xl'} mb={'2rem'}>
                Liên kết
              </Heading>
              {links.map((link, id) => (
                <Link href={link.link} mb={2} key={id}>
                  {link.title}
                </Link>
              ))}
            </Flex>
          </Box>
          <Box maxW={'30rem'} mx={4} my={'2rem'}>
            <Heading fontSize={'2xl'} mb={'2rem'}>
              CÔNG TY TNHH THE MOLOTOV
            </Heading>
            <Text fontWeight={'600'} mb={'1rem'}>
              Mã số thuế: 0317906883
            </Text>
            <Text fontWeight={'600'} mb={'1rem'}>
              Cấp ngày 28 tháng 06 năm 2023
            </Text>{' '}
            <Text fontWeight={'600'} mb={'1rem'}>
              Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM
            </Text>
            <Text mb={'1rem'} maxW={'25rem'} mt={'3rem'}>
              Địa chỉ: Lầu 4, 55 Bis Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh.
            </Text>
            <Text mb={'1rem'}>Liên hệ: {Contact.MOBILE}</Text>
            <Text mb={'1rem'}>E-mail: {Contact.EMAIL}</Text>
            <Text mb={'1rem'}>
              Website:{' '}
              <a href="https://themolotov.cloud" className="hover-underline-animation">
                themolotov.cloud
              </a>
            </Text>
            {/* <Image src={'/bocongthuong.png'} w={'10rem'} /> */}
          </Box>
        </Wrap>
      </Box>
    </Box>
  );
}

const links = [
  {
    title: 'Về chúng tôi',
    link: '/about'
  },

  {
    title: 'Blog',
    link: '/blogs'
  },
  {
    title: 'Thông tin',
    link: '/info'
  },
  {
    title: 'Hướng dẫn',
    link: '/guide/home'
  },
  {
    title: 'Tài liệu API',
    link: 'https://docs.xedu.com.vn/'
  },
  {
    title: 'Xe dù Developer',
    link: 'https://developer.xedu.com.vn/'
  },
  {
    title: 'Liên hệ',
    link: '/contact'
  },
  {
    title: 'Tuyển dụng',
    link: '/career'
  }
];
