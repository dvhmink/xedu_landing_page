import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';
import {} from 'react';
import ChakraCarousel from '../../Widgets/ChakraCarousel';
import { motion } from 'framer-motion';
export default function CustomerResponse() {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const CustomerResponse = [
    {
      shopName: 'Chí Nguyện',
      title: 'Giám đốc CTY Công nghệ viễn thông OCT',
      avatar: '/customers/oct.png',
      comment:
        '<p>Dù chưa phát hành app và đang sử dụng hệ thống bằng web nhưng thao tác rất dễ như 1 app hoàn chỉnh. Ngược lại không cần phải tải app, shipper rất hợp tác với cửa hàng và nhân viên.<p/> <br/> <p>Giá thành hợp lý. Hy vọng Xe Dù nhanh có nhiều update mới để phục vụ khách hàng.<p/>',
      star: 5
    },
    {
      shopName: 'Tuấn Kiệt',
      title: 'Founder Kala Candela',
      avatar: '/customers/kala.png',
      comment:
        '<p>Xe dù là giải pháp tuyệt vời cho việc vận chuyển sản phẩm của chúng tôi tại khu vực thành phố Hồ Chí Minh với chi phí cực thấp giúp chúng tôi tự tin cung cấp dịch vụ freeship cho khách hàng của mình. Giao diện quản lí dễ sử dụng giúp mình training nhân viên rất đơn giản.<p/>',
      star: 5
    },
    {
      shopName: 'Chị Khánh Hà',
      title: 'Chủ shop đồ ăn thú cưng PET HAM ĂN',
      avatar: '/customers/pethaman.png',
      comment:
        '<p>Dịch vụ vận chuyển 3h với giá cạnh tranh giúp tụi mình giảm đáng kể chi phí giao hàng cũng như giúp mang đồ ăn đến các bé vẫn còn tươi tránh tình trạng hư hỏng.<p/>',
      star: 5
    },
    {
      shopName: 'Xfire',
      title: 'Chủ shop thời trang Xfire',
      avatar: '/customers/xfire.png',
      comment:
        '<p>Xe Dù- Dịch vụ giao hàng nhanh chóng, giá cả hợp lý, tối ưu chi phí , thái độ phục vụ tốt của nhân viên.  Dịch vụ vượt mong đợi với giá cả phải chăng.<p/>',
      star: 5
    }
  ];
  return (
    <Box w={'100%'} px={[0, '2rem']} py={'4rem'} bg={'bgLight'} _dark={{ bg: 'bgDark' }}>
      <Heading as={'h1'} fontSize={['3xl', '5xl']} textAlign={'center'}>
        PHẢN HỒI DỊCH VỤ
      </Heading>
      <Text
        fontSize={['lg', 'xl']}
        textAlign={'center'}
        pt={4}
        color={'primary.100'}
        _dark={{ color: 'primary.150' }}
        fontWeight={'bold'}
      >
        Cùng xem mọi người nói gì về UDS - Xe Dù
      </Text>
      <ChakraCarousel gap={32}>
        {CustomerResponse.map((post, index) => (
          <motion.div
            key={index}
            style={{ display: 'flex' }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: !isMobile && index < 4 ? 0.2 + (index + 1) * 0.2 : 0.1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <Flex flexDir={'column'} align={'center'}>
              <Avatar
                src={post.avatar}
                size={'xl'}
                shadow={'rgba(0, 0, 0, 0.3) 0px 3px 7px'}
                zIndex={31}
                transform={'translateY(50%)'}
                border={'8px solid white'}
              />
              <Card
                flexDirection="column"
                overflow="hidden"
                flex={1}
                p={5}
                pos={'relative'}
                variant={'xedu'}
              >
                <VStack mb={6} mt={10}>
                  <Heading
                    fontSize={{ base: 'xl', md: '2xl' }}
                    textAlign="center"
                    w="full"
                    color={'primary.150'}
                  >
                    {post.shopName}
                  </Heading>
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    textAlign="center"
                    px={4}
                    mb={2}
                    w="full"
                    color={'primary.100'}
                    _dark={{ color: 'primary.150' }}
                  >
                    {post.title}
                  </Text>
                  <Box
                    px={4}
                    textAlign={'justify'}
                    dangerouslySetInnerHTML={{ __html: post.comment }}
                  />
                </VStack>
              </Card>
            </Flex>
          </motion.div>
        ))}
      </ChakraCarousel>
    </Box>
  );
}
