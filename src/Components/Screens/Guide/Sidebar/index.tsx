import { Box, Card, Text } from '@chakra-ui/react';
import useSidebar from './useSidebar';

export default function Sidebar() {
  const { instructions, navigate, routeName } = useSidebar();
  return (
    <Box w={{ base: '100%', md: '20rem' }} h={'100vh'}>
      {instructions.map((instruction, index) => (
        <Card
          key={index}
          mb={4}
          p={4}
          variant={'xedu'}
          onClick={() => {
            navigate(`/guide/${instruction.routeName}`);
          }}
          cursor={'pointer'}
          bg={routeName === instruction.routeName ? 'primary.250' : 'white'}
          color={routeName === instruction.routeName ? 'primary.100' : 'gray.600'}
        >
          <Text fontSize={'md'} fontWeight={'bold'}>
            {instruction.name}
          </Text>
        </Card>
      ))}
    </Box>
  );
}
