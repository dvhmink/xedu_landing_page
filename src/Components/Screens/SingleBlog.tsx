import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBlog } from '../../API';
import { Blog } from '../../Redux/type';
import { prettyDate } from '../../Utilities/toolkits';
import useStats from '../../Utilities/useStats';
import DynamicImage from '../Widgets/DynamicImage';

export default function SingleBlog() {
  const { routeName } = useParams();
  useStats();
  const [page, setPage] = useState<Blog | null>(null);
  useEffect(() => {
    getSingleBlog(routeName || '').then(({ data }) => setPage(data));
  }, [routeName]);

  return (
    <Container maxW={'container.lg'} minH={'100vh'} pb={'6rem'} px={[4, '2rem']}>
      {page && (
        <>
          {page?.thumbnail.length > 0 ? (
            // <Image
            //   src={page.thumbnail[0].url}
            //   h={'20rem'}
            //   w={'100%'}
            //   roundedBottom={'xl'}
            //   objectFit={'cover'}
            // />
            <DynamicImage
              cloudFlareUrl={page.thumbnail[0].url}
              blurVariant="blurmd"
              clearVariant="large960"
              h={'20rem'}
              w={'100%'}
              roundedBottom={'xl'}
              objectFit={'cover'}
            />
          ) : null}
          <Heading
            as={'h1'}
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight={'800'}
            mt={'2rem'}
            color={'primary.100'}
          >
            {page.title}
          </Heading>
          <Flex justify={'space-between'} align={'center'} mt={'1rem'}>
            <Text fontSize={'lg'} color={'gray.500'} mt={'1rem'}>
              Tác giả: {page.createdUser.name}
            </Text>
            <Text fontSize={'lg'} color={'gray.500'} mt={'1rem'}>
              {prettyDate(page.createdAt)}
            </Text>
          </Flex>
          <Flex
            flexDir={'column'}
            w={'100%'}
            mt={'2rem'}
            fontSize={'lg'}
            textAlign={'justify'}
            className="tiptap-editor"
            dangerouslySetInnerHTML={{ __html: page.description || '' }}
          />
        </>
      )}
    </Container>
  );
}
