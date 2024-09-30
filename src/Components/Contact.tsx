import React from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

function Contact() {
  return (
    <Box p={4}>
      <Heading as="h2" mb={6} textAlign="center">
        Contáctame
      </Heading>
      <Text mb={4} textAlign="center">
        Si tienes alguna pregunta o deseas agendar una consulta, no dudes en contactarme a través del siguiente formulario.
      </Text>
      <Box maxW="lg" mx="auto">
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" placeholder="Tu nombre" />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input type="email" placeholder="Tu correo" />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Mensaje</FormLabel>
          <Textarea placeholder="Escribe tu mensaje aquí" />
        </FormControl>
        <Button colorScheme="blue" type="submit" width="full">
          Enviar Mensaje
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
