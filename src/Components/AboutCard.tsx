import React from 'react';
import { Box, Heading, Text, List, ListItem, Icon, SimpleGrid, Flex, Image } from '@chakra-ui/react';
import { ImPointRight } from 'react-icons/im';
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiPython, DiJava
} from 'react-icons/di';
import { SiNextdotjs, SiPostgresql, SiFirebase, SiChakraui } from 'react-icons/si';

const AboutCard: React.FC = () => {
  return (
    <Box p={6}>
      <Flex direction={['column', 'column', 'row']} align="center" justify="space-between">
        {/* Sección de presentación con imagen */}
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} textAlign="justify">
            Hola, soy <span className="purple">Lilieth Chacon</span> de <span className="purple">Venezuela</span>.
          </Heading>
          <Text fontSize="md" textAlign="justify">
            Actualmente soy desarrolladora de software. Me apasiona el desarrollo backend con Node.js, Express y Nest.js.
          </Text>
          
          <Text fontSize="md" textAlign="justify" mt={4}>
            ¡Además de programar, disfruto hacer estas actividades!
          </Text>
          <List spacing={2} mt={4}>
            <ListItem>
              <Icon as={ImPointRight} /> Aprender nuevas tecnologías
            </ListItem>
            <ListItem>
              <Icon as={ImPointRight} /> Leer libros
            </ListItem>
            <ListItem>
              <Icon as={ImPointRight} /> Disfrutar de la naturaleza
            </ListItem>
            <ListItem>
              <Icon as={ImPointRight} /> Bailar 
            </ListItem>
          </List>

          {/* Cita inspiradora */}
          <Text fontSize="md" color="purple.400" mt={6}>
            "Esfuérzate por crear cosas que marquen la diferencia."
          </Text>
          <Text as="footer" textAlign="right" mt={2}>
            - Lilieth
          </Text>
        </Box>

        {/* Imagen ilustrativa */}
        <Box flex="-1" mt={[6, 6, 0]} textAlign="center">
          <Image
            src="/womman.png" // Ruta a la imagen en tu carpeta public
            alt="Ilustración"
            boxSize="250px"
            objectFit="contain"
          />
        </Box>
      </Flex>

      {/* Sección de habilidades profesionales */}
      <Heading as="h3" size="md" mt={10} mb={6} textAlign="center">
        Conjunto de habilidades profesionales
      </Heading>
      <SimpleGrid columns={[2, 3, 6]} spacing={8} mt={4}>
        <Icon as={DiJavascript1} boxSize={10} />
        <Icon as={DiReact} boxSize={10} />
        <Icon as={SiNextdotjs} boxSize={10} />
        <Icon as={DiNodejs} boxSize={10} />
        <Icon as={DiMongodb} boxSize={10} />
        <Icon as={DiGit} boxSize={10} />
        <Icon as={SiPostgresql} boxSize={10} />
        <Icon as={SiFirebase} boxSize={10} />
        <Icon as={DiPython} boxSize={10} />
        <Icon as={DiJava} boxSize={10} />
      </SimpleGrid>

      {/* Sección de herramientas */}
      <Heading as="h3" size="md" mt={10} mb={6} textAlign="center">
        Herramientas que utilizo
      </Heading>
      <SimpleGrid columns={[2, 3, 5]} spacing={8} mt={4}>
        <Icon as={SiChakraui} boxSize={10} />
        <Icon as={SiPostgresql} boxSize={10} />
        <Icon as={SiFirebase} boxSize={10} />
        <Icon as={SiNextdotjs} boxSize={10} />
      </SimpleGrid>
    </Box>
  );
};

export default AboutCard;
