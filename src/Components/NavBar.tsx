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
          <Box cursor="pointer">
            <Image
              src="/logo.png" // Ruta al archivo del logo en tu carpeta "public"
              alt="Logo"
              width={50} // Ajusta el tamaño según sea necesario
              height={40}
            />
          </Box>
        </Link>

        <Stack direction={'row'} spacing={4} alignItems={'center'}>
          <Button as="a" href="/projects" variant="link">
            Projects
          </Button>
          <Button as="a" href="/about" variant="link">
            About Me
          </Button>
          <Button as="a" href="/contact" variant="link">
            Contact
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

        </Stack>
      </Flex>
    </Box>
  )
}
