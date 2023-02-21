import "./Header.css"
import avatar from "../../img/avatar.png"
import logo from "../../img/logo-pira.svg"
import { useNavigate } from "react-router-dom";
import { goToPortfolioPage, goToHomePage } from "../../router/coordinator";
import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
//import Portfolio from "../../pages/Portfolio";

//const Links = ['Dashboard', 'Portfolio', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={'#D29F0A'}//#1F2127
    _hover={{
      textDecoration: 'none',
      color: '#292929',
      bg: useColorModeValue('#D29F0A', '#DBDBDB'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {

  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>

      <Box bg={useColorModeValue('#292929', '#292929')} px={4}>
        <Flex h={90} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            bg={'#D29F0A'}
            size={'md'}
            fontSize={19}
            _hover={{
              textDecoration: 'none',
              color: '#D29F0A',
              bg: useColorModeValue('#292929', '#292929'),
            }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}>
            <Flex >
              <img className="logo" src={logo} alt="logo" />
              <h1 className="logo-name">PiraCripto</h1>
            </Flex>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>

              <NavLink ><button onClick={() => goToHomePage(navigate)}>
                <h3>Home</h3>
              </button></NavLink>
              <NavLink ><button onClick={() => goToPortfolioPage(navigate)}>
                <h3>Portfolio</h3>
              </button></NavLink>
              <NavLink >Team</NavLink>

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  border='2px'
                  color={'#D29F0A'}
                  size={'lg'}
                  src={avatar}
                />
              </MenuButton>
              <MenuList
                color={'#292929'}
                bg={'#DBDBDB'}
              >
                <MenuItem
                  bg={'#DBDBDB'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#D29F0A',
                    bg: useColorModeValue('#292929', '#292929'),
                  }}>Link 1</MenuItem>
                <MenuItem
                  bg={'#DBDBDB'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#D29F0A',
                    bg: useColorModeValue('#292929', '#292929'),
                  }}>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem
                  bg={'#DBDBDB'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#D29F0A',
                    bg: useColorModeValue('#292929', '#292929'),
                  }}>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>

              <NavLink ><button onClick={() => goToHomePage(navigate)}>
                <h3>Home</h3>
              </button></NavLink>
              <NavLink ><button onClick={() => goToPortfolioPage(navigate)}>
                <h3>Portfolio</h3>
              </button></NavLink>
              <NavLink >Team</NavLink>

            </Stack>
          </Box>
        ) : null}
      </Box>

    </div>
  );
}

