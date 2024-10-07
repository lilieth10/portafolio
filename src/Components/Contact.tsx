import React from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene la acción por defecto del formulario

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Crear el enlace de mailto
    const mailtoLink = `mailto:liliethkatherine.21@gmail.com?subject=Consulta de ${name}&body=Nombre: ${name}%0D%0ACorreo: ${email}%0D%0AMensaje: ${message}`;

    // Redirigir al usuario a su cliente de correo
    window.location.href = mailtoLink;

    // Resetea el formulario
    e.currentTarget.reset();
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={6} textAlign="center">
        Contáctame
      </Heading>
      <Text mb={4} textAlign="center">
        Si tienes alguna pregunta o deseas agendar una consulta, no dudes en contactarme a través del siguiente formulario.
      </Text>
      <Box maxW="lg" mx="auto" as="form" onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" name="name" placeholder="Tu nombre" required />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input type="email" name="email" placeholder="Tu correo" required />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Mensaje</FormLabel>
          <Textarea name="message" placeholder="Escribe tu mensaje aquí" required />
        </FormControl>
        <Button colorScheme="blue" type="submit" width="full">
          Enviar Mensaje
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
