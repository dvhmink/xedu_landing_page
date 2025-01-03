import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import {} from 'react';
import useStats from '../../Utilities/useStats';
import { Contact } from '../../Constants/contact.constant';

export default function ContactPage() {
  useStats();
  return (
    <Box w={'100%'} minH={'90vh'}>
      {/* Contact screen */}
      <Image
        src={'/PBQK4531.webp'}
        w={'100%'}
        h={'20rem'}
        objectFit={'cover'}
        objectPosition={'0% 70%'}
        roundedBottom={{ base: '2rem', md: '4rem' }}
      />
      <Container maxW={'container.md'}>
        <Heading
          textAlign={'center'}
          as={'h1'}
          fontSize={'5xl'}
          fontWeight={'600'}
          mt={'2rem'}
          color={'primary.100'}
        >
          Liên hệ
        </Heading>
        <Flex w={'100%'} justify={'space-between'} align={'flex-start'} mt={'2rem'} py={'4rem'}>
          <Box>
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
          </Box>
          <Box>
            <Text mb={'1rem'} maxW={'25rem'}>
              Địa chỉ: Lầu 4, 55 Bis Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh.
            </Text>
            <Text mb={'1rem'}>Liên hệ: {Contact.MOBILE}</Text>
            <Text mb={'1rem'}>E-mail: {Contact.EMAIL}</Text>
            <Text mb={'1rem'}>
              Website:{' '}
              <a href="https://xedu.com.vn" className="hover-underline-animation">
                xedu.com.vn
              </a>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
