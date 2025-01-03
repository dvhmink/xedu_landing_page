import { Center, Flex, Spinner } from '@chakra-ui/react';
import { PropsWithChildren, Suspense } from 'react';

function SuspenseWrapper(props: PropsWithChildren) {
  return (
    <Suspense
      fallback={
        <Center h={'100vh'} verticalAlign={'center'} bg={'bgLight'} _dark={{ bg: 'bgDark' }}>
          <Flex>
            <Spinner mr={4} />
            <p>Loading...</p>
          </Flex>
        </Center>
      }
    >
      {props.children}
    </Suspense>
  );
}

export default SuspenseWrapper;
