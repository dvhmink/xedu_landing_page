import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
  Wrap,
  useBreakpointValue
} from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../Theme/color';
import { getAllJobWeb } from '../../API';
import type { Job } from '../../Redux/type';
import { IoLocation } from 'react-icons/io5';
import { FiUsers } from 'react-icons/fi';
import { FaMoneyBillWave } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import useStats from '../../Utilities/useStats';

export default function JobPage() {
  const navigate = useNavigate();
  useStats();
  const mainContainer = useRef<HTMLDivElement>(null);
  const [skip, setSkip] = useState(0);

  const limit = 5;
  const [jobs, setJobs] = useState<{ count: number; totalQuantity?: number; records: Job[] }>({
    count: limit + 1,
    totalQuantity: 0,
    records: []
  });

  const [isScrolledDown, setIsScrolledDown] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        (mainContainer?.current?.offsetHeight || 0) + 100 ||
      isScrolledDown
    )
      return;
    setIsScrolledDown(true);
  }, [isScrolledDown, mainContainer]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const jobCardWidth = useBreakpointValue({ base: '90%', md: '75%' });
  useEffect(() => {
    if (skip < jobs.count && isScrolledDown && !isFetching) {
      setIsFetching(true);
      getAllJobWeb(skip, limit)
        .then((res) => {
          if (skip === 0) {
            setJobs(res.data);
          } else {
            setJobs((prev) => ({
              count: prev.count,
              totalQuantity: prev.totalQuantity,
              records: [...prev.records, ...res.data.records]
            }));
          }
          setSkip((prev) => prev + limit);
        })
        .finally(() => {
          setIsScrolledDown(false);
          setIsFetching(false);
        });
    }
  }, [skip, isScrolledDown, jobs.count, isFetching]);

  return (
    <Box w={'100%'} bg={'primary.25'} ref={mainContainer}>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Flex
          pos={'absolute'}
          justify={'center'}
          align={'center'}
          w={'100%'}
          minH={{ base: '28rem', md: '20rem' }}
          borderBottomRadius={{ base: '2rem', md: '6rem' }}
          bg={'white'}
          flexDir={'column'}
        ></Flex>
      </motion.div>
      <Flex
        justify={'center'}
        align={'center'}
        w={'100%'}
        minH={'20rem'}
        color={'primary.50'}
        flexDir={'column'}
      >
        <Flex flexDir={'column'} align={'center'} pos={'relative'} zIndex={10} px={4}>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          >
            <Heading as={'h1'} fontSize={{ base: '3xl', md: '6xl' }} fontWeight={'900'}>
              Việc làm tại Xe dù - UDS
            </Heading>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
          >
            <Text maxW={'50rem'} textAlign={'center'} fontSize={{ base: 'md', md: 'xl' }}>
              Hãy tham gia Xe dù - UDS, nơi sự đổi mới phát triển mạnh mẽ và công nghệ không có giới
              hạn. Với tư cách là người tiên phong về công nghệ, UDS đang thử sức thực hiện sứ mệnh
              định hình lại bối cảnh chuyển đổi số của Việt Nam và UDS cần những cá nhân đầy nhiệt
              huyết để trở thành một phần trong gia đình năng động này. Khám phá các cơ hội nghề
              nghiệp thú vị tại UDS và bắt đầu cuộc hành trình hứa hẹn sự phát triển, hợp tác và cơ
              hội tạo ra tác động tích cực cho cộng đồng.
            </Text>
          </motion.div>
        </Flex>
        {decors.map((decor, id) => (
          <motion.div
            key={id}
            initial={{
              y: Math.random() * 300 - 150,
              x: Math.random() * window.innerWidth - window.innerWidth / 2 - 100,
              rotate: Math.random() * 120 - 60
            }}
            animate={{
              y: Math.random() * 300 - 150,
              x: Math.random() * window.innerWidth - window.innerWidth / 2 - 100,
              rotate: Math.random() * 120 - 60
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              opacity: Math.random() * 0.2 + 0.4,
              height: '6rem',
              position: 'absolute',
              zIndex: 1,
              color: colors.primary[200]
            }}
          >
            <Image
              src={decor}
              alt={'decor'}
              h={{ base: '3rem', md: '6rem' }}
              color={'primary.200'}
            />
          </motion.div>
        ))}
      </Flex>
      <Container maxW={'container.xl'} minH={'50vh'} px={'1rem'}>
        <Flex flexDir={'column'} align={'center'} pt={'4rem'}>
          <HStack spacing={0} w={{ base: '100%', md: '50%' }} justify={'center'} align={'center'}>
            <Input
              name="search-jobs"
              placeholder="Tên công việc, ngành nghề, vị trí, ..."
              size={'lg'}
              rounded={'2rem 0 0 2rem'}
              variant={'filled'}
              bg={'primary.50'}
              _hover={{ bg: 'primary.100' }}
              _placeholder={{ color: 'primary.200' }}
              focusBorderColor={'primary.200'}
              color={'white'}
            />
            <Button
              rounded={'0 2rem 2rem 0'}
              size={'lg'}
              bg={'primary.150'}
              color={'white'}
              _hover={{ bg: 'primary.200' }}
            >
              Tìm kiếm
            </Button>
          </HStack>
          <Text mt={'1rem'} fontSize={'lg'} fontWeight={'600'} color={'white'}>
            Xe dù hiện đang cần tuyển {jobs.totalQuantity} nhân sự cho {jobs.count} vị trí.
          </Text>
        </Flex>
        <Wrap w={'100%'} justify={'space-evenly'} py={'4rem'}>
          {jobs.records.map((job, id) => (
            <motion.div
              key={id}
              style={{ width: jobCardWidth }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Box
                bg={'white'}
                p={'2rem'}
                rounded={'3xl'}
                w={'100%'}
                my={2}
                transitionDuration={'0.2s'}
                shadow={'#88449c 3px 3px 13px'}
                _hover={{
                  transform: 'translateY(-0.5rem) scale(1.02)',
                  shadow: '#d99cec 3px 3px 29px'
                }}
                onClick={() => navigate(`/career/${job._id}`)}
              >
                <Flex>
                  <Heading as={'h2'} fontSize={'2xl'} fontWeight={'300'} noOfLines={2}>
                    {job.title}
                  </Heading>
                  <Flex ms={'auto'} align={'center'}>
                    <FiUsers size={'1.5rem'} />
                    <Text fontSize={'1.5rem'} fontWeight={'400'} ml={2}>
                      {job.quantity}
                    </Text>
                  </Flex>
                </Flex>
                <Flex justify={'space-between'} align={'center'} mt={'1rem'}>
                  <Text fontSize={'md'} fontWeight={'600'}>
                    {job.field} - {job.position}
                  </Text>
                  <Text fontSize={'md'} fontWeight={'600'}>
                    {job.type}
                  </Text>
                </Flex>
                <Wrap justify={'space-between'} align={'center'} mt={'1rem'} maxW={'100%'}>
                  <Flex>
                    <FaMoneyBillWave size={'1.5rem'} />
                    <Text fontSize={'md'} fontWeight={'600'} ml={2}>
                      {job.salary}
                    </Text>
                  </Flex>
                  <Flex>
                    <IoLocation size={'1.5rem'} />
                    <Text fontSize={'md'}>{job.location}</Text>
                  </Flex>
                </Wrap>
              </Box>
            </motion.div>
          ))}
        </Wrap>
        {isFetching && (
          <Flex justify={'center'} align={'center'} pb={'4rem'}>
            <Spinner size={'xl'} color={'primary.200'} />
          </Flex>
        )}
      </Container>
    </Box>
  );
}

const decors = [
  '/decor/laptop.svg',
  '/decor/atom.svg',
  '/decor/code.svg',
  '/decor/delivery.svg',
  '/decor/delivery2.svg',
  '/decor/delivery3.svg',
  '/decor/github.svg',
  '/decor/motorbike.svg',
  '/decor/ubuntu.svg'
];
