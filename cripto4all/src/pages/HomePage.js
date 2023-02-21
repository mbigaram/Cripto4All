import React from 'react'
import Main from "../components/Main/Main"
import Header from "../components/Header/Header"
import { ChakraProvider } from '@chakra-ui/react'


const HomePage = () => {
    return (
        <div>
            <ChakraProvider>
                <Header />
            </ChakraProvider>
            <Main />
        </div>
    )
}

export default HomePage