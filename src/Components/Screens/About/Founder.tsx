import { Box, Container, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import {} from 'react';
import ChakraCarousel from '../../Widgets/ChakraCarousel';

export default function Founder() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container maxW={'container.lg'} mt="2rem">
      <Box as="section" mt="2rem">
        <Text color="primary.100" fontSize="3xl" fontWeight="bold" align="center">
          Lời nhắn từ nhà sáng lập
        </Text>
      </Box>
      <Box pb={'6rem'}>
        <ChakraCarousel slidePerView={1} gap={16}>
          {founderQuote.map((qu, id) => (
            <Flex
              w={'100%'}
              h={{ base: '38rem', lg: '27rem' }}
              pos={'relative'}
              key={id}
              justify={'center'}
              align={'center'}
            >
              <Image
                w={'100%'}
                h={{ base: '35rem', lg: '25rem' }}
                src="/Khungreview.svg"
                pos={'absolute'}
                zIndex={10}
                draggable={false}
                objectFit={{ base: 'cover', lg: 'contain' }}
                rounded={{ base: '2rem', lg: '0' }}
              />
              <Flex w={'min(100%, 2.92 * 25rem)'} align={'center'}>
                <Flex
                  flexDir={{ base: 'column', md: 'row' }}
                  align={'center'}
                  w={'100%'}
                  zIndex={11}
                  px={{ base: '1.5rem', lg: '3rem' }}
                >
                  <Flex justify={'center'} align={'center'} direction={'column'}>
                    <Image
                      w={{ base: '6rem', md: '10rem' }}
                      h={{ base: '6rem', md: '10rem' }}
                      draggable={false}
                      src={qu.img}
                      objectPosition={'bottom'}
                      rounded={'full'}
                      objectFit={'cover'}
                    />
                    <Text color={'white'} fontWeight={'800'} fontSize={'xl'} mt={4}>
                      {qu.name}
                    </Text>
                    <Text color={'white'} fontWeight={'600'} fontSize={'md'}>
                      {qu.position}
                    </Text>
                  </Flex>
                  <Box
                    ms={{ md: '2rem', base: '0' }}
                    color={'white'}
                    fontWeight={300}
                    w={'26rem'}
                    zIndex={11}
                    textAlign={'justify'}
                    px={{ base: '4rem', md: 0 }}
                    dangerouslySetInnerHTML={{ __html: qu.quote }}
                  />
                  {!isMobile && (
                    <Image
                      draggable={false}
                      src="/logoblack.svg"
                      w={'6rem'}
                      zIndex={11}
                      ms={'auto'}
                    />
                  )}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Box>
    </Container>
  );
}

const founderQuote = [
  {
    name: 'Nguyễn Thế Hiệp',
    position: 'Founder - Chủ Tịch HĐTV',
    quote:
      '<p>Phân bố các nguồn lực phù hợp cho những nhu cầu cụ thể chính là cách mà nền kinh tế vận hành trong thời kỳ chuyển đổi cơ cấu.</p></br><p> Nhận thấy nhu cầu vận chuyển hàng hoá kinh doanh vẫn đang phải chia sẻ nguồn lực của mình với người dùng cơ bản trên cùng mức giá. <b>UDS - Xe Dù</b> tin rằng chúng tôi mang đến một giải pháp toàn diện hơn, tiết kiệm hơn và tối ưu lưu lượng vận chuyển cho toàn hệ thống.</p>',
    img: '/about/PBQK4564.webp'
  }
  // {
  //   name: 'Loc Q. Huynh',
  //   position: 'Co-founder - CTO',
  //   quote: `<p>
  //       Trải qua hơn một thập kỉ phát triển, ngành vận chuyển nội thành TPHCM đã đạt được những thành tựu đáng kể.
  //       Với hệ thống vận chuyển hiện tại, chúng ta đã có thể vận chuyển đa số hàng hóa từ điểm A đến điểm B trong thời gian ngắn.
  //       Tuy nhiên, chúng tôi tin rằng mình có thể làm tốt hơn nữa.
  //       <b>
  //         Xe dù - UDS
  //       </b>
  //       được sinh ra với mục tiêu cải thiện những điểm yếu của các phương thức vận chuyển <b>nội thành TPHCM</b> hiện hữu, hướng tới vận hành một hệ thống logistics hiệu quả, chi phí thấp và hướng tới con người.
  //     </p>`,
  //   img: '/about/PBQK4576.webp'
  // }
];
