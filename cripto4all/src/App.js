import Header from "./components/Header/Header"
import Main from "./components/Main/Main";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <div>
      <ChakraProvider>
        <Header />
      </ChakraProvider>
      <Main />
    </div>
  );
}

export default App;
