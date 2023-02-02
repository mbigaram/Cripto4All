import "./Header.css"
import avatar from "../../img/avatar.png"
import logo from "../../img/logo.svg"
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

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={'#DBDBDB'}
    _hover={{
      textDecoration: 'none',
      color: '#292929',
      bg: useColorModeValue('#DBDBDB', '#DBDBDB'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      
      <Box bg={useColorModeValue('#292929', '#292929')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box >Logo</Box> */}
            <img className="logo" src={logo} alt="logo"/>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
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
                  size={'sm'}
                  src={avatar}
                />
              </MenuButton>
              <MenuList
              color={'#292929'}
              bg= {'#DBDBDB'}
              >
                <MenuItem
                bg= {'#DBDBDB'}
                _hover={{
                  textDecoration: 'none',
                  color: '#DBDBDB',
                  bg: useColorModeValue('#292929', '#292929'),
                }}>Link 1</MenuItem>
                <MenuItem
                bg= {'#DBDBDB'}
                _hover={{
                  textDecoration: 'none',
                  color: '#DBDBDB',
                  bg: useColorModeValue('#292929', '#292929'),
                }}>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem
                bg= {'#DBDBDB'}
                _hover={{
                  textDecoration: 'none',
                  color: '#DBDBDB',
                  bg: useColorModeValue('#292929', '#292929'),
                }}>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    
    </div>
  );
}

