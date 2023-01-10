import { Heading, Center } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Center>
        <Heading paddingTop="100px" size="4xl" as="h1" color="blue.900">Welcome!</Heading>
      </Center>

      <Center>
        <Heading paddingTop="10px" size="xl" as="h3" color="blue.500">I'm Affan Maulana</Heading>
      </Center>
    </div>
  );
};

export default Home;
