import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleJob } from '../../API';
import { Job } from '../../Redux/type';
import { IoLocation } from 'react-icons/io5';
import { FaMoneyBillWave, FaSuitcase, FaUser } from 'react-icons/fa6';
import JobApplyModal from '../Widgets/JobApplyModal';
import useStats from '../../Utilities/useStats';

export default function SingleJob() {
  const { id } = useParams();
  useStats();
  const [job, setJob] = useState<Job | null>(null);
  useEffect(() => {
    getSingleJob(id || '').then((res) => {
      setJob(res.data);
    });
  }, [id]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* //Apply job form modal */}
      <JobApplyModal isOpen={isOpen} onClose={onClose} jobID={id || ''} />
      <Box w={'100%'} pb={'20rem'}>
        <Image
          src={'/cover.jpg'}
          h={'24rem'}
          w={'100%'}
          objectFit={'cover'}
          pos={'fixed'}
          zIndex={0}
        />
        <Box
          top={'20rem'}
          minH={'30rem'}
          w={'100%'}
          pos={'relative'}
          zIndex={1}
          bg={'white'}
          borderTopRadius={'4rem'}
          p={{ base: 4, md: '2rem' }}
        >
          {job !== null ? (
            <Container maxW={'container.lg'} my={'2rem'}>
              <Flex justify={'space-between'} align={'center'} mb={4}>
                <Heading as={'h1'} fontSize={'2rem'} fontWeight={'600'} mb={2}>
                  {job?.title}
                </Heading>
                <Button
                  bg={'primary.100'}
                  color={'white'}
                  _hover={{ bg: 'primary.150' }}
                  onClick={onOpen}
                >
                  Ứng tuyển
                </Button>
              </Flex>
              <Flex justify={'space-between'} align={'center'} mb={4}>
                <Flex>
                  <FaUser size={'1.5rem'} />

                  <Text ml={2} fontSize={'1.2rem'} mb={4}>
                    {job?.field} - {job?.position}
                  </Text>
                </Flex>
                <Flex justify={'center'} align={'center'}>
                  <IoLocation size={'1.5rem'} />
                  <Text fontSize={'1.2rem'} ml={2}>
                    Địa điểm: {job?.location}
                  </Text>
                </Flex>
              </Flex>
              <Flex justify={'space-between'} align={'center'} mb={4}>
                <Flex>
                  <FaMoneyBillWave size={'1.5rem'} />

                  <Text ml={2} fontSize={'1.2rem'} mb={4} fontWeight={600}>
                    Lương: {job?.salary}
                  </Text>
                </Flex>
                <Flex>
                  <FaSuitcase size={'1.5rem'} />
                  <Text fontSize={'1.2rem'} ml={4}>
                    Hình thức: {job?.type}
                  </Text>
                </Flex>
              </Flex>
              <Heading as={'h2'} fontSize={'1.5rem'} fontWeight={'600'} mb={2} mt={4}>
                Mô tả công việc
              </Heading>
              <Box
                className="quill-snow"
                dangerouslySetInnerHTML={{ __html: job.description || '' }}
              />
              <Heading as={'h2'} fontSize={'1.5rem'} fontWeight={'600'} mb={2} mt={4}>
                Yêu cầu công việc
              </Heading>
              <Box
                className="quill-snow"
                dangerouslySetInnerHTML={{ __html: job.requirement || '' }}
              />
            </Container>
          ) : (
            <Container maxW={'container.xl'} py={'6rem'}>
              <Spinner size={'xl'} />
              <Heading as={'h1'} fontSize={'2rem'} fontWeight={'600'} mb={4}>
                Loading...
              </Heading>
            </Container>
          )}
        </Box>
      </Box>
    </>
  );
}
