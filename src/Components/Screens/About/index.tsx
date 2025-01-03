import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Founder from './Founder';
import OurStory from './OurStory';
import AboutSection from './AboutSection';
import UDSTarget from './UDSTarget';
import { motion } from 'framer-motion';
import useStats from '../../../Utilities/useStats';

export default function About() {
  useStats();
  const shipperObjectPosition = useBreakpointValue({
    base: '100% 100%',
    md: '50% 100%'
  });
  const backgroundObjectPosition = useBreakpointValue({
    base: '40% 0%',
    md: '50% 0%'
  });
  const imgObjectPosition = useBreakpointValue({
    base: '40% 80%',
    md: '50% 50%'
  });
  const imgWidth = useBreakpointValue({
    base: '100%',
    md: '70%'
  });
  return (
    <>
      <Box as="section" w={'100%'} h={'36rem'} pos={'relative'}>
        <motion.img
          src="/about/about2.webp"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: shipperObjectPosition,
            zIndex: 10
          }}
          initial={{ x: 700, rotate: 30 }}
          animate={{ x: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.img
          src="/about/trangabout.svg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: backgroundObjectPosition,
            zIndex: 9
          }}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.img
          src="/about/IMG_3368.webp"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: imgWidth,
            height: '100%',
            objectFit: 'cover',
            objectPosition: imgObjectPosition,
            zIndex: 8
          }}
          initial={{ opacity: 0, scale: 0.5, x: -800 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </Box>
      <AboutSection />
      <Box mt="5rem">
        <Image
          src="/home/purple_section.svg"
          minH={'5rem'}
          w={'100%'}
          objectFit={'cover'}
          bottom={'0'}
        />
      </Box>
      <UDSTarget />
      <OurStory />
      <Founder />
    </>
  );
}
