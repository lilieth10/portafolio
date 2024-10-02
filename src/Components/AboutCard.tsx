import React from 'react';
import { Box, Heading, Text, List, ListItem, Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { ImPointRight } from 'react-icons/im';
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiPython, DiJava
} from 'react-icons/di';
import { SiNextdotjs, SiPostgresql, SiFirebase, SiChakraui } from 'react-icons/si';

const AboutCard: React.FC = () => {
  return (
    <Box p={6} border="1px solid #e0e0e0" boxShadow="md" rounded="md">
      {/* Sección de presentación */}
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
      </List>

      {/* Cita inspiradora */}
      <Text fontSize="md" color="purple.400" mt={6}>
        "Esfuérzate por crear cosas que marquen la diferencia."
      </Text>
      <Text as="footer" textAlign="right" mt={2}>
        - Lilieth
      </Text>

      {/* Sección de habilidades profesionales */}
      <Heading as="h3" size="md" mt={10} mb={6}>
        Skillset Profesional
      </Heading>
      <SimpleGrid columns={[2, 3, 6]} spacing={6}>
        <Flex justify="center" align="center">
          <Icon as={DiJavascript1} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={DiReact} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={SiNextdotjs} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={DiNodejs} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={DiMongodb} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={DiGit} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={SiPostgresql} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={SiFirebase} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={DiPython} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={DiJava} boxSize={10} />
        </Flex>
      </SimpleGrid>

      {/* Sección de herramientas */}
      <Heading as="h3" size="md" mt={10} mb={6}>
        Herramientas que utilizo
      </Heading>
      <SimpleGrid columns={[2, 3, 5]} spacing={6}>
        <Flex justify="center" align="center">
          <Icon as={SiChakraui} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={SiPostgresql} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={SiFirebase} boxSize={10} />
        </Flex>
        <Flex justify="center" align="center">
          <Icon as={SiNextdotjs} boxSize={10} />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default AboutCard;
