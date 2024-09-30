import React from 'react';
import { Box, Text, Link, Stack, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={5}>
      <Stack direction="row" justify="space-between" align="center" px={6}>
        <Text fontSize="sm">© 2024 Lilieth Chacon. All rights reserved.</Text>
        <Stack direction="row" spacing={4}>
          <IconButton
            as={Link}
            href="https://github.com/lilieth10"
            aria-label="GitHub"
            icon={<FaGithub />}
            isRound
            colorScheme="gray"
            variant="outline"
            target="_blank"  // Abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
          />
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/lilieth-chac%C3%B3n-27aa62205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqAMNMHcHTDKA4Ba5Y2msUw%3D%3D"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            isRound
            colorScheme="gray"
            variant="outline"
            target="_blank"  // Abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
          />
          <IconButton
            as={Link}
            href="https://twitter.com/tu_usuario"
            aria-label="Twitter"
            icon={<FaTwitter />}
            isRound
            colorScheme="gray"
            variant="outline"
            target="_blank"  // Abre en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
