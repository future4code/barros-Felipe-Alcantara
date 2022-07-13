import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'
import { Container, Box } from './styled'
import './App.css'

function App() {
  return (
    <Container>
      <Box>
        <Etapa1 />
      </Box>

      <Box>
        <Etapa2 />
      </Box>
      
      <Box>
        <Etapa3 />
      </Box>

      <Box>
        <Final />
      </Box>
    </Container>
  )
}

export default App
