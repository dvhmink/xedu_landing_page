import { Box, Flex, Heading, Image, Text, Wrap } from '@chakra-ui/react';
import {} from 'react';
import { motion } from 'framer-motion';

export default function UDSTarget() {
  return (
    <>
      <Box bg={'primary.100'} w={'100%'} minH={'100vh'} px={[0, '2rem']}>
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
                src={'/about/tdh.png'}
                w={'max'}
                maxH={'30rem'}
                objectFit={'cover'}
                right={'5%'}
              />
            </motion.div>
          </Flex>
          <Box w={['90%', '80%', '50%', '35%']}>
            <Heading as={'h2'} fontSize={'4xl'}>
              Tối ưu hóa lưu lượng
            </Heading>
            <Text textAlign={'justify'} fontSize={'md'}>
              Một đơn hàng giao nhanh được tối ưu, chính là đơn hàng nằm trong một hệ thống tối ưu.
              UDS được phát triển nhằm đảm bảo tính ổn định và đúng giờ của tất cả các đơn hàng, từ
              đó luôn đảm bảo tính tối ưu của mỗi đơn hàng riêng lẻ và ngược lại với thời gian nhanh
              nhất và lưu lượng nhiều nhất.
            </Text>
            <Text textAlign={'justify'} fontSize={'md'} mt={4}>
              Xa hơn của một hệ thống hàng hóa với lưu lượng được đảm bảo, chính là một nền kinh tế
              vận hành liên tục và hiệu quả nhất.
            </Text>
          </Box>
        </Wrap>
        <Wrap color={'white'} py={'4rem'} justify={'center'}>
          <Box w={['90%', '80%', '50%', '35%']}>
            <Heading as={'h2'} fontSize={'4xl'}>
              Đa dạng kênh thông tin
            </Heading>
            <Text textAlign={'justify'} fontSize={'md'}>
              Đến với UDS, đối tác bán hàng sẽ có đa kênh giao tiếp với khách hàng, đa kênh quản lý
              hàng bán, quản lý người mua để phục vụ cho Tương tác Đa kênh.
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
                src={'/about/ktt.png'}
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
                src={'/about/cds.png'}
                w={'max'}
                maxH={'30rem'}
                objectFit={'cover'}
                right={'5%'}
              />
            </motion.div>
          </Flex>
          <Box w={['90%', '80%', '50%', '35%']}>
            <Heading as={'h2'} fontSize={'4xl'}>
              Chuyển đổi số toàn phần.
            </Heading>
            <Text textAlign={'justify'} fontSize={'md'}>
              “Chuyển đổi số Doanh nghiệp của bạn, chính là chuyển đổi số 50% hệ thống. Chuyển đổi
              số khách hàng, đối tác và mạng lưới của bạn chính là chuyển đổi số toàn phần”. Đó là
              châm ngôn và hướng đi tương lai của UDS với nhiều sản phẩm khác sẽ được ra mắt trong
              thời gian tới.
            </Text>
          </Box>
        </Wrap>
      </Box>
      <Box w={'100%'} h={'1rem'} bg={'primary.200'} />
    </>
  );
}
