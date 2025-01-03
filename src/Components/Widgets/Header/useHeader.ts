import { useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../Redux/store';

export default function useHeader() {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [style, setStyle] = useState<'home' | 'default'>('home');

  const user = useSelector((st: RootState) => st.user);

  useEffect(() => {
    if (pathname !== '/') setStyle('default');
    const handleScroll = () => {
      if (window.scrollY > 144 || pathname !== '/') {
        setStyle('default');
      } else {
        setStyle('home');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const isMobile = useBreakpointValue({ base: true, xl: false });
  return { style, isMobile, drawerOpen, setDrawerOpen, user };
}
