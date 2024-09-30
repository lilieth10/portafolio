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
      description: "Este proyecto es una aplicación web interactiva que muestra una base de datos de Pokémon, permitiendo a los usuarios buscar y explorar diferentes especies. Fue desarrollado completamente en JavaScript, y se implementaron pruebas automatizadas utilizando Cypress para pruebas end-to-end y Jest para pruebas unitarias, asegurando la estabilidad y funcionalidad de la aplicación.",
      image: "Pokedex.png", 
      link: "https://pokedex-khaki-theta.vercel.app/"
    },
    {
      title: "Mi portafolio",
      description: "Este proyecto consiste en el desarrollo de mi portafolio personal, una plataforma web diseñada con Next.js y Chakra UI, donde presento mis habilidades, proyectos y contacto. La página está optimizada para ser responsiva, con un diseño limpio y moderno que utiliza componentes reutilizables y buenas prácticas de desarrollo. Además, implementa un sistema de navegación fácil de usar. Es un ejemplo claro de mi experiencia en la creación de aplicaciones web completas.",
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
