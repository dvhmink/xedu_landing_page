// import { useCallback, useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useBreakpointValue } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Instruction } from '../../../Redux/type';
import { loadSidebar } from '../../../API/instruction';

export default function useGuide() {
  const { routeName } = useParams<{ routeName: string }>();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const fetchData = useCallback(() => {
    loadSidebar().then((res) => {
      setInstructions(res.data);
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { isMobile, routeName, instructions };
}
