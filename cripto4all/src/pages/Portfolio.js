import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header/Header'

const Portfolio = () => {
    return (
        <div>
            <ChakraProvider>
            <Header />
            </ChakraProvider>
        </div>
    )
}

export default Portfolio