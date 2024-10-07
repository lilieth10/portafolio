'use client'

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Image from 'next/image' // Si usas Next.js
import Link from 'next/link' // Para manejar la navegación en Next.js

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

        {/* Logo en lugar del texto */}
        <Link href="/" passHref>
        <Box width={100} height={100} position="relative">
  <Image
    src="/logo.png"
    alt="Logo"
    fill // La imagen se adapta al tamaño del contenedor
    style={{ objectFit: "contain" }} // Ajusta cómo encaja la imagen
  />
</Box>

        </Link>

        <Stack direction={'row'} spacing={4} alignItems={'center'}>
          <Button as="a" href="/projects" variant="link">
            Proyectos
          </Button>
          <Button as="a" href="/about" variant="link">
            Sobre Mi
          </Button>
          <Button as="a" href="/contact" variant="link">
            Contacto
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

        </Stack>
      </Flex>
    </Box>
  )
}
