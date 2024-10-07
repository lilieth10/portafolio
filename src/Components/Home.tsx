import {
  Card, CardHeader, CardBody, CardFooter, Button, Text, Box, Flex
} from '@chakra-ui/react';
import Image from 'next/image';

function Home() {
  return (
    <div>
      <Card align="center">
        <CardHeader>
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hola Aqui!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
        </CardHeader>
        <CardBody>
          {/* Contenedor para el texto y la imagen */}
          <Flex direction={['column', 'row']} align="center" justify="space-between">
            {/* Texto de presentación */}
            <Box textAlign={['center', 'left']} mb={[6, 0]}>
              <h1 className="heading-name">
                Soy <strong className="main-name"> Lilieth Chacon</strong>
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
            </Box>

            {/* Imagen ilustrativa */}
            <Box textAlign="center">
              <Image
                src="/lili.png"  // Ruta de la imagen en tu carpeta public
                alt="Ilustración de Lilieth"
                width={300}
                height={300}
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Flex>
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
