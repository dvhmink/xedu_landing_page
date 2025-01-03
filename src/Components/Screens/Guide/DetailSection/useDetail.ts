import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadDetail } from '../../../../API/instruction';
import { Instruction } from '../../../../Redux/type';
import { useBreakpointValue } from '@chakra-ui/react';

export default function useDetail() {
  const { routeName } = useParams();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [detail, setDetail] = useState<Instruction | null>(null);
  const fetchDetail = useCallback(() => {
    if (!routeName) return;
    loadDetail(routeName).then((res) => {
      setDetail(res.data);
    });
  }, [routeName]);
  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);
  return { detail, isMobile };
}
