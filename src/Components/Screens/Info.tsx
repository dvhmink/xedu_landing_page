import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Wrap
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { getPages } from '../../Redux/Dux/uiDux';
import { convertDate } from '../../Utilities/toolkits';
import useStats from '../../Utilities/useStats';
import DynamicImage from '../Widgets/DynamicImage';

export default function Info() {
  const { pages } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);
  useStats();
  const xeduStr = 'XEDÙ';
  return (
    <Container maxW={'container.xl'} minH={'80vh'} py={'4rem'}>
      <Box w={'fit-content'}>
        <Heading as={'h1'} fontSize={'5xl'} fontWeight={'500'} color={'primary.100'}>
          Thông tin bạn cần biết về
        </Heading>
        <Flex justify={'space-between'}>
          {xeduStr.split('').map((char, index) => (
            <Heading
              color={`primary.${(index + 1) * 50}`}
              key={index}
              fontSize={'8xl'}
              fontWeight={900}
            >
              {char}
            </Heading>
          ))}
        </Flex>
      </Box>
      <Wrap w={'100%'} mt={'2rem'} spacing={'2rem'} justify={'center'}>
        {pages.map((page, index) => (
          <Link
            href={`/info/${page.routeName}`}
            key={index}
            _hover={{ textDecor: 'none' }}
            display={'flex'}
            w={{ base: '80%', xs: '80%', md: '50%', lg: '30%', xl: '25%', '2xl': '20%' }}
          >
            <Card
              w={'100%'}
              minH={'15rem'}
              maxW={'24rem'}
              shadow={'rgba(0,0,0,0.4) 5px 5px 21px'}
              rounded={'xl'}
              transitionDuration={'0.5s'}
              _hover={{ shadow: 'rgba(0,0,0,0.6) 5px 5px 25px' }}
            >
              {page?.thumbnail.length > 0 ? (
                // <Image
                //   src={page.thumbnail[0].url}
                //   w={'100%'}
                //   roundedTop={'xl'}
                //   objectFit={'cover'}
                // />
                <DynamicImage
                  cloudFlareUrl={page.thumbnail[0].url}
                  clearVariant="medium480"
                  blurVariant="blursm"
                  h={'10rem'}
                  w={'100%'}
                  roundedTop={'xl'}
                  objectFit={'cover'}
                />
              ) : (
                <Image src={'/cover.jpg'} h={'10rem'} roundedTop={'xl'} objectFit={'cover'} />
              )}
              <CardBody>
                <Heading as={'h2'} fontSize={'2xl'} fontWeight={'800'}>
                  {page.name}
                </Heading>
                <Text fontSize={'sm'} fontWeight={'thin'} mb={2}>
                  {convertDate(page?.updatedAt)}
                </Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </Wrap>
    </Container>
  );
}
