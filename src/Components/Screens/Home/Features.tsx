import { Box, Wrap, Heading, Image, Text, Flex } from '@chakra-ui/react';
import {} from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <>
      <Box
        bg={'primary.100'}
        w={'100%'}
        minH={'100vh'}
        px={[0, '2rem']}
        // bg={'bgLight'}
        // _dark={{ bg: 'bgDark' }}
      >
        <Wrap color={'white'} py={'4rem'} justify={'center'}>
          <Flex w={['80%', '60%', '45%', '50%']} justify={'center'}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Image
                src={'/home/feature/toiuu.webp'}
                w={'max'}
                maxH={'30rem'}
                objectFit={'cover'}
                right={'5%'}
              />
            </motion.div>
          </Flex>
          <Box w={['90%', '80%', '50%', '35%']}>
            <Heading as={'h2'} fontSize={'4xl'}>
              Tối ưu thời gian vận chuyển chỉ tối đa 24H
            </Heading>
            <Text textAlign={'justify'} fontSize={'md'}>
              Sử dụng thuật toán tối ưu lộ trình kết hợp với việc phân bổ nguồn lực chỉ tập trung
              cho Người bán hàng và Doanh nghiệp, UDS-Xe Dù do chúng tôi tạo ra luôn ưu tiên luân
              chuyển hàng hóa liên tục, hạn chế điểm trung chuyển và chia nhỏ thời gian chờ đơn trên
              khắp phạm vi TP. Hồ Chi Minh (không bao gồm Cần Giờ - Củ Chi).
            </Text>
          </Box>
        </Wrap>
        <Wrap color={'white'} py={'4rem'} justify={'center'}>
          <Box w={['90%', '80%', '50%', '35%']}>
            <Heading as={'h2'} fontSize={'4xl'}>
              Quản lý dữ liệu khách hàng với CRM tích hợp
            </Heading>
            <Text textAlign={'justify'} fontSize={'md'}>
              Không định hướng như các Ứng dụng vận chuyển hàng hóa, UDS của chúng tôi định hình là
              người đồng hành với Khách hàng trên con đường tối ưu hệ thống và chuyển đổi số từ ngay
              những ngày đầu. Sử dụng dịch vụ Giao hàng của Xe Dù, bạn và doanh nghiệp nhỏ của mình
              đã có ngay hệ thống CRM - Customer Relationship Management (Quản lý quan hệ khách
              hàng). Với tiện ích này, bạn hoàn toàn có thể quản lý dữ liệu giữa Doanh nghiệp và
              Khách hàng với những chỉ số đo lường cần thiết.
            </Text>
          </Box>
          <Flex w={['80%', '60%', '45%', '50%']} justify={'center'}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Image
                src={'/home/feature/crm.webp'}
                w={'max'}
                maxH={'30rem'}
                objectFit={'cover'}
                right={'5%'}
              />
            </motion.div>
          </Flex>
        </Wrap>
        <Wrap color={'white'} py={'4rem'} justify={'center'}>
          <Flex w={['80%', '60%', '45%', '50%']} justify={'center'}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Image
                src={'/home/feature/quanli.webp'}
                w={'max'}
                maxH={'30rem'}
                objectFit={'cover'}
                right={'5%'}
              />
            </motion.div>
          </Flex>
          <Box w={['90%', '80%', '50%', '35%']}>
            <Heading as={'h2'} fontSize={'4xl'}>
              Quản lý Danh mục: Sản phẩm - Chi nhánh và Kho
            </Heading>
            <Text textAlign={'justify'} fontSize={'md'}>
              Chỉ với một Tài khoản Đối tác duy nhất với UDS-Xe Dù, bạn đã có thể quản lý Danh mục
              sản phẩm hàng hóa của mình. Bên cạnh đó, quý đối tác có thể thiết lập Profile để tạo
              thêm Chi nhánh hoặc Kho để dễ dang thao tác đặt đơn cũng như quản lý lịch trình và số
              lượng hàng hóa từ các Địa điểm trên.
            </Text>
          </Box>
        </Wrap>
      </Box>
      <Box w={'100%'} h={'1rem'} bg={'primary.200'} />
    </>
  );
}
