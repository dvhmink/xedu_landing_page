import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import {} from 'react';

export default function OurStory() {
  return (
    <Container maxW={'container.lg'} mt="2rem">
      <Flex mt="2rem" justify={'center'} flexDir={'column'} w={'100%'}>
        <Box>
          <Text color="primary.100" fontSize="3xl" fontWeight="bold" align="center">
            Câu chuyện của chúng tôi
          </Text>
          <Text color="primary.150" mt="1rem" fontSize={'lg'} textAlign="justify">
            Chúng tôi là tập hợp những người trẻ tuổi mang trong mình khao khát khởi nghiệp như bao
            thế hệ thanh niên Việt Nam. Năm 2022, thị trường kinh doanh tại Việt Nam đang bước vào
            một không gian mới với sự phát triển mạnh mẽ của Thương mại điện tử và Chuyển đổi số.
            Trong khi đó, những người bán hàng vẫn gặp nhiều hạn chế gây ra bởi vận chuyển. Đây là
            vấn đề cấp thiết cần được giải quyết để có thể khai thông sức mạnh toàn diện của một nền
            kinh tế lấy chuyển đổi số làm đầu.
          </Text>
          <Text color="primary.150" mt="1rem" fontSize={'lg'} textAlign="justify">
            Nhìn được khả năng có thể cải thiện hệ thống Logistic, chúng tôi bắt tay dành hơn 1 năm
            để nghiên cứu và tạo ra một hệ thống có đầy đủ chức năng và tầm nhìn dài hạn có thể giải
            quyết những vấn đề trên.
          </Text>
          <Text color="primary.150" mt="1rem" fontSize={'lg'} textAlign="justify">
            Tháng 6 năm 2023, The Molotov Company Limited được thành lập với UDS (Umbrella Delivery
            System) là phòng ban công nghệ chủ đạo với XE DÙ sản phẩm đầu tiên được mang ra thị
            trường. Xe Dù của UDS lấy Logistic làm “Cốt lõi vận hành” và Công nghệ cho “Tối ưu Tương
            tác” ba bên giữa UDS – Người bán – Người nhận.
          </Text>
        </Box>
        <Image
          h="18rem"
          w={'100%'}
          objectFit="cover"
          mt="1rem"
          rounded={'2xl'}
          src="/about/PBQK4516.webp"
        />
      </Flex>
    </Container>
  );
}
