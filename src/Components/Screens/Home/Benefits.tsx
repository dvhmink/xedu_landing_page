import { Box, Flex, Heading, Image, Text, Wrap } from '@chakra-ui/react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Benefits() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <Box
      bg={'blackAlpha.50'}
      _dark={{
        bg: 'purple.900'
      }}
      w={'100%'}
      pb={'8rem'}
      position={'relative'}
      zIndex={20}
    >
      <Flex flexDir={'column'} alignItems={'center'}>
        <Heading as={'h1'} fontSize={['3xl', '5xl']} textAlign={'center'} pt={8}>
          Xe Dù của UDS có gì?
        </Heading>
        <Text
          fontSize={['lg', 'xl']}
          textAlign={'center'}
          pt={4}
          w={['90%', '75%', '60%', '50%']}
          color={'primary.100'}
          _dark={{ color: 'primary.200' }}
        >
          Umbrella Delivery System hay còn gọi là UDS được tạo ra như một giải pháp cho thị trường
          Thương mại điện tử đang phát triển mỗi ngày. Xe Dù chính là sản phẩm đầu tiên của UDS đến
          với người tiêu dùng Việt Nam.
        </Text>
      </Flex>
      <Wrap w={'100%'} justify={'space-evenly'} my={'1rem'} ref={scrollRef}>
        <Box
          w={{ sm: '25%', md: '25%', lg: '25%', base: '80%' }}
          px={'2'}
          minW={'15rem'}
          marginBlock={'1rem'}
        >
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
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
              <Image
                src={'/home/benefit/icon1.webp'}
                w={'100%'}
                maxW={350}
                objectFit={'contain'}
                h={'22rem'}
              />
              <Heading as={'h2'} fontSize={'3xl'} mt={'1rem'}>
                Cước phí cạnh tranh
              </Heading>
              <Text textAlign={'justify'}>
                Với nhu cầu vận chuyển trong ngày của doanh nghiệp đến người mua, UDS - Xe Dù đưa ra
                hai dịch vụ gồm Giao nhanh 3H và Tiêu chuẩn 24H với mức giá cạnh tranh nhất thị
                trường.
              </Text>
            </Flex>
          </motion.div>
        </Box>
        <Box
          w={{ sm: '25%', md: '25%', lg: '25%', base: '80%' }}
          px={'2'}
          minW={'15rem'}
          marginBlock={'1rem'}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            // style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
              <Image
                src={'/home/benefit/icon2.webp'}
                w={'100%'}
                maxW={350}
                objectFit={'contain'}
                h={'22rem'}
              />
              <Heading as={'h2'} fontSize={'3xl'} mt={'1rem'}>
                Từ 1 đến tối đa 24 tiếng
              </Heading>
              <Text textAlign={'justify'}>
                Với đơn giao Tiêu chuẩn 24h, đối tác được tùy chọn khung giờ giao phù hợp cách thời
                gian tạo đơn 5 Tiếng. Với đơn Nhanh 3H, khách hàng luôn được ưu tiên trong 1-2 tiếng
                sớm nhất từ khi đặt hàng và 3 tiếng khi bao gồm xử lý rủi ro.
              </Text>
            </Flex>
          </motion.div>
        </Box>
        <Box
          w={{ sm: '25%', md: '25%', lg: '25%', base: '80%' }}
          px={'2'}
          minW={'15rem'}
          marginBlock={'1rem'}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.75,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
              <Image
                src={'/home/benefit/icon3.webp'}
                w={'100%'}
                maxW={350}
                objectFit={'contain'}
                h={'22rem'}
              />
              <Heading as={'h2'} fontSize={'3xl'} mt={'1rem'}>
                Chuyển hoàn trong ngày
              </Heading>
              <Text textAlign={'justify'}>
                Với mục tiêu hạn chế tối đa vấn đề Trung chuyển và Lưu kho, hệ thống Umbrella
                Delivery System là hệ thống ưu tiên đơn hàng trong trạng thái chuyển hoàn sẽ đưa về
                lại người bán (Đối tác UDS) sớm nhất có thể trong 24 tiếng
              </Text>
            </Flex>
          </motion.div>
        </Box>
      </Wrap>
      <Image
        src="/home/purple_section.svg"
        minH={'5rem'}
        w={'100%'}
        objectFit={'cover'}
        pos={'absolute'}
        bottom={'0'}
        draggable={false}
      />
    </Box>
  );
}
