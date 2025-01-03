import { Box, Container, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePage } from '../../API';
import { InfoPage } from '../../Redux/type';
import useStats from '../../Utilities/useStats';
import DynamicImage from '../Widgets/DynamicImage';

export default function SingleInfoPage() {
  const { routeName } = useParams();
  useStats();

  const [page, setPage] = useState<InfoPage | null>(null);
  useEffect(() => {
    getSinglePage(routeName || '').then(({ data }) => setPage(data));
  }, [routeName]);

  return (
    <Container maxW={'container.lg'} minH={'100vh'} pb={'6rem'} px={[4, '2rem']}>
      {page && (
        <>
          {page?.thumbnail.length > 0 ? (
            // <Image
            //   src={changeCloudflareVariant(page.thumbnail[0].url, 'large960')}
            //   h={'20rem'}
            //   w={'100%'}
            //   roundedBottom={'xl'}
            //   objectFit={'cover'}
            // />
            <DynamicImage
              cloudFlareUrl={page.thumbnail[0].url}
              clearVariant="large960"
              blurVariant="blurmd"
              h={'20rem'}
              w={'100%'}
              roundedBottom={'xl'}
              objectFit={'cover'}
            />
          ) : (
            <Image
              src={'/cover.jpg'}
              h={'20rem'}
              w={'100%'}
              roundedBottom={'xl'}
              objectFit={'cover'}
            />
          )}
          <Heading as={'h1'} fontSize={'5xl'} fontWeight={'600'} mt={'2rem'} color={'primary.100'}>
            {page.name}
          </Heading>
          <Box
            w={'100%'}
            mt={'2rem'}
            fontSize={'lg'}
            textAlign={'justify'}
            className="tiptap-editor"
          >
            <div dangerouslySetInnerHTML={{ __html: page.content || '' }} />
          </Box>
        </>
      )}
    </Container>
  );
}
