import {
  Badge,
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
import Sidebar from './Sidebar';
import DetailSection from './DetailSection';
import useGuide from './useGuide';
import { changeCloudflareVariant, convertDate } from '../../../Utilities/toolkits';
import useStats from '../../../Utilities/useStats';

export default function Guide() {
  useStats();
  const { isMobile, routeName, instructions } = useGuide();
  const xeduStr = 'XEDÙ';
  return (
    <Container maxW="container.xl" py={4}>
      {routeName === 'home' && (
        <>
          <Box w={'fit-content'}>
            <Heading as={'h1'} fontSize={'5xl'} fontWeight={'500'} color={'primary.100'}>
              Hướng dẫn sử dụng
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
          <Wrap justify={'center'} spacing={8} mb={'8rem'}>
            {instructions.map((instruction, index) => (
              <Card
                w={'24rem'}
                key={index}
                minH={'15rem'}
                shadow={'rgba(0,0,0,0.4) 5px 5px 21px'}
                rounded={'xl'}
                transitionDuration={'0.5s'}
                _hover={{ shadow: 'rgba(0,0,0,0.6) 5px 5px 25px' }}
                as={Link}
                href={`/guide/${instruction.routeName}`}
              >
                <Image
                  src={
                    instruction.thumbnail
                      ? changeCloudflareVariant(instruction.thumbnail.url, 'medium480')
                      : '/cover.jpg'
                  }
                  w={'100%'}
                  roundedTop={'xl'}
                  h={'10rem'}
                  objectFit={'cover'}
                />

                <CardBody>
                  <Heading as={'h3'} fontSize={'2xl'} fontWeight={'bold'} mb={2}>
                    {instruction.name}
                  </Heading>
                  <Text fontSize={'sm'} fontWeight={'thin'} mb={2}>
                    {convertDate(instruction.updatedAt)}
                  </Text>
                  {instruction.keywords.slice(0, 5).map((keyword, index) => (
                    <Badge key={index} mr={2} mb={2} colorScheme={'purple'}>
                      {keyword}
                    </Badge>
                  ))}
                  {instruction.keywords.length > 5 && (
                    <Badge mr={2} mb={2} colorScheme={'purple'}>
                      ...
                    </Badge>
                  )}
                </CardBody>
              </Card>
            ))}
          </Wrap>
        </>
      )}
      {routeName !== 'home' && (
        <Flex gap={4}>
          {!isMobile && <Sidebar />}
          <DetailSection />
        </Flex>
      )}
    </Container>
  );
}
