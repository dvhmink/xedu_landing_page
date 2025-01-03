import { useCallback, useEffect, useState } from 'react';
import { loadSidebar } from '../../../../API/instruction';
import { Instruction } from '../../../../Redux/type';
import { useNavigate, useParams } from 'react-router-dom';

export default function useSidebar() {
  const navigate = useNavigate();
  const { routeName } = useParams();
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const fetchData = useCallback(() => {
    loadSidebar().then((res) => {
      setInstructions(res.data);
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { instructions, navigate, routeName };
}
