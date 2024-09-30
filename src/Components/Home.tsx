import {
  Card, CardHeader, CardBody, CardFooter, Button, Text, Box
} from '@chakra-ui/react';

function Home() {
  return (
    <div>
      <Card align="center">
        <CardHeader>
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
        </CardHeader>
        <CardBody>
          <h1 className="heading-name">
            I'M <strong className="main-name"> Lilieth Chacon</strong>
          </h1>
          <Box fontSize="lg" mt={4}>
            <Text>
              PERMÍTANME PRESENTARME
            </Text>
            <Text mt={4}>
              Me enamoré de la programación y al menos he aprendido algo, creo... 🤷‍♂️
            </Text>
            <Text mt={4}>
              Tengo conocimientos en clásicos como <b>JavaScript y Python</b>.
            </Text>
            <Text mt={4}>
              Mis áreas de interés son la construcción de nuevas tecnologías y productos web. Me apasiona el desarrollo backend, especialmente utilizando <b>Node.js, Express y Nest.js</b>, así como bibliotecas y frameworks modernos de JavaScript como <b>React.js y Next.js</b>.
            </Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Button colorScheme="teal" as="a" href="/projects">
            Ver Proyectos
          </Button>
          <Button colorScheme="blue" as="a" href="/contact" ml={4}>
            Contactarme
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;
