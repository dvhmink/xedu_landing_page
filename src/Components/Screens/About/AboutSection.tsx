import { Box, Container, Image, Text } from '@chakra-ui/react';
import {} from 'react';

export default function AboutSection() {
  return (
    <Container as="section" mt="2rem" maxW={'container.xl'}>
      <Text color="primary.100" fontSize="3xl" fontWeight="bold" align="center">
        Chúng tôi là: Umbrella Delivery System !
      </Text>
      <Box display={{ base: 'block', xl: 'flex' }} as="section" mt="2rem">
        <Box w={{ sm: '100%', xl: '50%' }} color="primary.100">
          <Text fontSize="xl" textAlign={'justify'} pr={'2rem'}>
            Umbrella Delivery System viết tắt là UDS là phòng kinh doanh Logistic được phát triển và
            điều hành bởi Công ty TNHH Logistic và Chuyển đổi số The Molotov (The Molotov Company
            Limited). Thành lập ngày 28 tháng 6 năm 2023, The Molotov Company là Start-up công nghệ
            với 100% nguồn vốn, trí tuệ và con người Việt Nam. Mong muốn cung cấp một hệ sinh thái
            Thương mại điện tử lấy Logistic làm cốt lõi - Công nghệ thông tin làm nền tảng, ứng dụng
            Xe Dù - UDS chính là sản phẩm đầu tiên được tung ra thị trường.
          </Text>
        </Box>
        <Image
          w={{ base: '100%', xl: '80%' }}
          maxW={{ base: '100%', xl: '50%' }}
          sizes="cover"
          borderRadius="20px"
          src="/about/PBQK4501.webp"
        ></Image>
      </Box>
    </Container>
  );
}
