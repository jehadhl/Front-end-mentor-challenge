import React from 'react';
import {Container} from './styles/Container.styled';
import {Flex} from  './styles/Flex.styled';
import SocailMedia from './SocailMedia';
import { StyledFooter, StyledUl } from './styles/Footer.styled';
import {FaMapMarkerAlt} from 'react-icons/fa'


export default function Footer() {
  return (
    <div>
        <StyledFooter>
       <Container>
             <img src='./images/logo_white.svg' alt=''></img>

             <Flex>
             
             <ul>
            
            <li>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            
            <li>  +1-543-123-4567</li>
            
            <li> example@huddle.com</li>
          </ul>
          <StyledUl>
            
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </StyledUl>

          <StyledUl>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </StyledUl>

          <SocailMedia/>
             </Flex>
             
        <p>&copy; 2021 Huddle. All rights reserved</p>
       </Container>
       </StyledFooter>
    </div>
  )
}
