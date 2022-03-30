import { ThemeProvider } from 'styled-components';
import {Container} from './components/styles/Container.styled';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import GlobalStyle from './components/styles/Global';
import content from './content';

const theme = {
  colors : {
    header: "#ebfbff",
    body:'#FFF',
    footer: '#003333',

  },

  mobile: '768px',
    
  
}

      function App() {

          return (
            <ThemeProvider theme={theme}>
            <>
            <GlobalStyle/>
            <Header/>
            <Container>
               {content.map((item,index) => {
                 return (
                  <Card item={item} key={index}/>
                 )
      })}
            </Container>
            <Footer />
            </>

            </ThemeProvider >
          
          );
      }
      export default App;
