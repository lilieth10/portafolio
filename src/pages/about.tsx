import React from 'react';
import AboutCard from '@/Components/AboutCard';
import { Container, Box } from '@chakra-ui/react';

const About: React.FC = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Box>
        <AboutCard />
      </Box>
    </Container>
  );
};

export default About;

// import React from 'react';
// import { Container, Box, Heading, Image } from '@chakra-ui/react';
// import AboutCard from '@/Components/AboutCard';  // Importa tu componente AboutCard

// const About: React.FC = () => {
//   return (
//     <Container maxW="container.lg" className="about-section" p={4}>
//       <Box display="flex" flexDirection={["column", "row"]} alignItems="center">
//         {/* Columna con texto y tarjeta de información */}
//         <Box flex="1" p={4}>
//           <Heading as="h1" size="2xl" mb={6}>
//             Know Who <span className="purple">I'M</span>
//           </Heading>
//           <AboutCard />  {/* Aquí está tu componente AboutCard */}
//         </Box>

//         {/* Columna con imagen */}
//         <Box flex="1" display="flex" justifyContent="center">
//           <Image
//             src="/path-to-your-image.png"  // Cambia por la ruta de tu imagen
//             alt="about"
//             boxSize="300px"
//             objectFit="cover"
//             borderRadius="full"
//           />
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default About;
