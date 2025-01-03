import { Center, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  callback?: () => void;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    props.callback && props.callback();
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return Fallback();
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const Fallback = () => (
  <Center verticalAlign={"middle"} w={"100%"} h={"100vh"}>
    <Flex flexDir={"column"} align={"center"}>
      <Image src="/error.jpg" alt="error" h={"30rem"} />
      <Flex align={"center"} mt={4}>
        <Spinner size="xl" mr={"2rem"} />
        <Text fontSize={"2xl"} fontWeight={"bold"} mt={4}>
          Ui da! Hình như có gì đó sai sai
        </Text>
      </Flex>
    </Flex>
  </Center>
);
