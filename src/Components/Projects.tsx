import React from 'react';
import { Box, Heading, Text, Button, Grid, Image } from '@chakra-ui/react';

function Projects() {
  const projects = [
    {
      title: "Novely Book",
      description: "Este proyecto representa uno de mis primeros emprendimientos grupales bajo la metodología Scrum, donde diseñamos y desarrollamos una plataforma de e-commerce dedicada a la compra y venta de libros. Utilizando Next.js, creamos una aplicación web ágil y responsiva que permite a los usuarios explorar un amplio catálogo de libros, realizar compras de manera sencilla y disfrutar de una experiencia de usuario optimizada.",
      image: "novelyBook.png",
      link: "https://novelty-books.vercel.app/"
    },
    {
      title: "Health Matters",
      description: "Health Matters es una plataforma web innovadora diseñada para facilitar la consulta y gestión de turnos médicos, tanto a domicilio como en consultorios. Utilizando Next.js,.",
      image: "healthMatters.png", 
      link: "https://health-matters.vercel.app/"
    },
    {
      title: "Pokedex",
      description: "",
      image: "Pokedex.png", 
      link: "https://pokedex-khaki-theta.vercel.app/"
    },
    {
      title: "Proyecto 4",
      description: "Este es un breve resumen de lo que trata el Proyecto 4.",
      image: "/proyecto4.png", 
      link: "#"
    }
  ];

  return (
    <Box p={4}>
      <Heading as="h2" mb={6} textAlign="center">
        Mis Proyectos
      </Heading>
      
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {projects.map((project, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" p={4} bg="gray.700" color="white">
            <Image src={project.image} alt={project.title} borderRadius="md" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {project.title}
            </Heading>
            <Text mb={4}>{project.description}</Text>
            <Button colorScheme="blue" as="a" href={project.link} target="_blank">
              Ver Proyecto
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
