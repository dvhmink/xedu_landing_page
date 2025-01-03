import { useEffect, lazy } from 'react';
import ParallaxUmbrella from './ParallaxUmbrella';
import Benefits from './Benefits';
import Features from './Features';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../Redux/Dux/UserDux';
import { Box } from '@chakra-ui/react';
import useStats from '../../../Utilities/useStats';
import SuspenseWrapper from '../../Widgets/SuspenseWrapper';
import AppDemo from './AppDemo';
const PriceGenerator = lazy(() => import('./PriceGenerator'));
const CustomerResponse = lazy(() => import('./CustomerResponse'));

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useStats();

  return (
    <Box>
      <ParallaxUmbrella />
      <Benefits />
      <Features />
      <SuspenseWrapper>
        <AppDemo />
      </SuspenseWrapper>
      <SuspenseWrapper>
        <PriceGenerator />
      </SuspenseWrapper>
      <SuspenseWrapper>
        <CustomerResponse />
      </SuspenseWrapper>
    </Box>
  );
}

export default Home;
