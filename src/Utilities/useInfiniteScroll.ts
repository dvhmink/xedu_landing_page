import { useState, useEffect, useCallback, RefObject } from 'react';

const useInfiniteScroll = (container: RefObject<HTMLDivElement> | null) => {
  // console.log(container?.current?.offsetHeight);
  // console.log(document.documentElement.scrollTop);

  const [isFetching, setIsFetching] = useState(false);
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        container?.current?.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }, [isFetching, container]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
