import { Box, Card, CardBody, Container, Flex, Heading, Image, Link, Wrap } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Blog } from '../../Redux/type';
import { getAllBlogeWeb } from '../../API';
import { useParams } from 'react-router-dom';
import { prettyDate } from '../../Utilities/toolkits';
import useStats from '../../Utilities/useStats';
import DynamicImage from '../Widgets/DynamicImage';

export default function Blogs() {
  const { skip, limit } = useParams();
  const [blogs, setBlogs] = useState<{ count: number; records: Blog[] }>({ count: 0, records: [] });
  const dispatch = useDispatch();
  useEffect(() => {
    getAllBlogeWeb(skip, limit).then((res) => {
      if (res.data) {
        setBlogs(res.data);
      }
    });
  }, [dispatch, skip, limit]);
  useStats();
  const xeduStr = 'XEDÙ';
  return (
    <Container maxW={'container.xl'} minH={'80vh'} py={'4rem'}>
      <Box w={'fit-content'}>
        <Heading as={'h1'} fontSize={'5xl'} fontWeight={'500'} color={'primary.100'}>
          Blogs của
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
        {blogs.records.map((blog) => (
          <Link
            href={`/blogs/${blog.routeName}`}
            key={blog.routeName}
            _hover={{ textDecor: 'none' }}
            display={'flex'}
            w={{ base: '80%', xs: '80%', md: '50%', lg: '30%', xl: '25%', '2xl': '20%' }}
          >
            <Card
              w={'100%'}
              // minH={'15rem'}
              maxW={'25rem'}
              shadow={'rgba(0,0,0,0.4) 5px 5px 21px'}
              rounded={'xl'}
              transitionDuration={'0.5s'}
              _hover={{ shadow: 'rgba(0,0,0,0.6) 5px 5px 25px' }}
            >
              {blog?.thumbnail.length > 0 ? (
                <DynamicImage
                  cloudFlareUrl={blog.thumbnail[0].url}
                  clearVariant="medium480"
                  blurVariant="blursm"
                  h={'14rem'}
                  w={'100%'}
                  roundedTop={'xl'}
                  objectFit={'cover'}
                />
              ) : (
                <Image
                  src={'https://placehold.co/400'}
                  h={'14rem'}
                  roundedTop={'xl'}
                  objectFit={'cover'}
                />
              )}
              <CardBody>
                <Heading as={'h2'} fontSize={'2xl'} fontWeight={'500'}>
                  {blog.title}
                </Heading>
                <Flex mt={'1rem'} justify={'space-between'}>
                  <Heading as={'h3'} fontSize={'md'} fontWeight={'400'}>
                    {blog.updatedUser?.name}
                  </Heading>
                  <Heading as={'h3'} fontSize={'md'} fontWeight={'400'}>
                    {prettyDate(blog.createdAt)}
                  </Heading>
                </Flex>
              </CardBody>
            </Card>
          </Link>
        ))}
      </Wrap>
    </Container>
  );
}
