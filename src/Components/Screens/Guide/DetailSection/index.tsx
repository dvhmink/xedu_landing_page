import { Badge, Box, Card, CardBody, Flex, Heading, Link, Text } from '@chakra-ui/react';
import useDetail from './useDetail';
import { FaUser } from 'react-icons/fa6';
import { changeCloudflareVariant, convertDate } from '../../../../Utilities/toolkits';
import DynamicImage from '../../../Widgets/DynamicImage';

export default function DetailSection() {
  const { detail, isMobile } = useDetail();
  if (!detail) {
    return null;
  }
  return (
    <Card variant={'xedu'} w={'100%'}>
      <CardBody p={{ base: 4, md: 8 }}>
        <Heading mb={4} as={'h1'} fontSize={'2xl'} fontWeight={'bold'}>
          {detail.title}
        </Heading>
        {detail.createdBy && (
          <Flex align={'center'}>
            <FaUser />
            <Text ms={2} fontSize={'sm'}>
              {detail.createdBy.name}
            </Text>
            <Text ms={'auto'} fontSize={'sm'}>
              Cập nhật: {convertDate(detail.updatedAt)}
            </Text>
          </Flex>
        )}
        <Text mt={4} fontSize={'sm'} textAlign={'left'}>
          Từ khóa:
          {detail.keywords.map((keyword, index) => (
            <Badge key={index} ml={2} colorScheme={'purple'}>
              {keyword}
            </Badge>
          ))}
        </Text>
        <Heading as={'h2'} fontSize={'xl'} mt={'2rem'}>
          Mô tả
        </Heading>
        <Box
          className="tiptap-editor"
          mt={4}
          dangerouslySetInnerHTML={{ __html: detail.description }}
        />
        {detail.steps.length > 0 && (
          <Heading as={'h2'} fontSize={'xl'} mt={'2rem'}>
            Bước thực hiện
          </Heading>
        )}
        {detail.steps.map((step, index) => (
          <Flex flexDir={'column'} key={index} mt={'2rem'}>
            <Heading as={'h3'} fontSize={'lg'}>
              Bước {index + 1}: {step.title}
            </Heading>
            <Box
              className="tiptap-editor"
              mt={4}
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
            {step.image?.url && (
              <Link
                href={changeCloudflareVariant(step.image.url, 'public')}
                target={'_blank'}
                rel={'noreferrer'}
                cursor={'pointer'}
              >
                {/* <Image
                  my={'1rem'}
                  src={changeCloudflareVariant(step.image.url, !isMobile ? 'fullhd' : 'medium480')}
                  alt={step.title}
                  h={{ base: '15rem', md: '30rem' }}
                  objectFit={'contain'}
                /> */}
                <DynamicImage
                  cloudFlareUrl={step.image.url}
                  clearVariant={!isMobile ? 'large960' : 'medium480'}
                  blurVariant="blurmd"
                  // h={{ base: '15rem', md: '30rem' }}
                  objectFit={'contain'}
                  w={'100%'}
                />
              </Link>
            )}
          </Flex>
        ))}
      </CardBody>
    </Card>
  );
}
